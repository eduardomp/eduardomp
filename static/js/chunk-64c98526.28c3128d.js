(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-64c98526"],{"324d":function(t,e,a){"use strict";a("9e34")},"6ada":function(t,e,a){"use strict";a("d976")},"828d":function(t,e,a){"use strict";a.d(e,"i",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"h",(function(){return r})),a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"j",(function(){return d})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return h})),a.d(e,"a",(function(){return m})),a("99af");var n=a("b775"),i=function(t,e){return Object(n.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(t,"/address/").concat(e,"/balances_v2/?no-nft-fetch=true&key=ckey_4c2c43910c9c4730830a3551927")})},o=function(t,e,a,i){return Object(n.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(t,"&interval=").concat(e,"&startTime=").concat(a,"&endTime=").concat(i))})},s=function(t){return Object(n.a)({method:"GET",url:"https://api.coingecko.com/api/v3/simple/price?ids=".concat(t,"&vs_currencies=cny,usd")})},r=function(t,e,a,i){return Object(n.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(t,"/tokens/").concat(e,"/token_holders/?block-height=").concat(i,"&page-number=0&page-size=").concat(a,"&key=ckey_4c2c43910c9c4730830a3551927")})},c=function(t){return Object(n.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:t}})},l=function(){return Object(n.a)({method:"GET",url:"/api/v1/get_VipUser"})},d=function(t,e,a){return Object(n.a)({method:"GET",url:"/api/v1/contact_scan",params:{mac:t,expiry:e,tokenAddress:a}})},u=function(t){return Object(n.a)({headers:{"Content-Type":"multipart/form-data"},method:"POST",url:"https://ipfs.infura.io:5001/api/v0/cat?arg="+t})},h=function(t){return Object(n.a)({method:"GET",url:"/api/v1/get_launchpad",params:{chainId:t}})},m=function(t,e){return Object(n.a)({method:"GET",url:"https://api.tokentool.club/audit/contract",params:{chainId:t,contract_addresses:e}})}},"83c5":function(t,e,a){"use strict";a("cdbe")},9406:function(t,e,a){},"9406c":function(t,e,a){"use strict";a.r(e);var n=(a("d81d"),a("e9c4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:24}},[a("div",{staticClass:"chart-wrapper"},[a("reco-tools")],1)])],1),a("el-row",{attrs:{gutter:8}},[a("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:8}}},[a("introduction")],1),a("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:8}}},[a("suggest")],1),a("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:8}}},[a("contact-us")],1)],1)],1)}),i=a("b85c"),o=(a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group"},t._l(t.marketList,(function(e){return a("el-col",{key:e.id,staticClass:"card-panel-col",attrs:{xs:12,sm:8,md:4,lg:4}},[a("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData(e)}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{style:"color:"+e.color,attrs:{"icon-class":e.icon,"class-name":"card-panel-icon"}})],1),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v(" "+t._s(e.symbol)+" ")]),a("count-to",{staticClass:"card-panel-num",attrs:{prefix:"$","start-val":t.startVal(e,e.decimals),"end-val":t.endVal(e,e.decimals),decimals:e.decimals,duration:2600}}),t.checkIncrease(e)?a("el-tag",{staticStyle:{width:"90px","text-align":"center"},attrs:{type:"danger"}},[a("i",{staticClass:"el-icon-caret-bottom"}),t._v(" "+t._s(t.increase(e)+"%"))]):a("el-tag",{staticStyle:{width:"90px","text-align":"center"},attrs:{type:"success"}},[a("i",{staticClass:"el-icon-caret-top"}),t._v(" "+t._s(t.increase(e)+"%"))])],1)])])})),1)}),s=a("5530"),r=(a("c740"),a("2f62")),c=a("ec1b"),l=a.n(c),d=a("05b3"),u=a("b893"),h=a("901e"),m=a.n(h),f={components:{CountTo:l.a},computed:Object(s.a)({},Object(r.d)({homeSocket:function(t){return t.dapp.homeSocket}})),methods:{checkIncrease:function(t){var e=this.homeSocket.findIndex((function(e){return e.stream===t.params}));return e>-1&&new m.a(this.homeSocket[e].data.o).minus(this.homeSocket[e].data.c).comparedTo("0")>0},increase:function(t){var e=this.homeSocket.findIndex((function(e){return e.stream===t.params}));return e>-1?new m.a(this.homeSocket[e].data.o).minus(this.homeSocket[e].data.c).abs().dividedBy(this.homeSocket[e].data.o).multipliedBy(100).decimalPlaces(2).toNumber():0},startVal:function(t,e){var a=this.homeSocket.findIndex((function(e){return e.stream===t.params}));return a>-1?new m.a(this.homeSocket[a].cc).decimalPlaces(e).toNumber():0},endVal:function(t,e){var a=this.homeSocket.findIndex((function(e){return e.stream===t.params}));return a>-1?new m.a(this.homeSocket[a].data.c).decimalPlaces(e).toNumber():0},handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",{mark:t.mark,decimals:t.decimals,color:t.color})}},data:function(){return{marketList:d.f,downFixed:u.g}},created:function(){d.f.length>0&&this.handleSetLineChartData(d.f[0])}},p=f,b=(a("f035"),a("2877")),v=Object(b.a)(p,o,[],!1,null,"a8b54268",null).exports,k=a("313e"),g=a.n(k),_=a("ed08"),y={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(_.b)((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var C={mixins:[y],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=g.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.symbol,a=t.lineData,n=t.color;this.chart.setOption({title:{show:!0,text:e,left:"50%",textStyle:{color:n}},xAxis:{data:a.map((function(t){return t.dateTime})),boundaryGap:!1,axisTick:{show:!0}},yAxis:{axisTick:{show:!1}},grid:{left:5,right:40,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},series:[{name:e,smooth:!0,type:"line",itemStyle:{normal:{color:n,lineStyle:{color:n,width:2},areaStyle:{color:"#f3f8ff"}}},data:a.map((function(t){return t.price})),animationDuration:2800,animationEasing:"quadraticOut"}]})}}},x=C,T=Object(b.a)(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.className,style:{height:t.height,width:t.width}})}),[],!1,null,null,null),w=T.exports,S=a("1da1"),O=(a("96cf"),a("d3b7"),{props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"150px"}},data:function(){return{oneToMoreList:[{router:"/oneToMore/eth",icon:"coin-eth",color:"#1890ff",name:"ETH",i:"ERC20"},{router:"/oneToMore/bsc",icon:"coin-bsc",color:"#f0b90b",name:"BSC",i:"BEP20"},{router:"/oneToMore/dot",icon:"coin-dot",color:"#ff3333",name:"DOT",i:"Polkadot"},{router:"/oneToMore/heco",icon:"coin-heco",color:"#6bb1f1",name:"HECO",i:"HRC20"},{router:"/oneToMore/okt",icon:"coin-okt",color:"#6bb1f1",name:"OKT",i:"OEC20"},{router:"/oneToMore/ftm",icon:"coin-ftm",color:"#6bb1f1",name:"FTM",i:"FRC20"}],collectionList:[{router:"/batchCollection/eth",icon:"coin-eth",color:"#1890ff",name:"ETH",i:"ERC20"},{router:"/batchCollection/bsc",icon:"coin-bsc",color:"#f0b90b",name:"BSC",i:"BEP20"},{router:"/batchCollection/heco",icon:"coin-heco",color:"#6bb1f1",name:"HECO",i:"HRC20"},{router:"/batchCollection/okt",icon:"coin-okt",color:"#6bb1f1",name:"OKT",i:"OEC20"},{router:"/batchCollection/ftm",icon:"coin-ftm",color:"#6bb1f1",name:"FTM",i:"FRC20"},{router:"/batchCollection/matic",icon:"coin-matic",color:"#ff3333",name:"MATIC",i:"Polkadot"}],adList:[],newToolList:[{router:"/createToken/V2",icon:"launchpads",color:"#1890ff",name:"home.createToken"},{router:"/lock/create",icon:"lock",color:"#1890ff",name:"home.tokenLock"},{router:"/robotTrade/panicBuying",icon:"cool",color:"#1890ff",name:"menu.robotTrade"},{router:"/other/vanityAddressGenerator",icon:"cool",color:"#1890ff",name:"menu.vanityAddressGenerator"}]}},methods:{openUrl:function(t){window.open(t,"_blank")},pushRouter:function(t){this.$router.push(t)},getAd:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cdn.jsdelivr.net/gh/TokenTool-App/cdn@main/pic/third/ad.json",e.next=3,fetch("https://cdn.jsdelivr.net/gh/TokenTool-App/cdn@main/pic/third/ad.json").then((function(t){return t.json()})).then((function(t){return t}));case 3:a=e.sent,t.adList=a.adList;case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAd()}}),E=O,$=(a("83c5"),Object(b.a)(E,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("home.thirdPlatform")))])]),a("div",{staticClass:"box1"},[a("div",{staticClass:"thirdPlatform"},[a("ul",t._l(t.adList,(function(e,n){return a("li",{key:n,staticClass:"linkBtn",on:{click:function(a){return t.openUrl(e.url)}}},[a("img",{attrs:{width:"30",height:"30",src:e.img}}),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.alt,placement:"top-start"}},[a("span",{staticClass:"name"},[t._v(t._s(e.name))])])],1)})),0)])])])],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("home.oneToMore")))])]),a("div",{staticClass:"box1"},[a("div",{staticClass:"linkBox"},[a("ul",t._l(t.oneToMoreList,(function(e,n){return a("li",{key:n,staticClass:"linkBtn",on:{click:function(a){return t.pushRouter(e.router)}}},[a("svg-icon",{style:"color:"+e.color,attrs:{"icon-class":e.icon}}),a("span",{staticClass:"name"},[t._v(t._s(e.name))])],1)})),0)])])])],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("home.newTools")))])]),a("div",{staticClass:"box1"},[a("div",{staticClass:"linkBox"},[a("ul",t._l(t.newToolList,(function(e,n){return a("li",{key:n,staticClass:"linkBtn",on:{click:function(a){return t.pushRouter(e.router)}}},[a("svg-icon",{attrs:{"icon-class":e.icon}}),a("span",{staticClass:"name"},[t._v(t._s(t.$t(e.name)))])],1)})),0)])])])],1)],1)],1)}),[],!1,null,"e640a310",null)),j=$.exports,R={data:function(){return{items:[{type:"",label:"ETH"},{type:"success",label:"BTC"},{type:"info",label:"TRX"},{type:"danger",label:"BNB"},{type:"",label:"HT"},{type:"",label:"DOT"},{type:"",label:"OKT"}]}}},D=Object(b.a)(R,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("home.overview")))])]),a("p",[t._v(t._s(t.$t("home.overviewDesc")))]),a("el-divider",{attrs:{"content-position":"center"}},[t._v("TokenTool.App")]),a("div",{staticClass:"tag-box"},t._l(t.items,(function(e){return a("el-tag",{key:e.label,staticStyle:{margin:"0 20px 20px 0"},attrs:{size:"medium",hit:!0,type:e.type,effect:"dark"}},[t._v(" "+t._s(e.label)+" ")])})),1),a("div",[a("el-tag",{attrs:{effect:"plain",size:"medium",hit:!0}},[t._v(t._s(t.$t("home.moreTools")))])],1)],1)}),[],!1,null,null,null),z=D.exports,H={data:function(){return{items:[{type:"",label:"ETH"},{type:"success",label:"BTC"},{type:"info",label:"TRX"},{type:"danger",label:"BNB"},{type:"",label:"HT"},{type:"",label:"DOT"},{type:"",label:"OKT"}],textItem:[{index:1,label:"home.feedbackOne"},{index:2,label:"home.feedbackTwo"},{index:3,label:"home.feedbackThree"},{index:4,label:"home.feedbackFour"},{index:5,label:"home.feedbackFive"}]}}},L=(a("d41e"),Object(b.a)(H,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("home.feedback")))])]),a("el-alert",{attrs:{title:t.$t("home.feedbackTips"),type:"info"}}),t._l(t.textItem,(function(e){return a("div",{key:e.index,staticClass:"text item"},[t._v(" "+t._s(e.index)+"."+t._s(t.$t(e.label))+" ")])}))],2)}),[],!1,null,"01aa03b4",null)),B=L.exports,I={data:function(){return{}}},A=(a("324d"),Object(b.a)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("home.contactUs")))])]),a("ul",[a("li",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"email"}}),a("el-tag",{attrs:{size:"medium",type:"danger",effect:"plain",hit:!0}},[a("a",{attrs:{href:"mailto:tokentool.app@gmail.com"}},[t._v("tokentool.app@gmail.com")])])],1),a("li",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"guide"}}),a("el-tag",{attrs:{size:"medium",type:"info",effect:"plain",hit:!0}},[a("a",{attrs:{target:"_blank",href:"https://t.me/TokenTool_App"}},[t._v("https://t.me/TokenTool_App")])])],1),a("li",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"twitter"}}),a("el-tag",{attrs:{size:"medium",effect:"plain",hit:!0}},[a("a",{attrs:{target:"_blank",href:"https://twitter.com/tokentool_app"}},[t._v("https://twitter.com/tokentool_app")])])],1)])])}),[],!1,null,"8b235766",null)),M=A.exports,G=a("828d"),U={name:"DashboardAdmin",components:{PanelGroup:v,LineChart:w,RecoTools:j,Introduction:z,Suggest:B,ContactUs:M},data:function(){return{lineChartData:{lineData:[],symbol:"",color:""}}},methods:{handleSetLineChartData:function(t){var e=this,a=new Date,n=a.getTime(),o=Object(_.a)("m",-2,a).getTime();Object(G.g)(t.mark,"1d",o,n).then((function(a){if(a.data){var n,o=[],s=Object(i.a)(a.data);try{for(s.s();!(n=s.n()).done;){var r=n.value;o.push({dateTime:Object(_.j)(r[0],"{y}-{m}-{d}"),price:Object(u.g)(r[3],t.decimals)})}}catch(t){s.e(t)}finally{s.f()}e.lineChartData.symbol=t.mark.replace("USDT","-USDT"),e.lineChartData.color=t.color,e.lineChartData.lineData=o}}))}}},F=U,N={name:"Dashboard",components:{adminDashboard:(a("6ada"),Object(b.a)(F,n,[],!1,null,"5ef2c5ce",null)).exports},data:function(){return{websocketObj:null,wsHeartFlag:!1,reconnectTime:0,maxConnect:100,wsUrl:"wss://stream.yshyqxx.com/stream"}},methods:{initWebsocket:function(){this.webSocketObj=new WebSocket(this.wsUrl),this.webSocketObj.onmessage=this.onMessage,this.webSocketObj.onopen=this.onOpen,this.webSocketObj.onerror=this.onError,this.webSocketObj.onclose=this.onClose},onOpen:function(){if(1===this.webSocketObj.readyState){this.wsHeartFlag=!0;var t={id:1,method:"SUBSCRIBE",params:d.f.map((function(t){return t.params}))};this.webSocketObj.send(JSON.stringify(t)),this.reconnectTime=0}},timingHeart:function(){var t=this;if(this.wsHeartFlag){var e={id:1,method:"SUBSCRIBE",params:params};this.webSocketObj.send(JSON.stringify(e))}this.wsHeart=setTimeout((function(){t.timingHeart()}),1e5)},onMessage:function(t){this.$store.dispatch("dapp/homeSocket",t.data)},onError:function(){var t=this;clearTimeout(this.wsHeart),this.wsHeartFlag=!1,this.reconnectTime<=this.maxConnect?setTimeout((function(){t.onOpen(),t.reconnectTime+=1}),5e3):this.onClose()},onClose:function(){this.wsHeartFlag=!1,this.webSocketObj&&this.webSocketObj.close&&this.webSocketObj.close()}},created:function(){this.initWebsocket()},destroyed:function(){this.onClose()}},P=N,q=Object(b.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dashboard-container"},[e("adminDashboard")],1)}),[],!1,null,null,null);e.default=q.exports},"9e34":function(t,e,a){},b775:function(t,e,a){"use strict";var n=a("bc3a"),i=a.n(n);i.a.defaults.timeout=3e4,i.a.defaults.baseURL="https://service.cointools.workers.dev/",e.a=i.a},b83f:function(t,e,a){},cdbe:function(t,e,a){},d41e:function(t,e,a){"use strict";a("9406")},d976:function(t,e,a){},f035:function(t,e,a){"use strict";a("b83f")}}]);