(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('环翠区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"371002","properties":{"name":"环翠区","cp":[122.123443,37.50199],"childNum":10},"geometry":{"type":"MultiPolygon","coordinates":[["@@A@@@@B@@B@@A@@@@"],["@@@@A@@@@@@BB@@@B@@A@@A@"],["@@@@@@@@@@@@@@@B@@@@B@@A@@@@A@@@"],["@@A@@@@@@B@B@@@@B@@@@@@A@@@A@@"],["@@@@ABA@AB@@@@B@DAB@AA@@"],["@@@AB@@@@@@AAB@@A@@@@A@BA@@@AA@@@BAB@@BB@A@@@@B@@@@@D@"],["@@ABABABABBB@@B@B@@AB@F@B@@AB@B@AA@AA@A@C@AA"],["@@@@B@@@B@B@@A@@@AA@@@@@AAB@BA@@@@@A@@B@@@B@@@A@@AA@A@@@@@@BA@CB@@AB@B@@@@@@@@@BA@A@@B@@B@DBBA@@"],["@@@@@@BB@@BA@@@@@A@@BA@@B@@@@@@@@@@A@@@@@A@@@@B@@@@A@@@@B@@@@@B@@@@@@B@@B@@@BA@@@B@@B@@A@@@BB@@A@@BA@@@@B@@@BB@@@@@BB@B@@A@BBA@@@@AA@@@@B@@A@@AA@@@A@@@A@@BABABAB@BA@@BBB@B@@AB@@@B@B@BAB@@A@@BA@BB@@@BAB@BA@@@@AA@BC@C@@@A@A@A@A@A@G@C@C@CBC@C@A@I@ABC@A@@ACBB@@BA@GBA@@@@C@@E@@@@B@@D@@@@@@B@@@@E@@@AB@B@BA@@B@@C@@@@B@@DB@@B@BA@@@A@@B@B@@@@B@@B@@BD@B@@@@B@BB@B@@B@@@B@BB@@@@B@BB@B@@@@B"],["@@AB@@A@A@A@@AAA@@AC@@AAAAAAAACA@AAAC@@AC@@@@AA@@AB@@ABABAB@B@@A@@@AAACAAC@CAA@@AAA@A@AAAAA@A@AA@@@AA@C@AA@@@AA@AA@AC@C@A@C@A@AAC@C@A@CBAFAHABE@CBA@EAC@EEA@GDCDCDC@I@ADADMEGCKCEAKCG@C@@@BB@@@@@@ABAAA@@@@@A@BAA@@@@@@AA@ABAA@@A@@@A@AB@@@AA@BAA@@@@@@A@@@@A@@@@@@A@@@@A@@@@@A@@@CD@@AB@A@@@@AA@A@@A@@A@@@BA@@AB@A@@AB@CA@@@@@AA@@@@@@@@@A@@@@@@@A@A@@A@@@@@AA@@@GAA@C@ADAAAB@@A@@@@@ABCA@BA@ADADAACDA@@DE@@BA@AAB@ACA@AEG@IEACH@DE@ACCBIGCCBIBAFE@ABAIABA@@CC@AFAKAAEI@CAABCICCBKCEAG@E@IBEDEJABABG@EAC@CAG@CA@GMA@N@B@@@P@B@T@@AFGAGLGFK@MP@BBF@BBB@B@BVAALFBDD@D@@AJDBHBADABADED@B@@@B@@BD@BDB@@@B@HABA@EB@DCD@BDBB@BD@BCDABADD@ED@CCBABBD@@B@@BA@@B@BDAB@@BD@@A@CB@BB@@@BB@@B@BA@@A@@C@@B@BAAABD@BA@BB@B@B@@BDDBBBBB@ABCB@F@BBAB@@BC@@D@BB@ABA@@BC@@@A@C@CAA@I@I@A@A@@A@@@A@@AA@@C@E@BC@A@@AA@A@AA@@@CBABC@A@A@C@AACA@AEBEBA@EBC@CBC@A@AAAAA@EABLDN@P@@BTBDJNNLBBPHFDJDDBJN@@BB@@DDBDHN@@BB@BFLBF@BBJBHLXFD@BBFH@@D@B@DA@ABABC@@@@@@B@JGTAFNFpRTHDBB@D@DAB@H@F@F@HBPFFBBB@@@B@@AD@B@@BBBBBB@B@B@B@B@BB@B@@@B@@AB@@@J@DDFFDHBF@DAB@@ABADBFBFBBBB@@D@H@B@@@@@BA@@B@@@J@F@F@F@FBFBFD@@@@BB@B@BAD@@@BB@BBBBFD@@D@BABA@@BB@@BB@@B@@@BABADEB@@AB@B@B@BA@@BBB@B@BBBBBB@FAL@FABCFGJABAD@D@B@BB@BBB@B@BA\\SHGJANCJAF@@@B@BBFDB@B@@@B@BAB@@@B@B@B@B@B@BB@@@B@BENAD@D@@BBBBB@D@BADABAFKBA@ABA@@LBD@F@J@D@@@BA@@@A@AA@@@AAA@A@@@AA@@AAA@AA@@@A@AB@D@BAB@B@@ABC@@@@B@@@B@BB@AB@@AB@BAB@BBB@B@@ABAB@@@B@BBD@BBB@BAB@BA@A@A@AAA@@@@@AB@@A@A@@@AAAAAEEAAAC@@@ABABA@AAA@@@@AA@@AAA@@@A@A@A@A@A@AA@BA@A@@A@@@A@A@A@@AAA@@@A@A@@@A@A@@A@@AA@@A@A@C@C@CBA@EAGCA@AAAA@@@@H@@IC@@@@A@@BEBC@@DAD@B@D@D@PE@AFABC@A@A@AAACAAAAC@CBG@@FKBGBEBABEHGDCB@BCBCBC@C@@@C@C@EBAFCFEJAFAF@DB@@BFAH@FLJDF@DAFDDD@FCHBDAF@D@DBBBDFBDB@FDD@DAD@FED@B@BB@H@FDDFAFELBFBFBHAHMFCF@F@D@B@F@DCDCFCJI@EAAEAC@AC@A@E@EBEBEFCBAFAJAB@HALBB@J@DCB@@AAC@CF@J@VCB@F@F@NBB@TBD@J@FBXDBBN@B@D@BAHEBADAD@LADO@CDEDEBABE@AAC@@@A@A@@@@AAC@AAA@@A@@GA@@A@@AB@@A@@A@A@GB@A@CA@EABE@@CAC@AA@AA@A@A@@@AA@@@A@AA@BE@A@AG@AAA@@@@A@ABCBE@A@CAA@@A@@AA@@@C@A@@BAB@@A@CBAA@@AC@@CAC@KF@@C@@@@A@ADECACC@CAAA@@ABEAA@@BA@ABCBAB@BA@@HEHC@@@@@@DCD@BABA@A@I@@@AD@B@@@@A@@CCAC@A@A@@D@B@@@B@@A@@@A@A@I@C@AAC@@A@AAC@CAA@C@@B@@@@@B@B@@ABABCBED@@A@A@AAAA@C@AA@A@BB@@ABA@CCA@CCA@@A@A@CA@@@@CA@@A@A@@@ACB@@@AA@@A@@@A@@AA@A@AB@@BBA@@A@@@A@A@@@A@A@C@@@CBC@ABE@A@C@C@@@@A@@DCA@C@ACAA@@@A@A@A@AA@@@AA@@@@@A@A@CA@@A@@@G@C@A@@A@@AE@C@ABCB@BA@@B@B@@A@@@@@C@CAA@A@A@AB@@@@AD@B@@B@@@ABE@A@AA@@A@A@C@A@A@A@@@AB@DA@@@@AA@A@C@C@C@A@C@AB@B@B@@BBA@@@ABA@@@C@AAA@ABAB@B@BABADA@C@OBEBE@O@EAK@SAQAG@C@@@A@ABABA@@BC@A@@@A@@@A@A@@@@@A@@B@@@@A@@@A@@@@@A@@@@@A@@AA@@@AB@@@@@@"]],"encodeOffsets":[[[125134,38412]],[[125140,38379]],[[125100,38426]],[[125105,38427]],[[125154,38395]],[[124942,38430]],[[124927,38429]],[[125015,38477]],[[125116,38416]],[[125120,38182]]]}}],"UTF8Encoding":true});}));