(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c7a2c9d8"],{"39b6":function(e,t,n){"use strict";n("f3d9")},"4e42":function(e,t,n){"use strict";n.r(t);var a=n("1da1"),r=n("5530"),s=(n("96cf"),n("d3b7"),n("25f0"),n("99e5")),u=n.n(s),i=n("502c"),o=n("ed08"),c=n("2f62"),p={name:"customApproval",computed:Object(r.a)({},Object(c.d)({web3Instance:function(e){return e.dapp.web3.web3Instance},myAddress:function(e){return e.dapp.web3.account}})),data:function(){return{loading:{dinner:!1},form:{tokenAddress:"",targetAddress:"",amount:"",dinner:!1,reward:"0.01"},options:[{value:"0.01",label:"0.01"},{value:"0.02",label:"0.02"},{value:"0.04",label:"0.04"},{value:"0.08",label:"0.08"}]}},methods:{dinner:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.dinner=!0,n=u.a.utils.toWei(e.form.reward.toString(),"ether"),t.next=4,e.web3Instance.eth.sendTransaction({from:e.myAddress,to:"0x40b5bad2033f59f9d75ef1E34b302C6C916532B4",value:n}).catch((function(e){}));case 4:e.loading.dinner=!1;case 5:case"end":return t.stop()}}),t)})))()},approve:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="Approve",t.next=3,Object(i.c)(e.form.tokenAddress);case 3:if(a=t.sent){t.next=7;break}return e.$message.success("未能查询到代币信息,检查地址是否正确"),t.abrupt("return");case 7:return r=null,e.form.amount?(a=parseInt(a),r=Object(o.c)(e.form.amount,a)):r="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",t.next=12,Object(i.a)(e.form.tokenAddress,r,e.form.targetAddress,n);case 12:t.sent&&e.$message.success("授权成功");case 14:case"end":return t.stop()}}),t)})))()}}},l=p,d=(n("39b6"),n("2877")),f=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-form",{attrs:{"label-position":"top",model:e.form}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"title"},[e._v("代币授权")]),n("el-form-item",{attrs:{label:"代币地址:"}},[n("el-input",{attrs:{placeholder:"请输入代币合约地址"},model:{value:e.form.tokenAddress,callback:function(t){e.$set(e.form,"tokenAddress",t)},expression:"form.tokenAddress"}})],1),n("el-form-item",{attrs:{label:"授权合约:"}},[n("el-input",{attrs:{placeholder:"请输入授权合约地址"},model:{value:e.form.targetAddress,callback:function(t){e.$set(e.form,"targetAddress",t)},expression:"form.targetAddress"}})],1),n("el-form-item",{attrs:{label:"授权数量"}},[n("el-input",{attrs:{placeholder:"请输入授权数量,不填写则为无限大"},model:{value:e.form.amount,callback:function(t){e.$set(e.form,"amount",t)},expression:"form.amount"}})],1),n("div",{staticClass:"approve"},[n("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.approve()}}},[e._v("授权")])],1),n("el-form-item",{attrs:{label:"请TokenTool.App喝咖啡"}},[n("el-select",{attrs:{clearable:"",placeholder:"喝咖啡"},model:{value:e.form.reward,callback:function(t){e.$set(e.form,"reward",t)},expression:"form.reward"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-button",{attrs:{loading:e.loading.dinner,type:"primary"},on:{click:function(t){return e.dinner()}}},[e._v("喝杯咖啡")])],1)],1)],1)],1)}),[],!1,null,"408f6945",null);t.default=f.exports},"502c":function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return y}));var a=n("1da1"),r=(n("96cf"),n("51d2")),s=n("4360"),u=n("ed08"),i=n("cf29"),o=n("901e"),c=n.n(o),p=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.getGasPrice;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a){var o,c,p,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="getTokenBalance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return c=e.sent,p={name:"balanceOf",erc20:!0,data:[a]},e.next=7,Object(i.b)(c,p,s.a.state.dapp.web3.account,o);case 7:return l=e.sent,e.abrupt("return",Object(u.d)(l,n));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,u){var o,p,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="getAllowance",e.next=3,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 3:return p=e.sent,l={name:"allowance",erc20:!0,data:[a,u]},e.next=7,Object(i.b)(p,l,s.a.state.dapp.web3.account,o);case 7:return d=e.sent,e.abrupt("return",new c.a(d));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),f=function(e,t){return s.a.state.dapp.web3.web3Instance.eth.getBalance(e).then((function(e){return new c.a(Object(u.d)(e,t))}))},m=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"symbol",erc20:!0,data:[]},e.next=6,Object(i.b)(n,a,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return n=e.sent,a={name:"decimals",erc20:!0,data:[]},e.next=6,Object(i.b)(n,a,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,u){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new s.a.state.dapp.web3.web3Instance.eth.Contract(r.abi,t);case 2:return o=e.sent,c={name:"approve",erc20:!0,data:[a,n]},e.next=6,Object(i.c)(o,c,s.a.state.dapp.web3.account,u);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},f3d9:function(e,t,n){}}]);