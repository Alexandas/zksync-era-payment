/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Registration, RegistrationInterface } from "../Registration";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "Register",
    type: "event",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x000400000000000200000000030100190000006003300270000000610430019700030000004103550002000000010355000000610030019d000100000000001f0000008001000039000000400010043f0000000101200190000000320000c13d0000000001000031000000040210008c000000660000413d0000000202000367000000000302043b000000e003300270000000630430009c0000003a0000613d000000640430009c000000550000613d000000650330009c000000660000c13d000000040110008a0000006603000041000000400410008c000000000400001900000000040340190000006601100197000000000510004c000000000300a019000000660110009c00000000010400190000000001036019000000000110004c000000660000c13d0000000401200370000000000101043b000000680310009c000000660000213d0000002402200370000000000202043b017e00cb0000040f0000006101000041000000400200043d000000610320009c000000000102401900000040011002100000017f0001042e0000000001000416000000000110004c000000660000c13d00000020010000390000010000100443000001200000044300000062010000410000017f0001042e0000000001000416000000000110004c000000660000c13d000000040100008a00000000011000310000006602000041000000200310008c000000000300001900000000030240190000006601100197000000000410004c000000000200a019000000660110009c00000000010300190000000001026019000000000110004c000000660000c13d00000004010000390000000201100367000000000101043b017e00720000040f0000006101000041000000400200043d000000610320009c000000000102401900000040011002100000017f0001042e0000000001000416000000000110004c000000660000c13d000000040100008a00000000011000310000006602000041000000000310004c000000000300001900000000030240190000006601100197000000000410004c000000000200a019000000660110009c00000000010300190000000001026019000000000110004c000000680000613d000000000100001900000180000104300000000101000039000000000101041a000000400200043d00000000001204350000006101000041000000610320009c0000000001024019000000400110021000000067011001c70000017f0001042e0002000000000002000000000300041a0000ffff023001900000008e0000613d000100000003001d000200000001001d000000690100004100000000001004390000000001000410000000040010044300000061010000410000000002000414000000610320009c0000000001024019000000c0011002100000006a011001c70000800202000039017e01790000040f0000000102200190000000b40000613d000000000101043b000000000110004c00000002010000290000000103000029000000b60000c13d000000ff0230018f000000010220008c000000b60000c13d0000ff0002300190000001000300008a000000000200041a000000000232016f00000001022001bf000000000020041b000000980000613d0000000102000039000000000012041b000000b30000013d0000006f04000041000000000200041a000000000242016f00000100022001bf000000000020041b0000000103000039000000000013041b000000000200041a000000000142016f000000000010041b000000400100043d000000000031043500000061020000410000000004000414000000610540009c0000000004028019000000610510009c00000000010280190000004001100210000000c002400210000000000112019f00000070011001c70000800d020000390000007104000041017e01740000040f0000000101200190000000b40000613d000000000001042d00000000010000190000018000010430000000400100043d00000064021000390000006b03000041000000000032043500000044021000390000006c03000041000000000032043500000024021000390000002e0300003900000000003204350000006d0200004100000000002104350000000402100039000000200300003900000000003204350000006102000041000000610310009c000000000102801900000040011002100000006e011001c70000018000010430000300000000000200000000090100190000000108000039000000000a08041a00000000010004160000000001a1004b000001510000413d00000000010004160000000001a1004b000001350000a13d00000000030004160000000001a3004b0000016e0000413d00000000010004140000000004000411000000040540008c000000de0000c13d0000000106000031000001040000013d000100000002001d000200000009001d000300000008001d0000006105000041000000400600043d000000610760009c0000000006058019000000610710009c0000000001058019000000c0011002100000004005600210000000000115019f0000000005a3004b000000f70000c13d0000000002040019017e01740000040f00000000020100190000006002200270000100610020019d00000061062001970003000000010355000000030800002900000002090000290000000102000029000001040000013d0000000003a3004900000072011001c700008009020000390000000005000019017e01740000040f00000000020100190000006002200270000100610020019d00000061062001970003000000010355000000030800002900000002090000290000000102000029000000000160004c000001350000613d000000730160009c000001680000813d0000001f01600039000000200300008a000000000131016f0000003f01100039000000000331016f000000400100043d0000000003310019000000000413004b00000000040000190000000104004039000000740530009c000001680000213d0000000104400190000001680000c13d000000400030043f0000000001610436000000030a00036700000001040000310000001f0340018f0000000504400272000001260000613d00000000050000190000000506500210000000000761001900000000066a034f000000000606043b00000000006704350000000105500039000000000645004b0000011e0000413d000000000530004c000001350000613d000000050440021000000000054a034f00000000014100190000000303300210000000000401043300000000043401cf000000000434022f000000000505043b0000010003300089000000000535022f00000000033501cf000000000343019f0000000000310435000000000108041a000000400500043d00000060035000390000000004000416000000000013043500000040015000390000000000410435000000200150003900000000002104350000006801900197000000000015043500000061010000410000000003000414000000610430009c0000000003018019000000610450009c00000000010540190000004001100210000000c002300210000000000112019f00000077011001c70000800d0200003900000078040000410000000003080019017e01740000040f0000000101200190000001660000613d000000000001042d000000400100043d00000064021000390000007903000041000000000032043500000044021000390000007a03000041000000000032043500000024021000390000002b0300003900000000003204350000006d0200004100000000002104350000000402100039000000200300003900000000003204350000006102000041000000610310009c000000000102801900000040011002100000006e011001c7000001800001043000000000010000190000018000010430000000750100004100000000001004350000004101000039000000040010043f00000076010000410000018000010430000000750100004100000000001004350000001101000039000000040010043f0000007601000041000001800001043000000177002104210000000102000039000000000001042d0000000002000019000000000001042d0000017c002104230000000102000039000000000001042d0000000002000019000000000001042d0000017e000004320000017f0001042e000001800001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000000000000000000000000000fe4b84df00000000000000000000000000000000000000000000000000000000ddca3f43000000000000000000000000000000000000000000000000000000001e7a505f80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b830200000200000000000000000000000000000024000000000000000000000000647920696e697469616c697a6564000000000000000000000000000000000000496e697469616c697a61626c653a20636f6e747261637420697320616c72656108c379a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff02000000000000000000000000000000000000200000000000000000000000007f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249802000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff4e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000020000000000000000000000000000000000008000000000000000000000000036c5271d10c3a8fb9461d78c45a08d25f767827c646c953be5b15e810f95dae674726174696f6e20666565000000000000000000000000000000000000000000526567697374726174696f6e3a20696e73756666696369656e74207265676973000000000000000000000000000000000000000000000000000000000000000093bbfe0c58abf5ca28cc9d22728d3d7ee17f78c37ba42677331841a2a8d0d393";

export class Registration__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Registration> {
    return super.deploy(overrides || {}) as Promise<Registration>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Registration {
    return super.attach(address) as Registration;
  }
  connect(signer: Signer): Registration__factory {
    return super.connect(signer) as Registration__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RegistrationInterface {
    return new utils.Interface(_abi) as RegistrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Registration {
    return new Contract(address, _abi, signerOrProvider) as Registration;
  }
}