(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7c5dbbce"],{"0f7d":function(t,e,n){},"12e6":function(t,e,n){"use strict";var a=n("05b3"),r={name:"HeaderBg",data:function(){return{chainList:a.c}},created:function(){}},s=(n("9171"),n("2877")),c=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerBg"},[n("h2",[t._v(t._s(t.$t("batchSend.welcome"))),n("i",{staticClass:"el-icon-question tutorial"})]),n("ul",{staticClass:"supportBox"},t._l(t.chainList,(function(e){return n("li",{key:e.icon},[n("div",{staticClass:"iconBox"}),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])})),0)])}),[],!1,null,"09dfcc4a",null);e.a=c.exports},19:function(t,e){},20:function(t,e){},21:function(t,e){},3796:function(t,e,n){"use strict";var a=(n("ac1f"),n("00b4"),n("b0c0"),n("d3b7"),n("1146")),r=n.n(a),s={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(t){var e=t.header,n=t.results;this.excelData.header=e,this.excelData.results=n,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(t){if(t.stopPropagation(),t.preventDefault(),!this.loading){var e=t.dataTransfer.files;if(1===e.length){var n=e[0];if(!this.isExcel(n))return this.$message.error(this.$t("excel.ext")),!1;this.upload(n),t.stopPropagation(),t.preventDefault()}else this.$message.error(this.$t("excel.handleDrop"))}},handleDragover:function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(t){var e=t.target.files[0];e&&this.upload(e)},upload:function(t){(this.$refs["excel-upload-input"].value=null,this.beforeUpload)?this.beforeUpload(t)&&this.readerData(t):this.readerData(t)},readerData:function(t){var e=this;return this.loading=!0,/\.(txt)$/.test(t.name)?new Promise((function(n,a){var r=new FileReader;r.onload=function(t){var a=t.target.result;e.generateData({header:null,results:a}),n()},r.readAsText(t,"utf8")})):new Promise((function(n,a){var s=new FileReader;s.onload=function(t){var a=t.target.result,s=r.a.read(a,{type:"array"}),c=s.SheetNames[0],i=s.Sheets[c],o=e.getHeaderRow(i),u=r.a.utils.sheet_to_json(i);e.generateData({header:o,results:u}),e.loading=!1,n()},s.readAsArrayBuffer(t)}))},getHeaderRow:function(t){var e,n=[],a=r.a.utils.decode_range(t["!ref"]),s=a.s.r;for(e=a.s.c;e<=a.e.c;++e){var c=t[r.a.utils.encode_cell({c:e,r:s})],i="UNKNOWN "+e;c&&c.t&&(i=r.a.utils.format_cell(c)),n.push(i)}return n},isExcel:function(t){return/\.(xlsx|xls|csv|txt)$/.test(t.name)}}},c=s,i=(n("6772"),n("2877")),o=Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"excel-upload"},[n("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls, .csv , .txt"},on:{change:t.handleClick}}),n("div",{staticClass:"drop",on:{drop:t.handleDrop,dragover:t.handleDragover,dragenter:t.handleDragover,click:t.handleUpload}},[t._m(0),n("p",[t._v(t._s(t.$t("excel.uploadTitle")))])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"el-icon-upload icon"})])}],!1,null,"825cabc4",null);e.a=o.exports},4763:function(t,e,n){},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),r=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"502c":function(t,e,n){"use strict";n.d(e,"e",(function(){return d})),n.d(e,"h",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return b})),n.d(e,"i",(function(){return h})),n.d(e,"g",(function(){return m})),n.d(e,"j",(function(){return v})),n.d(e,"f",(function(){return g})),n.d(e,"d",(function(){return _})),n.d(e,"a",(function(){return k}));var a=n("c7eb"),r=n("1da1"),s=n("51d2"),c=(n("e95b"),n("4360")),i=n("ed08"),o=n("cf29"),u=n("901e"),l=n.n(u),d=function(){var t=Object(r.a)(Object(a.a)().mark((function t(){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new c.a.state.dapp.web3.web3Instance.eth.getGasPrice;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e,n,r){var u,l,d,p;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u="getTokenBalance",t.next=3,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 3:return l=t.sent,d={name:"balanceOf",erc20:!0,data:[r]},t.next=7,Object(o.b)(l,d,c.a.state.dapp.web3.account,u);case 7:return p=t.sent,t.abrupt("return",Object(i.d)(p,n));case 9:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e,n,r,i){var u,d,p,f;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u="getAllowance",t.next=3,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 3:return d=t.sent,p={name:"allowance",erc20:!0,data:[r,i]},t.next=7,Object(o.b)(d,p,c.a.state.dapp.web3.account,u);case 7:return f=t.sent,t.abrupt("return",new l.a(f));case 9:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),b=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e,n,r){var i,u,l;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i="getAllowance",t.next=3,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 3:return u=t.sent,l={name:"allowance",erc20:!0,data:[n,r]},t.next=7,Object(o.b)(u,l,c.a.state.dapp.web3.account,i);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),h=function(t,e){return c.a.state.dapp.web3.web3Instance.eth.getBalance(t).then((function(t){return new l.a(Object(i.d)(t,e))}))},m=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e){var n,r;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 2:return n=t.sent,r={name:"symbol",erc20:!0,data:[]},t.next=6,Object(o.b)(n,r,c.a.state.dapp.web3.account);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e,n){var r,u,l;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 2:return r=t.sent,u={name:"totalSupply",erc20:!0,data:[]},t.next=6,Object(o.b)(r,u,c.a.state.dapp.web3.account);case 6:return l=t.sent,t.abrupt("return",Object(i.d)(l,n));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e){var n,r;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 2:return n=t.sent,r={name:"name",erc20:!0,data:[]},t.next=6,Object(o.b)(n,r,c.a.state.dapp.web3.account);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e){var n,r;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 2:return n=t.sent,r={name:"decimals",erc20:!0,data:[]},t.next=6,Object(o.b)(n,r,c.a.state.dapp.web3.account);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(r.a)(Object(a.a)().mark((function t(e,n,r,i){var u,l;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new c.a.state.dapp.web3.web3Instance.eth.Contract(s.abi,e);case 2:return u=t.sent,l={name:"approve",erc20:!0,data:[r,n]},t.next=6,Object(o.d)(u,l,c.a.state.dapp.web3.account,i);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}()},"60fa":function(t,e,n){"use strict";n("4763")},6772:function(t,e,n){"use strict";n("e831")},"828d":function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"g",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"a",(function(){return f})),n("99af");var a=n("b775"),r=function(t,e){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(t,"/address/").concat(e,"/balances_v2/?no-nft-fetch=true&key=ckey_4c2c43910c9c4730830a3551927")})},s=function(t,e,n,r){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(t,"&interval=").concat(e,"&startTime=").concat(n,"&endTime=").concat(r))})},c=function(t){return Object(a.a)({method:"GET",url:"https://api.coingecko.com/api/v3/simple/price?ids=".concat(t,"&vs_currencies=cny,usd")})},i=function(t,e,n,r){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(t,"/tokens/").concat(e,"/token_holders/?block-height=").concat(r,"&page-number=0&page-size=").concat(n,"&key=ckey_4c2c43910c9c4730830a3551927")})},o=function(t){return Object(a.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:t}})},u=function(){return Object(a.a)({method:"GET",url:"/api/v1/get_VipUser"})},l=function(t,e,n){return Object(a.a)({method:"GET",url:"/api/v1/contact_scan",params:{mac:t,expiry:e,tokenAddress:n}})},d=function(t){return Object(a.a)({headers:{"Content-Type":"multipart/form-data"},method:"POST",url:"https://ipfs.infura.io:5001/api/v0/cat?arg="+t})},p=function(t){return Object(a.a)({method:"GET",url:"/api/v1/get_launchpad",params:{chainId:t}})},f=function(t,e){return Object(a.a)({method:"GET",url:"https://api.tokentool.club/audit/contract",params:{chainId:t,contract_addresses:e}})}},"86de":function(t,e,n){"use strict";n("0f7d")},9171:function(t,e,n){"use strict";n("d96f")},"99f3":function(t,e,n){},"9b2e":function(t,e,n){"use strict";n.r(e);var a=n("2909"),r=n("b85c"),s=n("c7eb"),c=n("1da1"),i=n("5530"),o=(n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("d3b7"),n("159b"),n("498a"),n("13d5"),n("25f0"),n("b0c0"),n("b680"),n("a434"),n("4de4"),n("c740"),n("ddb0"),n("4ec9"),n("3ca3"),n("3796")),u=n("fa7e"),l=n("b6ed"),d=n("12e6"),p=n("61f7"),f=n("ed08"),b=n("c224"),h=n("502c"),m=n("2f62"),v=n("2b0e"),g=n("99e5"),_=n.n(g),k=n("b893"),w=n("901e"),x=n.n(w),C=n("828d"),j={name:"EthOneToMore",components:{JsonEditor:u.a,HeaderBg:d.a,NetworkError:l.a,UploadExcelComponent:o.a},computed:Object(i.a)({},Object(m.d)({chainNetwork:function(t){return t.dapp.chainNetwork},networkId:function(t){return t.dapp.web3.networkId},curFee:function(t){return t.dapp.authUser.curFee},myAddress:function(t){return t.dapp.web3.account},initial:function(t){return t.dapp.web3.initial},web3Instance:function(t){return t.dapp.web3.web3Instance},menu:function(t){return t.settings.menu}})),watch:{initial:function(){this.getTokenInfo(this.networkId,this.myAddress)}},data:function(){return{dividend:!1,successData:[],amount:null,dialog:{setAmount:!1,openUpload:!1},approveAmountRadio:"2",tableData:[],selectToken:null,slider:{value:1,max:10,min:1,marks:{1:"慢",5:"快",10:"极速"}},userTokenAddress:[],value:"",demo:"0xd41b9AC5767cd90AbC7C997730591cBb7223D3D9,0.001\n0xB3CAB50183a7e414F3615eF1394384C203d8A8F5,0.002\n0x20b7819894b14C46Cb3c10704C6A5f13C36b7983,0.001345",errorObj:{index:0,content:"",address:"",errorAddress:!1,amount:"",errorAmount:!1},errorArray:[],errorArray2:[],active:0,budget:{addressCount:0,amountCount:0,sendCount:1,tokenAmount:0,fee:0,baseFee:0,gasFee:0,chainAmount:0,approve:!1,approveAmount:0,arrayLimit:0,padding:0},loading:{approve:!1,budget:!1,select:!1},filterRepeat:!0}},mounted:function(){this.$store.dispatch("settings/changeSetting",{key:"showVip",value:!1}),this.getTokenInfo(this.networkId,this.myAddress)},methods:{beforeUpload:function(t){return!!(t.size/1024/1024<10)||(this.$message.warning("Please do not upload files larger than 10m in size."),!1)},handleSuccess:function(t){var e=t.results,n=t.header;this.value=n&&e?e.map((function(t){return t.Address+","+t.Amount})).join("\n"):e,this.dialog.openUpload=!1,this.editorChanged(this.value)},setAmount:function(){var t=this;if(this.amount){var e=this.value.split("\n");if(0!==e.length){var n=[];e.forEach((function(e){var a=e.split(",");n.push({address:a[0],amount:t.amount})})),this.value=n.map((function(t){return t.address+","+t.amount})).join("\n"),this.dialog.setAmount=!1}}else this.$message.error("数量不能为空")},handleClose:function(){this.amount=null},validateInfo:function(){var t=this;return Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.value){e.next=3;break}return t.$message.error("请至少输入一条地址信息"),e.abrupt("return");case 3:if(t.selectToken){e.next=6;break}return t.$message.error("请选择代币数据"),e.abrupt("return");case 6:if(t.selectToken.decimals){e.next=12;break}return e.t0=parseInt,e.next=10,Object(h.d)(t.selectToken.address);case 10:e.t1=e.sent,t.selectToken.decimals=(0,e.t0)(e.t1);case 12:t.active++,t.tableData=[],t.value.split("\n").forEach((function(e){var n=e.split(",");2===n.length&&n[0].trim().length>1&&t.tableData.push({address:n[0].trim(),amount:n[1]})})),t.step2();case 19:case"end":return e.stop()}}),e)})))()},step2:function(){var t=this;return Object(c.a)(Object(s.a)().mark((function e(){var n,a,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.errorArray2=[],t.budget.approve=!1,t.loading.budget=!0,t.budget.addressCount=t.tableData.length,t.budget.amountCount=t.tableData.reduce((function(t,e){return new x.a(t).plus(e.amount)}),0),e.next=7,Object(b.a)();case 7:if(t.budget.arrayLimit=e.sent,t.dividend&&(t.budget.arrayLimit=30),t.budget.sendCount=Math.ceil(t.tableData.length/parseInt(t.budget.arrayLimit),10),!Object(k.n)(t.selectToken.address)){e.next=17;break}return e.next=13,Object(h.i)(t.myAddress,t.chainNetwork.decimals);case 13:t.budget.tokenAmount=e.sent,t.budget.chainAmount=t.budget.tokenAmount,e.next=28;break;case 17:return e.next=19,Object(h.h)(t.selectToken.address,t.selectToken.decimals,t.myAddress);case 19:return t.budget.tokenAmount=e.sent,e.next=22,Object(h.i)(t.myAddress,t.chainNetwork.decimals);case 22:return t.budget.chainAmount=e.sent,e.next=25,Object(h.b)(t.selectToken.address,t.selectToken.decimals,t.myAddress,t.chainNetwork.multiSenderAddress);case 25:-1===(n=e.sent).comparedTo(t.budget.amountCount.shiftedBy(t.selectToken.decimals))&&(t.budget.approveAmount=Object(f.d)(n.toNumber(),t.selectToken.decimals),t.budget.approve=!0);case 28:return a=t.curFee,t.budget.baseFee=new x.a(Object(f.d)(a,t.chainNetwork.decimals)).toNumber(),t.loading.budget=!1,e.next=33,Object(h.e)();case 33:r=e.sent,t.budget.gasFee=_.a.utils.fromWei(new x.a(r).multipliedBy(3e6).toString(),"ether"),t.budget.fee=new x.a(1).multipliedBy(t.budget.gasFee).plus(t.budget.baseFee),t.budget.chainAmount.comparedTo(t.budget.fee)<1&&t.errorArray2.push({msg:t.chainNetwork.symbol+"余额不足，至少需要"+t.budget.fee.toString()+" "+t.chainNetwork.symbol}),-1===new x.a(t.budget.tokenAmount).comparedTo(t.budget.amountCount)&&t.errorArray2.push({msg:t.selectToken.name+"余额不足，至少需要"+t.budget.amountCount.toString()+" "+t.selectToken.name});case 38:case"end":return e.stop()}}),e)})))()},step3:function(){var t=this;return Object(c.a)(Object(s.a)().mark((function e(){var n,a,c,i,o,u,l,d,p,m,v,g;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.budget.approve){e.next=11;break}return n="1"===t.approveAmountRadio?Object(f.c)(t.budget.amountCount,t.selectToken.decimals):"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",t.loading.approve=!0,"授权",e.next=6,Object(h.a)(t.selectToken.address,n,t.chainNetwork.multiSenderAddress,"授权");case 6:a=e.sent,t.loading.approve=!1,a&&t.step2(),e.next=43;break;case 11:t.successData=[],t.active++,c=Object(k.h)(t.tableData,parseInt(t.budget.arrayLimit)),t.budget.padding=0,i=Object(r.a)(c),e.prev=16,i.s();case 18:if((o=i.n()).done){e.next=35;break}return u=o.value,l=t.selectToken.address,d=u.map((function(t){return t.address})),p=u.map((function(e){return Object(f.c)(e.amount,t.selectToken.decimals)})),"multisendToken",m=Object(f.c)(t.budget.baseFee,t.chainNetwork.decimals),Object(k.n)(t.selectToken.address)&&(v=u.reduce((function(t,e){return t.plus(e.amount)}),new x.a(0)),m=new x.a(Object(f.c)(v,t.selectToken.decimals)).plus(m),l="0x000000000000000000000000000000000000bEEF"),t.budget.padding+=1,e.next=31,Object(b.d)(l,d,p,"multisendToken",m);case 31:(g=e.sent)&&(t.$message.success(t.$t("success")),t.successData.push(g));case 33:e.next=18;break;case 35:e.next=40;break;case 37:e.prev=37,e.t0=e.catch(16),i.e(e.t0);case 40:return e.prev=40,i.f(),e.finish(40);case 43:case"end":return e.stop()}}),e,null,[[16,37,40,43]])})))()},deleteRow:function(t,e){e.splice(t,1),this.step2()},editorChanged:function(t){this.errorArray=[],""!==t&&(this.value=t,this.validateNumber(t))},validateNumber:function(t){var e=this,n=t.split("\n");n.forEach((function(t,a){if(Object(p.j)(t)){var r=t.split(","),s=r[0],c=r[1];if(Object(p.h)(s)){if(Object(p.i)(c)){if(e.filterRepeat){var i=n.filter((function(t){return t.split(",")[0]===s})).length;if(i>1){var o={index:a,content:t,errorStatus:4,count:i};return void e.errorArray.push(o)}}}else{var u={index:a,content:c,errorStatus:3};e.errorArray.push(u)}}else{var l={index:a,content:s,errorStatus:2};e.errorArray.push(l)}}else{var d={index:a,content:t,errorStatus:1};e.errorArray.push(d)}}))},getTokenInfo:function(t,e){var n=this;return Object(c.a)(Object(s.a)().mark((function a(){var r,c;return Object(s.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!e){a.next=10;break}return n.loading.select=!0,a.next=4,Object(C.i)(t,e).catch((function(t){return{data:null}}));case 4:(r=a.sent).data&&r.data.data.items.filter((function(t){return"cryptocurrency"===t.type})).forEach((function(t){var e={name:t.contract_ticker_symbol?t.contract_ticker_symbol:t.contract_address,address:t.contract_address,decimals:t.contract_decimals};n.userTokenAddress.push(e)})),c={name:n.chainNetwork.symbol,address:n.chainNetwork.symbol,decimals:n.chainNetwork.decimals},n.selectToken=c,n.userTokenAddress.unshift(c),n.loading.select=!1;case 10:case"end":return a.stop()}}),a)})))()},remoteSelect:function(t){var e=this;return Object(c.a)(Object(s.a)().mark((function n(){var a,r,c;return Object(s.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=e.userTokenAddress.findIndex((function(e){return e.address===t.trim()})),!Object(p.h)(t.trim())||-1!==a){n.next=13;break}return e.loading.select=!0,n.next=5,Object(h.g)(t.trim());case 5:return r=n.sent,n.next=8,Object(h.d)(t.trim());case 8:c=n.sent,e.loading.select=!1,r&&c?e.userTokenAddress.unshift({name:r,address:t.trim(),decimals:parseInt(c)}):v.default.prototype.$message({message:"无效的合约地址！",type:"error"}),n.next=14;break;case 13:Object(p.h)(t.trim())&&(e.selectToken=e.userTokenAddress[a]);case 14:case"end":return n.stop()}}),n)})))()},getDemo:function(){this.value=this.demo},deleteError:function(){if(0!==this.errorArray.filter((function(t){return 4!==t.errorStatus})).length){var t=this.value.split("\n"),e=this.errorArray.filter((function(t){return 4!==t.errorStatus})).map((function(t){return t.index})),n=t.filter((function(t,n,a){return-1===e.indexOf(n)}));0!==n.length?this.value=n.join("\n"):this.value=""}},deleteRepeat:function(){if(this.deleteError(),0!==this.errorArray.filter((function(t){return 4===t.errorStatus})).length){var t=this.value.split("\n").filter((function(t,e,n){return n.findIndex((function(e){return e.split(",")[0]===t.split(",")[0]}))===e}));0!==t.length?this.value=t.join("\n"):this.value=""}},deleteMerge:function(){if(this.deleteError(),0!==this.errorArray.filter((function(t){return 4===t.errorStatus})).length){var t=this.value.split("\n"),e=[];t.forEach((function(t){var n=t.split(",");e.push({address:n[0],amount:new x.a(n[1]).toNumber()})}));var n=Object(a.a)(e.reduce((function(t,e){var n=e.address,a=e.amount,r=t.get(n);return r?r.amount+=a:t.set(n,Object.assign({},e)),t}),new Map).values());0!==n.length?this.value=n.map((function(t){return t.address+","+t.amount})).join("\n"):this.value=""}},retainRepeat:function(){var t=this;this.filterRepeat=!1,this.deleteError(),this.errorArray=[],this.validateNumber(this.value),setTimeout((function(){t.filterRepeat=!0}),800)}}},y=j,O=(n("86de"),n("2877")),A=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"headerBox"},[n("HeaderBg")],1),n("div",{staticClass:"containerBg"},[n("div",{staticClass:"oneToMoreBox"},[t.menu?n("NetworkError"):t._e(),n("div",{staticClass:"stepBox"},[n("el-steps",{attrs:{active:t.active,"align-center":"","finish-status":"success"}},[n("el-step",{attrs:{title:t.$t("batchSend.prepare")}}),n("el-step",{attrs:{title:t.$t("batchSend.confirm")}}),n("el-step",{attrs:{title:t.$t("batchSend.send")}})],1)],1),0===t.active?n("div",{staticClass:"step1"},[n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextAddress"},[n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.$t("batchSend.token"))+" "),n("el-tag",{attrs:{type:"danger"}},[t._v("请选择代币，或粘贴代币合约地址")]),t.chainNetwork.chainName?n("el-tag",[t._v("("+t._s(t.chainNetwork.chainName)+")")]):t._e()],1)]),n("el-select",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.select,expression:"loading.select"}],staticStyle:{width:"90%"},attrs:{"value-key":"address",filterable:"",remote:"","remote-method":t.remoteSelect,placeholder:t.$t("pleaseChoose")},model:{value:t.selectToken,callback:function(e){t.selectToken=e},expression:"selectToken"}},t._l(t.userTokenAddress,(function(e){return n("el-option",{key:e.address,attrs:{label:e.name,value:e}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.address))])])})),1)],1),n("div",{staticClass:"inputContext inputContextDecimals"},[n("div",{staticClass:"label"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"bottom"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("如果您的代币有持仓分红机制，并且已开盘，请开启此项!")]),n("p",[t._v(t._s(t.$t("batchSend.deflationary"))),n("i",{staticClass:"el-icon-question",staticStyle:{"margin-left":"2px"}})])])],1),n("div",{staticClass:"switchBox"},[n("el-switch",{model:{value:t.dividend,callback:function(e){t.dividend=e},expression:"dividend"}})],1)])]),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.$t("batchSend.addressAmounts")))]),n("span",{staticClass:"btnText",on:{click:function(e){t.dialog.setAmount=!0}}},[t._v(t._s(t.$t("batchSend.autoAddAmounts")))]),t.dialog.openUpload?n("span",{staticClass:"btnText",on:{click:function(e){t.dialog.openUpload=!1}}},[t._v(t._s(t.$t("batchSend.insertManually")))]):n("span",{staticClass:"btnText",on:{click:function(e){t.dialog.openUpload=!0}}},[t._v(t._s(t.$t("batchSend.uploadFile")))])]),n("el-row",[n("el-col",{attrs:{xs:24}},[t.dialog.openUpload?n("upload-excel-component",{attrs:{"on-success":t.handleSuccess,"before-upload":t.beforeUpload}}):n("json-editor",{ref:"jsonEditor",on:{changed:t.editorChanged},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t.dialog.openUpload?n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.$t("batchSend.accepted"))+"： CSV / Excel / Txt")]),n("span",{staticClass:"btnText"},[n("a",{attrs:{target:"_blank",href:"/example.xlsx"}},[t._v(t._s(t.$t("batchSend.downExample")))])])]):n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.$t("batchSend.tips1")))]),n("span",{staticClass:"btnText",on:{click:function(e){return t.getDemo()}}},[t._v(t._s(t.$t("batchSend.showExample")))])]),t.errorArray.length>0?n("div",{staticClass:"errorInfo"},[t.errorArray.findIndex((function(t){return 4===t.errorStatus}))>-1?n("div",{staticClass:"label-remark"},[n("span",[t._v(t._s(t.$t("batchSend.duplicateAddress")))]),n("span",{staticClass:"btnText",on:{click:function(e){return t.deleteRepeat()}}},[t._v(t._s(t.$t("batchSend.keepFirstOne")))]),n("span",{staticClass:"btnText",on:{click:function(e){return t.deleteMerge()}}},[t._v(t._s(t.$t("batchSend.mergeBalances")))]),n("span",{staticClass:"btnText",on:{click:function(e){return t.retainRepeat()}}},[t._v(t._s(t.$t("batchSend.keepDuplicateAddress")))])]):t.errorArray.findIndex((function(t){return 4!==t.errorStatus}))>-1?n("div",{staticClass:"label-remark"},[n("span",[t._v(t._s(t.$t("batchSend.tips2")))]),n("span",{staticClass:"btnText",on:{click:function(e){return t.deleteError()}}},[t._v(t._s(t.$t("batchSend.invalidDupAddress")))])]):t._e(),n("div",{staticClass:"ul"},t._l(t.errorArray,(function(e,a){return n("div",{key:a,staticClass:"li"},[1===e.errorStatus?n("span",[t._v(t._s(t.$t("batchSend.tips3",[e.index+1]))+": "+t._s(e.content)+t._s(t.$t("batchSend.invalidFormat")))]):t._e(),2===e.errorStatus?n("span",[t._v(t._s(t.$t("batchSend.tips3",[e.index+1]))+": "+t._s(e.content)+" "+t._s(t.$t("batchSend.invalidAddress")))]):t._e(),3===e.errorStatus?n("span",[t._v(t._s(t.$t("batchSend.tips3",[e.index+1]))+": "+t._s(e.content)+" "+t._s(t.$t("batchSend.invalidAmount")))]):t._e(),4===e.errorStatus?n("span",[t._v(t._s(t.$t("batchSend.tips3",[e.index+1]))+": "+t._s(e.content)+" "+t._s(t.$t("batchSend.invalidDupAddress"))+" "+t._s(e.count))]):t._e()])})),0)]):t._e(),t.active<3?n("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary",disabled:t.errorArray.length>0},on:{click:function(e){return t.validateInfo()}}},[t._v(t._s(t.$t("batchSend.next")))]):t._e()],1):t._e(),1===t.active?n("div",{staticClass:"step2"},[n("div",{staticStyle:{visibility:"hidden"}},[n("span",[t._v("交易速度（5Gwei）")]),n("el-slider",{attrs:{step:.1,min:t.slider.min,max:t.slider.max,marks:t.slider.marks},model:{value:t.slider.value,callback:function(e){t.$set(t.slider,"value",e)},expression:"slider.value"}})],1),n("div",[n("span",[t._v(t._s(t.$t("batchSend.ListRecipients")))]),n("el-table",{attrs:{data:t.tableData,width:"100%",height:"250"}},[n("el-table-column",{attrs:{prop:"address",label:"Address",width:"360"}}),n("el-table-column",{attrs:{prop:"amount",label:"Amount",width:"300"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),t.deleteRow(e.$index,t.tableData)}}},[t._v(t._s(t.$t("batchSend.remove")))])]}}],null,!1,2717103760)})],1)],1),n("div",[n("span",[t._v(t._s(t.$t("batchSend.summary")))]),n("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.budget,expression:"loading.budget"}],staticClass:"abstract"},[t.budget.approve?n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.amountCount))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.requestApproveAmount")))])]):t._e(),t.budget.approve?n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.approveAmount))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.yourCurrentAllowance")))])]):t._e(),n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.addressCount))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.totalAddressCount")))])]),n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.amountCount)+" "+t._s(t.selectToken.name))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.totalAmount")))])]),n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.sendCount))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.tradeCount")))])]),n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.tokenAmount)+" "+t._s(t.selectToken.name))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.tokenBalance")))])]),n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.fee)+" "+t._s(t.chainNetwork.symbol))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.costBalance")))])]),n("li",[n("span",{staticClass:"number"},[t._v(t._s(t.budget.chainAmount)+" "+t._s(t.chainNetwork.symbol))]),n("span",{staticClass:"remark"},[t._v(t._s(t.$t("batchSend.yourBalance",[t.chainNetwork.symbol])))])])])]),t.budget.approve?n("div",[n("span",[t._v(t._s(t.$t("batchSend.amountApprove")))]),[n("el-radio",{attrs:{label:"1"},model:{value:t.approveAmountRadio,callback:function(e){t.approveAmountRadio=e},expression:"approveAmountRadio"}},[t._v(t._s(t.$t("batchSend.exactAmount"))+"("+t._s(t.budget.amountCount)+" "+t._s(t.selectToken.name)+")")]),n("el-radio",{attrs:{label:"2"},model:{value:t.approveAmountRadio,callback:function(e){t.approveAmountRadio=e},expression:"approveAmountRadio"}},[t._v(t._s(t.$t("batchSend.unlimitedAmount")))])]],2):t._e(),t.errorArray2&&t.errorArray2.length>0?n("div",{staticClass:"errorInfo"},[n("div",{staticClass:"ul"},t._l(t.errorArray2,(function(e){return n("div",{staticClass:"li"},[n("span",[t._v(t._s(e.msg))])])})),0)]):t._e(),n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.active--}}},[t._v("<")]),n("el-button",{attrs:{type:"primary",loading:t.loading.approve,disabled:t.errorArray2&&t.errorArray2.length>0},on:{click:function(e){return t.step3()}}},[t._v(t._s(t.$t("batchSend.next")))])],1)]):t._e(),2===t.active?n("div",{staticClass:"step3"},[n("div",[t._v(t._s(t.$t("batchSend.tips4",[t.budget.sendCount,t.budget.padding])))]),n("div",{staticClass:"txidBox"},[t._l(t.successData,(function(e){return n("el-alert",{key:e,attrs:{closable:!1}},[n("el-link",{attrs:{target:"_blank",href:t.chainNetwork.blockExplorerUrls[0]+"/tx/"+e,type:"primary"}},[t._v(t._s(e))])],1)})),n("br")],2),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.active--}}},[t._v("<")]),n("div",{staticClass:"faqBox"},[n("p",{staticClass:"faqTitle"},[t._v("常见问题")]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"Metamask error : ' Insufficient balance. '",name:"1"}},[n("div",[t._v(t._s(t.$t("batchSend.errorTips1")))])]),n("el-collapse-item",{attrs:{title:"Fail with error 'PancakeLibrary: INSUFFICIENT_LIQUIDITY'",name:"2"}},[n("div",[t._v(t._s(t.$t("batchSend.errorTips2")))])]),n("el-collapse-item",{attrs:{title:"Fail",name:"3"}},[n("div",[t._v(t._s(t.$t("batchSend.errorTips3")))])])],1)],1)],1):t._e()],1)]),n("el-dialog",{attrs:{title:t.$t("batchSend.tips5"),visible:t.dialog.setAmount,width:"30%"},on:{"update:visible":function(e){return t.$set(t.dialog,"setAmount",e)},closed:t.handleClose}},[n("span",[t._v(t._s(t.$t("batchSend.autoAddAmounts")))]),n("el-input",{attrs:{placeholder:t.$t("batchSend.tips6")},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialog.setAmount=!1}}},[t._v(t._s(t.$t("cancel")))]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.setAmount()}}},[t._v(t._s(t.$t("confirm")))])],1)],1)],1)}),[],!1,null,"fcf4295a",null);e.default=A.exports},ac94:function(t,e,n){"use strict";n("99f3")},b6ed:function(t,e,n){"use strict";var a=n("5530"),r=n("2f62"),s=n("b893"),c={name:"NetworkError.vue",computed:Object(a.a)({},Object(r.d)({myAddress:function(t){return t.dapp.web3.account},networkId:function(t){return t.dapp.web3.networkId},web3Instance:function(t){return t.dapp.web3.web3Instance},initial:function(t){return t.dapp.web3.initial},chainNetwork:function(t){return t.dapp.chainNetwork}})),watch:{initial:function(){this.initCheck()}},data:function(){return{routerChain:null,show:!1}},methods:{close:function(){this.show=!1},changeNetwork:function(){if(1!==this.routerChain.chainId)Object(s.d)(this.routerChain);else{var t=this.routerChain.chainName+"网络需要你手动切换！";this.$message.warning(t)}},justNetwork:function(){if(this.$route.path){var t=this.$route.path.lastIndexOf("/"),e=this.$route.path.substring(0,t)+"/"+Object(s.o)(this.chainNetwork.aliasName);this.$router.push(e)}},initCheck:function(){if(this.initial){var t=this.$route.meta.symbol;this.routerChain=Object(s.j)(t),this.routerChain&&this.routerChain.chainId!==this.networkId&&(this.show=!0)}}},created:function(){this.initCheck()}},i=c,o=(n("ac94"),n("2877")),u=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"NetworkError"},[n("h5",{staticClass:"title"},[n("i",{staticClass:"el-icon-warning icon"}),n("span",[t._v(t._s(t.$t("networkError.warning")))])]),n("p",{staticClass:"desc"},[t._v(t._s(t.$t("networkError.warningTips",[t.routerChain.aliasName])))]),n("div",{staticClass:"btnBox"},[n("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(e){return t.changeNetwork()}}},[t._v(t._s(t.$t("networkError.changeNetwork",[t.routerChain.aliasName])))]),n("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(e){return t.justNetwork()}}},[t._v(t._s(t.$t("networkError.justNetwork")))])],1),n("div",{staticClass:"close",on:{click:function(e){return t.close()}}},[n("i",{staticClass:"el-icon-close"})])]):t._e()}),[],!1,null,"8ec2da7c",null);e.a=u.exports},b775:function(t,e,n){"use strict";var a=n("bc3a"),r=n.n(a);r.a.defaults.timeout=3e4,r.a.defaults.baseURL="https://service.cointools.workers.dev/",e.a=r.a},d96f:function(t,e,n){},e831:function(t,e,n){},fa7e:function(t,e,n){"use strict";var a=n("56b3"),r=n.n(a);n("0dd0"),n("a7be"),n("acdf"),n("f9d4"),n("8822"),n("d2de"),n("ae67");var s={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(t){t!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(this.value)}},mounted:function(){var t=this;this.jsonEditor=r.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,theme:"idea",screenReaderLabel:"text/javascript",lint:!0}),this.jsonEditor.setValue(this.value),this.jsonEditor.on("change",(function(e){t.$emit("changed",e.getValue())})),this.jsonEditor.on("inputRead",(function(e){t.$emit("input",e.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},c=s,i=(n("60fa"),n("2877")),o=Object(i.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-editor"},[e("textarea",{ref:"textarea",attrs:{placeholder:"请输入地址和数量，以逗号分隔"}})])}),[],!1,null,"358ecc3c",null);e.a=o.exports}}]);