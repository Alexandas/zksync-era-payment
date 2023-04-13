"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                indexed: false,
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
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
                name: "nonce",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "Paid",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "_token",
                type: "address",
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
                name: "account",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256[]",
                        name: "values",
                        type: "uint256[]",
                    },
                ],
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "pay",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x0004000000000002000000000301001900000060033002700000012f04300197000300000041035500020000000103550000012f0030019d000100000000001f0000008001000039000000400010043f0000000101200190000000350000c13d0000000001000031000000040210008c0000004e0000413d0000000202000367000000000202043b000000e002200270000001310320009c0000003d0000613d000001320320009c000000500000613d000001330120009c0000004e0000c13d0000000001000416000000000110004c0000004e0000c13d000000040100008a00000000011000310000013402000041000000200310008c000000000300001900000000030240190000013401100197000000000410004c000000000200a019000001340110009c00000000010300190000000001026019000000000110004c0000004e0000c13d00000004010000390000000201100367000000000101043b000001350210009c0000004e0000213d04b601780000040f0000012f01000041000000400200043d0000012f0320009c00000000010240190000004001100210000004b70001042e0000000001000416000000000110004c0000004e0000c13d0000002001000039000001000010044300000120000004430000013001000041000004b70001042e0000000001000416000000000110004c0000004e0000c13d000000040100008a00000000011000310000013402000041000000000310004c000000000300001900000000030240190000013401100197000000000410004c000000000200a019000001340110009c00000000010300190000000001026019000000000110004c000000580000613d0000000001000019000004b80001043004b600630000040f04b601da0000040f0000012f01000041000000400200043d0000012f0320009c00000000010240190000004001100210000004b70001042e0000003301000039000000000101041a0000013501100197000000400200043d00000000001204350000012f010000410000012f0320009c0000000001024019000000400110021000000136011001c7000004b70001042e00050000000000020000000007010019000000040170008a0000013402000041000000bf0310008c000000000300001900000000030220190000013401100197000000000410004c0000000002008019000001340110009c00000000010300190000000001026019000000000110004c000001700000613d00000002030003670000000401300370000000000101043b000200000001001d000001350110009c000001700000213d0000002401300370000000000101043b000100000001001d0000004401300370000000000201043b000001370120009c000001700000213d00000023012000390000013404000041000000000571004b0000000005000019000000000504801900000134067001970000013401100197000000000861004b0000000004008019000000000161013f000001340110009c00000000010500190000000001046019000000000110004c000001700000c13d0000000401200039000000000113034f000000000101043b000001380210009c000001720000813d00000005011002100000003f01100039000000200200008a000500000002001d000000000121016f000000400200043d0000000004120019000300000002001d000000000124004b00000000020000190000000102004039000001370140009c000001720000213d0000000101200190000001720000c13d000000400040043f00000002010003670000004402100370000000000202043b0000000402200039000000000121034f000000000101043b0000000302000029000000000012043500000002080003670000004401800370000000000101043b0000000402100039000000000228034f000000000202043b000000050220021000000024041000390000000005240019000000000175004b000001700000213d000000000154004b000001200000813d000000240170008a000400000001001d0000000309000029000000c20000013d00000020099000390000000000ec04350000000000a904350000002004400039000000000154004b0000011f0000813d0000000202000367000000000142034f000000000601043b000001370160009c000001700000213d0000004401200370000000000101043b000000000b61001900000004010000290000000001b100490000013402000041000000400610008c000000000600001900000000060240190000013401100197000000000a10004c000000000200a019000001340110009c00000000010600190000000001026019000000000110004c000001700000c13d000000400a00043d0000013901a0009c000001720000213d0000004001a00039000000400010043f0000002401b000390000000201100367000000000201043b000000040120008c000001700000213d000000000c2a0436000000440db00039000000020e0003670000000001de034f000000000201043b000001370120009c000001700000213d0000000006b2001900000043016000390000013402000041000000000f71004b000000000f000019000000000f02801900000134011001970000013403700197000000000831004b0000000002008019000000000131013f000001340110009c00000000010f00190000000001026019000000000110004c000001700000c13d000000240160003900000000011e034f000000000f01043b0000013701f0009c000001720000213d0000000506f002100000003f016000390000000502000029000000000121016f000000400e00043d00000000021e00190000000001e2004b00000000010000190000000101004039000001370320009c000001720000213d0000000101100190000001720000c13d000000400020043f0000000000fe04350000000201d00367000000000101043b0000000001b10019000000440b100039000000000d6b001900000000017d004b000001700000213d0000000001db004b000000bc0000813d00000000060e00190000000201b00367000000000101043b00000020066000390000000000160435000000200bb000390000000001db004b000001170000413d000000bc0000013d0000000208000367000000a401800370000000000901043b000001370190009c000001700000213d00000023019000390000013402000041000000000371004b0000000003000019000000000302801900000134047001970000013401100197000000000541004b0000000002008019000000000141013f000001340110009c000000000103001900000000010260190000006402800370000000000402043b0000008402800370000000000502043b000000000110004c000001700000c13d0000000401900039000000000118034f000000000801043b000001370180009c000001720000213d0000003f018000390000000502000029000000000121016f000000400600043d0000000001160019000000000261004b00000000020000190000000102004039000001370310009c000001720000213d0000000102200190000001720000c13d000000400010043f000000000a86043600000024019000390000000002180019000000000272004b000001700000213d0000001f0780018f0000000209100367000000050b8002720000015b0000613d0000000002000019000000050120021000000000031a0019000000000119034f000000000101043b000000000013043500000001022000390000000001b2004b000001530000413d000000000170004c0000016a0000613d0000000501b00210000000000219034f00000000011a00190000000303700210000000000701043300000000073701cf000000000737022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000272019f000000000021043500000000018a00190000000000010435000000020100002900000001020000290000000303000029000000000001042d0000000001000019000004b8000104300000013a0100004100000000001004350000004101000039000000040010043f0000013b01000041000004b8000104300002000000000002000000000300041a0000ffff02300190000001940000613d000100000003001d000200000001001d0000013c010000410000000000100439000000000100041000000004001004430000012f0100004100000000020004140000012f0320009c0000000001024019000000c0011002100000013d011001c7000080020200003904b604b10000040f0000000102200190000001c30000613d000000000101043b000000000110004c00000002010000290000000103000029000001c50000c13d000000ff0230018f000000010220008c000001c50000c13d0000ff0002300190000001000300008a000000000200041a000000000232016f00000001022001bf000000000020041b000001a20000613d00000135011001970000003302000039000000000302041a0000014203300197000000000113019f000000000012041b000001c20000013d0000014305000041000000000200041a000000000252016f00000100022001bf000000000020041b00000135021001970000003303000039000000000403041a0000014204400197000000000224019f000000000023041b000000000200041a000000000152016f000000000010041b0000000103000039000000400100043d00000000003104350000012f0200004100000000040004140000012f0540009c00000000040280190000012f0510009c00000000010280190000004001100210000000c002400210000000000112019f00000144011001c70000800d02000039000001450400004104b604ac0000040f0000000101200190000001c30000613d000000000001042d0000000001000019000004b800010430000000400100043d00000064021000390000013e03000041000000000032043500000044021000390000013f03000041000000000032043500000024021000390000002e030000390000000000320435000001400200004100000000002104350000000402100039000000200300003900000000003204350000012f020000410000012f0310009c0000000001028019000000400110021000000141011001c7000004b8000104300009000000000002000000000a050019000000000b030019000000010c00003900000000030c041a000000020330008c000003190000613d000600000002001d000700000001001d000400000004001d000500000006001d000000020100003900000000001c041b00000000210b0434000000000310004c0000032b0000613d000000010d00008a0000000003000019000000000e000019000001f10000013d0000000103300039000000000413004b000002060000813d000000050430021000000000044200190000000004040433000000200440003900000000040404330000000005040433000000000650004c000001ee0000613d000000000600001900000005076002100000000007470019000000200770003900000000070704330000000008d7013f00000000088e004b0000030b0000213d000000000ee700190000000106600039000000000756004b000001fa0000413d000001ee0000013d0000000001ae004b000000000400001900080000000a001d00090000000b001d000002970000413d0000003301000039000000000201041a000000400100043d0000014603000041000000000031043500000000030004140000013502200197000000040420008c000002170000c13d000000010300003100000000020000190000022e0000013d0000012f040000410000012f0530009c00000000030480190000012f0510009c00000000010480190000004001100210000000c003300210000000000113019f00000147011001c700030000000c001d00020000000d001d00010000000e001d04b604b10000040f000000010e000029000000020d000029000000030c000029000000090b000029000000080a000029000000010220015f000300000001035500000060011002700001012f0010019d0000012f031001970000006001000039000000000430004c0000025e0000613d000001380130009c000003400000813d0000003f01300039000000200400008a000000000441016f000000400100043d0000000004410019000000000514004b00000000050000190000000105004039000001370640009c000003400000213d0000000105500190000003400000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f00000005066002720000024f0000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000002470000413d000000000750004c0000025e0000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f00000000004304350000000102200190000003460000c13d000000002101043400000134030000410000001f0410008c000000000400001900000000040320190000013401100197000000000510004c0000000003008019000001340110009c00000000010400190000000001036019000000000110004c000003170000613d0000000001ae00490000000004020433000000120240008c000002840000213d0000000102000039000000120340008c000002820000613d0000000a030000390000000102000039000000120440008900000001054001900000000005030019000000010500603900000000522500a9000000010540027000000000633300a9000000010440008c0000000004050019000002770000213d000000000320004c000003580000613d00000000142100d9000002970000013d000000120240008a0000004d0320008c0000030b0000213d0000000a03000039000000010420019000000000040300190000000104006039000000004cc400a9000000010420027000000000533300a9000000010220008c0000000002040019000002880000213d0000000002ae004b000002960000613d00000000321d00d90000000002c2004b0000030b0000413d00000000141c00a90000003301000039000000000101041a000001350110019700000000020004110000000003000410000300000004001d04b603740000040f000000090c000029000000400100043d0000004002100039000000e003000039000000000032043500000020021000390000000603000029000000000032043500000007020000290000013502200197000000000021043500000000030c0433000000e0021000390000000000320435000001000410003900000005023002100000000002420019000000000530004c000002d10000613d000001000500008a000000000515004900000040060000390000000007000019000002b90000013d0000000107700039000000000837004b000002d10000813d00000000082500190000000004840436000000200cc0003900000000080c04330000000089080434000000040a90008c000003110000213d000000000992043600000000080804330000000000690435000000400a200039000000000908043300000000009a04350000006002200039000000000a90004c000002b60000613d000000000a0000190000002008800039000000000b0804330000000002b20436000000010aa00039000000000b9a004b000002ca0000413d000002b60000013d0000000003120049000000c0041000390000000000340435000000a00310003900000008040000290000000000430435000000800310003900000004040000290000000000430435000000600310003900000003040000290000000000430435000000050700002900000000030704330000000002320436000000000430004c000002ee0000613d000000000400001900000000052400190000002004400039000000000674001900000000060604330000000000650435000000000534004b000002e30000413d000000000434004b000002ee0000a13d000000000423001900000000000404350000001f03300039000000200400008a000000000343016f000000000212004900000000023200190000012f030000410000012f0420009c000000000203801900000060022002100000012f0410009c00000000010380190000004001100210000000000112019f00000000020004140000012f0420009c0000000002038019000000c002200210000000000112019f0000014a011001c70000800d0200003900000001030000390000014b04000041000900000003001d04b604ac0000040f0000000101200190000003170000613d0000000901000029000000000011041b000000000001042d0000013a0100004100000000001004350000001101000039000000040010043f0000013b01000041000004b8000104300000013a0100004100000000001004350000002101000039000000040010043f0000013b01000041000004b8000104300000000001000019000004b800010430000000400100043d00000044021000390000014e03000041000000000032043500000024021000390000001f030000390000000000320435000001400200004100000000002104350000000402100039000000200300003900000000003204350000012f020000410000012f0310009c0000000001028019000000400110021000000149011001c7000004b800010430000000400100043d00000064021000390000014c03000041000000000032043500000044021000390000014d030000410000000000320435000000240210003900000025030000390000000000320435000001400200004100000000002104350000000402100039000000200300003900000000003204350000012f020000410000012f0310009c0000000001028019000000400110021000000141011001c7000004b8000104300000013a0100004100000000001004350000004101000039000000040010043f0000013b01000041000004b800010430000000400100043d00000044021000390000014803000041000000000032043500000024021000390000001b030000390000000000320435000001400200004100000000002104350000000402100039000000200300003900000000003204350000012f020000410000012f0310009c0000000001028019000000400110021000000149011001c7000004b8000104300000013a0100004100000000001004350000001201000039000000040010043f0000013b01000041000004b80001043000000000030104330000000002320436000000000430004c0000036f0000613d000000000400001900000000054200190000002004400039000000000614001900000000060604330000000000650435000000000534004b000003630000413d000000000134004b0000036f0000a13d000000000132001900000000000104350000036f0000013d0000001f01300039000000200300008a000000000131016f0000000001120019000000000001042d0005000000000002000000400500043d0000006406500039000000000046043500000135033001970000004404500039000000000034043500000020035000390000014f04000041000000000043043500000135022001970000002404500039000000000024043500000064020000390000000000250435000001500250009c0000046f0000813d0000013502100197000000a006500039000000400060043f000001510150009c0000046f0000213d000000e001500039000000400010043f0000002001000039000300000001001d0000000000160435000000c001500039000001520400004100000000004104350000000001000414000000040420008c000003e70000c13d00000060090000390000000101000032000003c50000613d000001370210009c0000046f0000213d0000003f02100039000000200300008a000000000232016f000000400900043d0000000002290019000000000392004b00000000030000190000000103004039000001370420009c0000046f0000213d00000001033001900000046f0000c13d000000400020043f0000000001190436000000030200036700000001040000310000001f0340018f0000000504400272000003b60000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000003ae0000413d000000000530004c000003c50000613d0000000504400210000000000242034f00000000014100190000000303300210000000000401043300000000043401cf000000000434022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000242019f00000000002104350000000002000415000000050220008a00000020022000c90000000001090433000000000310004c000004300000c13d0000013c010000410000000000100439000000040100003900000004001004430000012f0100004100000000020004140000012f0320009c0000000001024019000000c0011002100000013d011001c70000800202000039000200000009001d04b604b10000040f00000002090000290000000102200190000004750000613d0000000002000415000000050220008a00000020022000c9000000000101043b000000000110004c0000045d0000613d0000000001090433000000200220011a000000000209001f000000000210004c000004320000c13d000004470000013d0000012f070000410000012f0430009c0000000003078019000000400330021000000000040504330000012f0540009c00000000040780190000006004400210000000000334019f0000012f0410009c0000000001078019000000c001100210000000000113019f000200000002001d000100000006001d04b604ac0000040f0000006009000039000300000001035500000060011002700001012f0010019d0000012f01100198000004270000613d0000003f031000390000015303300197000000400900043d0000000003390019000000000493004b00000000040000190000000104004039000001370530009c0000046f0000213d00000001044001900000046f0000c13d000000400030043f0000000001190436000000030300036700000001050000310000001f0450018f0000000505500272000004180000613d000000000600001900000005076002100000000008710019000000000773034f000000000707043b00000000007804350000000106600039000000000756004b000004100000413d000000000640004c000004270000613d0000000505500210000000000353034f00000000015100190000000304400210000000000501043300000000054501cf000000000545022f000000000303043b0000010004400089000000000343022f00000000034301cf000000000353019f0000000000310435000000003109043400000001022001900000048c0000613d0000000002000415000000040220008a00000020022000c9000000000310004c0000000203000029000004480000613d000000200220011a000000000209001f0000013402000041000000200310008c000000000300001900000000030240190000013401100197000000000410004c000000000200a019000001340110009c00000000010300190000000001026019000000000110004c000004750000c13d00000020019000390000000001010433000000000210004c0000000002000019000000010200c039000000000221004b000004750000c13d000000000110004c000004770000613d000000000001042d0000013c01000041000000000010043900000004003004430000012f0100004100000000020004140000012f0320009c0000000001024019000000c0011002100000013d011001c70000800202000039000200000009001d04b604b10000040f00000002090000290000000102200190000004750000613d0000000002000415000000040220008a00000020022000c9000000000101043b000000000110004c000003e10000c13d000000400100043d00000044021000390000015603000041000000000032043500000024021000390000001d030000390000000000320435000001400200004100000000002104350000000402100039000000030300002900000000003204350000012f020000410000012f0310009c0000000001028019000000400110021000000149011001c7000004b8000104300000013a0100004100000000001004350000004101000039000000040010043f0000013b01000041000004b8000104300000000001000019000004b800010430000000400100043d00000064021000390000015403000041000000000032043500000044021000390000015503000041000000000032043500000024021000390000002a030000390000000000320435000001400200004100000000002104350000000402100039000000030300002900000000003204350000012f020000410000012f0310009c0000000001028019000000400110021000000141011001c7000004b800010430000000000210004c000004a30000c13d000000400300043d000200000003001d000001400100004100000000001304350000000401300039000000030200002900000000002104350000002402300039000000010100002904b6035e0000040f000000020400002900000000014100490000012f020000410000012f0310009c00000000010280190000012f0340009c000000000204401900000040022002100000006001100210000000000121019f000004b8000104300000012f020000410000012f0430009c00000000030280190000012f0410009c000000000102801900000060011002100000004002300210000000000121019f000004b800010430000004af002104210000000102000039000000000001042d0000000002000019000000000001042d000004b4002104230000000102000039000000000001042d0000000002000019000000000001042d000004b600000432000004b70001042e000004b80001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000000000000000000000000000fc0c546a00000000000000000000000000000000000000000000000000000000e1e382d900000000000000000000000000000000000000000000000000000000c4d66de88000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff0000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000ffffffffffffffbf4e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b830200000200000000000000000000000000000024000000000000000000000000647920696e697469616c697a6564000000000000000000000000000000000000496e697469616c697a61626c653a20636f6e747261637420697320616c72656108c379a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084000000000000000000000000ffffffffffffffffffffffff0000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff02000000000000000000000000000000000000200000000000000000000000007f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498313ce5670000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000005265736f75726365446174613a20696e76616c696420746f6b656e000000000000000000000000000000000000000000000000640000000000000000000000000200000000000000000000000000000000000000000000000000000000000000f2882b7f7d0c4b94f539f4d15af77bf59333ed460fb29409a2335fc958da2640656e6774680000000000000000000000000000000000000000000000000000005265736f75726365446174613a20696e76616c6964207061796c6f616473206c5265656e7472616e637947756172643a207265656e7472616e742063616c6c0023b872dd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff60000000000000000000000000000000000000000000000000ffffffffffffff1f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656400000000000000000000000000000000000000000000000000000001ffffffe06f742073756363656564000000000000000000000000000000000000000000005361666545524332303a204552433230206f7065726174696f6e20646964206e416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000000000000000000000000000000000000000000000000000000000000000000000766e0fdc0bdbd53bccf8b1d095cdb28db6c28f4a79b1c7ad51cbce9f5ae388c0";
var Payment__factory = exports.Payment__factory = /** @class */ (function (_super) {
    __extends(Payment__factory, _super);
    function Payment__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    Payment__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Payment__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Payment__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Payment__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Payment__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Payment__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Payment__factory.bytecode = _bytecode;
    Payment__factory.abi = _abi;
    return Payment__factory;
}(ethers_1.ContractFactory));
