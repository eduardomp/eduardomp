(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1bdab522"],{"323b":function(e,t,n){"use strict";n.r(t);var a=n("b85c"),i=n("1da1"),r=(n("a9e3"),n("4de4"),n("d3b7"),n("25f0"),n("96cf"),n("2f62")),s=n("99e5"),o=n.n(s),u=(n("51d2"),n("771e")),p=n("be79"),l=n("3603"),d=n("3e80"),y=n("a809"),c=n("b893"),m=(n("ed08"),n("b6ed")),f=n("901e"),b=n.n(f),h=n("c030"),v={name:"armzlegends",components:{loadPrivateKey:y.a,NetworkError:m.a},computed:Object(r.d)({vipState:function(e){return e.dapp.authUser.vipState},fee:function(e){return e.dapp.authUser.fee},chainNetwork:function(e){return e.dapp.chainNetwork}}),data:function(){return{web3:null,provider:null,cmdInfo:[],tokenAddress:"0x3d7b0001e03096d3795fd5d984ad679467546d73",loading:{initForm:!1,buying:!1},dialog:{loadPrv:!1,cmdInfo:!1},form:{rpcNode:"https://bsc-dataseed.binance.org/",privateKey:"",address:"0x55a3e5Aa703362A4e89655F9514890848f7F20bd",balance:0,amount:0,radio:0},heroList:[]}},methods:{handleClose:function(){this.dialog.cmdInfo=!1},getUserData:function(e){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.privateKey,i=e.address,t.heroList=[],t.form.amount=0,t.form.balance=0,t.loading.initForm=!0,t.form.privateKey=a,t.form.address=i,t.web3.eth.accounts.wallet.clear(),t.web3.eth.accounts.wallet.add(a),n.next=11,t.getUserBalance();case 11:return n.next=13,t.getPortInfo();case 13:t.loading.initForm=!1;case 14:case"end":return n.stop()}}),n)})))()},getUserBalance:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.web3.eth.getBalance(e.form.address);case 2:n=t.sent,e.form.balance=e.web3.utils.fromWei(n,"ether");case 4:case"end":return t.stop()}}),t)})))()},getPortInfo:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,a,i,r,s,o,p,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.web3.utils.stripHexPrefix(e.form.address),t.next=3,e.web3.eth.call({to:"0xe4dd4794c915cb99f5a12ca8058d8b45ffea8545",data:"0xeadc86d1000000000000000000000000"+n});case 3:return a=t.sent,e.form.amount=e.web3.utils.fromWei(Object(c.l)(a)[0],"ether"),t.next=7,new e.web3.eth.Contract(u.abi,e.tokenAddress);case 7:return i=t.sent,t.next=10,i.methods.balanceOf(e.form.address).call().catch((function(e){return"0"}));case 10:r=t.sent,s=0;case 13:if(!(s<Number(r))){t.next=27;break}return t.next=16,i.methods.tokenOfOwnerByIndex(e.form.address,s).call().catch((function(e){return null}));case 16:if(null===(o=t.sent)){t.next=24;break}return p=e.web3.utils.padLeft(e.web3.utils.numberToHex(o),64),t.next=22,e.getZdl(p);case 22:l=t.sent,e.heroList.push({tokenId:o,count:l});case 24:s++,t.next=13;break;case 27:case"end":return t.stop()}}),t)})))()},fighting:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,i,r,s,o,u,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.form.address){t.next=3;break}return e.$message.error("私钥信息未导入"),t.abrupt("return",!1);case 3:e.dialog.cmdInfo=!0,e.loading.buying=!0,n=new h.Wallet(e.form.privateKey),i=n.connect(e.provider),r=new h.Contract("0x65261f17743fd5fe74c69d03147a1f21f7658db6",p.abi,i),e.cmdInfo.push("开始初始化信息..."),s=Object(a.a)(e.heroList.filter((function(e){return e.count>0}))),t.prev=10,s.s();case 12:if((o=s.n()).done){t.next=27;break}u=o.value,e.cmdInfo.push("当前 tokenId = ".concat(u.tokenId,", 开始执行")),l=0;case 16:if(!(l<u.count)){t.next=25;break}return t.next=19,r.fight(u.tokenId,e.form.radio,{gasLimit:h.utils.hexlify(3e5)});case 19:d=t.sent,e.cmdInfo.push("生产 TxId = ".concat(d.hash));case 22:l++,t.next=16;break;case 25:t.next=12;break;case 27:t.next=32;break;case 29:t.prev=29,t.t0=t.catch(10),s.e(t.t0);case 32:return t.prev=32,s.f(),t.finish(32);case 35:e.cmdInfo.push("操作完毕."),e.loading.buying=!1,e.getUserBalance(),e.getPortInfo();case 39:case"end":return t.stop()}}),t,null,[[10,29,32,35]])})))()},getZdl:function(e){var t=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var a,i,r,s,o,u,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t.web3.eth.call({from:t.form.address,data:"0xd636a63c"+t.web3.utils.stripHexPrefix(e),to:"0x65261f17743fd5fe74c69d03147a1f21f7658db6"});case 3:for(a=n.sent,i=0,r=Object(c.l)(a),s=(new Date).getTime().toString().substr(0,10),o=2;o<r.length;o++)u=t.web3.utils.hexToNumber("0x"+r[o]),p=u+86400,-1===new b.a(p).comparedTo(s)&&(i+=1);return n.abrupt("return",i);case 9:case"end":return n.stop()}}),n)})))()},joinVip:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new e.web3.eth.Contract(l.abi,"0x40741855d34f4B9E4061B776BB1E9a7F1841151c");case 2:return n=t.sent,t.next=5,n.methods.isVIP(e.form.address).call();case 5:return a=t.sent,t.abrupt("return","1"===a);case 7:case"end":return t.stop()}}),t)})))()},test:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getUserBalance(),e.getPortInfo();case 2:case"end":return t.stop()}}),t)})))()}},created:function(){this.web3=new o.a(new o.a.providers.HttpProvider(this.form.rpcNode)),this.provider=new d.a(this.form.rpcNode)}},w=v,T=(n("a5a6"),n("2877")),g=Object(T.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("NetworkError"),n("loadPrivateKey",{attrs:{show:e.dialog.loadPrv,web3:e.web3},on:{close:function(t){e.dialog.loadPrv=!1},getUserData:e.getUserData}}),n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.initForm,expression:"loading.initForm"}],ref:"form",attrs:{model:e.form,"label-width":"120px"}},[n("el-card",{staticClass:"box-card"},[n("el-form-item",{attrs:{label:"钱包地址:"}},[n("el-input",{attrs:{disabled:"",placeholder:"请载入私钥获取地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}},[n("template",{slot:"append"},[n("el-button",{on:{click:function(t){e.dialog.loadPrv=!0}}},[e._v("载入私钥")])],1)],2),n("el-tag",{attrs:{type:"danger"}},[e._v("强烈推荐使用小额资产的小钱包进行抢币,需要私钥是为了省去确认操作，直接实现快速自动买卖.")]),n("el-tag",[e._v("本程序完全本地运行,不会上传私钥到服务器,欢迎监督检测.")])],1),n("el-form-item",{attrs:{label:"钱包余额:"}},[n("span",[e._v(e._s(e.form.balance)+" BNB")])])],1),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"saleInfo"},[n("span",[e._v("总英雄数："+e._s(e.heroList.length))]),n("span",[e._v("可战斗英雄："+e._s(e.heroList.filter((function(e){return e.count>0})).length))]),n("span",[e._v("等领取奖金："+e._s(e.form.amount)+" PORT")])]),n("el-tag",{attrs:{type:"danger"}},[e._v("一次战斗大约需要：0.0015 BNB ")]),n("el-form-item",{attrs:{label:"战斗难度:"}},[n("el-radio-group",{model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[n("el-radio",{attrs:{label:0}},[e._v("简单")]),n("el-radio",{attrs:{label:1}},[e._v("普通")]),n("el-radio",{attrs:{label:2}},[e._v("难的")])],1)],1)],1)],1),n("div",{staticClass:"startBtn"},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.buying,expression:"loading.buying"}],attrs:{type:"success"},on:{click:function(t){return e.fighting()}}},[e._v("开始批量战斗")])],1),n("el-dialog",{attrs:{title:"操作信息",visible:e.dialog.cmdInfo,width:"100%"},on:{"update:visible":function(t){return e.$set(e.dialog,"cmdInfo",t)},closed:e.handleClose}},[e.cmdInfo.length>0?n("div",{staticClass:"cmdInfo"},[n("ul",e._l(e.cmdInfo,(function(t,a){return n("li",[e._v("["+e._s(a)+"] "+e._s(t))])})),0)]):e._e()])],1)}),[],!1,null,"8194fdf2",null);t.default=g.exports},"4c94":function(e,t,n){},5133:function(e,t,n){},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"771e":function(e){e.exports=JSON.parse('{"contractName":"ERC721","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"armzs","outputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"string","name":"image","type":"string"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"}],"name":"create","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getArmz","outputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getCollection","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_new","type":"address"}],"name":"setFactoryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"armz","type":"tuple"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},a5a6:function(e,t,n){"use strict";n("5133")},a809:function(e,t,n){"use strict";var a=(n("99e5"),{name:"loadPrivateKey",props:{show:{type:Boolean,default:!1},web3:{}},data:function(){return{privateKey:"",loading:{select:!1}}},methods:{loadPrv:function(){if(this.privateKey)try{var e=this.web3.eth.accounts.privateKeyToAccount(this.privateKey,!0);this.$emit("getUserData",e),this.closeDialog()}catch(e){this.$message.error(e.message)}else this.$message.error("私钥载入错误，请检查是否输入正确！")},closeDialog:function(){this.privateKey="",this.$emit("close")}}}),i=a,r=n("2877"),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-dialog",{staticClass:"loadPrvKey",attrs:{title:"加载私钥",visible:e.show,"append-to-body":!0,"show-close":!0,"before-close":e.closeDialog},on:{"update:visible":function(t){e.show=t}}},[n("div",{staticClass:"loadPrvKey",staticStyle:{display:"flex"}},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.select,expression:"loading.select"}],attrs:{"show-password":!0,placeholder:"请输入钱包私钥"},model:{value:e.privateKey,callback:function(t){e.privateKey=t},expression:"privateKey"}}),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.loadPrv()}}},[e._v("加载")])],1)])],1)}),[],!1,null,"bbd394ca",null);t.a=s.exports},b05e:function(e,t,n){"use strict";n("4c94")},b6ed:function(e,t,n){"use strict";var a=n("5530"),i=n("2f62"),r=n("b893"),s={name:"NetworkError.vue",computed:Object(a.a)({},Object(i.d)({myAddress:function(e){return e.dapp.web3.account},networkId:function(e){return e.dapp.web3.networkId},web3Instance:function(e){return e.dapp.web3.web3Instance},initial:function(e){return e.dapp.web3.initial},chainNetwork:function(e){return e.dapp.chainNetwork}})),watch:{initial:function(){this.initCheck()}},data:function(){return{routerChain:null,show:!1}},methods:{close:function(){this.show=!1},changeNetwork:function(){if(1!==this.routerChain.chainId)Object(r.b)(this.routerChain);else{var e=this.routerChain.chainName+"网络需要你手动切换！";this.$message.warning(e)}},justNetwork:function(){if(this.$route.path){var e=this.$route.path.lastIndexOf("/"),t=this.$route.path.substring(0,e)+"/"+Object(r.j)(this.chainNetwork.aliasName);this.$router.push(t)}},initCheck:function(){if(this.initial){var e=this.$route.meta.symbol;this.routerChain=Object(r.g)(e),this.routerChain&&this.routerChain.chainId!==this.networkId&&(this.show=!0)}}},created:function(){this.initCheck()}},o=s,u=(n("b05e"),n("2877")),p=Object(u.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"NetworkError"},[n("h5",{staticClass:"title"},[n("i",{staticClass:"el-icon-warning icon"}),n("span",[e._v(e._s(e.$t("networkError.warning")))])]),n("p",{staticClass:"desc"},[e._v(e._s(e.$t("networkError.warningTips",[e.routerChain.aliasName])))]),n("div",{staticClass:"btnBox"},[n("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(t){return e.changeNetwork()}}},[e._v(e._s(e.$t("networkError.changeNetwork",[e.routerChain.aliasName])))]),n("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(t){return e.justNetwork()}}},[e._v(e._s(e.$t("networkError.justNetwork")))])],1),n("div",{staticClass:"close",on:{click:function(t){return e.close()}}},[n("i",{staticClass:"el-icon-close"})])]):e._e()}),[],!1,null,"8ec2da7c",null);t.a=p.exports},be79:function(e){e.exports=JSON.parse('{"contractName":"Zrmz","abi":[{"inputs":[{"internalType":"uint256","name":"armzId","type":"uint256"},{"internalType":"uint256","name":"boss","type":"uint256"}],"name":"fight","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}}]);