(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-07d892be"],{"0c2f":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var r=a("1da1"),n=(a("96cf"),a("d3b7"),a("25f0"),a("fb6a"),a("ddb0"),a("54c1")),s=a("c030"),i=a("58c5"),c=a("f76c"),o=a("b075"),l=a("29c9"),d=a("d01b"),u=a("59da"),p=a("1cc8"),m=a("64b9"),v=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,a,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.generateMnemonic)(c.wordlist,256),e.next=3,l.mnemonicToSeed(t);case 3:return a=e.sent,r=a.slice(0,32).toString("hex"),n=m.Keypair.fromSeed(a.slice(0,32)).publicKey.toString(),e.abrupt("return",{address:n,mnemonic:t,privateKey:r});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,a,r,n,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.generateMnemonic)(c.wordlist,256),e.next=3,Object(i.mnemonicToSeed)(t);case 3:return a=e.sent,e.next=6,Object(o.fromSeed)(a);case 6:return r=e.sent,e.next=9,r.derivePath("m/44'/195'/0'/0");case 9:return n=e.sent,e.next=12,n.privateKey.toString("hex");case 12:return s=e.sent,e.next=15,d.address.fromPrivateKey(s);case 15:return l=e.sent,e.abrupt("return",{address:l,mnemonic:t,privateKey:s});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,a,r,n,s,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.generateMnemonic)(c.wordlist,256),e.next=3,Object(i.mnemonicToSeed)(t);case 3:return a=e.sent,e.next=6,Object(o.fromSeed)(a,u.networks.bitcoin);case 6:return r=e.sent,e.next=9,r.derivePath("m/44'/0'/0'/0");case 9:return n=e.sent,s=n.derive(0).derive(0),l=u.payments.p2pkh({pubkey:s.publicKey,network:u.networks.bitcoin}).address,d=u.payments.p2sh({redeem:u.payments.p2wpkh({pubkey:s.publicKey}),network:u.networks.bitcoin}).address,e.abrupt("return",{address:l,nestedAddress:d,mnemonic:t,privateKey:s.toWIF()});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,a,r,n,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.generateMnemonic)(c.wordlist,256),e.next=3,Object(i.mnemonicToSeed)(t);case 3:return a=e.sent,e.next=6,Object(o.fromSeed)(a);case 6:return r=e.sent,e.next=9,r.derivePath("m/44'/60'/0'/0/0");case 9:return n=e.sent,e.next=12,n.privateKey.toString("hex");case 12:return l=e.sent,d=new s.ethers.Wallet(l),e.abrupt("return",{address:d.address,mnemonic:t,privateKey:l});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,a,r,s,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.generateMnemonic)(c.wordlist,256),e.next=3,Object(i.mnemonicToSeed)(t);case 3:return a=e.sent,e.next=6,Object(o.fromSeed)(a);case 6:return r=e.sent,e.next=9,r.derivePath("m/44'/714'/0'/0");case 9:return s=e.sent,e.next=12,s.privateKey.toString("hex");case 12:return l=e.sent,d=n.crypto.getAddressFromPrivateKey(l,"BNB"),e.abrupt("return",{address:d,mnemonic:t,privateKey:l});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.NewlyCreatedWallet("english",0),e.abrupt("return",{address:t.keys.public_addr,mnemonic:t.mnemonicString,privateKey:t.seed,viewPrivateKey:t.keys.view.sec});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=1===e.t0?4:2===e.t0||3===e.t0||4===e.t0||5===e.t0||11===e.t0||12===e.t0||13===e.t0||14===e.t0?5:6===e.t0?6:7===e.t0?7:8===e.t0?8:9===e.t0?9:10===e.t0?10:11;break;case 4:return e.abrupt("return",f());case 5:return e.abrupt("return",w());case 6:return e.abrupt("return",y());case 7:return e.abrupt("return",x());case 8:return e.abrupt("return",b());case 9:return e.abrupt("return",h());case 10:return e.abrupt("return",v());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},18:function(e,t){},19:function(e,t){},20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},24:function(e,t){},25:function(e,t){},26:function(e,t){},6778:function(e,t,a){},"883d":function(e,t,a){"use strict";a("6778")},d912:function(e,t,a){"use strict";a.r(t);var r=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("b64b"),a("d81d"),a("c740"),a("ed08")),n=a("0c2f"),s=a("b893"),i=a("05b3"),c=a("8325"),o={name:"CreateWallet",components:{QrcodeVue:a("d7b0").a},directives:{clipboard:c.a},data:function(){return{percentage:0,miniContainer:!1,downloadLoading:!1,walletCoinList:i.n,show:{display:"none"},val:null,walletList:[],walletCoin:i.n[0]}},methods:{selectChange:function(e){if(this.$route.path){var t=this.$route.path.lastIndexOf("/"),a=this.$route.path.substring(0,t)+"/"+Object(s.n)(e.name);this.$router.push(a)}},clipboardSuccess:function(){this.$message({message:"Copy successfully",type:"success",duration:1500})},onCreateWallet:function(){var e=this;this.walletCoin?this.val>0&&(this.walletList=[],this.miniContainer=!0,this.show.display="block",setTimeout((function(){e.percentage=30;for(var t=1;t<=e.val;t++)e.createWallet(t)}),500)):this.$message.error(this.$t("createWallet.chooseChainMsg"))},exportExcel:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-5164a781"),a.e("chunk-519483dc"),a.e("chunk-225b9dd7")]).then(a.bind(null,"4bf8")).then((function(t){var a=Object.keys(e.walletList[0]),n=e.walletList,s=e.formatJson(a,n),i=e.walletCoin.name+Object(r.j)(new Date,"{h}{i}{s}");t.export_json_to_excel({header:a,filename:i,data:s}),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(r.j)(t[e]):t[e]}))}))},createWallet:function(e){var t=this;Object(n.a)(this.walletCoin.id).then((function(a){t.walletList.push(a),t.percentage=e/t.val*100}))}},created:function(){var e=this.$route.meta.symbol,t=i.n.findIndex((function(t){return t.name===e}));this.walletCoin=i.n[t]}},l=o,d=(a("883d"),a("2877")),u=Object(d.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",class:{miniContainer:e.miniContainer}},[a("div",{staticClass:"createBox"},[a("div",{staticClass:"boxCenter"},[a("div",{staticClass:"coinIcon"},[a("svg-icon",{style:"color:"+e.walletCoin.color,attrs:{"icon-class":e.walletCoin.icon}})],1),a("div",{staticClass:"inputBox"},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"","value-key":"id",placeholder:e.$t("pleaseChoose")},on:{change:e.selectChange},model:{value:e.walletCoin,callback:function(t){e.walletCoin=t},expression:"walletCoin"}},e._l(e.walletCoinList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),a("span",{staticStyle:{float:"right","font-size":"13px"}},[a("svg-icon",{style:"color:"+t.color,attrs:{"icon-class":t.icon}})],1)])})),1)],1),a("div",{staticClass:"inputBox"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("createWallet.walletNumMsg"),oninput:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:e.val},on:{input:function(t){t.target.composing||(e.val=t.target.value)}}})]),a("div",{staticClass:"icon",on:{click:e.onCreateWallet}},[a("i",{staticClass:"el-icon-right"})]),a("el-button",{staticClass:"exportBtn",style:e.show,attrs:{type:"primary",loading:e.downloadLoading,size:"medium"},on:{click:e.exportExcel}},[a("i",{staticClass:"el-icon-download"}),e._v(" "+e._s(e.$t("export"))+" ")])],1)])]),a("el-progress",{style:e.show,attrs:{type:"line","show-text":!1,percentage:e.percentage}}),a("div",{staticClass:"scrollBox",style:e.show},[a("el-card",{staticClass:"box-card"},e._l(e.walletList,(function(t,r){return a("div",{staticClass:"walletList"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"li"},[a("div",{staticClass:"imgBox"},[a("div",{staticClass:"el-badge item"},[a("qrcode-vue",{attrs:{size:"80",value:t.privateKey}}),a("sup",{staticClass:"el-badge__content el-badge__content--undefined is-fixed"},[e._v(e._s(r+1))])],1)]),a("div",{staticClass:"inputBox"},[a("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:t.address,callback:function(a){e.$set(t,"address",a)},expression:"wallet.address"}},[a("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.address")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.address,expression:"wallet.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2),t.nestedAddress?a("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:t.nestedAddress,callback:function(a){e.$set(t,"nestedAddress",a)},expression:"wallet.nestedAddress"}},[a("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.nestedAddress")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.nestedAddress,expression:"wallet.nestedAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),t.ksmAddress?a("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:t.ksmAddress,callback:function(a){e.$set(t,"ksmAddress",a)},expression:"wallet.ksmAddress"}},[a("template",{slot:"prepend"},[e._v("Ksm"+e._s(e.$t("createWallet.address")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.ksmAddress,expression:"wallet.ksmAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),t.dotAddress?a("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:t.dotAddress,callback:function(a){e.$set(t,"dotAddress",a)},expression:"wallet.dotAddress"}},[a("template",{slot:"prepend"},[e._v("Dot"+e._s(e.$t("createWallet.address")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.dotAddress,expression:"wallet.dotAddress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),a("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:t.privateKey,callback:function(a){e.$set(t,"privateKey",a)},expression:"wallet.privateKey"}},[a("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.privateKey")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.privateKey,expression:"wallet.privateKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2),t.viewPrivateKey?a("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:t.viewPrivateKey,callback:function(a){e.$set(t,"viewPrivateKey",a)},expression:"wallet.viewPrivateKey"}},[a("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.viewPrivateKey")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.viewPrivateKey,expression:"wallet.viewPrivateKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e(),t.mnemonic?a("el-input",{staticStyle:{width:"95%",margin:"5px 20px"},attrs:{disabled:"disabled"},model:{value:t.mnemonic,callback:function(a){e.$set(t,"mnemonic",a)},expression:"wallet.mnemonic"}},[a("template",{slot:"prepend"},[e._v(e._s(e.$t("createWallet.mnemonic")))]),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.mnemonic,expression:"wallet.mnemonic",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.$t("copy")))])],2):e._e()],1)])])],1)})),0)],1)],1)}),[],!1,null,"24bcae68",null);t.default=u.exports},f70f:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id="f70f"}}]);