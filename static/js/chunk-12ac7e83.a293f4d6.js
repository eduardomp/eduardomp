(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-12ac7e83"],{"0051":function(t,e,n){"use strict";n.r(e);var r=n("c7eb"),a=n("1da1"),i=n("5530"),o=(n("ac1f"),n("841c"),n("5319"),n("b680"),n("a4d3"),n("e01a"),n("99e5")),s=n.n(o),c=n("79fa"),u=n("51d2"),d=n("e95b"),l=n("502c"),f=n("81b3"),p=n("2f62"),m=n("901e"),b=n.n(m),w=n("ed08"),v=n("ac09"),g=n("b893"),h={name:"create",computed:Object(i.a)(Object(i.a)({},Object(p.d)({chainNetwork:function(t){return t.dapp.chainNetwork},networkId:function(t){return t.dapp.web3.networkId},myAddress:function(t){return t.dapp.web3.account},initial:function(t){return t.dapp.web3.initial},menu:function(t){return t.settings.menu},web3Instance:function(t){return t.dapp.web3.web3Instance}})),{},{startDateFormat:function(){return this.verifyTokenFrom.startTime?Object(w.j)(this.verifyTokenFrom.startTime):null},endDateFormat:function(){if(this.verifyTokenFrom.startTime&&this.verifyTokenFrom.duration){var t=parseInt(this.verifyTokenFrom.duration),e=new Date(this.verifyTokenFrom.startTime.valueOf()),n=Object(w.a)("d",t,e);return Object(w.j)(n)}return null}}),watch:{initial:function(){this.initialData()}},data:function(){var t=this,e=function(){var e=Object(a.a)(Object(r.a)().mark((function e(n,a,i){var o,c,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.a.utils.isAddress(a)){e.next=3;break}return i(new Error(t.$t("createToken.addressError"))),e.abrupt("return");case 3:if(t.web3Instance){e.next=6;break}return i(new Error(t.$t("networkError.walletConn"))),e.abrupt("return");case 6:return t.loading.search=!0,e.next=9,t.web3Instance.eth.getCode(a).catch((function(){return"0x"}));case 9:if(o=e.sent,t.loading.search=!1,"0x"!==o){e.next=14;break}return i(new Error(t.$t("createToken.addressError"))),e.abrupt("return");case 14:return t.loading.search=!0,e.next=17,new t.web3Instance.eth.Contract(u.abi,a).methods.symbol().call().catch((function(){return!1}));case 17:if(c=e.sent,t.loading.search=!1,!1!==c){e.next=22;break}return i(new Error(t.$t("createToken.addressError"))),e.abrupt("return");case 22:if(!t.verifyTokenFrom.type){e.next=31;break}return t.loading.search=!0,e.next=26,new t.web3Instance.eth.Contract(d.abi,a).methods.factory().call().catch((function(){return!1}));case 26:if(l=e.sent,t.loading.search=!1,!1!==l){e.next=31;break}return i(new Error(t.$t("createToken.addressError"))),e.abrupt("return");case 31:i();case 32:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),n=function(){var e=Object(a.a)(Object(r.a)().mark((function e(n,a,i){var o,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.a.utils.isAddress(a)){e.next=3;break}return i(new Error(t.$t("createToken.addressError"))),e.abrupt("return");case 3:if(t.web3Instance.eth){e.next=6;break}return i(new Error(t.$t("networkError.walletConn"))),e.abrupt("return");case 6:return t.loading.search=!0,e.next=9,t.web3Instance.eth.getCode(a).catch((function(){return"0x"}));case 9:if(o=e.sent,t.loading.search=!1,"0x"!==o){e.next=14;break}return i(new Error(t.$t("createToken.addressError"))),e.abrupt("return");case 14:return t.loading.search=!0,e.next=17,new t.web3Instance.eth.Contract(u.abi,a).methods.symbol().call().catch((function(){return!1}));case 17:if(c=e.sent,t.loading.search=!1,!1!==c){e.next=22;break}return i(new Error(t.$t("createToken.addressError"))),e.abrupt("return");case 22:i();case 23:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return{hiddenAddress:w.g,web3:null,active:0,createFee:0,miningAddress:"",loading:{confirm:!1,search:!1,setup1:!1,setup2:!1,setup3:!1,approve:!1},tokenInfo:{miningToken:"",show:!1},awardInfo:{symbol:"",decimals:"",balance:"",approve:!1,show:!1},introductionFrom:{awardContract:"",dailyReward:"",rewardTotal:"",logoUrl:"",webSite:"",faceBook:"",twitter:"",github:"",telegram:"",instagram:"",discord:"",reddit:"",description:""},verifyTokenFrom:{type:!1,inputAddress:"",startTime:"",duration:"",frozenTime:0,invite:!1,percent:""},introductionRules:{awardContract:[{required:!0,validator:n,trigger:"change"}],dailyReward:[{required:!0,message:c.a.t("mining.dailyRewardNull"),trigger:"change"}],rewardTotal:[{required:!0,validator:function(e,n,r){n?1!==new b.a(n).comparedTo(t.awardInfo.balance)?r():r(new Error(c.a.t("mining.insufficient"))):r(new Error(c.a.t("mining.rewardTotalNull")))},trigger:"change"}],logoUrl:[{required:!0,message:c.a.t("mining.logoUrlError"),trigger:"change"},{required:!0,message:c.a.t("mining.logoUrlError"),trigger:"blur"}],webSite:[{required:!0,message:c.a.t("mining.webSiteError"),trigger:"change"},{required:!0,message:c.a.t("mining.webSiteError"),trigger:"blur"}]},verifyTokenRules:{inputAddress:[{required:!0,validator:e,trigger:"change"}],startTime:[{required:!0,validator:function(t,e,n){e?e.getTime()<=(new Date).getTime()?n(new Error(c.a.t("mining.startTimeError"))):n():n(new Error(c.a.t("mining.startError")))},trigger:"change"}],duration:[{required:!0,message:c.a.t("mining.durationNull"),trigger:"change"}],percent:[{required:!0,validator:function(e,n,r){if(t.verifyTokenFrom.invite){if(!n)return r(new Error(c.a.t("mining.inviteError")));parseFloat(n)?parseFloat(n)<0&&r(new Error(c.a.t("mining.negativeNumberError"))):r(new Error(c.a.t("mining.numberError"))),parseFloat(n)>250?r(new Error(c.a.t("mining.overflowNumberError"))):r()}else r()},trigger:"change"}]}}},methods:{jimpRet:function(){history.go(-1)},openWebSite:function(){window.open(this.introductionFrom.webSite,"_blank")},max:function(){this.introductionFrom.rewardTotal=this.awardInfo.balance,this.inputRewardTotal(this.introductionFrom.rewardTotal)},inputDailyReward:function(t){this.introductionFrom.dailyReward=t.replace(/[^\d\\.]/g,""),this.introductionFrom.dailyReward&&(this.introductionFrom.rewardTotal=new b.a(this.introductionFrom.dailyReward).multipliedBy(this.verifyTokenFrom.duration).toFixed(6))},inputRewardTotal:function(t){this.introductionFrom.rewardTotal=t.replace(/[^\d\\.]/g,""),this.introductionFrom.rewardTotal&&(this.introductionFrom.dailyReward=new b.a(this.introductionFrom.rewardTotal).dividedBy(this.verifyTokenFrom.duration).toFixed(6))},getAwardInfo:function(t){var e=this;this.$refs[t].validateField("awardContract",(function(t){""===t?e.getAwardCoin():e.loading.search=!1}))},getContractInfo:function(t){var e=this;this.$refs[t].validateField("inputAddress",(function(t){""===t&&e.getCoin()}))},getAwardCoin:function(){var t=this;return Object(a.a)(Object(r.a)().mark((function e(){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.awardInfo.show=!1,t.loading.search=!0,e.next=5,Object(l.g)(t.introductionFrom.awardContract);case 5:return t.awardInfo.symbol=e.sent,e.next=9,Object(l.d)(t.introductionFrom.awardContract);case 9:return t.awardInfo.decimals=e.sent,e.next=12,Object(l.h)(t.introductionFrom.awardContract,parseInt(t.awardInfo.decimals),t.myAddress);case 12:return t.awardInfo.balance=e.sent,e.next=15,Object(l.c)(t.introductionFrom.awardContract,t.myAddress,t.miningAddress);case 15:n=e.sent,t.awardInfo.approve="0"!==n,t.awardInfo.show=!0,t.loading.search=!1;case 19:case"end":return e.stop()}}),e)})))()},getCoin:function(){var t=this;return Object(a.a)(Object(r.a)().mark((function e(){var n,a,i,o;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.tokenInfo.show=!1,t.tokenInfo.miningToken="",t.loading.search=!0,!t.verifyTokenFrom.type){e.next=20;break}return e.next=7,Object(f.c)(t.verifyTokenFrom.inputAddress);case 7:return n=e.sent,e.next=10,Object(f.d)(t.verifyTokenFrom.inputAddress);case 10:return a=e.sent,e.next=13,Object(l.g)(n);case 13:return i=e.sent,e.next=16,Object(l.g)(a);case 16:o=e.sent,t.tokenInfo.miningToken=i+"-"+o,e.next=23;break;case 20:return e.next=22,Object(l.g)(t.verifyTokenFrom.inputAddress);case 22:t.tokenInfo.miningToken=e.sent;case 23:t.tokenInfo.show=!0,t.loading.search=!1;case 25:case"end":return e.stop()}}),e)})))()},previousSteps:function(){this.active--},nextSteps:function(){this.active++},onSubmit:function(t){var e=this;return Object(a.a)(Object(r.a)().mark((function n(){return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loading.setup1=!0,n.next=4,e.$refs[t].validate().catch((function(t){return!1}));case 4:if(!n.sent){n.next=15;break}if(!e.verifyTokenFrom.type){n.next=14;break}return n.next=10,new e.web3Instance.eth.Contract(d.abi,e.verifyTokenFrom.inputAddress).methods.factory().call().catch((function(){return!1}));case 10:if(!1!==n.sent){n.next=14;break}return e.$message.error(e.$t("createToken.addressError")),n.abrupt("return");case 14:e.nextSteps();case 15:return n.prev=15,e.loading.search=!1,e.loading.setup1=!1,n.finish(15);case 19:case"end":return n.stop()}}),n,null,[[0,,15,19]])})))()},onSubmit2:function(t){var e=this;return Object(a.a)(Object(r.a)().mark((function n(){return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.loading.setup2=!0,n.next=4,e.$refs[t].validate().catch((function(t){return!1}));case 4:n.sent&&e.nextSteps();case 7:return n.prev=7,e.loading.setup2=!1,n.finish(7);case 10:case"end":return n.stop()}}),n,null,[[0,,7,10]])})))()},startIntroduction:function(){var t=this;return Object(a.a)(Object(r.a)().mark((function e(){var n,a,i,o,s,c,u,d,l,f,p,m;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading.setup3=!0,n=t.verifyTokenFrom.invite?t.verifyTokenFrom.percent:"0",a=t.introductionFrom.awardContract,i=t.verifyTokenFrom.inputAddress,o=t.verifyTokenFrom.type,s=t.verifyTokenFrom.startTime.getTime()/1e3,c=86400*t.verifyTokenFrom.duration,u=t.introductionFrom.rewardTotal,d=parseInt(t.awardInfo.decimals),l=Object(w.c)(u,d),f=86400*t.verifyTokenFrom.frozenTime,p=[t.introductionFrom.logoUrl,t.introductionFrom.webSite,t.introductionFrom.faceBook,t.introductionFrom.twitter,t.introductionFrom.github,t.introductionFrom.telegram,t.introductionFrom.instagram,t.introductionFrom.discord,t.introductionFrom.reddit,t.introductionFrom.description],m=Object(w.c)(t.createFee),e.next=15,Object(v.a)(t.miningAddress,n,a,i,o,s,c,l,f,p,m);case 15:e.sent&&(t.$message.success(t.$t("success")),t.$confirm(t.$t("mining.createSuccessTips"),t.$t("tokenLocks.Tips"),{confirmButtonText:t.$t("confirm"),cancelButtonText:t.$t("cancel"),type:"success"}).then((function(){t.$router.push("/mining/list")})).catch((function(){}))),t.loading.setup3=!1;case 18:case"end":return e.stop()}}),e)})))()},onApprove:function(){var t=this;return Object(a.a)(Object(r.a)().mark((function e(){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.initial){e.next=3;break}return t.$message.error(t.$t("networkError.walletConn")),e.abrupt("return");case 3:return"approve",t.loading.approve=!0,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",e.next=8,Object(l.a)(t.introductionFrom.awardContract,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",t.miningAddress,"approve");case 8:n=e.sent,t.loading.approve=!1,n&&(t.awardInfo.approve=!0);case 11:case"end":return e.stop()}}),e)})))()},initialData:function(){if(this.initial){var t=Object(g.i)(this.networkId);t.miningAddress?(this.miningAddress=t.miningAddress,this.web3=new s.a(new s.a.providers.HttpProvider(t.rpcUrls[0])),this.getFee()):this.$message.error(this.$t("networkError.networkNotSupport"))}},getFee:function(){var t=this;return Object(a.a)(Object(r.a)().mark((function e(){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(t.web3,t.miningAddress);case 2:(n=e.sent)&&(t.createFee=new b.a(Object(w.d)(n)).toFormat(2));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.initialData()}},k=h,x=(n("4da9"),n("2877")),y=Object(x.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"return",on:{click:function(e){return t.jimpRet()}}},[n("i",{staticClass:"el-icon-back icon"}),n("span",[t._v(t._s(t.$t("mining.return")))])]),n("div",{staticClass:"main"},[n("div",{staticStyle:{"background-color":"#f5f5f5","border-top-right-radius":"16px","border-top-left-radius":"16px"}},[n("div",{staticClass:"setup"},[n("h3",[t._v(t._s(t.verifyTokenFrom.type?t.$t("mining.lpMining"):t.$t("mining.tokenMining")+t.$t("mining.mining")))]),n("h5",[t._v(t._s(t.verifyTokenFrom.type?t.$t("mining.lpMiningTips"):t.$t("mining.tokenMiningTips"))+" ")]),n("el-steps",{staticStyle:{"text-align":"unset"},attrs:{active:t.active,"finish-status":"success"}},[n("el-step",{attrs:{title:t.$t("mining.setup1")}}),n("el-step",{attrs:{title:t.$t("mining.setup2")}}),n("el-step",{attrs:{title:t.$t("mining.setup3")}})],1)],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.active,expression:"active == 0"}],staticClass:"setupOne"},[n("el-form",{ref:"verifyTokenFrom",staticClass:"form",attrs:{model:t.verifyTokenFrom,rules:t.verifyTokenRules}},[n("div",{staticClass:"type"},[n("el-radio-group",{attrs:{size:"medium"},model:{value:t.verifyTokenFrom.type,callback:function(e){t.$set(t.verifyTokenFrom,"type",e)},expression:"verifyTokenFrom.type"}},[n("el-radio",{attrs:{label:!1,border:""}},[t._v(t._s(t.$t("mining.tokenMining")))]),n("el-radio",{attrs:{label:!0,border:""}},[t._v(t._s(t.$t("mining.lpMining")))])],1)],1),n("el-form-item",{attrs:{label:t.$t("createToken.tokenAddress")+":",prop:"inputAddress"}},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.search,expression:"loading.search"}],attrs:{"prefix-icon":"el-icon-search",autocomplete:"off",placeholder:t.$t("tokenLocks.inputTokenTips")},on:{input:function(e){return t.getContractInfo("verifyTokenFrom")}},model:{value:t.verifyTokenFrom.inputAddress,callback:function(e){t.$set(t.verifyTokenFrom,"inputAddress",e)},expression:"verifyTokenFrom.inputAddress"}})],1),t.tokenInfo.show?n("ul",[n("li",[n("span",[t._v(t._s(t.$t("tokenLocks.name")))]),n("span",[t._v(t._s(t.tokenInfo.miningToken))])])]):t._e(),n("el-form-item",{attrs:{label:t.$t("mining.startTime"),prop:"startTime"}},[n("el-col",{attrs:{span:24}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:t.$t("mining.selectTime")},model:{value:t.verifyTokenFrom.startTime,callback:function(e){t.$set(t.verifyTokenFrom,"startTime",e)},expression:"verifyTokenFrom.startTime"}})],1)],1),n("el-form-item",{attrs:{label:t.$t("mining.duration"),prop:"duration"}},[n("el-input",{attrs:{placeholder:"Ex: 30"},on:{input:function(e){return t.verifyTokenFrom.duration=e.replace(/[^\d]/g,"")}},model:{value:t.verifyTokenFrom.duration,callback:function(e){t.$set(t.verifyTokenFrom,"duration",e)},expression:"verifyTokenFrom.duration"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.$t("other.day")))])])],1),n("el-form-item",{attrs:{label:t.$t("mining.frozenTime"),prop:"frozenTime"}},[n("el-input",{attrs:{placeholder:"Ex: 0"},model:{value:t.verifyTokenFrom.frozenTime,callback:function(e){t.$set(t.verifyTokenFrom,"frozenTime",e)},expression:"verifyTokenFrom.frozenTime"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.$t("other.day")))])])],1),n("el-form-item",{attrs:{label:t.$t("mining.invite")}},[n("el-switch",{model:{value:t.verifyTokenFrom.invite,callback:function(e){t.$set(t.verifyTokenFrom,"invite",e)},expression:"verifyTokenFrom.invite"}})],1),n("el-form-item",{attrs:{label:t.$t("mining.invitePercent"),prop:"percent"}},[n("el-input",{attrs:{placeholder:"Ex: 10",disabled:!t.verifyTokenFrom.invite,autocomplete:"off"},model:{value:t.verifyTokenFrom.percent,callback:function(e){t.$set(t.verifyTokenFrom,"percent",t._n(e))},expression:"verifyTokenFrom.percent"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.$t("mining.thousandth")))])])],1),n("el-form-item",{staticStyle:{"text-align":"center"}},[n("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",loading:t.loading.setup1},on:{click:function(e){return t.onSubmit("verifyTokenFrom")}}},[t._v(t._s(t.$t("mining.nextSteps")))])],1)],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.active,expression:"active == 1"}],staticClass:"setupTwo"},[n("div",{staticClass:"tips"},[n("div",[t._v(t._s(t.$t("mining.durationTips1",[t.verifyTokenFrom.duration])))]),n("div",[t._v(t._s(t.$t("mining.durationTips2")))])]),n("div",{staticClass:"form"},[n("el-form",{ref:"introductionFrom",attrs:{model:t.introductionFrom,rules:t.introductionRules}},[n("el-form-item",{attrs:{label:t.$t("mining.awardContract"),prop:"awardContract"}},[n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.search,expression:"loading.search"}],attrs:{"prefix-icon":"el-icon-search",autocomplete:"off",placeholder:t.$t("tokenLocks.inputTokenTips")},on:{input:function(e){return t.getAwardInfo("introductionFrom")}},model:{value:t.introductionFrom.awardContract,callback:function(e){t.$set(t.introductionFrom,"awardContract",e)},expression:"introductionFrom.awardContract"}})],1),n("div",{staticClass:"table-container"},[t.awardInfo.show?n("table",[n("tr",[n("td",[t._v(t._s(t.$t("tokenLocks.symbol")))]),n("td",[t._v(t._s(t.awardInfo.symbol))])]),n("tr",[n("td",[t._v(t._s(t.$t("tokenLocks.balance")))]),n("td",[t._v(t._s(t.awardInfo.balance))])])]):t._e()]),n("el-form-item",{attrs:{label:t.$t("mining.dailyReward")+(t.awardInfo.symbol?"("+t.awardInfo.symbol+")":""),prop:"dailyReward"}},[n("el-input",{attrs:{placeholder:"Ex: 10"},on:{input:t.inputDailyReward},model:{value:t.introductionFrom.dailyReward,callback:function(e){t.$set(t.introductionFrom,"dailyReward",e)},expression:"introductionFrom.dailyReward"}})],1),n("el-form-item",{attrs:{label:t.$t("mining.rewardTotal")+(t.awardInfo.symbol?"("+t.awardInfo.symbol+")":""),prop:"rewardTotal"}},[n("el-input",{attrs:{placeholder:"Ex: 100"},on:{input:t.inputRewardTotal},model:{value:t.introductionFrom.rewardTotal,callback:function(e){t.$set(t.introductionFrom,"rewardTotal",e)},expression:"introductionFrom.rewardTotal"}},[n("template",{slot:"append"},[n("span",{staticClass:"max",on:{click:function(e){return t.max()}}},[t._v(t._s(t.$t("tokenLocks.max")))])])],2)],1),n("el-form-item",{attrs:{rules:t.introductionRules.logoUrl,prop:"logoUrl",label:"Logo URL"}},[n("el-input",{attrs:{placeholder:"Ex: https://..."},model:{value:t.introductionFrom.logoUrl,callback:function(e){t.$set(t.introductionFrom,"logoUrl",e)},expression:"introductionFrom.logoUrl"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"image"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{rules:t.introductionRules.webSite,prop:"webSite",label:t.$t("mining.website")}},[n("el-input",{attrs:{placeholder:"Ex: https://..."},model:{value:t.introductionFrom.webSite,callback:function(e){t.$set(t.introductionFrom,"webSite",e)},expression:"introductionFrom.webSite"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"website"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{label:"Facebook"}},[n("el-input",{attrs:{placeholder:"Ex: https://facebook.com/..."},model:{value:t.introductionFrom.faceBook,callback:function(e){t.$set(t.introductionFrom,"faceBook",e)},expression:"introductionFrom.faceBook"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"facebook"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{label:"Twitter"}},[n("el-input",{attrs:{placeholder:"Ex: https://twitter.com/..."},model:{value:t.introductionFrom.twitter,callback:function(e){t.$set(t.introductionFrom,"twitter",e)},expression:"introductionFrom.twitter"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"twitter"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{label:"Github"}},[n("el-input",{attrs:{placeholder:"Ex: https://github.com/..."},model:{value:t.introductionFrom.github,callback:function(e){t.$set(t.introductionFrom,"github",e)},expression:"introductionFrom.github"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"github"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{label:"Telegram"}},[n("el-input",{attrs:{placeholder:"Ex: https://t.me/..."},model:{value:t.introductionFrom.telegram,callback:function(e){t.$set(t.introductionFrom,"telegram",e)},expression:"introductionFrom.telegram"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"telegram"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{label:"Instagram"}},[n("el-input",{attrs:{placeholder:"Ex: https://instagram.com/..."},model:{value:t.introductionFrom.instagram,callback:function(e){t.$set(t.introductionFrom,"instagram",e)},expression:"introductionFrom.instagram"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"instagram"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{label:"Discord"}},[n("el-input",{attrs:{placeholder:"Ex: https://discord.com/..."},model:{value:t.introductionFrom.discord,callback:function(e){t.$set(t.introductionFrom,"discord",e)},expression:"introductionFrom.discord"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"discord"},slot:"prefix"})],1)],1),n("el-form-item",{attrs:{label:"Reddit"}},[n("el-input",{attrs:{placeholder:"Ex: https://reddit.com/..."},model:{value:t.introductionFrom.reddit,callback:function(e){t.$set(t.introductionFrom,"reddit",e)},expression:"introductionFrom.reddit"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"reddit"},slot:"prefix"})],1)],1),n("el-form-item",{staticStyle:{width:"98%"},attrs:{label:"Description"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:40},placeholder:"Ex: This is the best project..."},model:{value:t.introductionFrom.description,callback:function(e){t.$set(t.introductionFrom,"description",e)},expression:"introductionFrom.description"}})],1),n("el-form-item",{staticStyle:{"text-align":"center"}},[n("el-button",{staticStyle:{width:"200px"},attrs:{type:"info",plain:""},on:{click:function(e){t.active--}}},[t._v(t._s(t.$t("mining.return")))]),n("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",loading:t.loading.setup2},on:{click:function(e){return t.onSubmit2("introductionFrom")}}},[t._v(t._s(t.$t("mining.nextSteps")))])],1)],1)],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:2==t.active,expression:"active == 2"}],staticClass:"setupThree"},[n("div",{staticClass:"showInfo"},[n("ul",[n("li",[n("span",[t._v(t._s(t.$t("mining.type")))]),n("span",[t._v(t._s(t.verifyTokenFrom.type?t.$t("mining.lpMining"):t.$t("mining.tokenMining")+t.$t("mining.mining")))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.pledgeToken")))]),n("span",[t._v(t._s(t.tokenInfo.miningToken))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.startTime")))]),n("span",[t._v(t._s(t.startDateFormat))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.endTime")))]),n("span",[t._v(t._s(t.endDateFormat))])])]),n("ul",[n("li",[n("span",[t._v(t._s(t.$t("mining.award")))]),n("span",[t._v(t._s(t.awardInfo.symbol))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.contractAddress")))]),n("span",[t._v(t._s(t.hiddenAddress(t.introductionFrom.awardContract)))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.duration")))]),n("span",[t._v(t._s(t.verifyTokenFrom.duration)+t._s(t.$t("other.day")))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.dailyReward")))]),n("span",[t._v(t._s(t.introductionFrom.dailyReward))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.rewardTotal")))]),n("span",[t._v(t._s(t.introductionFrom.rewardTotal))])]),n("li",[n("span",[t._v(t._s(t.$t("mining.website")))]),n("span",{staticClass:"website",on:{click:function(e){return t.openWebSite()}}},[t._v(t._s(t.introductionFrom.webSite))])])])]),n("div",{staticClass:"btn"},[n("el-button",{staticStyle:{width:"200px"},attrs:{type:"info",plain:""},on:{click:function(e){t.active--}}},[t._v(t._s(t.$t("mining.return")))]),t.awardInfo.approve?n("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",loading:t.loading.setup3},on:{click:function(e){return t.startIntroduction()}}},[t._v(t._s(t.$t("mining.create")))]):n("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",loading:t.loading.approve},on:{click:function(e){return t.onApprove()}}},[t._v(t._s(t.$t("approve")))])],1)])])])}),[],!1,null,"1bcc4acb",null);e.default=y.exports},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},"4da9":function(t,e,n){"use strict";n("7ff3")},"502c":function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return w})),n.d(e,"j",(function(){return v})),n.d(e,"f",(function(){return g})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return k}));var r=n("c7eb"),a=n("1da1"),i=n("51d2"),o=(n("e95b"),n("4360")),s=n("ed08"),c=n("cf29"),u=n("901e"),d=n.n(u),l=function(){var t=Object(a.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new o.a.state.dapp.web3.web3Instance.eth.getGasPrice;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n,a){var u,d,l,f;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u="getTokenBalance",t.next=3,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 3:return d=t.sent,l={name:"balanceOf",erc20:!0,data:[a]},t.next=7,Object(c.b)(d,l,o.a.state.dapp.web3.account,u);case 7:return f=t.sent,t.abrupt("return",Object(s.d)(f,n));case 9:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n,a,s){var u,l,f,p;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u="getAllowance",t.next=3,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 3:return l=t.sent,f={name:"allowance",erc20:!0,data:[a,s]},t.next=7,Object(c.b)(l,f,o.a.state.dapp.web3.account,u);case 7:return p=t.sent,t.abrupt("return",new d.a(p));case 9:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n,a){var s,u,d;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s="getAllowance",t.next=3,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 3:return u=t.sent,d={name:"allowance",erc20:!0,data:[n,a]},t.next=7,Object(c.b)(u,d,o.a.state.dapp.web3.account,s);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),b=function(t,e){return o.a.state.dapp.web3.web3Instance.eth.getBalance(t).then((function(t){return new d.a(Object(s.d)(t,e))}))},w=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 2:return n=t.sent,a={name:"symbol",erc20:!0,data:[]},t.next=6,Object(c.b)(n,a,o.a.state.dapp.web3.account);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){var a,u,d;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 2:return a=t.sent,u={name:"totalSupply",erc20:!0,data:[]},t.next=6,Object(c.b)(a,u,o.a.state.dapp.web3.account);case 6:return d=t.sent,t.abrupt("return",Object(s.d)(d,n));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 2:return n=t.sent,a={name:"name",erc20:!0,data:[]},t.next=6,Object(c.b)(n,a,o.a.state.dapp.web3.account);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 2:return n=t.sent,a={name:"decimals",erc20:!0,data:[]},t.next=6,Object(c.b)(n,a,o.a.state.dapp.web3.account);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n,a,s){var u,d;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 2:return u=t.sent,d={name:"approve",erc20:!0,data:[a,n]},t.next=6,Object(c.d)(u,d,o.a.state.dapp.web3.account,s);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}()},"7ff3":function(t,e,n){},"81b3":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return l}));var r=n("c7eb"),a=n("1da1"),i=n("e95b"),o=n("4360"),s=n("cf29"),c=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="factory",t.next=3,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 3:return a=t.sent,c={name:"factory",erc20:!0,data:[]},t.next=7,Object(s.b)(a,c,o.a.state.dapp.web3.account,n);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="token0",t.next=3,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 3:return a=t.sent,c={name:"token0",erc20:!0,data:[]},t.next=7,Object(s.b)(a,c,o.a.state.dapp.web3.account,n);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="token1",t.next=3,new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e);case 3:return a=t.sent,c={name:"token1",erc20:!0,data:[]},t.next=7,Object(s.b)(a,c,o.a.state.dapp.web3.account,n);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n,a,c,u,d,l,f){var p,m;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p={name:"addLiquidityETH",erc20:!0,data:[n,a,c,u,d,l],value:u},m=new o.a.state.dapp.web3.web3Instance.eth.Contract(i.abi,e),t.next=4,Object(s.d)(m,p,o.a.state.dapp.web3.account,f);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,a,i,o,s,c){return t.apply(this,arguments)}}()},"841c":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),o=n("129f"),s=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=a(t),c=String(this),u=i.lastIndex;o(u,0)||(i.lastIndex=0);var d=s(i,c);return o(i.lastIndex,u)||(i.lastIndex=u),null===d?-1:d.index}]}))}}]);