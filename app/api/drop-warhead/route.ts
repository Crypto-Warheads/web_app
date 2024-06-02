import { sepoliaProvider } from "@/app/config";
import { warheadFactoryAddress } from "@/app/contants";
import { ethers } from "ethers";
import { NextRequest, NextResponse } from "next/server";
import WarheadFactoryAbi from "../../abi/warheadfactory_contract.abi.json";
import { WarheadFactory } from "@/typechain-types";

type DropWarheadData = {
    warheadId: string;
    privateKey: string;
    dropLat: number;
    dropLong: number;
}

export const POST = async (req: NextRequest) => {
    let data: DropWarheadData;
    try {
        data = await req.json();
    } catch (e) {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { warheadId, privateKey, dropLat, dropLong } = data;
    if (!warheadId || !privateKey || !dropLat || !dropLong) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const wallet = new ethers.Wallet(privateKey, sepoliaProvider);
    const warheadContract = new ethers.Contract(warheadFactoryAddress, WarheadFactoryAbi, wallet) as any as WarheadFactory;

    const impactTime = Date.now() / 1000 | 0;

    const tx = await warheadContract.dropWarhead(warheadId, { lat: dropLat, long: dropLong }, impactTime);
    await tx.wait();

    return NextResponse.json({ txHash: tx.hash });
}
