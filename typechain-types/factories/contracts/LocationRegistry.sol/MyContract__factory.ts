/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MyContract,
  MyContractInterface,
} from "../../../contracts/LocationRegistry.sol/MyContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "lat",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "long",
        type: "int256",
      },
    ],
    name: "addCheckpoint",
    outputs: [],
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "int256",
        name: "lat",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "long",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e9438038062000e94833981810160405281019062000037919062000233565b6200004c6000801b826200005460201b60201c565b505062000265565b60006200006883836200015760201b60201c565b6200014c57600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620000e8620001c160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000151565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001fb82620001ce565b9050919050565b6200020d81620001ee565b81146200021957600080fd5b50565b6000815190506200022d8162000202565b92915050565b6000602082840312156200024c576200024b620001c9565b5b60006200025c848285016200021c565b91505092915050565b610c1f80620002756000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806391d148541161006657806391d148541461016c578063a217fddf1461019c578063d5391393146101ba578063d547741f146101d8578063f722ef12146101f45761009e565b806301ffc9a7146100a35780630cdfebfa146100d3578063248a9ca3146101045780632f2ff15d1461013457806336568abe14610150575b600080fd5b6100bd60048036038101906100b8919061085b565b610210565b6040516100ca91906108a3565b60405180910390f35b6100ed60048036038101906100e89190610952565b61028a565b6040516100fb9291906109ab565b60405180910390f35b61011e60048036038101906101199190610a0a565b6102bb565b60405161012b9190610a46565b60405180910390f35b61014e60048036038101906101499190610a61565b6102da565b005b61016a60048036038101906101659190610a61565b6102fc565b005b61018660048036038101906101819190610a61565b610377565b60405161019391906108a3565b60405180910390f35b6101a46103e1565b6040516101b19190610a46565b60405180910390f35b6101c26103e8565b6040516101cf9190610a46565b60405180910390f35b6101f260048036038101906101ed9190610a61565b61040c565b005b61020e60048036038101906102099190610acd565b61042e565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610283575061028282610544565b5b9050919050565b6001602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b6000806000838152602001908152602001600020600101549050919050565b6102e3826102bb565b6102ec816105ae565b6102f683836105c2565b50505050565b6103046106b3565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610368576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037282826106bb565b505050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b7fb6ac04a66ee5ea2fc3a6c11bbcdd2ecb33e6f2022a54ca797d519b9b7afa945481565b610415826102bb565b61041e816105ae565b61042883836106bb565b50505050565b7fb6ac04a66ee5ea2fc3a6c11bbcdd2ecb33e6f2022a54ca797d519b9b7afa9454610458816105ae565b6104827fb6ac04a66ee5ea2fc3a6c11bbcdd2ecb33e6f2022a54ca797d519b9b7afa945433610377565b6104c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b890610b91565b60405180910390fd5b604051806040016040528084815260200183815250600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060008201518160000155602082015181600101559050505050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6105bf816105ba6106b3565b6107ad565b50565b60006105ce8383610377565b6106a857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506106456106b3565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506106ad565b600090505b92915050565b600033905090565b60006106c78383610377565b156107a257600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061073f6106b3565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600190506107a7565b600090505b92915050565b6107b78282610377565b6107fa5780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016107f1929190610bc0565b60405180910390fd5b5050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61083881610803565b811461084357600080fd5b50565b6000813590506108558161082f565b92915050565b600060208284031215610871576108706107fe565b5b600061087f84828501610846565b91505092915050565b60008115159050919050565b61089d81610888565b82525050565b60006020820190506108b86000830184610894565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108e9826108be565b9050919050565b6108f9816108de565b811461090457600080fd5b50565b600081359050610916816108f0565b92915050565b6000819050919050565b61092f8161091c565b811461093a57600080fd5b50565b60008135905061094c81610926565b92915050565b60008060408385031215610969576109686107fe565b5b600061097785828601610907565b92505060206109888582860161093d565b9150509250929050565b6000819050919050565b6109a581610992565b82525050565b60006040820190506109c0600083018561099c565b6109cd602083018461099c565b9392505050565b6000819050919050565b6109e7816109d4565b81146109f257600080fd5b50565b600081359050610a04816109de565b92915050565b600060208284031215610a2057610a1f6107fe565b5b6000610a2e848285016109f5565b91505092915050565b610a40816109d4565b82525050565b6000602082019050610a5b6000830184610a37565b92915050565b60008060408385031215610a7857610a776107fe565b5b6000610a86858286016109f5565b9250506020610a9785828601610907565b9150509250929050565b610aaa81610992565b8114610ab557600080fd5b50565b600081359050610ac781610aa1565b92915050565b60008060008060808587031215610ae757610ae66107fe565b5b6000610af587828801610907565b9450506020610b068782880161093d565b9350506040610b1787828801610ab8565b9250506060610b2887828801610ab8565b91505092959194509250565b600082825260208201905092915050565b7f43616c6c6572206973206e6f742061206d696e74657200000000000000000000600082015250565b6000610b7b601683610b34565b9150610b8682610b45565b602082019050919050565b60006020820190508181036000830152610baa81610b6e565b9050919050565b610bba816108de565b82525050565b6000604082019050610bd56000830185610bb1565b610be26020830184610a37565b939250505056fea2646970667358221220a92683899e9106510c85207a6ee74d3c9b764d4b85eeb30fa2f9416edbd9646164736f6c63430008180033";

type MyContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyContract__factory extends ContractFactory {
  constructor(...args: MyContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    defaultAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(defaultAdmin, overrides || {});
  }
  override deploy(
    defaultAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(defaultAdmin, overrides || {}) as Promise<
      MyContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyContract__factory {
    return super.connect(runner) as MyContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyContractInterface {
    return new Interface(_abi) as MyContractInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyContract {
    return new Contract(address, _abi, runner) as unknown as MyContract;
  }
}