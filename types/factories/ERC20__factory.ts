/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x0002000000000002000700000000000200010000000103550000006001100270000001da0010019d0000008001000039000000400010043f00000001012001900000003a0000c13d0000000001000031000000040110008c000001a80000413d0000000101000367000000000101043b000000e001100270000001e10210009c0000008f0000a13d000001e20210009c000000b10000213d000001e60210009c000000dc0000613d000001e70210009c000000eb0000613d000001e80110009c000001a80000c13d0000000001000416000000000110004c000001a80000c13d000000040100008a0000000001100031000001dc02000041000000000310004c00000000030000190000000003024019000001dc01100197000000000410004c000000000200a019000001dc0110009c00000000010300190000000001026019000000000110004c000001a80000c13d076203700000040f0000000002010019000000400100043d000700000001001d076202bb0000040f00000007040000290000000001410049000001da02000041000001da0310009c0000000001028019000001da0340009c000000000204401900000040022002100000006001100210000000000121019f000007630001042e0000000001000416000000000110004c000001a80000c13d00000000020000310000001f01200039000000200a00008a0000000004a1016f000000400100043d0000000003140019000000000443004b00000000040000190000000104004039000001db0530009c000000890000213d0000000104400190000000890000c13d000000400030043f0000001f0320018f00000001040003670000000505200272000000580000613d000000000600001900000005076002100000000008710019000000000774034f000000000707043b00000000007804350000000106600039000000000756004b000000500000413d000000000630004c000000670000613d0000000505500210000000000454034f00000000055100190000000303300210000000000605043300000000063601cf000000000636022f000000000404043b0000010003300089000000000434022f00000000033401cf000000000363019f0000000000350435000001dc03000041000000400420008c00000000040000190000000004034019000001dc05200197000000000650004c000000000300a019000001dc0550009c000000000304c019000000000330004c000001a80000c13d0000000034010434000001db0540009c000001a80000213d000000000221001900000000041400190000001f05400039000001dc06000041000000000725004b00000000070000190000000007068019000001dc05500197000001dc08200197000000000985004b0000000006008019000000000585013f000001dc0550009c00000000050700190000000005066019000000000550004c000001a80000c13d0000000005040433000001db0650009c000001620000a13d000001df0100004100000000001004350000004101000039000000040010043f000001e0010000410000076400010430000001e90210009c000000c90000a13d000001ea0210009c000000f90000613d000001eb0210009c000001140000613d000001ec0110009c000001a80000c13d0000000001000416000000000110004c000001a80000c13d000000040100008a0000000001100031000001dc02000041000000000310004c00000000030000190000000003024019000001dc01100197000000000410004c000000000200a019000001dc0110009c00000000010300190000000001026019000000000110004c000001a80000c13d000000400100043d00000012020000390000000000210435000001da02000041000001da0310009c00000000010280190000004001100210000001ef011001c7000007630001042e000001e30210009c000001230000613d000001e40210009c000001320000613d000001e50110009c000001a80000c13d0000000001000416000000000110004c000001a80000c13d00000000010000310762031b0000040f000700000002001d076203ac0000040f0000000702000029076203be0000040f000000000101041a000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e000001ed0210009c000001410000613d000001ee0110009c000001a80000c13d0000000001000416000000000110004c000001a80000c13d0000000001000031076202d40000040f076204780000040f0000000101000039000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e0000000001000416000000000110004c000001a80000c13d0000000001000031076202d40000040f0762061b0000040f0000000101000039000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e0000000001000416000000000110004c000001a80000c13d0000000001000031076203060000040f076203cf0000040f000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e0000000001000416000000000110004c000001a80000c13d000000040100008a0000000001100031000001dc02000041000000000310004c00000000030000190000000003024019000001dc01100197000000000410004c000000000200a019000001dc0110009c00000000010300190000000001026019000000000110004c000001a80000c13d0000000201000039000000000101041a000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e0000000001000416000000000110004c000001a80000c13d0000000001000031076202eb0000040f076204e10000040f0000000101000039000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e0000000001000416000000000110004c000001a80000c13d0000000001000031076202d40000040f076206b30000040f0000000101000039000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e0000000001000416000000000110004c000001a80000c13d0000000001000031076202d40000040f076203e10000040f0000000101000039000000400200043d0000000000120435000001da01000041000001da0320009c00000000010240190000004001100210000001ef011001c7000007630001042e0000000001000416000000000110004c000001a80000c13d000000040100008a0000000001100031000001dc02000041000000000310004c00000000030000190000000003024019000001dc01100197000000000410004c000000000200a019000001dc0110009c00000000010300190000000001026019000000000110004c000001a80000c13d076203340000040f0000000002010019000000400100043d000700000001001d076202bb0000040f00000007040000290000000001410049000001da02000041000001da0310009c0000000001028019000001da0340009c000000000204401900000040022002100000006001100210000000000121019f000007630001042e0000003f065000390000000006a6016f000000400b00043d00000000066b00190000000007b6004b00000000070000190000000107004039000001db0860009c000000890000213d0000000107700190000000890000c13d000000400060043f000000000c5b043600000020065000390000000007460019000000000727004b000001a80000213d000000000750004c000001810000613d000000000700001900000020077000390000000008b70019000000000947001900000000090904330000000000980435000000000857004b000001760000413d000000000457004b000001810000a13d00000000046b001900000000000404350000000003030433000001db0430009c000001a80000213d00000000011300190000001f03100039000001dc04000041000000000523004b00000000050000190000000005048019000001dc03300197000001dc06200197000000000763004b0000000004008019000000000363013f000001dc0330009c00000000030500190000000003046019000000000330004c000001a80000c13d0000000003010433000001db0430009c000000890000213d0000003f043000390000000004a4016f000000400700043d0000000004470019000000000574004b00000000050000190000000105004039000001db0640009c000000890000213d0000000105500190000000890000c13d000000400040043f000000000037043500000020043000390000000005140019000000000225004b000001aa0000a13d0000000001000019000007640001043000040000000c001d00070000000b001d00050000000a001d000000000230004c000001bb0000613d000000000200001900000020022000390000000005720019000000000612001900000000060604330000000000650435000000000532004b000001b00000413d000000000132004b000001bb0000a13d0000000001470019000000000001043500000007010000290000000001010433000600000001001d000001db0110009c000000890000213d000100000007001d0000000301000039000300000001001d000000000101041a000000010210019000000001011002700000007f0310018f0000000001036019000200000001001d0000001f0110008c00000000010000190000000101002039000000010110018f000000000112004b000001d50000613d000001df0100004100000000001004350000002201000039000000040010043f000001e00100004100000764000104300000000201000029000000200110008c000001f50000413d00000003010000290000000000100435000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001dd011001c700008010020000390762075d0000040f0000000102200190000001a80000613d00000006030000290000001f023000390000000502200270000000200330008c0000000002004019000000000301043b00000002010000290000001f01100039000000050110027000000000011300190000000002230019000000000312004b000001f50000813d000000000002041b0000000102200039000000000312004b000001f10000413d00000006010000290000001f0110008c000002270000a13d00000003010000290000000000100435000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001dd011001c700008010020000390762075d0000040f000000010220019000000005020000290000000706000029000001a80000613d000000060300002900000000032301700000002002000039000000000101043b000002150000613d0000002002000039000000000400001900000000056200190000000005050433000000000051041b000000200220003900000001011000390000002004400039000000000534004b0000020d0000413d0000000604000029000000000343004b000002230000813d00000006030000290000000303300210000000f80330018f000000010400008a000000000334022f000000000343013f000000070400002900000000024200190000000002020433000000000232016f000000000021041b000000010100003900000006020000290000000102200210000002340000013d0000000601000029000000000110004c00000000010000190000022d0000613d0000000401000029000000000101043300000006040000290000000302400210000000010300008a000000000223022f000000000232013f000000000221016f0000000101400210000000000112019f0000000302000029000000000012041b00000001010000290762023e0000040f000000200100003900000100001004430000012000000443000001de01000041000007630001042e00050000000000020000000075010434000001f00250009c000002ad0000813d0000000404000039000000000304041a000000010230019000000001063002700000007f0360018f00000000060360190000001f0360008c00000000030000190000000103002039000000010330018f000000000232004b000002b30000c13d000300000001001d000000200160008c000500000004001d000400000005001d000002730000413d000100000006001d000200000007001d0000000000400435000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001dd011001c700008010020000390762075d0000040f0000000102200190000002b90000613d00000004050000290000001f025000390000000502200270000000200350008c0000000002004019000000000301043b00000001010000290000001f01100039000000050110027000000000011300190000000002230019000000000312004b00000005040000290000000207000029000002730000813d000000000002041b0000000102200039000000000312004b0000026f0000413d0000001f0150008c000002a00000a13d0000000000400435000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001dd011001c700008010020000390762075d0000040f0000000102200190000002b90000613d000000200200008a000000040600002900000000032601700000002002000039000000000101043b0000000307000029000002910000613d0000002002000039000000000400001900000000057200190000000005050433000000000051041b000000200220003900000001011000390000002004400039000000000534004b000002890000413d000000000363004b0000029c0000813d0000000303600210000000f80330018f000000010400008a000000000334022f000000000343013f00000000027200190000000002020433000000000232016f000000000021041b000000010160021000000001011001bf0000000504000029000002ab0000013d000000000150004c0000000001000019000002ab0000613d0000000301500210000000010200008a000000000112022f000000000121013f0000000002070433000000000112016f0000000102500210000000000121019f000000000014041b000000000001042d000001df0100004100000000001004350000004101000039000000040010043f000001e0010000410000076400010430000001df0100004100000000001004350000002201000039000000040010043f000001e0010000410000076400010430000000000100001900000764000104300000002003000039000000000431043600000000030204330000000000340435000000000430004c0000004001100039000002cf0000613d000000000400001900000000054100190000002004400039000000000624001900000000060604330000000000650435000000000534004b000002c30000413d000000000234004b000002cf0000a13d00000000023100190000000000020435000002cf0000013d0000001f02300039000000200300008a000000000232016f0000000001210019000000000001042d000000040110008a000001dc020000410000003f0310008c00000000030000190000000003022019000001dc01100197000000000410004c0000000002008019000001dc0110009c00000000010300190000000001026019000000000110004c000002e90000613d00000001020003670000000401200370000000000101043b000001f10310009c000002e90000213d0000002402200370000000000202043b000000000001042d00000000010000190000076400010430000000040110008a000001dc020000410000005f0310008c00000000030000190000000003022019000001dc01100197000000000410004c0000000002008019000001dc0110009c00000000010300190000000001026019000000000110004c000003040000613d00000001030003670000000401300370000000000101043b000001f10210009c000003040000213d0000002402300370000000000202043b000001f10420009c000003040000213d0000004403300370000000000303043b000000000001042d00000000010000190000076400010430000000040110008a000001dc020000410000001f0310008c00000000030000190000000003022019000001dc01100197000000000410004c0000000002008019000001dc0110009c00000000010300190000000001026019000000000110004c000003190000613d00000004010000390000000101100367000000000101043b000001f10210009c000003190000213d000000000001042d00000000010000190000076400010430000000040110008a000001dc020000410000003f0310008c00000000030000190000000003022019000001dc01100197000000000410004c0000000002008019000001dc0110009c00000000010300190000000001026019000000000110004c000003320000613d00000001020003670000000401200370000000000101043b000001f10310009c000003320000213d0000002402200370000000000202043b000001f10320009c000003320000213d000000000001042d000000000100001900000764000104300000000305000039000000000405041a000000010640019000000001014002700000007f0210018f000000000201c0190000001f0120008c00000000010000190000000101002039000000010110018f000000000116004b000003640000c13d000000400100043d0000000003210436000000000660004c000003490000c13d000001000200008a000000000224016f000000000023043500000040040000390000035a0000013d00000000005004350000002004000039000000000520004c0000035a0000613d000001f204000041000000000600001900000000050600190000000006350019000000000704041a000000000076043500000001044000390000002006500039000000000726004b0000034f0000413d0000005f02500039000000200300008a000000000432016f0000000002140019000000000342004b00000000030000190000000103004039000001db0420009c0000036a0000213d00000001033001900000036a0000c13d000000400020043f000000000001042d000001df0100004100000000001004350000002201000039000000040010043f000001e0010000410000076400010430000001df0100004100000000001004350000004101000039000000040010043f000001e00100004100000764000104300000000405000039000000000405041a000000010640019000000001014002700000007f0210018f000000000201c0190000001f0120008c00000000010000190000000101002039000000010110018f000000000116004b000003a00000c13d000000400100043d0000000003210436000000000660004c000003850000c13d000001000200008a000000000224016f00000000002304350000004004000039000003960000013d00000000005004350000002004000039000000000520004c000003960000613d000001f304000041000000000600001900000000050600190000000006350019000000000704041a000000000076043500000001044000390000002006500039000000000726004b0000038b0000413d0000005f02500039000000200300008a000000000432016f0000000002140019000000000342004b00000000030000190000000103004039000001db0420009c000003a60000213d0000000103300190000003a60000c13d000000400020043f000000000001042d000001df0100004100000000001004350000002201000039000000040010043f000001e0010000410000076400010430000001df0100004100000000001004350000004101000039000000040010043f000001e0010000410000076400010430000001f10110019700000000001004350000000101000039000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000003bc0000613d000000000101043b000000000001042d00000000010000190000076400010430000001f1022001970000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000003cd0000613d000000000101043b000000000001042d00000000010000190000076400010430000001f1011001970000000000100435000000200000043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000003df0000613d000000000101043b000000000101041a000000000001042d000000000100001900000764000104300006000000000002000600000002001d0000000002000411000001f103200198000004390000613d000200000002001d000300000001001d000001f101100198000500000001001d0000044e0000613d000400000003001d0000000000300435000000200000043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000004370000613d000000000101043b000000000201041a0000000601000029000100000002001d000000000112004b000004630000413d00000004010000290000000000100435000000200000043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000004370000613d000000060200002900000001030000290000000002230049000000000101043b000000000021041b00000005010000290000000000100435000000200000043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000004370000613d000000000101043b000000000201041a00000006030000290000000002320019000000000021041b000000400100043d0000000000310435000001da020000410000000003000414000001da0430009c0000000003028019000001da0410009c00000000010280190000004001100210000000c002300210000000000112019f000001dd011001c70000800d020000390000000303000039000001f50400004100000002050000290000000306000029076207580000040f0000000101200190000004370000613d000000000001042d00000000010000190000076400010430000000400100043d0000006402100039000001fc0300004100000000003204350000004402100039000001fd030000410000000000320435000000240210003900000025030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001fa0300004100000000003204350000004402100039000001fb030000410000000000320435000000240210003900000023030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001f60300004100000000003204350000004402100039000001f7030000410000000000320435000000240210003900000026030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c7000007640001043000040000000000020000000003000411000001f104300198000004b70000613d000100000002001d000200000003001d000300000001001d000001f101100198000400000001001d000004cc0000613d00000000004004350000000101000039000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000004b50000613d000000000101043b00000004020000290000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000004b50000613d000000000101043b0000000102000029000000000021041b000000400100043d0000000000210435000001da020000410000000003000414000001da0430009c0000000003028019000001da0410009c00000000010280190000004001100210000000c002300210000000000112019f000001dd011001c70000800d020000390000000303000039000001fe0400004100000002050000290000000306000029076207580000040f0000000101200190000004b50000613d000000000001042d00000000010000190000076400010430000000400100043d000000640210003900000201030000410000000000320435000000440210003900000202030000410000000000320435000000240210003900000024030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001ff030000410000000000320435000000440210003900000200030000410000000000320435000000240210003900000022030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c700000764000104300008000000000002000800000003001d000600000002001d000500000001001d000001f101100197000700000001001d00000000001004350000000101000039000300000001001d000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f00000001022001900000059e0000613d000000000101043b0000000002000411000200000002001d000001f102200197000400000002001d0000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f00000001022001900000059e0000613d000000000101043b000000000201041a000000010100008a000000000112004b0000054b0000613d0000000801000029000000000112004b000005ca0000413d0000000701000029000000000110004c000005dc0000613d000100000002001d0000000401000029000000000110004c000005f10000613d000000070100002900000000001004350000000301000029000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f00000001022001900000059e0000613d000000000101043b00000004020000290000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f00000001022001900000059e0000613d000000080200002900000001030000290000000002230049000000000101043b000000000021041b000000400100043d0000000000210435000001da020000410000000003000414000001da0430009c0000000003028019000001da0410009c00000000010280190000004001100210000000c002300210000000000112019f000001dd011001c70000800d020000390000000303000039000001fe0400004100000005050000290000000206000029076207580000040f00000001012001900000054e0000c13d0000059e0000013d0000000701000029000000000110004c000006060000613d0000000601000029000001f101100198000400000001001d000005a00000613d00000007010000290000000000100435000000200000043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f00000001022001900000059e0000613d000000000101043b000000000201041a0000000801000029000300000002001d000000000112004b000005b50000413d00000007010000290000000000100435000000200000043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f00000001022001900000059e0000613d000000080200002900000003030000290000000002230049000000000101043b000000000021041b00000004010000290000000000100435000000200000043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f00000001022001900000059e0000613d000000000101043b000000000201041a00000008030000290000000002320019000000000021041b000000400100043d0000000000310435000001da020000410000000003000414000001da0430009c0000000003028019000001da0410009c00000000010280190000004001100210000000c002300210000000000112019f000001dd011001c70000800d020000390000000303000039000001f50400004100000005050000290000000606000029076207580000040f00000001012001900000059e0000613d000000000001042d00000000010000190000076400010430000000400100043d0000006402100039000001fa0300004100000000003204350000004402100039000001fb030000410000000000320435000000240210003900000023030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001f60300004100000000003204350000004402100039000001f7030000410000000000320435000000240210003900000026030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d00000044021000390000020303000041000000000032043500000024021000390000001d030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c0000000001028019000000400110021000000204011001c70000076400010430000000400100043d000000640210003900000201030000410000000000320435000000440210003900000202030000410000000000320435000000240210003900000024030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001ff030000410000000000320435000000440210003900000200030000410000000000320435000000240210003900000022030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001fc0300004100000000003204350000004402100039000001fd030000410000000000320435000000240210003900000025030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c700000764000104300006000000000002000500000002001d000600000001001d0000000001000411000400000001001d00000000001004350000000101000039000200000001001d000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000006810000613d000000000101043b0000000602000029000001f102200197000300000002001d0000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000006810000613d000000010200008a0000000503000029000000000223013f000000000101043b000000000301041a000000000123004b000006830000213d0000000401000029000001f101100198000006890000613d000100000003001d0000000302000029000000000220004c0000069e0000613d00000000001004350000000201000029000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000006810000613d000000000101043b00000003020000290000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000006810000613d000000050200002900000001030000290000000002230019000000000101043b000000000021041b000000400100043d0000000000210435000001da020000410000000003000414000001da0430009c0000000003028019000001da0410009c00000000010280190000004001100210000000c002300210000000000112019f000001dd011001c70000800d020000390000000303000039000001fe0400004100000004050000290000000606000029076207580000040f0000000101200190000006810000613d000000000001042d00000000010000190000076400010430000001df0100004100000000001004350000001101000039000000040010043f000001e0010000410000076400010430000000400100043d000000640210003900000201030000410000000000320435000000440210003900000202030000410000000000320435000000240210003900000024030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001ff030000410000000000320435000000440210003900000200030000410000000000320435000000240210003900000022030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c700000764000104300006000000000002000500000002001d000600000001001d0000000001000411000400000001001d00000000001004350000000101000039000200000001001d000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000007170000613d000000000101043b0000000602000029000001f102200197000300000002001d0000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000007170000613d000000000101043b000000000201041a0000000501000029000000000112004b000007190000413d0000000401000029000001f1011001980000072e0000613d000100000002001d0000000302000029000000000220004c000007430000613d00000000001004350000000201000029000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000007170000613d000000000101043b00000003020000290000000000200435000000200010043f000001da010000410000000002000414000001da0320009c0000000001024019000000c001100210000001f4011001c700008010020000390762075d0000040f0000000102200190000007170000613d000000050200002900000001030000290000000002230049000000000101043b000000000021041b000000400100043d0000000000210435000001da020000410000000003000414000001da0430009c0000000003028019000001da0410009c00000000010280190000004001100210000000c002300210000000000112019f000001dd011001c70000800d020000390000000303000039000001fe0400004100000004050000290000000606000029076207580000040f0000000101200190000007170000613d000000000001042d00000000010000190000076400010430000000400100043d000000640210003900000205030000410000000000320435000000440210003900000206030000410000000000320435000000240210003900000025030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d000000640210003900000201030000410000000000320435000000440210003900000202030000410000000000320435000000240210003900000024030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c70000076400010430000000400100043d0000006402100039000001ff030000410000000000320435000000440210003900000200030000410000000000320435000000240210003900000022030000390000000000320435000001f8020000410000000000210435000000040210003900000020030000390000000000320435000001da02000041000001da0310009c00000000010280190000004001100210000001f9011001c700000764000104300000075b002104210000000102000039000000000001042d0000000002000019000000000001042d00000760002104230000000102000039000000000001042d0000000002000019000000000001042d0000076200000432000007630001042e000007640001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000ffffffffffffffff8000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000002000000000000000000000000000000002000000000000000000000000000000400000010000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000000000000000000003950935000000000000000000000000000000000000000000000000000000000a457c2d600000000000000000000000000000000000000000000000000000000a457c2d700000000000000000000000000000000000000000000000000000000a9059cbb00000000000000000000000000000000000000000000000000000000dd62ed3e00000000000000000000000000000000000000000000000000000000395093510000000000000000000000000000000000000000000000000000000070a082310000000000000000000000000000000000000000000000000000000095d89b410000000000000000000000000000000000000000000000000000000018160ddc0000000000000000000000000000000000000000000000000000000018160ddd0000000000000000000000000000000000000000000000000000000023b872dd00000000000000000000000000000000000000000000000000000000313ce5670000000000000000000000000000000000000000000000000000000006fdde0300000000000000000000000000000000000000000000000000000000095ea7b300000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0200000000000000000000000000000000000040000000000000000000000000ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef616c616e6365000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220616d6f756e742065786365656473206208c379a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084000000000000000000000000657373000000000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220746f20746865207a65726f2061646472647265737300000000000000000000000000000000000000000000000000000045524332303a207472616e736665722066726f6d20746865207a65726f2061648c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925737300000000000000000000000000000000000000000000000000000000000045524332303a20617070726f766520746f20746865207a65726f206164647265726573730000000000000000000000000000000000000000000000000000000045524332303a20617070726f76652066726f6d20746865207a65726f2061646445524332303a20696e73756666696369656e7420616c6c6f77616e63650000000000000000000000000000000000000000000064000000000000000000000000207a65726f00000000000000000000000000000000000000000000000000000045524332303a2064656372656173656420616c6c6f77616e63652062656c6f770000000000000000000000000000000000000000000000000000000000000000c1d1b294337de0a7407af25c585039a5f95e0e663bd760ad58f3f9c462f946d2";

export class ERC20__factory extends ContractFactory {
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
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
