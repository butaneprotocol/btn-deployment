export const plutus = {
  validators: {
    btnMint: {
      compiledCode:
        '59065a0100003333323232323232323232232232232232223232533300f3232323253330133370e9000002099191919191919191919299980e99b8748000c07001c4c8c8c8c94ccc090c09c0084cdc41bad30230014800058c094004cc038c03400c004dd71811800980d8038b1bab302100130210013020001301f001301e0013015003301b001301b0023019001301100713253330143370e9001002899191919191919191919191919191919191919299981399b8748000c0980384c8c8c94ccc0a8cdc3a40006052002264646464646464646464a66606866e1d200430330011323253330363370e9003181a800899191919299981e9820001099299981d99b8748000c0e80044c8c94ccc0f4cdc3a4004607800226464646464646464a6660906096004264646464a666098609e00426464a66609666e3c00810454ccc12ccdc3800804899299982600088008b19b87323232533304e3370e90010008a400026eb4c14cc130008c130004c94ccc134cdc3a40040022980103d87a8000132323300100100222533305300114c103d87a800013232323253330543371e098004266e95200033058375000297ae0133006006003375a60aa0066eb8c14c008c15c008c154004dd59829182580118258009981d80d022a400429405281bad304c002375c60940022c609a0026606c606a04e03e64a66608e66e1d2000001132323232323232323232323253330563059002149858dd6982b800982b8011bae30550013055002375c60a600260a60046eb4c144004c144008dd6982780098278011bad304d001304500316304500230380071630490013049002375a608e002608e0046eb4c114004c114008c10c004c0ec00458c104004c0e400458cc09c050cdd2a40006607c6ea40052f5c02c6eb8c0f8004c0f8008dd6981e000981a0008b181d00098190008b181c000981c0011bab30360013036001302d00130330013033001302a0013030001302800116323300100100e22533302e00114c103d87a800013232533302d3375e60646056004030266e952000330310024bd70099802002000981900118180009bae302d001302500e16375660560026056002605400260520026050002604e0046eacc094004c094004c090004c08c008dd618108009810800980c001980f000980f001180e000980a005180d0009809004899191919191919191919191919191919299981219b8748000c08c0344c8c8c94ccc09ccdc3a4000604c00226464a66605266e1d2004302800113232533302e3031002132325333030303300213232533302f3371e00404a266e1c0040145281bad3030002375c605c0022c606200266034603201c00c2c6eb4c0bc004c09c00458c0b4004c09400458cc04c00ccdd2a4000660546ea40892f5c06eb8c0a8004c08803458dd59814000981400098138009813000981280098120011bab3022001302200130210013020001301f0013016003301c001301c002301a001301200822323300100100322533301a00114c0103d87a8000132323232533301b3375e00e004266e9520003301f0014bd70099803003001980e001980d001180f001180e0009191980080080111299980c0008a5eb7bdb1804c8c8c8c94ccc064cdc7a44100002100313301d337606ea4008dd3000998030030019bab301a003375c603000460380046034002446464a66602a66e1d200200114bd6f7b63009bab301a301300230130013300300200122323300100100322533301700114c0103d87a800013232323253330183371e00e004266e9520003301c374c00297ae0133006006003375660320066eb8c05c008c06c008c064004c0380105261365632533300f3370e90000008a99980918068020a4c2c2a66601e66e1d20020011323253330143017002132498c01000458c054004c03401054ccc03ccdc3a40080022a666024601a0082930b0b1806801919299980799b87480000044c8c8c8c94ccc058c0640084c9263253330143370e900000089919299980c980e0010a4c2c6eb8c068004c04801058c04800c58dd6980b800980b801180a80098068010b18068009bae001375c0026eb8004dd7000918029baa001230033754002ae6955ceaab9e5573eae815d0aba24c011e581cc6935b76bc1f8c13442f0277769557388b5cacf70fb5f9dd5a871f17004c011e581c26cd051dbdad984cda7e624a25aecc1babc0c97e206b3fb98a97b4b8004c010a4953616c6541646d696e004c01044342544e0001',
      hash: '016be5325fd988fea98ad422fcfd53e5352cacfced5c106a932a35a4',
    },
    btnVest: {
      compiledCode:
        '59058101000033332323232323232323222322322232533300b323232533300e3370e9000001899191919191919191919299980c19b8748000c05c01c4c8c8c8c94ccc07cc0880084cdc41bad301e0014800058c080004cc038c03400c004dd7180f000980b0038b1bab301c001301c001301b001301a00130190013010003301600130160023014001300c005132533300f3370e900100209919191919191919191919299980d19b8748000c0640204c8c94ccc070c8cc004004024894ccc08400452809919299981019baf3012301e00201d14a2266008008002604a004604600226464a666042604800426464a66604066e3c0092210013370e00266e0806cccc8c0040048894ccc08ccdc4000a4000290000a99981199b870014800052002153330233370e66e180052004480004ccc00c00ccdc100100119b83001480104cdc100119980180199b820020023370666e04005200248011201401914a06eb4c084008dd7180f8008b18110009980818078018008b1bae30200013018008163756603c002603c002603a002603800260360046eb0c064004c04400cc05c004c05c008c054004c0340184c94ccc040cdc3a400800a264646464646464646464646464646464a66604066e1d2000301f00b1323232325333027302a002132323253330273370e9001181300089919299981499b88333301a48000014dc6802a40000022a66605266e20011200013370e66e00060011200014a02940dd6981680098128008b180c1812180c18120039bad3027002375c604a0022c60500026602c602a00e0026eb8c098004c07802c58c090004c090004c08c004c088008dd598100009810000980f800980f000980e800980a001980d000980d001180c00098080049bad3016001300e008132323232323232323232533301a3370e9000180c80389919191919192999811981300109919191929998121919b883001005300100323253330263330263370e00290002504a22a66604c66604c66e1ccdc70012400090002504a22666602e9000001000a40002c290001b8d00115333024337100069000099b873370000600290000a5014a06eb4c094010dd718118019bad3023004375c60420062c60480026048004604400264646464a666046604c004264646464a66604866e2000d2000133028337606ea4010dd40019981419bb037520046ea00052f5bded8c026605066ec0dd48011ba800133028337606ea4010dd4001a5eb7bdb180dd698128021bae3023003375a60460086eb8c08400c58c090004c090008c088004cc040c03c00c004dd71810000980c0038b1bab301e001301e001301d001301c001301b0013012003301800130180023016001300e00722223233300100100500222253330163370e00200a2004266600600666e00cdc1001241000866e38018004cdc0000a4004460280024646600200200444a666026002297adef6c6013232323253330143371e911000021003133018337606ea4008dd3000998030030019bab3015003375c6026004602e004602a002446464a66602066e1d200200114bd6f7b63009bab3015300e002300e001323300100100322533301300114c103d87a800013232323253330143371e00e004266e95200033018374c00297ae01330060060033756602a0066eb8c04c008c05c008c054004c02800c5261365632533300b3370e90000008a99980718048018a4c2c2a66601666e1d20020011533300e300900314985854ccc02ccdc3a400800226464a66602060260042930b1bad301100130090031533300b3370e90030008a99980718048018a4c2c2c60120046eb4004dd6800918029baa001230033754002ae6955ceaab9e5573eae815d0aba24c012bd8799fd8799f5820bcb26980cfc0f06bb8491c3556463d884a83904b53b4310e7d3171ee2063ec6cff00ff004c01051a017d7840004c0101060001',
      hash: 'c6935b76bc1f8c13442f0277769557388b5cacf70fb5f9dd5a871f17',
    },
  },
}
