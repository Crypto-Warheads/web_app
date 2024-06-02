import { openzeppelinRelayerClient } from "@/app/config";
import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";
import { ERC2771Forwarder } from "@/typechain-types";
import { abi as ERC2771ForwarderAbi, bytecode as ERC2771ForwarderBytecode } from "@openzeppelin/contracts/build/contracts/ERC2771Forwarder.json";
import WarheadFactoryAbi from "../../abi/warheadfactory_contract.abi.json";
import { Signer } from "ethers";
import { forwarderAddress, warheadFactoryAddress } from "@/app/contants";
import { signMetaTxRequest } from "@/app/signer";
import { Defender } from "@openzeppelin/defender-sdk";


interface RelayerData {
    privateKey: string;
}

async function relay(forwarder: ERC2771Forwarder, request: any, signature: string, whitelist: any) {
    // Decide if we want to relay this request based on a whitelist
    const accepts = !whitelist || whitelist.includes(request.to);
    if (!accepts) throw new Error(`Rejected request to ${request.to}`);

    // Validate request on the forwarder contract
    const valid = await forwarder.verify({ ...request, signature });
    if (!valid) throw new Error(`Invalid request`);

    // Send meta-tx through relayer to the forwarder contract
    const gasLimit = (parseInt(request.gas) + 50000).toString();
    return await forwarder.execute({ ...request, signature }, { gasLimit });
}

async function handler(event: any) {
    // Parse webhook payload
    if (!event.request || !event.request.body) throw new Error(`Missing payload`);
    const { request, signature } = event.request.body;
    console.log(`Relaying`, request);

    // Initialize Relayer provider and signer, and forwarder contract
    const creds = { ...event };
    const client = new Defender(creds);
    const provider = client.relaySigner.getProvider();
    const signer = await client.relaySigner.getSigner(provider, { speed: 'fast' });
    const forwarder = new ethers.Contract(forwarderAddress, ERC2771ForwarderAbi, signer as Signer) as unknown as ERC2771Forwarder;

    // Relay transaction!
    const tx = await relay(forwarder, request, signature, []);
    console.log(`Sent meta-tx: ${tx.hash}`);
    return { txHash: tx.hash };
}


export const POST = async (req: NextRequest) => {
    let data: RelayerData;
    try {
        data = await req.json();
    } catch (e) {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { privateKey } = data;

    const provider = openzeppelinRelayerClient.relaySigner.getProvider();
    const signer = await openzeppelinRelayerClient.relaySigner.getSigner(provider, { speed: 'fast' });

    const forwarderFactory = new ethers.ContractFactory(ERC2771ForwarderAbi, ERC2771ForwarderBytecode, signer as Signer);
    const forwarder = forwarderFactory.attach(forwarderAddress) as ERC2771Forwarder;

    const originalSigner = new ethers.Wallet(privateKey, provider);
    const warheadFactoryContract = new ethers.Contract(warheadFactoryAddress, WarheadFactoryAbi, originalSigner);

    const d = warheadFactoryContract.interface.encodeFunctionData("createWarhead", [ethers.ZeroAddress]);
    const a = await signMetaTxRequest(originalSigner, forwarder, { from: originalSigner.address, to: originalSigner.address, value: 0, data: d });
    await handler(a);


    return NextResponse.json({ success: true });
}