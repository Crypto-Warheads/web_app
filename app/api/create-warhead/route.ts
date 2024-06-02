import { sepoliaProvider } from "@/app/config";
import { warheadFactoryAddress } from "@/app/contants";
import { ZeroAddress, ethers } from "ethers";
import { NextRequest, NextResponse } from "next/server";
import WarheadFactoryAbi from "../../abi/warheadfactory_contract.abi.json";
import { WarheadFactory } from "@/typechain-types";

type CreateWarheadData = {
    friendAddress: string;
    privateKey: string;
}

export const POST = async (req: NextRequest) => {
    let data: CreateWarheadData;
    try {
        data = await req.json();
    } catch (e) {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { friendAddress, privateKey } = data;
    if (!friendAddress || !privateKey) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const wallet = new ethers.Wallet(privateKey, sepoliaProvider);
    ZeroAddress

    const warheadContract = new ethers.Contract(warheadFactoryAddress, WarheadFactoryAbi, wallet) as any as WarheadFactory;

    const tx = await warheadContract.createWarhead(friendAddress);
    const receipt = await tx.wait();
    const log = receipt?.logs[receipt?.logs?.length - 1] as any;
    const [id, _, warheadAddress] = log.args;

    return NextResponse.json({ txHash: tx.hash, id, warheadAddress });
};
