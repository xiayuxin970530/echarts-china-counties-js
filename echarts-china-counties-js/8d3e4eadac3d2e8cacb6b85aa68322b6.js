(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('灞桥区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610111","properties":{"name":"灞桥区","cp":[109.064646,34.272793],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@AAABCBACABCA@@@CABAA@A@@AA@@A@@AB@A@@A@A@@@@@AB@@AA@@A@AB@B@@CDCBA@@BABA@@B@@@B@@@@@@ABB@@B@B@B@BAD@@@BAB@@ABCB@B@B@@@BAB@BCDAB@@@@@B@@@B@@@@A@@BA@@B@@@BAB@HAB@B@BBB@BBDAB@B@B@B@@@B@@@D@@BB@B@DAB@@BB@@@B@D@B@B@B@@@BBF@B@@BH@BA@@@AB@B@@BB@B@@AD@@@B@D@BAB@B@B@@@@A@A@G@A@O@@@C@A@@@A@@BA@@AC@@@@D@@BF@D@@ABA@@@A@C@@B@BA@@AAAAB@@@B@@@@@@G@@BDA@B@@D@@@J@BB@@@BBBAF@@@BAF@@@D@@@DC@@BM@@BR@@B@F@@@D@B@@@BAB@@@BABAA@B@BE@@@@DA@A@C@A@C@CAGAA@@@AAC@A@C@@@@DC@@B@DC@@@@@F@@BF@J@@D@B@@@BE@@BB@@@B@@BB@@@B@B@B@@B@@@@@@@B@@ABB@@@C@@BD@@D@@@@B@@A@@D@B@BCB@BBDBBBBBF@B@B@B@FB@@@BB@@AF@B@CDDBDBCDH@@@@AB@@D@@ABHH@@@@DDBBBB@@AB@@ABA@A@ABA@ABADA@A@AB@@A@@@A@@@@BA@@@A@@BIFAB@@A@GH@@A@CB@BABADADAB@B@B@@@HABBBAF@FBB@H@JAH@F@B@R@D@B@D@B@F@D@B@N@D@F@DBFBD@BBFBFBBFFBDDBDDBBBBDAB@DBDBJBD@BBFBD@DBHBBBB@BBBDDBBDBBDF@@DDFJ@@HIDC@@DCBCB@BCBAFG@@@A@@BE@A@@@@A@@AD@BC@@BA@@D@@@D@BABB@BF@F@@AH@B@@BF@@CD@@AB@BAF@@AD@BDB@@D@@@@@@F@@@B@@@@A@@@@B@@AB@B@@BB@B@@@BGA@@@B@BABCBB@@BABBDE@@BAA@AAA@A@@@@@@A@@A@@@AACAA@@AB@@AB@B@@A@A@@B@@C@@C@AAAC@AAC@C@@C@@A@A@A@AA@@@C@@C@AD@@CACC@A@@@DA@@A@@@A@C@@ACB@CEB@A@@AACB@@@@@AA@@@AAACA@@@@@C@@A@@@CC@@A@@@A@C@@@CFAJ@ACB@@AB@@@@@@A@AB@@@A@A@@@B@BAA@@AB@@@@A@@@AB@@@@AA@@A@@@@@A@@AA@@A@@@@@AAB@@@B@@A@A@@A@@AB@@AE@@@@AA@A@@@@AA@@@@CAA@@BAB@B@@C@@B@@@B@@@BA@@A@ACA@@@AI@@FA@AB@@@B@@A@@F@B@@@@@B@B@@@D@@@BDD@DA@A@@@A@@FB@@@@BB@@D@@@BA@@BBD@B@B@@A@@@AAAB@@@B@B@B@@@ACD@@A@@D@@AB@@@B@D@@@@@C@@A@@A@@AD@@@@@C@@@AA@@@@@A@@B@AA@A@@A@ABA@A@@AA@@@@AB@@@A@@A@@@@B@@AD@@AC@@A@@A@@EB@@@@AB@AA@C@@B@B@@A@@@A@@@A@@@@@AB@@A@@BAB@B@@AB@@@@@@@B@@@BA@@@@@@BAB@BA@@B@@@B@@@B@@@D@B@BBB@@@@@@@@@@@B@@@@@@@@@B@@@@@BABBBAB@B@@@@ABA@@@@DB@@BA@@@A@@B@@@@@B@@@@B@@@@B@B@@B@@A@@B@@F@BA@@B@@@@@B@@@@@B@@@B@@@@@@@@@BA@@@@B@@ADABA@@@@@@@ABA@@B@@@@@BB@B@@B@B@@@@@@BBAB@@B@@B@@A@@@@A@@@A@@@BA@A@@B@@@B@D@@@B@@@@@AAAAAA@@@@B@B@B@@@B@@@B@@@@@BA@@@@@@B@@ABB@@B@@@@@B@@@@@BB@@@@B@@@@@BB@@@@AB@@A@C@@@AB@B@@@B@@@B@@@@@BB@@@@@A@@B@@@@B@D@@@BA@@@A@@DAB@@@B@@@@@@@@@BA@@@BB@@@@@B@B@@@@@B@B@B@@@BB@@B@@@B@@@B@@@@@B@@BBBBD@BD@@B@@@@B@@@BBB@@@@@B@@B@B@@B@B@@DB@B@@@B@@@F@BBB@@@@@@@B@@@@@@@B@@D@B@B@B@@@@@@B@B@BA@@BA@B@@@BB@BB@AB@@A@@B@@@@D@@BB@@BA@B@@@@D@@@@@B@@@@@B@@A@@BBB@@BB@@AB@@@BA@@B@@@@AB@A@AAA@@@BAB@@@B@@AAB@AA@@@B@@A@@@@B@B@@@DDB@@B@BB@@@@@DA@ADB@@@@DBB@B@@@B@BB@@@B@B@@@@@BB@@@B@@@@@B@@@@B@@B@@@@A@AB@@A@@@AB@@ABA@@@@AA@@AA@@@@BA@AA@ABABA@@@@@@@@A@A@@A@ACA@A@A@ABA@@@@@BA@@AC@@@@A@@@@@@@EBABA@@C@@A@ABA@@BCA@@C@@@@AB@@A@@@@CA@BA@@@A@@A@@C@@AA@A@@@DABA@BB@B@BB@@B@AAAAAACAA@@ACBC@@@A@@@@AB@@AA@AAA@A@@@AAA@@@@@A@@@A@@A@@CCAA@@B@@@@@AAA@@@A@@@@@AA@@@@A@@@@AA@@@A@A@@@A@@@@@AA@@@@A@@@A@CA@A@@@@AAA@@@BA@@@@A@@@@A@@@@AA@@@A@@@@@@AAA@@AB@@@A@@@@@@@@@A@@@@AA@@A@A@@A@@B@A@@@@@@A@@A@@@@@@@@@AA@@@@@@@@A@@@@@@A@@A@@@@A@@@@BBF@B@@@@A@A@A@A@@@@DB@@B@@AD@@A@A@@@@D@@@@@@AA@@AA@@AB@@AA@@@@@@@BA@@@@A@@@@A@AAA@AA@@A@AAA@AA@@@@@A@@ABA@EA@@@AAA@A@@AAAAAAA@@@@@A@AAA@@@AA@@@@A@@@@AA@@@@AA@@A@@AAAA@@@@A@AA@@A@@AA@@@@AA@AA@@@@CA@@@AA@@@@@@AA@@@@A@@A@@@@@@A@@@@A@@@AA@@B@AAB@@@AA@@A@@A@AA@@@AA@@@@AA@@A@A@@@AAA@A@@AB@DA@@@@AA@A@@CAA@@B@@AAA@@AAA@@@ADABA@ABCDCB@@A@@@A@@B@B@@@B@@A@@@A@@@A@@@@@@@AB@@AAG@AA@BADA@@@A@@@@@@BADAF@BAB@DA@@B@DAJCD@B@@A@ABA@@BAB@@AB@B@@AD@@@@AB@@@@ABA@@BA@@@@A@C@@@@AAA@@A@@@@@@@A@@@AAA@@@A@ABAB@@A@@@AAA@@ABA@@AA@@@@A@@@ABA@A@@@@@@@ABAB@@A@@AA@A@@@@@@@@@A@@@@@ACB@@AAAB@AA@@@AB@CEB@AAB@@A@@@@B@@@@@B@@@@A@A@@HABD@@D@@BB@@@DA@DD@AADA@B@@B@B@@@AADA@AAAB@@AAA@A@AAA@@@@ED@AA@@@A@A@GB@A@@@AA@@AA@AEA@ACAAD@AA@AEE@@AB@BA@A@E@A@@BABA@AAA@A@A@CA@@A@@@@BAB@@A@A@@@ABA@@@A@AAAB@BA@@@A@@@@B@@AA@B@@@@@@@A@@AB@@AA@@A@@@A@@@A@@@A@@@AAA@@BA@@AA@@BA@@@AB@@@@@A@@@AB@@AA@@BAA@AAA@BC@A@A@@@A@AA@@A@EB@BA@@@@BA@@@@@A@@@A@@DA@ABA@@@@@@DA@@@@BA@@@@BA@@@ABA@@B@@@@@B@@@@A@ABB@A@@B@@@BA@AAA@A@AB@@A@A@@B@@A@@AEAA@@@ABAB@@A@@DC@@A@A@AA@@A@@@AJC@@A@@AA@BA@@A@@BA@DC@AA@@A@AB@@AA@@AB@@@@A@@A@AAA@@DA@C@@AA@"],"encodeOffsets":[[111697,34999]]}}],"UTF8Encoding":true});}));