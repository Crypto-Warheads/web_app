import { ERC2771Forwarder } from "@/typechain-types";

import ethSigUtil from "eth-sig-util";
import { Wallet } from "ethers";

const EIP712Domain = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' }
];

const ForwardRequest = [
    { name: 'from', type: 'address' },
    { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'gas', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'data', type: 'bytes' },
];

function getMetaTxTypeData(chainId: number, verifyingContract: string) {
    return {
        types: {
            EIP712Domain,
            ForwardRequest,
        },
        domain: {
            name: 'MinimalForwarder',
            version: '0.0.1',
            chainId,
            verifyingContract,
        },
        primaryType: 'ForwardRequest',
    }
};

async function signTypedData(signer: Wallet, from: string, data: any) {
    return await signer.signTypedData(data.domain, { ForwardRequest: data.types.ForwardRequest }, data.message);
}

export async function buildRequest(forwarder: ERC2771Forwarder, input: { from: string, to: string, data: string }) {
    const nonce = await forwarder.nonces(input.from).then(nonce => nonce.toString());
    return { value: 0, gas: 1e6, nonce, ...input };
}

export async function buildTypedData(forwarder: ERC2771Forwarder, request: any) {
    const chainId = await forwarder.runner?.provider?.getNetwork().then(n => n.chainId);
    const typeData = getMetaTxTypeData(Number(chainId || BigInt(0)), await forwarder.getAddress());
    return { ...typeData, message: request };
}

export async function signMetaTxRequest(signer: any, forwarder: ERC2771Forwarder, input: any) {
    const request = await buildRequest(forwarder, input);
    const toSign = await buildTypedData(forwarder, request);
    const signature = await signTypedData(signer, input.from, toSign);
    return { signature, request };
}
