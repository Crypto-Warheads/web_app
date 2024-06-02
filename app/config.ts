import { Defender } from "@openzeppelin/defender-sdk";
import { JsonRpcProvider } from "ethers";

const creds = {
    relayerApiKey: process.env.RELAYER_API_KEY,
    relayerApiSecret: process.env.RELAYER_API_SECRET,
};

export const openzeppelinRelayerClient = new Defender(creds);
export const sepoliaProvider = new JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/PwLFgwHhfPYXl7Zbr5-6lTRciwNkGVpl");
