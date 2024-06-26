/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MinimalReceiver,
  MinimalReceiverInterface,
} from "../../../contracts/lib/MinimalReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061081f806100206000396000f3fe6080604052600436106100435760003560e01c806301ffc9a71461004f578063150b7a021461008c578063bc197c81146100c9578063f23a6e61146101065761004a565b3661004a57005b600080fd5b34801561005b57600080fd5b50610076600480360381019061007191906102d1565b610143565b6040516100839190610319565b60405180910390f35b34801561009857600080fd5b506100b360048036038101906100ae919061050e565b6101bd565b6040516100c091906105a0565b60405180910390f35b3480156100d557600080fd5b506100f060048036038101906100eb9190610683565b6101d1565b6040516100fd91906105a0565b60405180910390f35b34801561011257600080fd5b5061012d60048036038101906101289190610752565b6101e6565b60405161013a91906105a0565b60405180910390f35b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806101b657506101b5826101fb565b5b9050919050565b600063150b7a0260e01b9050949350505050565b600063bc197c8160e01b905095945050505050565b600063f23a6e6160e01b905095945050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6102ae81610279565b81146102b957600080fd5b50565b6000813590506102cb816102a5565b92915050565b6000602082840312156102e7576102e661026f565b5b60006102f5848285016102bc565b91505092915050565b60008115159050919050565b610313816102fe565b82525050565b600060208201905061032e600083018461030a565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061035f82610334565b9050919050565b61036f81610354565b811461037a57600080fd5b50565b60008135905061038c81610366565b92915050565b6000819050919050565b6103a581610392565b81146103b057600080fd5b50565b6000813590506103c28161039c565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61041b826103d2565b810181811067ffffffffffffffff8211171561043a576104396103e3565b5b80604052505050565b600061044d610265565b90506104598282610412565b919050565b600067ffffffffffffffff821115610479576104786103e3565b5b610482826103d2565b9050602081019050919050565b82818337600083830152505050565b60006104b16104ac8461045e565b610443565b9050828152602081018484840111156104cd576104cc6103cd565b5b6104d884828561048f565b509392505050565b600082601f8301126104f5576104f46103c8565b5b813561050584826020860161049e565b91505092915050565b600080600080608085870312156105285761052761026f565b5b60006105368782880161037d565b94505060206105478782880161037d565b9350506040610558878288016103b3565b925050606085013567ffffffffffffffff81111561057957610578610274565b5b610585878288016104e0565b91505092959194509250565b61059a81610279565b82525050565b60006020820190506105b56000830184610591565b92915050565b600067ffffffffffffffff8211156105d6576105d56103e3565b5b602082029050602081019050919050565b600080fd5b60006105ff6105fa846105bb565b610443565b90508083825260208201905060208402830185811115610622576106216105e7565b5b835b8181101561064b578061063788826103b3565b845260208401935050602081019050610624565b5050509392505050565b600082601f83011261066a576106696103c8565b5b813561067a8482602086016105ec565b91505092915050565b600080600080600060a0868803121561069f5761069e61026f565b5b60006106ad8882890161037d565b95505060206106be8882890161037d565b945050604086013567ffffffffffffffff8111156106df576106de610274565b5b6106eb88828901610655565b935050606086013567ffffffffffffffff81111561070c5761070b610274565b5b61071888828901610655565b925050608086013567ffffffffffffffff81111561073957610738610274565b5b610745888289016104e0565b9150509295509295909350565b600080600080600060a0868803121561076e5761076d61026f565b5b600061077c8882890161037d565b955050602061078d8882890161037d565b945050604061079e888289016103b3565b93505060606107af888289016103b3565b925050608086013567ffffffffffffffff8111156107d0576107cf610274565b5b6107dc888289016104e0565b915050929550929590935056fea2646970667358221220edeb85d564a0779b43470622def2dd2526d45dbc33090f512f9bdd94af2cabd264736f6c63430008180033";

type MinimalReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinimalReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinimalReceiver__factory extends ContractFactory {
  constructor(...args: MinimalReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MinimalReceiver & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MinimalReceiver__factory {
    return super.connect(runner) as MinimalReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalReceiverInterface {
    return new Interface(_abi) as MinimalReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MinimalReceiver {
    return new Contract(address, _abi, runner) as unknown as MinimalReceiver;
  }
}
