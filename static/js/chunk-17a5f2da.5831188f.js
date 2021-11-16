(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-17a5f2da"],{"19ae":function(e){e.exports=JSON.parse('{"contractName":"Spaceship","abi":[{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getTokenDetails","outputs":[{"components":[{"internalType":"uint8","name":"roll","type":"uint8"},{"internalType":"uint8","name":"level","type":"uint8"},{"internalType":"uint8","name":"workers","type":"uint8"},{"internalType":"uint8","name":"firstName","type":"uint8"},{"internalType":"uint8","name":"lastName","type":"uint8"}],"internalType":"struct Spaceship.SpaceshipStruct","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyQueue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"6dda":function(e){e.exports=JSON.parse('{"contractName":"Cryptomines","abi":[{"inputs":[],"name":"getMyWorkers","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMySpaceships","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_workerId","type":"uint256"}],"name":"burnWorker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum CryptoMines.nftTypeText","name":"_nftType","type":"uint8"}],"name":"queueMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_spaceshipId","type":"uint256"}],"name":"burnSpaceship","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum CryptoMines.nftTypeText","name":"_nftType","type":"uint8"}],"name":"revealNFT","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},"85da":function(e,t,n){"use strict";n("9c00")},"9c00":function(e,t,n){},a809:function(e,t,n){"use strict";var a=(n("99e5"),{name:"loadPrivateKey",props:{show:{type:Boolean,default:!1},web3:{}},data:function(){return{lWidth:"650px",privateKey:"",loading:{select:!1}}},methods:{loadPrv:function(){if(this.privateKey)try{var e=this.web3.eth.accounts.privateKeyToAccount(this.privateKey,!0);this.$emit("getUserData",e),this.closeDialog()}catch(e){this.$message.error(e.message)}else this.$message.error("私钥载入错误，请检查是否输入正确！")},closeDialog:function(){this.privateKey="",this.$emit("close")}},created:function(){document.body.clientWidth<640&&(this.lWidth="90%")}}),r=a,s=n("2877"),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-dialog",{staticClass:"loadPrvKey",attrs:{title:"加载私钥",visible:e.show,"append-to-body":!0,"close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!0,width:e.lWidth,"before-close":e.closeDialog},on:{"update:visible":function(t){e.show=t}}},[n("div",{staticClass:"loadPrvKey",staticStyle:{display:"flex"}},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.select,expression:"loading.select"}],attrs:{"show-password":!0,placeholder:"请输入钱包私钥"},model:{value:e.privateKey,callback:function(t){e.privateKey=t},expression:"privateKey"}}),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.loadPrv()}}},[e._v("加载")])],1)])],1)}),[],!1,null,"8eccd106",null);t.a=i.exports},c63f:function(e){e.exports=JSON.parse('{"contractName":"Workers","abi":[{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getTokenDetails","outputs":[{"components":[{"internalType":"uint8","name":"roll","type":"uint8"},{"internalType":"uint8","name":"level","type":"uint8"},{"internalType":"uint8","name":"minePower","type":"uint8"},{"internalType":"uint8","name":"firstName","type":"uint8"},{"internalType":"uint8","name":"lastName","type":"uint8"},{"internalType":"uint256","name":"contractDueDate","type":"uint256"},{"internalType":"uint256","name":"lastMine","type":"uint256"}],"internalType":"struct Worker.WorkerStruct","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyQueue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}')},cd16:function(e,t,n){"use strict";n.r(t);var a=n("b85c"),r=n("1da1"),s=(n("99af"),n("a9e3"),n("d3b7"),n("4de4"),n("96cf"),n("2f62")),i=n("99e5"),o=n.n(i),u=n("51d2"),c=n("6dda"),l=n("19ae"),p=n("c63f"),f=n("3603"),d=n("3e80"),m=n("a809"),b=(n("b893"),n("ed08")),y=n("901e"),h=n.n(y),v=(n("c224"),n("c030")),g={name:"cryptomines.vue",components:{loadPrivateKey:m.a},computed:Object(s.d)({vipState:function(e){return e.dapp.authUser.vipState},fee:function(e){return e.dapp.authUser.fee},chainNetwork:function(e){return e.dapp.chainNetwork}}),data:function(){return{lWidth:"120px",web3:null,provider:null,cmdInfo:[],tokenAddress:"0xd44fd09d74cd13838f137b590497595d6b3feea4",mainAddress:"0x6778f69f83c7d42612500efe0Bcd278c112688F6",spaceshipAddress:"0xd1204d12995192c23860a06e68e3ad102bbe9877",workerAddress:"0x6053b8fc837dc98c54f7692606d632ac5e760488",loading:{initForm:!1,buying:!1},dialog:{loadPrv:!1,cmdInfo:!1},form:{model:!1,rpcNode:"https://bsc-dataseed.binance.org/",privateKey:"",address:"",balance:0,tokenBalance:0,count:"",radio:"1",currencyTime:""},spaceshipList:[],spaceshipQueue:0,workerList:[],workerQueue:0}},methods:{handleClose:function(){this.dialog.cmdInfo=!1},getUserData:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.privateKey,r=e.address,t.spaceshipList=[],t.workerList=[],t.form.tokenBalance=0,t.form.balance=0,t.loading.initForm=!0,t.form.privateKey=a,t.form.address=r,t.web3.eth.accounts.wallet.clear(),t.web3.eth.accounts.wallet.add(a),n.next=12,t.getUserBalance();case 12:t.loading.initForm=!1,t.$message.success("导入成功，请手动加载数据.");case 14:case"end":return n.stop()}}),n)})))()},refresh:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.paramValdata();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return e.spaceshipList=[],e.workerList=[],e.form.tokenBalance=0,e.form.balance=0,e.loading.initForm=!0,t.next=12,e.getUserBalance();case 12:return t.next=14,e.getPortInfo();case 14:e.loading.initForm=!1;case 15:case"end":return t.stop()}}),t)})))()},getUserBalance:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.web3.eth.getBalance(e.form.address);case 2:return n=t.sent,e.form.balance=e.web3.utils.fromWei(n,"ether"),t.next=6,new e.web3.eth.Contract(u.abi,e.tokenAddress);case 6:return a=t.sent,t.next=9,a.methods.decimals().call();case 9:return r=t.sent,t.next=12,a.methods.balanceOf(e.form.address).call();case 12:s=t.sent,e.form.tokenBalance=Object(b.d)(s,r);case 14:case"end":return t.stop()}}),t)})))()},getPortInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,s,i,o,u,f,d,m,b,y,h,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new e.web3.eth.Contract(c.abi,e.mainAddress);case 2:return n=t.sent,t.next=5,new e.web3.eth.Contract(l.abi,e.spaceshipAddress);case 5:return r=t.sent,t.next=8,n.methods.getMySpaceships().call({from:e.form.address}).catch((function(e){return null}));case 8:s=t.sent,i=Object(a.a)(s),t.prev=11,i.s();case 13:if((o=i.n()).done){t.next=22;break}return u=o.value,t.next=17,r.methods.getTokenDetails(u).call();case 17:f=t.sent,e.spaceshipList.push({nftId:u,level:f.level});case 20:t.next=13;break;case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(11),i.e(t.t0);case 27:return t.prev=27,i.f(),t.finish(27);case 30:return t.next=32,r.methods.getMyQueue().call({from:e.form.address}).catch((function(e){return"0"}));case 32:return e.spaceshipQueue=t.sent,t.next=35,new e.web3.eth.Contract(p.abi,e.workerAddress);case 35:return d=t.sent,t.next=38,n.methods.getMyWorkers().call({from:e.form.address}).catch((function(e){return null}));case 38:m=t.sent,b=Object(a.a)(m),t.prev=41,b.s();case 43:if((y=b.n()).done){t.next=52;break}return h=y.value,t.next=47,d.methods.getTokenDetails(h).call();case 47:v=t.sent,e.workerList.push({nftId:h,level:v.level});case 50:t.next=43;break;case 52:t.next=57;break;case 54:t.prev=54,t.t1=t.catch(41),b.e(t.t1);case 57:return t.prev=57,b.f(),t.finish(57);case 60:return t.next=62,d.methods.getMyQueue().call({from:e.form.address}).catch((function(e){return"0"}));case 62:e.workerQueue=t.sent;case 63:case"end":return t.stop()}}),t,null,[[11,24,27,30],[41,54,57,60]])})))()},paramValdata:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.cmdInfo=[],e.cmdInfo.push("开始初始化信息..."),e.form.address){t.next=5;break}return e.$message.error("私钥信息未导入"),t.abrupt("return",!1);case 5:return t.next=7,e.joinVip();case 7:if(t.sent){t.next=12;break}return e.$message.error("当前地址:".concat(e.form.address," 不是VIP用户,请联系管理员")),e.cmdInfo.push("当前地址:".concat(e.form.address," 不是VIP用户,请联系管理员")),t.abrupt("return",!1);case 12:return e.cmdInfo.push("检查ETERNAL 是否授权"),t.next=15,e.approveUsdt();case 15:if(t.sent){t.next=20;break}return e.cmdInfo.push("ETERNAL授权失败,请检测网络或手续费是否足够"),e.$message.error("ETERNAL授权失败,请检测网络或手续费是否足够"),t.abrupt("return",!1);case 20:return t.abrupt("return",!0);case 21:case"end":return t.stop()}}),t)})))()},approveUsdt:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new e.web3.eth.Contract(u.abi,e.tokenAddress);case 2:return n=t.sent,t.next=5,n.methods.allowance(e.form.address,e.mainAddress).call();case 5:if(!(t.sent>0)){t.next=8;break}return t.abrupt("return",!0);case 8:return e.cmdInfo.push("第一次使用，开始授权 ETERNAL 中 ...."),t.next=11,n.methods.approve(e.mainAddress,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").estimateGas({from:e.form.address});case 11:return a=t.sent,a=parseInt(1.5*a),t.next=15,n.methods.approve(e.mainAddress,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from:e.form.address,gas:a}).then((function(e){return!0})).catch((function(e){return!1}));case 15:return r=t.sent,t.abrupt("return",r);case 17:case"end":return t.stop()}}),t)})))()},openQueue:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var a,r,s,i,o,u,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading.buying=!0,t.dialog.cmdInfo=!0,n.next=4,t.paramValdata();case 4:if(n.sent){n.next=8;break}return t.loading.buying=!1,n.abrupt("return");case 8:t.loading.buying=!0,t.dialog.cmdInfo=!0,t.cmdInfo.push("开始初始化信息..."),a=0===e?t.workerQueue:t.spaceshipQueue,r=new v.Wallet(t.form.privateKey),s=r.connect(t.provider),i=new v.Contract(t.mainAddress,c.abi,s),o=0;case 16:if(!(o<Number(a))){n.next=40;break}return n.next=19,i.revealNFT(e,{gasLimit:v.utils.hexlify(3e5)});case 19:if(u=n.sent,t.cmdInfo.push("生成 TxId = ".concat(u.hash)),!1!==t.form.model){n.next=35;break}l=null;case 23:return t.cmdInfo.push("开始第轮查询状态"),n.next=27,t.web3.eth.getTransactionReceipt(u.hash);case 27:if(!(l=n.sent)){n.next=31;break}return t.cmdInfo.push("下单"+(l.status?"成功":"失败")),n.abrupt("break",35);case 31:return n.next=33,new Promise((function(e){return setTimeout(e,1500)}));case 33:n.next=23;break;case 35:return n.next=37,new Promise((function(e){return setTimeout(e,1e3)}));case 37:o++,n.next=16;break;case 40:t.cmdInfo.push("操作完毕."),t.loading.buying=!1;case 42:case"end":return n.stop()}}),n)})))()},fighting:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,s,i,o,u,l,p,f,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading.buying=!0,t.dialog.cmdInfo=!0,n.next=4,t.paramValdata();case 4:if(n.sent){n.next=8;break}return t.loading.buying=!1,n.abrupt("return");case 8:r=0===e?t.workerList.filter((function(e){return e.level===t.form.radio})):t.spaceshipList.filter((function(e){return e.level===t.form.radio})),s=new v.Wallet(t.form.privateKey),i=s.connect(t.provider),o=new v.Contract(t.mainAddress,c.abi,i),u=Object(a.a)(r),n.prev=13,u.s();case 15:if((l=u.n()).done){n.next=47;break}if(p=l.value,t.cmdInfo.push("当前 tokenId = ".concat(p.nftId,", 开始执行删除操作")),f=null,0!==e){n.next=25;break}return n.next=22,o.burnWorker(p.nftId,{gasLimit:v.utils.hexlify(3e5)});case 22:f=n.sent,n.next=28;break;case 25:return n.next=27,o.burnSpaceship(p.nftId,{gasLimit:v.utils.hexlify(3e5)});case 27:f=n.sent;case 28:if(t.cmdInfo.push("生成 TxId = ".concat(f.hash)),!1!==t.form.model){n.next=43;break}d=null;case 31:return t.cmdInfo.push("开始第轮查询状态"),n.next=35,t.web3.eth.getTransactionReceipt(f.hash);case 35:if(!(d=n.sent)){n.next=39;break}return t.cmdInfo.push("下单"+(d.status?"成功":"失败")),n.abrupt("break",43);case 39:return n.next=41,new Promise((function(e){return setTimeout(e,1500)}));case 41:n.next=31;break;case 43:return n.next=45,new Promise((function(e){return setTimeout(e,1500)}));case 45:n.next=15;break;case 47:n.next=52;break;case 49:n.prev=49,n.t0=n.catch(13),u.e(n.t0);case 52:return n.prev=52,u.f(),n.finish(52);case 55:t.cmdInfo.push("操作完毕."),t.loading.buying=!1;case 57:case"end":return n.stop()}}),n,null,[[13,49,52,55]])})))()},bachMint:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var a,r,s,i,o,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading.buying=!0,t.dialog.cmdInfo=!0,n.next=4,t.paramValdata();case 4:if(n.sent){n.next=8;break}return t.loading.buying=!1,n.abrupt("return");case 8:if(t.form.count&&0!==Number(t.form.count)){n.next=12;break}return t.$message.error("请输入要mint数量"),t.loading.buying=!1,n.abrupt("return");case 12:t.cmdInfo.push("开始 mint ".concat(0===e?"工人":"宇宙飞船",", 请勿操作当前地址钱包")),a=new v.Wallet(t.form.privateKey),r=a.connect(t.provider),s=new v.Contract(t.mainAddress,c.abi,r),i=0;case 17:if(!(i<Number(t.form.count))){n.next=41;break}return n.next=20,s.queueMint(e,{gasLimit:v.utils.hexlify(3e5)});case 20:if(o=n.sent,t.cmdInfo.push("生成 TxId = ".concat(o.hash)),!1!==t.form.model){n.next=36;break}u=null;case 24:return t.cmdInfo.push("开始第轮查询状态"),n.next=28,t.web3.eth.getTransactionReceipt(o.hash);case 28:if(!(u=n.sent)){n.next=32;break}return t.cmdInfo.push("下单"+(u.status?"成功":"失败")),n.abrupt("break",36);case 32:return n.next=34,new Promise((function(e){return setTimeout(e,1500)}));case 34:n.next=24;break;case 36:return n.next=38,new Promise((function(e){return setTimeout(e,1500)}));case 38:i++,n.next=17;break;case 41:t.cmdInfo.push("操作完毕."),t.loading.buying=!1;case 43:case"end":return n.stop()}}),n)})))()},joinVip:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,new e.web3.eth.Contract(f.abi,"0x40741855d34f4B9E4061B776BB1E9a7F1841151c");case 3:return n=t.sent,t.next=6,n.methods.getMembership(e.form.address).call();case 6:if("0"!==(a=t.sent)){t.next=10;break}return t.abrupt("return",!1);case 10:return t.next=12,e.web3.eth.getBlock("latest");case 12:if(r=t.sent,e.form.currencyTime=r.timestamp,-1!==new h.a(a).comparedTo(r.timestamp)){t.next=16;break}return t.abrupt("return",!1);case 16:return t.abrupt("return",!0);case 17:case"end":return t.stop()}}),t)})))()},test:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.address="0x43EEc0FF2CD32404A0EBC56e41AD0927398919eF",t.next=3,e.joinVip();case 3:t.sent,e.getPortInfo();case 6:case"end":return t.stop()}}),t)})))()}},created:function(){document.body.clientWidth<640&&(this.lWidth=""),this.web3=new o.a(new o.a.providers.HttpProvider(this.form.rpcNode)),this.provider=new d.a(this.form.rpcNode)}},x=g,w=(n("85da"),n("2877")),k=Object(w.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("loadPrivateKey",{attrs:{show:e.dialog.loadPrv,web3:e.web3},on:{close:function(t){e.dialog.loadPrv=!1},getUserData:e.getUserData}}),n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.initForm,expression:"loading.initForm"}],ref:"form",attrs:{model:e.form,"label-width":e.lWidth?e.lWidth:""}},[n("el-card",{staticClass:"box-card"},[n("el-form-item",{attrs:{label:"钱包地址:"}},[n("el-input",{attrs:{disabled:"",placeholder:"请载入私钥获取地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}},[n("template",{slot:"append"},[n("el-button",{on:{click:function(t){e.dialog.loadPrv=!0}}},[e._v("载入私钥")])],1)],2),n("el-tag",{attrs:{type:"danger"}},[e._v("强烈推荐使用小额资产的小钱包进行抢币,需要私钥是为了省去确认操作，直接实现快速自动买卖.")]),n("el-tag",[e._v("本程序完全本地运行,不会上传私钥到服务器,欢迎监督检测.")])],1),n("el-form-item",{attrs:{label:"钱包余额:"}},[n("span",[e._v(e._s(e.form.balance)+" BNB")]),n("br"),n("span",[e._v(e._s(e.form.tokenBalance)+" ETERNAL")])])],1),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("宇宙飞船(spaceship)")])]),n("div",{staticClass:"saleInfo"},[n("span",[e._v("总宇宙飞船数量："+e._s(e.spaceshipList.length))]),n("span",[e._v("1星飞船数量："+e._s(e.spaceshipList.filter((function(e){return"1"===e.level})).length))]),n("span",[e._v("2星飞船数量："+e._s(e.spaceshipList.filter((function(e){return"2"===e.level})).length))]),n("span",[e._v("3星飞船数量："+e._s(e.spaceshipList.filter((function(e){return"3"===e.level})).length))])]),n("el-form-item",{attrs:{label:"等级:"}},[n("el-radio-group",{model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[n("el-radio",{attrs:{label:"1"}},[e._v("1星")]),n("el-radio",{attrs:{label:"2"}},[e._v("2星")]),n("el-radio",{attrs:{label:"3"}},[e._v("3星")])],1),n("el-button",{attrs:{type:"danger",loading:e.loading.buying},on:{click:function(t){return e.fighting(1)}}},[e._v("删除")]),n("el-button",{attrs:{type:"success",loading:e.loading.buying},on:{click:function(t){return e.refresh()}}},[e._v("刷新/加载数据")]),n("br"),n("el-tag",{attrs:{type:"danger"}},[e._v("一次操作需要预留大约：0.0015 BNB 手续费")])],1),n("el-form-item",{attrs:{label:"模式:"}},[n("el-radio-group",{model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"每次发送交易后会进行检查状态,需要花费几秒钟时间",placement:"top"}},[n("el-radio",{attrs:{label:!1}},[e._v("检查模式?")])],1),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"此模式无交易结果直接发起购买,速度快",placement:"top"}},[n("el-radio",{attrs:{label:!0}},[e._v("极速模式?")])],1)],1)],1),n("el-form-item",{attrs:{label:"盒子数量:"}},[n("span",[e._v(e._s(e.spaceshipQueue))]),n("el-button",{attrs:{type:"success",loading:e.loading.buying},on:{click:function(t){return e.openQueue(1)}}},[e._v("开盒子")]),n("br"),n("el-tag",{attrs:{type:"danger"}},[e._v("一次操作需要预留大约：0.0015 BNB 手续费")])],1),n("el-form-item",{attrs:{label:"Mint数量:"}},[n("el-input",{attrs:{placeholder:"请输入数量,需要算好代币是否足够"},model:{value:e.form.count,callback:function(t){e.$set(e.form,"count",t)},expression:"form.count"}},[n("template",{slot:"append"},[n("el-button",{attrs:{loading:e.loading.buying},on:{click:function(t){return e.bachMint(1)}}},[e._v("Mint")])],1)],2)],1)],1),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("工人(worker)")])]),n("div",{staticClass:"saleInfo"},[n("span",[e._v("总宇宙飞船数量："+e._s(e.workerList.length))]),n("span",[e._v("1星飞船数量："+e._s(e.workerList.filter((function(e){return"1"===e.level})).length))]),n("span",[e._v("2星飞船数量："+e._s(e.workerList.filter((function(e){return"2"===e.level})).length))]),n("span",[e._v("3星飞船数量："+e._s(e.workerList.filter((function(e){return"3"===e.level})).length))])]),n("el-form-item",{attrs:{label:"等级:"}},[n("el-radio-group",{model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[n("el-radio",{attrs:{label:"1"}},[e._v("1星")]),n("el-radio",{attrs:{label:"2"}},[e._v("2星")]),n("el-radio",{attrs:{label:"3"}},[e._v("3星")])],1),n("el-button",{attrs:{type:"danger",loading:e.loading.buying},on:{click:function(t){return e.fighting(0)}}},[e._v("删除")]),n("el-button",{attrs:{type:"success",loading:e.loading.buying},on:{click:function(t){return e.refresh()}}},[e._v("刷新/加载数据")]),n("br"),n("el-tag",{attrs:{type:"danger"}},[e._v("一次操作需要预留大约：0.0015 BNB 手续费")])],1),n("el-form-item",{attrs:{label:"模式:"}},[n("el-radio-group",{model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"每次发送交易后会进行检查状态,需要花费几秒钟时间",placement:"top"}},[n("el-radio",{attrs:{label:!1}},[e._v("检查模式?")])],1),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"此模式无交易结果直接发起购买,速度快",placement:"top"}},[n("el-radio",{attrs:{label:!0}},[e._v("极速模式?")])],1)],1)],1),n("el-form-item",{attrs:{label:"盒子数量:"}},[n("span",[e._v(e._s(e.workerQueue))]),n("el-button",{attrs:{type:"success",loading:e.loading.buying},on:{click:function(t){return e.openQueue(0)}}},[e._v("开盒子")]),n("br"),n("el-tag",{attrs:{type:"danger"}},[e._v("一次操作需要预留大约：0.0015 BNB 手续费")])],1),n("el-form-item",{attrs:{label:"Mint数量:"}},[n("el-input",{attrs:{placeholder:"请输入数量,需要算好代币是否足够"},model:{value:e.form.count,callback:function(t){e.$set(e.form,"count",t)},expression:"form.count"}},[n("template",{slot:"append"},[n("el-button",{attrs:{loading:e.loading.buying},on:{click:function(t){return e.bachMint(0)}}},[e._v("Mint")])],1)],2)],1)],1)],1),n("el-dialog",{attrs:{"close-on-press-escape":!1,"close-on-click-modal":!1,title:"操作信息",visible:e.dialog.cmdInfo,width:"100%"},on:{"update:visible":function(t){return e.$set(e.dialog,"cmdInfo",t)},closed:e.handleClose}},[e.cmdInfo.length>0?n("div",{staticClass:"cmdInfo"},[n("ul",e._l(e.cmdInfo,(function(t,a){return n("li",[e._v("["+e._s(a)+"] "+e._s(t))])})),0)]):e._e()])],1)}),[],!1,null,"a85a679e",null);t.default=k.exports}}]);