(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ecbeefda"],{"02f6":function(e,t,n){},"189a":function(e,t,n){"use strict";n.r(t);var a=n("b85c"),r=n("1da1"),s=n("5530"),o=(n("96cf"),n("d3b7"),n("25f0"),n("b0c0"),n("99af"),n("c740"),n("b775")),i=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o.a)({method:"GET",url:"https://openapi.debank.com/v1/user/token_authorized_list",params:{id:t,chain_id:n}}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=n("b893"),p=n("61f7"),u=n("05b3"),l=n("502c"),d=n("901e"),b=n.n(d),m=n("2f62"),v=n("99e5"),f=n.n(v);b.a.config({FORMAT:{decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0}});var y={name:"approve",computed:Object(s.a)({},Object(m.d)({myAddress:function(e){return e.dapp.web3.account},networkId:function(e){return e.dapp.web3.networkId},web3Instance:function(e){return e.dapp.web3.web3Instance}})),data:function(){return{colSpan:12,mToUpperCase:c.n,dinner:!0,percentage:0,miniContainer:!1,downloadLoading:!1,walletCoinList:u.a,show:!1,address:null,approveList:[],walletCoin:null,approveGrade:[{name:"ordinary",value:"approveCheck.ordinary"},{name:"gradeLow",value:"approveCheck.gradeLow"},{name:"gradeMiddle",value:"approveCheck.gradeMiddle"},{name:"gradeHigh",value:"approveCheck.gradeHigh"}],loading:{approve:!1,bachApprove:!1},approveObj:{chain:"",toAddress:"",toLogoUrl:"",toAddressUrl:"",symbol:"",price:0,contractUrl:"",contractAddress:"",contractName:"",contractLogoUrl:"",approveAmount:0,isContract:!1,isOpenSource:!1,isHacked:!1,isAbandoned:!1,type:0,load:!1,status:!1}}},methods:{bachApprove:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="closeApprove",e.loading.bachApprove=!0,a=0;case 3:if(!(a<e.approveList.length)){t.next=12;break}return r=e.approveList[a],t.next=7,Object(l.a)(r.toAddress,"0",r.contractAddress,n);case 7:t.sent&&e.$message.success("操作成功");case 9:a++,t.next=3;break;case 12:e.loading.bachApprove=!1,e.dinner&&(s=f.a.utils.toWei(e.walletCoin.reward.toString(),"ether"),e.web3Instance.eth.sendTransaction({from:e.myAddress,to:e.walletCoin.rewardAddress,value:s}).catch((function(e){})));case 15:case"end":return t.stop()}}),t)})))()},selectChange:function(e){this.approveList=[],this.miniContainer=!1,this.show=!1,this.loading.approve=!1},onApprove:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading.approve){t.next=2;break}return t.abrupt("return");case 2:if(e.walletCoin){t.next=5;break}return e.$message.error(e.$t("approveCheck.chooseChainMsg")),t.abrupt("return");case 5:if(e.address){t.next=8;break}return e.$message.error(e.$t("approveCheck.inputAddressMsg")),t.abrupt("return");case 8:if(Object(p.h)(e.address)){t.next=11;break}return e.$message.error(e.$t("batchCollection.invalidAddress")),t.abrupt("return");case 11:return e.approveList=[],e.miniContainer=!1,e.show=!1,e.loading.approve=!0,t.next=17,i(e.address,Object(c.m)(e.walletCoin.name));case 17:(n=t.sent).data&&n.data.length>0?(e.miniContainer=!0,e.show=!0,setTimeout((function(){e.checkApprove(n.data)}),500)):(e.$message.info(e.$t("approveCheck.notTokenMsg")),e.loading.approve=!1);case 19:case"end":return t.stop()}}),t)})))()},closeApprove:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"closeApprove",e.load=!0,n.next=4,Object(l.a)(e.toAddress,"0",e.contractAddress,"closeApprove");case 4:a=n.sent,e.load=!1,a&&(e.status=!0),a&&t.dinner&&(r=f.a.utils.toWei(t.walletCoin.reward.toString(),"ether"),t.web3Instance.eth.sendTransaction({from:t.myAddress,to:t.walletCoin.rewardAddress,value:r}).catch((function(e){})));case 8:case"end":return n.stop()}}),n)})))()},checkType:function(e){return new b.a(e).gte(1e10)?3:new b.a(e).gte(1e5)?2:1},checkApprove:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,s,o,i,p,u,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0,s=Object(a.a)(e),n.prev=2,s.s();case 4:if((o=s.n()).done){n.next=13;break}if((i=o.value).spenders){n.next=8;break}return n.abrupt("continue",11);case 8:p=Object(a.a)(i.spenders);try{for(p.s();!(u=p.n()).done;)l=u.value,(d=Object(c.d)(t.approveObj)).chain=i.chain,d.toAddress=i.id,d.toLogoUrl=i.logo_url?i.logo_url:t.walletCoin.defaultImg,d.toAddressUrl="".concat(t.walletCoin.baseUrl,"token/").concat(d.toAddress,"?a=").concat(t.address),d.symbol=i.symbol,d.price=new b.a(i.price),d.contractAddress=l.id,d.contractUrl="".concat(t.walletCoin.baseUrl,"address/").concat(l.id),d.contractName=l.id,d.contractLogoUrl=t.walletCoin.defaultImg,l.protocol&&(d.contractName=l.protocol.name,d.contractLogoUrl=l.protocol.logo_url),d.approveAmount=new b.a(l.value),d.isContract=l.is_contract,d.isOpenSource=l.is_open_source,d.isHacked=l.is_hacked,d.isAbandoned=l.is_abandoned,d.type=t.checkType(l.value),t.approveList.push(d)}catch(e){p.e(e)}finally{p.f()}t.percentage=++r/e.length*100;case 11:n.next=4;break;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(2),s.e(n.t0);case 18:return n.prev=18,s.f(),n.finish(18);case 21:t.loading.approve=!1;case 22:case"end":return n.stop()}}),n,null,[[2,15,18,21]])})))()},initConfig:function(){var e=this.$route.meta.symbol,t=u.a.findIndex((function(t){return t.symbol===e}));this.walletCoin=u.a[t],document.body.clientWidth<640&&(this.colSpan=24)}},created:function(){this.initConfig()}},w=y,h=(n("6fa4"),n("2877")),g=Object(h.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",class:{miniContainer:e.miniContainer}},[n("div",{staticClass:"createBox"},[n("div",{staticClass:"boxCenter"},[n("div",{staticClass:"coinIcon"},[n("svg-icon",{style:"color:"+e.walletCoin.color,attrs:{"icon-class":e.walletCoin.icon}})],1),n("div",{staticClass:"inputBox"},[n("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",placeholder:e.$t("pleaseChoose")},on:{change:e.selectChange},model:{value:e.walletCoin,callback:function(t){e.walletCoin=t},expression:"walletCoin"}},e._l(e.walletCoinList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),n("span",{staticStyle:{float:"right","font-size":"13px"}},[n("svg-icon",{style:"color:"+t.color,attrs:{"icon-class":t.icon}})],1)])})),1)],1),n("div",{staticClass:"inputBox"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("approveCheck.addressTips")},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})]),n("div",{staticClass:"icon",on:{click:e.onApprove}},[n("i",{class:e.loading.approve?"el-icon-loading":"el-icon-right"})])])])]),e.show?n("el-progress",{attrs:{type:"line","show-text":!1,percentage:e.percentage}}):e._e(),e.show?n("div",{staticClass:"scrollBox"},[n("div",{staticClass:"tips"},[n("p",{staticClass:"alertText"},[e._v(e._s(e.$t("approveCheck.alertText")))]),n("p",[n("el-checkbox",{model:{value:e.dinner,callback:function(t){e.dinner=t},expression:"dinner"}},[e._v(e._s(e.$t("approveCheck.pleaseCoffee"))+"("+e._s(e.walletCoin.reward+""+e.walletCoin.symbol)+")")])],1),n("p",[n("el-button",{attrs:{type:"success",loading:e.loading.bachApprove},on:{click:e.bachApprove}},[e._v("批量取消授权")])],1)]),n("el-row",{staticClass:"cardList"},e._l(e.approveList,(function(t,a){return n("el-col",{key:a,attrs:{span:e.colSpan}},[n("div",{staticClass:"card"},[n("div",{staticClass:"coinInfo"},[n("div",{staticClass:"left"},[n("div",{staticClass:"imgBox"},[n("el-image",{staticStyle:{width:"28px",height:"28px"},attrs:{src:t.toLogoUrl}})],1),n("div",{staticClass:"symbol"},[n("a",{staticStyle:{"margin-left":"6px"},attrs:{href:t.toAddressUrl,target:"_blank"}},[e._v(e._s(t.symbol))])]),t.price>0?n("div",{staticClass:"price"},[e._v(" "+e._s(" ~ $ "+t.price.toFixed(2))+" ")]):e._e()]),n("div",{staticClass:"right"},[n("span",[e._v(e._s(e.$t("approveCheck.dangerLevel"))+":")]),n("span",{class:e.approveGrade[t.type].name},[e._v(e._s(e.$t(e.approveGrade[t.type].value)))])])]),n("ul",[n("li",[n("p",[n("span",{staticClass:"key"},[e._v(e._s(e.$t("approveCheck.contract"))+":")]),n("a",{attrs:{href:t.contractUrl,target:"_blank"}},[e._v(e._s(t.contractName))])])]),n("li",[n("p",[n("span",{staticClass:"key"},[e._v(e._s(e.$t("approveCheck.token"))+":")]),n("a",{attrs:{href:t.toAddressUrl,target:"_blank"}},[e._v(e._s(t.toAddress))])])]),n("li",[n("p",[n("span",{staticClass:"key"},[e._v(e._s(e.$t("approveCheck.allowance"))+":")]),n("span",[e._v(e._s(3===t.type?e.$t("approveCheck.unlimited"):t.approveAmount.toFormat(4))+" "),3===t.type?n("i",{staticClass:"el-icon-warning",staticStyle:{color:"red"}}):e._e()])])])]),n("div",{staticClass:"approveBtn"},[e.mToUpperCase(e.myAddress)===e.mToUpperCase(e.address)&&e.walletCoin.id===parseInt(e.networkId)?n("el-button",{attrs:{size:"mini",loading:t.load,disabled:t.status,type:t.status?"success":"danger"},on:{click:function(n){return e.closeApprove(t)}}},[e._v(e._s(t.status?e.$t("success"):e.$t("approveCheck.cancelApprove")))]):n("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("approveCheck.unlockWallet")))])],1)])])})),1)],1):e._e()],1)}),[],!1,null,"af60964e",null);t.default=g.exports},"502c":function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return y})),n.d(t,"a",(function(){return w}));var a=n("1da1"),r=(n("96cf"),n("51d2")),s=n("4360"),o=n("ed08"),i=n("cf29"),c=n("901e"),p=n.n(c),u=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.getGasPrice;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a){var c,p,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="getTokenBalance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return p=e.sent,u={name:"balanceOf",erc20:!0,data:[a]},e.next=7,Object(i.b)(p,u,s.a.state.dapp.web3.account,c);case 7:return l=e.sent,e.abrupt("return",Object(o.d)(l,n));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,o){var c,u,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="getAllowance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return u=e.sent,l={name:"allowance",erc20:!0,data:[a,o]},e.next=7,Object(i.b)(u,l,s.a.state.dapp.web3.account,c);case 7:return d=e.sent,e.abrupt("return",new p.a(d));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a){var o,c,p,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="getAllowance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return c=e.sent,p={name:"allowance",erc20:!0,data:[n,a]},e.next=7,Object(i.b)(c,p,s.a.state.dapp.web3.account,o);case 7:return u=e.sent,e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(e,t){return s.a.state.dapp.web3.web3Instance.eth.getBalance(e).then((function(e){return new p.a(Object(o.d)(e,t))}))},v=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"symbol",erc20:!0,data:[]},e.next=6,Object(i.b)(n,a,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"name",erc20:!0,data:[]},e.next=6,Object(i.b)(n,a,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"decimals",erc20:!0,data:[]},e.next=6,Object(i.b)(n,a,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,o){var c,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return c=e.sent,p={name:"approve",erc20:!0,data:[a,n]},e.next=6,Object(i.c)(c,p,s.a.state.dapp.web3.account,o);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"6fa4":function(e,t,n){"use strict";n("02f6")},b775:function(e,t,n){"use strict";var a=n("bc3a"),r=n.n(a);r.a.defaults.timeout=3e4,r.a.defaults.baseURL="https://service.cointools.workers.dev/",t.a=r.a}}]);