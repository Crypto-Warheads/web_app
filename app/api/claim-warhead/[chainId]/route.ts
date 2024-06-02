import { sepoliaProvider } from "@/app/config";
import { warheadFactoryAddress } from "@/app/contants";
import { WarheadFactory } from "@/typechain-types";
import { ethers } from "ethers";
import { NextRequest, NextResponse } from "next/server";
import WarheadFactoryAbi from "../../../abi/warheadfactory_contract.abi.json";

type ClaimWarheadData = {
    warheadId: string;
    privateKey: string;
    lat: number;
    long: number;
}

export const POST = async (req: NextRequest, { params: { chainId } }: { params: { chainId: string } }) => {
    let data: ClaimWarheadData;
    try {
        data = await req.json();
    } catch (e) {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { warheadId, privateKey, lat, long } = data;
    if (!warheadId || !privateKey || !lat || !long) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const wallet = new ethers.Wallet(privateKey, sepoliaProvider);
    const warheadContract = new ethers.Contract(warheadFactoryAddress[chainId], WarheadFactoryAbi, wallet) as any as WarheadFactory;

    const tx = await warheadContract.claim({ lat, long }, warheadId);
    await tx.wait();

    return NextResponse.json({ txHash: tx.hash });
}
