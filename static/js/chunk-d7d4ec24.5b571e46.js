(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d7d4ec24"],{"02d2":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=n("5530"),i=(n("c740"),n("b0c0"),n("b680"),n("d3b7"),n("25f0"),n("a9e3"),n("a4d3"),n("e01a"),n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preparing"},[1===e.launchpadStatus?n("div",{staticClass:"tips"},[e._v("预售即将开始")]):e._e(),2===e.launchpadStatus?n("div",{staticClass:"tips"},[e._v("预售结束")]):e._e(),n("div",{class:"down"},[n("span",{staticClass:"time"},[e._v(e._s(e.msTime.day))]),n("span",{staticClass:"time"},[e._v(e._s(e.msTime.hour))]),n("span",{staticClass:"time"},[e._v(e._s(e.msTime.minutes))]),n("span",{staticClass:"time"},[e._v(e._s(e.msTime.seconds))])])])}),s={name:"countdown",replace:!0,data:function(){return{msTime:{show:!1,day:"00",hour:"00",minutes:"00",seconds:"00"},star:"",end:"",current:""}},watch:{currentTime:function(){this.gogogo()}},props:{currentTime:{type:Number|String},startTime:{type:Number|String},endTime:{type:Number|String},launchpadStatus:{type:Number}},mounted:function(){this.gogogo()},destroyed:function(){clearTimeout(this.timer)},methods:{gogogo:function(){var e=this;clearTimeout(this.timer),this.startTime&&this.endTime&&(10===this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10===this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10===this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?this.end_message():this.current<this.star?setTimeout((function(){e.runTime(e.star,e.current,e.start_message,!1)}),1):(this.end>this.current&&this.star<this.current||this.star===this.current)&&setTimeout((function(){e.runTime(e.end,e.current,e.end_message,!0)}),1))},runTime:function(e,t,n,r){var a=this,i=this.msTime,s=e-t;if(s>0){i.day=Math.floor(s/864e5),s-=864e5*i.day,i.hour=Math.floor(s/36e5),s-=36e5*i.hour,i.minutes=Math.floor(s/6e4),s-=6e4*i.minutes,i.seconds=Math.floor(s/1e3).toFixed(0),s-=1e3*i.seconds,i.day<10&&(i.day="0"+i.day),i.hour<10&&(i.hour="0"+i.hour),i.minutes<10&&(i.minutes="0"+i.minutes),i.seconds<10&&(i.seconds="0"+i.seconds);var o=Date.now(),d=Date.now()-o;this.timer=setTimeout((function(){r?a.runTime(a.end,t+=1e3,n,!0):a.runTime(a.star,t+=1e3,n)}),1e3-d)}else n()},start_message:function(){var e=this;this.current=(new Date).getTime(),setTimeout((function(){e.runTime(e.end,e.current,e.end_message,!0)}),1),this.$emit("start_callback")},end_message:function(){this.currentTime<=0||this.$emit("end_callback")}}},o=s,d=(n("9d8f"),n("2877")),c=Object(d.a)(o,i,[],!1,null,"43d99842",null).exports,l=(n("ac1f"),n("1276"),n("159b"),n("498a"),n("99e5")),u=n.n(l),m=n("2f62"),p=n("8a2e"),f={name:"ImportAddress",props:{show:{type:Boolean,default:!1},type:{type:Boolean,default:null},presaleAddress:{type:String,default:""}},data:function(){return{importText:"",loading:{import:!1}}},methods:{addtokenClosed:function(){this.importText="",this.$emit("importAddressClose")},importAddress:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.importText.split("\n"),r="",n.forEach((function(e){42===e.trim().length&&(r+=u.a.utils.stripHexPrefix(e.trim()))})),e.loading.import=!0,t.next=7,Object(p.a)(e.presaleAddress,"0x"+r,e.type);case 7:t.sent&&e.$message.success("成功"),e.loading.import=!1;case 10:case"end":return t.stop()}}),t)})))()}}},h=f,g=Object(d.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.type?"将用户添加到白名单":"从白名单中删除用户",visible:e.show,width:"600px"},on:{"update:visible":function(t){e.show=t},closed:function(t){return e.addtokenClosed()}}},[n("span",[e._v("一行一个地址(建议一批不超过200个地址)")]),n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.import,expression:"loading.import"}],attrs:{type:"textarea",rows:12,placeholder:"0x000000....\n0x0000000..."},model:{value:e.importText,callback:function(t){e.importText=t},expression:"importText"}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.addtokenClosed()}}},[e._v(e._s(e.$t("cancel")))]),n("el-button",{attrs:{type:"primary",loading:e.loading.import},on:{click:function(t){return e.importAddress()}}},[e._v(e._s(e.$t("confirm")))])],1)],1)}),[],!1,null,"e341fdfc",null),v=g.exports,b=n("64a6"),w=n("ed08"),_=n("b893"),F=n("901e"),k=n.n(F),x=n("7052"),y={name:"detail",computed:Object(a.a)(Object(a.a)({},Object(m.d)({chainNetwork:function(e){return e.dapp.chainNetwork},networkId:function(e){return e.dapp.web3.networkId},myAddress:function(e){return e.dapp.web3.account},initial:function(e){return e.dapp.web3.initial},menu:function(e){return e.settings.menu},web3Instance:function(e){return e.dapp.web3.web3Instance}})),{},{percentage:function(){return this.defiFrom.hardCap?new k.a(this.defiFrom.collected).dividedBy(this.defiFrom.hardCap).multipliedBy(100).toNumber():0}}),watch:{myAddress:function(){this.myAddress&&this.getUserInfo()}},components:{CountDown:c,ImportAddress:v},data:function(){return{parseTime:w.j,mToUpperCase:_.n,web3:null,platform:[],timer:null,presaleId:null,launchpadAddress:"",baseUrl:"",launchpadStatus:null,tokenInfo:{name:"",symbol:"",decimals:"",totalSupply:"",address:""},introductionFrom:{logoUrl:"",webSite:"",faceBook:"",twitter:"",github:"",telegram:"",instagram:"",discord:"",reddit:"",description:""},buyFrom:{amount:"",type:null},defiFrom:{presaleAddress:"",owner:"",rate:0,rateCoin:0,whitelistEnabled:!1,softCap:0,hardCap:0,minAllowed:0,maxAllowed:0,returnType:!0,routerAddress:"",liquidityRate:0,liquidityRateCoin:0,poolRate:0,startDate:"",endDate:"",currentDate:0,lockDuration:0,failed:null,doRefund:!1,finalized:!1,locked:!1,collected:0},userFrom:{givenAmount:0,qualifications:!1,whitelisted:!1},statusArray:{5:"cancel",4:"ended",3:"filled",2:"inprogress",1:"upcoming"},loading:{buy:!1,whitelist:!1,closeWhitelist:!1,whiteAddress:!1,regret:!1,withdrawFunds:!1,withdrawTokens:!1,initial:!1,lock:!1},dialog:{importAddress:!1}}},methods:{openUrl:function(e){window.open(this.baseUrl+"/address/"+e,"_blank")},importAddressClose:function(){this.dialog.importAddress=!1},removeWhitelist:function(){this.buyFrom.type=!1,this.dialog.importAddress=!0},addWhitelist:function(){this.buyFrom.type=!0,this.dialog.importAddress=!0},closeWhitelist:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.closeWhitelist=!0,t.next=3,Object(p.f)(e.defiFrom.presaleAddress,!1);case 3:t.sent&&(e.defiFrom.whitelistEnabled=!1),e.loading.closeWhitelist=!1;case 6:case"end":return t.stop()}}),t)})))()},setWhitelist:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.defiFrom.whitelistEnabled=!e,t.loading.whitelist=!0,n.next=4,Object(p.f)(t.defiFrom.presaleAddress,e);case 4:n.sent&&(t.defiFrom.whitelistEnabled=e),t.loading.whitelist=!1;case 7:case"end":return n.stop()}}),n)})))()},lockOpen:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.lock=!0,t.next=3,Object(b.f)(e.launchpadAddress,e.presaleId);case 3:t.sent&&(e.launchpadStatus=4),e.loading.lock=!1;case 6:case"end":return t.stop()}}),t)})))()},withdrawFunds:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.withdrawFunds=!0,t.next=3,Object(p.h)(e.defiFrom.presaleAddress);case 3:return t.sent,t.next=6,e.getUserInfo();case 6:e.loading.withdrawFunds=!1;case 7:case"end":return t.stop()}}),t)})))()},withdrawTokens:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.withdrawTokens=!0,t.next=3,Object(p.j)(e.defiFrom.presaleAddress);case 3:if(!t.sent){t.next=7;break}return t.next=7,e.getUserInfo();case 7:e.loading.withdrawTokens=!1;case 8:case"end":return t.stop()}}),t)})))()},withdrawRegret:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.regret=!0,t.next=3,Object(p.i)(e.defiFrom.presaleAddress);case 3:return t.sent,t.next=6,e.getUserInfo();case 6:e.loading.regret=!1;case 7:case"end":return t.stop()}}),t)})))()},buyPresale:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.buy=!0,n=Object(w.c)(e.buyFrom.amount),t.next=4,Object(p.b)(e.defiFrom.presaleAddress,n);case 4:if(r=t.sent,e.loading.buy=!1,!r){t.next=9;break}return t.next=9,e.getUserInfo();case 9:case"end":return t.stop()}}),t)})))()},parsePlatform:function(){var e=this,t=this.platform.findIndex((function(t){return Object(_.n)(t.router)===Object(_.n)(e.defiFrom.routerAddress)}));return-1!==t?this.platform[t].name:"unknown"},max:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!new k.a(e.userFrom.givenAmount).isZero()){t.next=3;break}return e.buyFrom.amount=e.defiFrom.maxAllowed,t.abrupt("return");case 3:e.buyFrom.amount=new k.a(e.defiFrom.maxAllowed).minus(e.userFrom.givenAmount).toFixed(18);case 4:case"end":return t.stop()}}),t)})))()},initialData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=parseInt(e.$route.query.chainId),(r=Object(_.h)(n)).launchpadAddress){t.next=6;break}return e.$message.error("暂不支持当前链,请切换到正确的链"),t.abrupt("return");case 6:return e.baseUrl=r.blockExplorerUrls[0],e.launchpadAddress=r.launchpadAddress,e.web3=new u.a(new u.a.providers.HttpProvider(r.rpcUrls[0])),a=Object(_.k)(n),e.platform=a.platform,e.presaleId=e.$route.params.presaleId,e.loading.initial=!0,t.next=15,e.getPreSale();case 15:e.loading.initial=!1,e.timer=setInterval(e.checkStatus,15e3);case 17:case"end":return t.stop()}}),t)})))()},checkStatus:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.getUserInfo(),e.defiFrom.presaleAddress){t.next=3;break}return t.abrupt("return");case 3:return t.next=6,Object(p.d)(e.web3,e.defiFrom.presaleAddress);case 6:if(n=t.sent){t.next=10;break}return t.abrupt("return");case 10:if(e.defiFrom.collected=new k.a(Object(w.d)(n.collected)).toNumber(),e.defiFrom.whitelistEnabled=n.whitelistEnabled,e.defiFrom.failed=n.failed,e.defiFrom.doRefund=n.doRefund,e.defiFrom.finalized=n.finalized,e.defiFrom.locked=n.locked,!n.failed&&!n.doRefund){t.next=19;break}return e.launchpadStatus=5,t.abrupt("return");case 19:if(!n.locked){t.next=22;break}return e.launchpadStatus=4,t.abrupt("return");case 22:if(!n.finalized){t.next=25;break}return e.launchpadStatus=3,t.abrupt("return");case 25:if(r=new Date,e.defiFrom.currentDate=r.getTime(),!(r.getTime()>e.defiFrom.startDate&&r.getTime()<e.defiFrom.endDate)){t.next=30;break}return e.launchpadStatus=2,t.abrupt("return");case 30:if(!(r.getTime()<e.defiFrom.startDate)){t.next=33;break}return e.launchpadStatus=1,t.abrupt("return");case 33:e.launchpadStatus=5;case 34:case"end":return t.stop()}}),t)})))()},getTokenInfo:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.tokenInfo.address=e,n.next=3,Object(x.b)(e,t.web3);case 3:return t.tokenInfo.name=n.sent,n.next=6,Object(x.c)(e,t.web3);case 6:return t.tokenInfo.symbol=n.sent,n.next=9,Object(x.a)(e,t.web3);case 9:return t.tokenInfo.decimals=n.sent,n.next=12,Object(x.g)(t.web3,e,t.tokenInfo.decimals);case 12:t.tokenInfo.totalSupply=n.sent,t.tokenInfo.totalSupply=new k.a(t.tokenInfo.totalSupply).toFormat(0);case 14:case"end":return n.stop()}}),n)})))()},getPreSale:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(e.web3,e.launchpadAddress,e.presaleId);case 2:return n=t.sent,e.defiFrom.presaleAddress=n,t.next=6,Object(p.c)(e.web3,n);case 6:if(!(r=t.sent)){t.next=42;break}return e.getTokenInfo(r.campaignData.token),e.defiFrom.rate=new k.a(Object(w.d)(r.campaignData.rate)).toString(),e.defiFrom.poolRate=new k.a(Object(w.d)(r.campaignData.poolRate)).toString(),e.defiFrom.rateCoin=new k.a(Object(w.d)(r.campaignData.rate)).multipliedBy(Object(w.d)(r.campaignData.hardCap)),e.defiFrom.liquidityRate=r.campaignData.liquidityRate,e.defiFrom.maxAllowed=new k.a(Object(w.d)(r.campaignData.maxAllowed)).toFormat(3),e.defiFrom.minAllowed=new k.a(Object(w.d)(r.campaignData.minAllowed)).toFormat(3),e.defiFrom.softCap=new k.a(Object(w.d)(r.campaignData.softCap)).toString(),e.defiFrom.hardCap=new k.a(Object(w.d)(r.campaignData.hardCap)).toString(),e.defiFrom.returnType=r.campaignData.returnType,e.defiFrom.startDate=Number(r.campaignData.startDate+"000"),e.defiFrom.endDate=Number(r.campaignData.endDate+"000"),e.defiFrom.lockDuration=r.campaignData.lockDuration/60,e.defiFrom.whitelistEnabled=r.campaignData.whitelistEnabled,e.defiFrom.routerAddress=r.extInfo.routerAddress,e.defiFrom.owner=r.campaignData.owner,e.defiFrom.liquidityRateCoin=new k.a(e.defiFrom.hardCap).multipliedBy(new k.a(r.campaignData.liquidityRate).dividedBy(1e4)).multipliedBy(e.defiFrom.poolRate),e.defiFrom.failed=r.campaignData.failed,e.defiFrom.doRefund=r.extInfo.doRefund,e.defiFrom.finalized=r.campaignData.finalized,e.defiFrom.locked=r.extInfo.locked,e.introductionFrom.logoUrl=r.campaignDataInfo.logoUrl,e.introductionFrom.webSite=r.campaignDataInfo.webSite,e.introductionFrom.faceBook=r.campaignDataInfo.faceBook,e.introductionFrom.twitter=r.campaignDataInfo.twitter,e.introductionFrom.github=r.campaignDataInfo.github,e.introductionFrom.telegram=r.campaignDataInfo.telegram,e.introductionFrom.instagram=r.campaignDataInfo.instagram,e.introductionFrom.discord=r.campaignDataInfo.discord,e.introductionFrom.reddit=r.campaignDataInfo.reddit,e.introductionFrom.description=r.campaignDataInfo.description,t.next=42,e.checkStatus();case 42:case"end":return t.stop()}}),t)})))()},getUserInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.myAddress){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(p.e)(e.web3,e.defiFrom.presaleAddress,e.myAddress);case 4:if(n=t.sent,e.userFrom.givenAmount=new k.a(Object(w.d)(n)).toString(),!e.defiFrom.whitelistEnabled){t.next=12;break}return t.next=9,Object(p.g)(e.web3,e.defiFrom.presaleAddress,e.myAddress);case 9:e.userFrom.whitelisted=t.sent,t.next=13;break;case 12:e.userFrom.whitelisted=!0;case 13:case"end":return t.stop()}}),t)})))()},PreSaleStart:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.launchpadStatus=2;case 1:case"end":return t.stop()}}),t)})))()},PreSaleEnd:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.launchpadStatus=3;case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.initialData()},beforeDestroy:function(){clearInterval(this.timer)}},C=y,A=(n("1317"),Object(d.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.initial,expression:"loading.initial"}],staticClass:"left"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-left"},[n("figure",{staticStyle:{border:"1px solid #ecf4fd","border-radius":"50%",overflow:"hidden",margin:"0"}},[n("img",{attrs:{height:"48",width:"48",src:e.introductionFrom.logoUrl}})])]),n("div",{staticClass:"media-right"},[n("div",{staticClass:"title"},[n("h1",[e._v(e._s(e.tokenInfo.name)+" Presale")]),n("div",{staticClass:"status",class:e.statusArray[e.launchpadStatus]},[n("i"),n("span",[e._v(e._s(e.$t("launchpad."+e.statusArray[e.launchpadStatus])))])])]),n("div",{staticClass:"xtt"},[e.introductionFrom.webSite?n("div",[n("a",{attrs:{href:e.introductionFrom.webSite,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"website"},slot:"prefix"})],1)]):e._e(),e.introductionFrom.faceBook?n("div",[n("a",{attrs:{href:e.introductionFrom.faceBook,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"facebook"},slot:"prefix"})],1)]):e._e(),e.introductionFrom.twitter?n("div",[n("a",{attrs:{href:e.introductionFrom.twitter,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"twitter"},slot:"prefix"})],1)]):e._e(),e.introductionFrom.github?n("div",[n("a",{attrs:{href:e.introductionFrom.github,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"github"},slot:"prefix"})],1)]):e._e(),e.introductionFrom.telegram?n("div",[n("a",{attrs:{href:e.introductionFrom.telegram,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"telegram"},slot:"prefix"})],1)]):e._e(),e.introductionFrom.instagram?n("div",[n("a",{attrs:{href:e.introductionFrom.instagram,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"instagram"},slot:"prefix"})],1)]):e._e(),e.introductionFrom.discord?n("div",[n("a",{attrs:{href:e.introductionFrom.discord,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"discord"},slot:"prefix"})],1)]):e._e(),e.introductionFrom.reddit?n("div",[n("a",{attrs:{href:e.introductionFrom.reddit,target:"_blank"}},[n("svg-icon",{staticClass:"icon",attrs:{slot:"prefix","icon-class":"reddit"},slot:"prefix"})],1)]):e._e()]),n("div",{staticClass:"description"},[n("span",[e._v(e._s(e.introductionFrom.description))])])])]),n("div",{staticClass:"table-container"},[n("ul",[n("li",[n("span",[e._v("预售地址")]),n("span",{staticClass:"website",on:{click:function(t){return e.openUrl(e.defiFrom.presaleAddress)}}},[e._v(e._s(e.defiFrom.presaleAddress))])]),n("li",[n("span",[e._v("令牌名称")]),n("span",[e._v(e._s(e.tokenInfo.name))])]),n("li",[n("span",[e._v("令牌符号")]),n("span",[e._v(e._s(e.tokenInfo.symbol))])]),n("li",[n("span",[e._v("令牌精度")]),n("span",[e._v(e._s(e.tokenInfo.decimals))])]),n("li",[n("span",[e._v("代币地址")]),n("span",{staticClass:"website",on:{click:function(t){return e.openUrl(e.tokenInfo.address)}}},[e._v(e._s(e.tokenInfo.address))])]),n("li",[n("span",[e._v("总供应量")]),n("span",[e._v(e._s(e.tokenInfo.totalSupply))])]),n("li",[n("span",[e._v("预售代币")]),n("span",[e._v(e._s(e.defiFrom.rateCoin)+" "+e._s(e.tokenInfo.symbol))])]),n("li",[n("span",[e._v("流动性代币")]),n("span",[e._v(e._s(e.defiFrom.liquidityRateCoin)+" "+e._s(e.tokenInfo.symbol))])]),n("li",[n("span",[e._v("预售率")]),n("span",[e._v("1 BNB = "+e._s(e.defiFrom.rate)+" "+e._s(e.tokenInfo.symbol))])]),n("li",[n("span",[e._v("上市率")]),n("span",[e._v("1 BNB = "+e._s(e.defiFrom.poolRate)+" "+e._s(e.tokenInfo.symbol))])]),n("li",[n("span",[e._v("销售方式")]),n("span",[e._v(e._s(e.defiFrom.whitelistEnabled?"私人":"公开"))])]),n("li",[n("span",[e._v("软顶")]),n("span",[e._v(e._s(e.defiFrom.softCap)+" BNB")])]),n("li",[n("span",[e._v("硬顶")]),n("span",[e._v(e._s(e.defiFrom.hardCap)+" BNB")])]),n("li",[n("span",[e._v("未售出的代币")]),n("span",[e._v(e._s(e.defiFrom.returnType?"燃烧":"退回"))])]),n("li",[n("span",[e._v("预售开始时间")]),n("span",[e._v(e._s(e.parseTime(e.defiFrom.startDate)))])]),n("li",[n("span",[e._v("预售结束时间")]),n("span",[e._v(e._s(e.parseTime(e.defiFrom.endDate)))])]),n("li",[n("span",[e._v("上市交易所")]),n("span",[e._v(e._s(e.parsePlatform()))])]),n("li",[n("span",[e._v("流动性百分比")]),n("span",[e._v(e._s(Number(e.defiFrom.liquidityRate)/100)+" %")])]),n("li",[n("span",[e._v("流动性锁定时间")]),n("span",[e._v("("+e._s(e.defiFrom.lockDuration)+"分钟)")])])])])]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.initial,expression:"loading.initial"}],staticClass:"right"},[n("div",{staticClass:"presale-buy"},[n("el-tag",[e._v("确保网站是 tokentool.app！")]),n("div",{staticClass:"countdown"},[n("count-down",{directives:[{name:"show",rawName:"v-show",value:[1,2].indexOf(e.launchpadStatus)>-1,expression:"[1,2].indexOf(launchpadStatus) > -1"}],attrs:{currentTime:e.defiFrom.currentDate,startTime:e.defiFrom.startDate,endTime:e.defiFrom.endDate,launchpadStatus:e.launchpadStatus},on:{end_callback:function(t){return e.PreSaleEnd()},start_callback:function(t){return e.PreSaleStart()}}})],1),n("div",{staticClass:"tag"},[n("el-progress",{attrs:{"text-inside":!1,"show-text":!1,"stroke-width":15,percentage:e.percentage}})],1),n("div",{staticClass:"flex amount"},[n("span",{staticStyle:{"font-size":"12px"}},[e._v(e._s(e.defiFrom.collected)+" BNB")]),n("span",{staticStyle:{"font-size":"12px"}},[e._v(e._s(e.defiFrom.hardCap)+" BNB")])]),[3,4,5].indexOf(e.launchpadStatus)>-1?n("div",{staticClass:"end_pool"},[n("span",[e._v(e._s(e.$t("launchpad."+e.statusArray[e.launchpadStatus])))]),n("div",[5===e.launchpadStatus&&Number(e.userFrom.givenAmount)>0?n("el-button",{attrs:{loading:e.loading.withdrawFunds,type:"primary"},on:{click:function(t){return e.withdrawFunds()}}},[e._v("领取BNB退款")]):e._e(),4===e.launchpadStatus&&Number(e.userFrom.givenAmount)>0?n("el-button",{attrs:{loading:e.loading.withdrawTokens,type:"primary"},on:{click:function(t){return e.withdrawTokens()}}},[e._v("领取私募")]):e._e()],1)]):n("div",[n("div",{staticClass:"balance"},[n("h5",[e._v("Amount (max: "+e._s(e.defiFrom.maxAllowed)+" BNB)")])]),n("div",{staticClass:"input"},[n("el-input",{model:{value:e.buyFrom.amount,callback:function(t){e.$set(e.buyFrom,"amount",t)},expression:"buyFrom.amount"}},[n("template",{slot:"append"},[n("span",{staticClass:"max",on:{click:function(t){return e.max()}}},[e._v(e._s(e.$t("tokenLocks.max")))])])],2)],1),n("div",[e.userFrom.whitelisted?n("el-button",{attrs:{disabled:2!==e.launchpadStatus,loading:e.loading.buy,icon:"el-icon-check",type:"primary"},on:{click:function(t){return e.buyPresale()}}},[e._v("用 BNB 购买")]):n("el-button",{attrs:{type:"info",disabled:!0}},[e._v("没有参与资格")]),2===e.launchpadStatus&&Number(e.userFrom.givenAmount)>0?n("el-button",{attrs:{loading:e.loading.regret,type:"danger"},on:{click:function(t){return e.withdrawRegret()}}},[e._v("紧急退款")]):e._e()],1)])],1),n("div",{staticClass:"status-info"},[n("ul",[n("li",[n("span",[e._v("状态")]),n("span",[e._v(e._s(e.$t("launchpad."+e.statusArray[e.launchpadStatus])))])]),n("li",[n("span",[e._v("销售类型")]),n("span",[e._v(e._s(e.defiFrom.whitelistEnabled?"私人销售":"公开销售"))])]),n("li",[n("span",[e._v("最低购买")]),n("span",[e._v(e._s(e.defiFrom.minAllowed))])]),n("li",[n("span",[e._v("最大购买")]),n("span",[e._v(e._s(e.defiFrom.maxAllowed))])]),n("li",[n("span",[e._v("你的贡献")]),n("span",[e._v(e._s(e.userFrom.givenAmount)+" BNB")])])])]),e.mToUpperCase(e.defiFrom.owner)===e.mToUpperCase(e.myAddress)?n("div",{staticClass:"owner-info"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("管理员专区")])]),n("div",{staticClass:"sale"},[n("span",[e._v("销售类型")]),n("el-radio-group",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.whitelist,expression:"loading.whitelist"}],model:{value:e.defiFrom.whitelistEnabled,callback:function(t){e.$set(e.defiFrom,"whitelistEnabled",t)},expression:"defiFrom.whitelistEnabled"}},[n("el-radio",{attrs:{label:!1},on:{change:function(t){return e.setWhitelist(!1)}}},[e._v("公开销售")]),n("el-radio",{attrs:{label:!0},on:{change:function(t){return e.setWhitelist(!0)}}},[e._v("私人销售")])],1)],1),e.defiFrom.whitelistEnabled?n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.addWhitelist()}}},[e._v("将用户添加到白名单")]),n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.removeWhitelist()}}},[e._v("从白名单中删除用户")]),n("el-button",{attrs:{type:"primary",loading:e.loading.closeWhitelist,plain:""},on:{click:function(t){return e.closeWhitelist()}}},[e._v("禁用白名单")])],1):e._e(),n("div",{staticClass:"link"}),e._m(0),n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary",loading:e.loading.lock,disabled:3!==e.launchpadStatus,plain:""},on:{click:function(t){return e.lockOpen()}}},[e._v("最终确定发射")])],1),e._m(1)]):e._e()])]),n("import-address",{attrs:{show:e.dialog.importAddress,type:e.buyFrom.type,presaleAddress:this.defiFrom.presaleAddress},on:{importAddressClose:e.importAddressClose}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sale"},[n("span",[e._v("池子操作")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tips"},[n("span",[e._v("*要完成预售，您必须排除预售合同的代币转让费。")])])}],!1,null,"78806f54",null));t.default=A.exports},1317:function(e,t,n){"use strict";n("d39d")},9967:function(e,t,n){},"9d8f":function(e,t,n){"use strict";n("9967")},d39d:function(e,t,n){}}]);