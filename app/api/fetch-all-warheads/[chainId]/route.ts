import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req: NextRequest, { params: { chainId } }: { params: { chainId: string } }) => {
    // chainId == "5000";
    if (chainId === "59144") {
        const { data: d } = await axios.post("https://api.studio.thegraph.com/query/77223/warheads/v0.0.1", {
            query: `{
                warheadClaimeds {
                    claimer
                    warheadId
                    claimedAt
                }
                warheadCreateds {
                    dropper
                    warheadId
                    warheadAddress
                }
                warheadCreatedWithReceivers {
                    dropper
                    targetReceiver
                    warheadAddress
                    warheadId
                }
                warheadDroppeds {
                    impactTime
                    targetLat
                    targetLong
                    warheadId
                }
            }`
        });

        return NextResponse.json({ data: d });
    }

    const { data } = await axios.post("https://srv.streamingfast.io/4aec28fa/graphql", {
        query: `
        query {
            allWarheadfactoryWarheadCreateds{
          totalCount
          nodes{
            dropper
            warheadId
            warheadAddress
          }
        }
        allWarheadfactoryWarheadCreatedWithReceivers {
          totalCount
          nodes{
            dropper
            targetReceiver
            warheadAddress
            warheadId
          }
        }
        allWarheadfactoryWarheadDroppeds {
          totalCount
          nodes {
            impactTime
            targetLat
            targetLong
            warheadId
          }
        }
        allWarheadfactoryWarheadClaimeds {
          totalCount
          nodes {
            claimer
            warheadId
            claimedAt
          }
        }
      }
        `
    });

    return NextResponse.json({ data });
}