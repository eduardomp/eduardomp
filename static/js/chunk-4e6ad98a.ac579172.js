(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4e6ad98a"],{"7adc":function(e,t,n){},"828d":function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return f})),n("99af");var a=n("b775"),c=function(e,t){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(e,"/address/").concat(t,"/balances_v2/?no-nft-fetch=true&key=ckey_4c2c43910c9c4730830a3551927")})},o=function(e,t,n,c){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(e,"&interval=").concat(t,"&startTime=").concat(n,"&endTime=").concat(c))})},r=function(e){return Object(a.a)({method:"GET",url:"https://api.coingecko.com/api/v3/simple/price?ids=".concat(e,"&vs_currencies=cny,usd")})},s=function(e,t,n,c){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(e,"/tokens/").concat(t,"/token_holders/?block-height=").concat(c,"&page-number=0&page-size=").concat(n,"&key=ckey_4c2c43910c9c4730830a3551927")})},i=function(e){return Object(a.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:e}})},l=function(){return Object(a.a)({method:"GET",url:"/api/v1/get_VipUser"})},d=function(e,t,n){return Object(a.a)({method:"GET",url:"/api/v1/contact_scan",params:{mac:e,expiry:t,tokenAddress:n}})},u=function(e){return Object(a.a)({headers:{"Content-Type":"multipart/form-data"},method:"POST",url:"https://ipfs.infura.io:5001/api/v0/cat?arg="+e})},p=function(e){return Object(a.a)({method:"GET",url:"/api/v1/get_launchpad",params:{chainId:e}})},f=function(e,t){return Object(a.a)({method:"GET",url:"https://api.tokentool.club/audit/contract",params:{chainId:e,contract_addresses:t}})}},b0ad1:function(e,t,n){"use strict";n("7adc")},b775:function(e,t,n){"use strict";var a=n("bc3a"),c=n.n(a);c.a.defaults.timeout=3e4,c.a.defaults.baseURL="https://service.cointools.workers.dev/",t.a=c.a},c84a:function(e,t,n){"use strict";n.r(t);var a=n("2909"),c=n("c7eb"),o=n("1da1"),r=(n("b0c0"),n("4de4"),n("d3b7"),n("99af"),n("25f0"),n("ace4"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("b893")),s=n("828d"),i=n("99e5"),l=n.n(i),d={name:"scanContract",data:function(){return{templateText:"",loading:{scan:!1},form:{tokenAddress:"",resultMsg:""},tokenScan:{symbol:"",name:"",score:"",isHoneypot:!1,buyFee:0,sellFee:0,buyGas:"",sellGas:"",error:!1,isProxy:!1,verified:!0,ownership:"",behavior:{fee:!1,maxTX:!1,maxSell:!1,honeypot:!1,blackList:!1,mint:!1},burnedSupply:0,liquidity:!1,liquiditySupply:0,top5Hold:0,whaleHolders:[]}}},methods:{valid:function(){return this.form.tokenAddress?!!l.a.utils.isAddress(this.form.tokenAddress)||(this.$message.error("无效的合约地址"),!1):(this.$message.error("请输入合约地址"),!1)},scan:function(){var e=this;return Object(o.a)(Object(c.a)().mark((function t(){var n,a,o,s,i,l,d,u;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.templateText="",e.valid()){t.next=4;break}return t.abrupt("return");case 4:return e.loading.scan=!0,t.next=7,e.scanContract(e.form.tokenAddress);case 7:if(n=t.sent,e.loading.scan=!1,!n||!1!==n.isToken){t.next=13;break}return e.$message.error("查询出错/或无效的合约地址"),t.abrupt("return");case 13:for(e.tokenScan.symbol=n.tokenSymbol,e.tokenScan.name=n.tokenName,e.tokenScan.score=n.totalScore,e.tokenScan.isHoneypot=n.trade.isHoneypot,e.tokenScan.buyFee=n.trade.buyFee,e.tokenScan.sellFee=n.trade.sellFee,e.tokenScan.buyGas=n.trade.buyGas,e.tokenScan.sellGas=n.trade.sellGas,e.tokenScan.error=n.trade.error,e.tokenScan.isProxy=n.code.isProxy,e.tokenScan.verified=n.code.verified,e.tokenScan.ownership=n.ownership,(a=Object(r.e)(e.tokenScan.behavior)).fee=n.code.detectedScams.filter((function(e){return"fee"===e.type})).length>0,a.maxTX=n.code.detectedScams.filter((function(e){return"maxTX"===e.type})).length>0,a.maxSell=n.code.detectedScams.filter((function(e){return"maxSell"===e.type})).length>0,a.honeypot=n.code.detectedScams.filter((function(e){return"honeypot"===e.type})).length>0,a.blacklist=n.code.detectedScams.filter((function(e){return"blacklist"===e.type})).length>0,a.mint=n.code.detectedScams.filter((function(e){return"mint"===e.type})).length>0,e.tokenScan.behavior=a,e.tokenScan.burnedSupply=n.holders.burnedSupply,e.tokenScan.liquidity=n.holders.liquidity,e.tokenScan.top5Hold=n.holders.top5Hold,e.tokenScan.whaleHolders=n.holders.whaleHolders,e.tokenScan.liquiditySupply=n.holders.liquiditySupply,o="",s=0;s<e.tokenScan.whaleHolders.length;s++)i=e.tokenScan.whaleHolders[s].address,l=e.tokenScan.whaleHolders[s].supplyHold,d="".concat(i,"\t\t").concat(l,"%\n"),o+=d;u=!1,!0===e.tokenScan.ownership?u=!0:Object(r.p)(e.tokenScan.ownership)!==Object(r.p)("0x000000000000000000000000000000000000bEEF")&&Object(r.p)(e.tokenScan.ownership)!==Object(r.p)("0x0000000000000000000000000000000000000000")||(u=!0),e.templateText="----------基本信息----------\n"+"名称: ".concat(e.tokenScan.name,"\n")+"代币: ".concat(e.tokenScan.symbol,"\n")+"合约地址: ".concat(e.form.tokenAddress,"\n")+"合约是否开源: ".concat(e.tokenScan.verified?"开源":"为开源","\n")+"----------风险检查----------\n"+"能否卖出:".concat(e.tokenScan.isHoneypot?"不可以\n":"可以\n")+"买入: ".concat(e.tokenScan.buyFee?e.tokenScan.buyFee:0,"%\t\t卖出: ").concat(e.tokenScan.sellFee?e.tokenScan.sellFee:0,"%\n")+"----------合约扫描结果----------\n"+"".concat(e.tokenScan.isHoneypot?"法克，貔貅，草～\n":"不像貔貅\n")+"".concat(a.fee?"可修改手续费\n":"")+"".concat(a.maxTX?"存在限购/限卖限制\n":"")+"".concat(a.maxSell?"存在限卖限制\n":"")+"".concat(a.blacklist?"存在黑名单机制\n":"")+"".concat(a.mint?"可增发代币\n":"")+"所有权：".concat(e.tokenScan.ownership,"（").concat(u?"已放弃":"未放弃","）\n")+"----------持仓数据检查----------\n"+"Burn 燃烧比率: ".concat(e.tokenScan.burnedSupply?e.tokenScan.burnedSupply:0,"%\n")+"Pancake 流动性总比例: ".concat(e.tokenScan.liquiditySupply?e.tokenScan.liquiditySupply:0,"%\n")+"前5用户比例: ".concat(e.tokenScan.top5Hold,"%\n")+o;case 43:case"end":return t.stop()}}),t)})))()},scanContract:function(e){var t=this;return Object(o.a)(Object(c.a)().mark((function n(){var o,r,i,l,d,u,p,f;return Object(c.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=new TextEncoder,r=o.encode("fb559d769c45f1f9ca283d7fa923d3c9"),n.next=4,crypto.subtle.importKey("raw",r,{name:"HMAC",hash:"SHA-256"},!1,["sign"]);case 4:return i=n.sent,l=(new Date).getTime()+5e4,d=l.toString()+e,n.next=10,crypto.subtle.sign("HMAC",i,o.encode(d));case 10:return u=n.sent,p=btoa(String.fromCharCode.apply(String,Object(a.a)(new Uint8Array(u)))),n.next=15,Object(s.j)(p,l,e);case 15:if(200!==(f=n.sent).status){n.next=20;break}return n.abrupt("return",f.data.result);case 20:t.$message.error(f.data);case 21:return n.abrupt("return",null);case 22:case"end":return n.stop()}}),n)})))()}}},u=d,p=(n("b0ad1"),n("2877")),f=Object(p.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-form",{attrs:{"label-position":"top",model:e.form}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"title"},[e._v("土狗合约代码分析(测试版)")]),n("el-form-item",{attrs:{label:"（BSC-Pancake）合约地址:"}},[n("div",{staticClass:"tokenAddress"},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.scan,expression:"loading.scan"}],attrs:{placeholder:"请输入代币合约地址"},model:{value:e.form.tokenAddress,callback:function(t){e.$set(e.form,"tokenAddress",t)},expression:"form.tokenAddress"}}),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.scan,expression:"loading.scan"}],staticStyle:{"margin-left":"30px","margin-right":"30px"},attrs:{type:"success",round:""},on:{click:function(t){return e.scan()}}},[e._v(" 合 约 扫 描 ")])],1)]),n("el-form-item",{attrs:{label:"扫描结果:"}},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.scan,expression:"loading.scan"}],staticClass:"resultMsg",staticStyle:{resize:"none"},attrs:{type:"textarea",rows:20},model:{value:e.templateText,callback:function(t){e.templateText=t},expression:"templateText"}})],1)],1)],1)],1)}),[],!1,null,"322ca468",null);t.default=f.exports}}]);