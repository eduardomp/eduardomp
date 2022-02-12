(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a9f4090e"],{"49f3":function(e,t,r){"use strict";r("d8e0")},"4aba":function(e,t,r){"use strict";r.r(t);var n=r("1da1"),a=r("5530"),o=(r("b0c0"),r("96cf"),r("b6ed")),s=r("fa7e"),c=r("8325"),i=r("2f62"),u=r("7aeb"),d=r("61f7"),m=r("b893"),l=r("ed08"),p=r("e9b6"),b=(r("901e"),r("79fa")),f={name:"createToken",components:{JsonEditor:s.a,NetworkError:o.a},directives:{clipboard:c.a},computed:Object(a.a)({},Object(i.d)({chainNetwork:function(e){return e.dapp.chainNetwork},currentFee:function(e){return e.dapp.authUser.curFee},networkId:function(e){return e.dapp.web3.networkId},myAddress:function(e){return e.dapp.web3.account},initial:function(e){return e.dapp.web3.initial},menu:function(e){return e.settings.menu}})),data:function(){var e=this;return{lWidth:"150px",decimalsCarry:l.d,bar:1,contractCode:p.source,dialog:{contractCode:!1},loading:{submit:!1,inAdmin:!1,updateOwner:!1,destroyOwner:!1,paused:!1,addBlackList:!1,burn:!1,mint:!1,updateFee:!1,tempDestroyOwner:!1},adminFrom:{ownerAddress:"",blackFlag:!0,blackAddress:"",burn:0,mintAmount:"",mintAddress:"",owner:"",name:"",symbol:"",totalSupply:0,txFee:0,burnFee:0,FeeAddress:"",decimals:18,paused:!1,contractAddress:"",newAddress:"",destroyTime:60},inAdminFrom:{address:"",flag:!1},createTokenForm:{tokenName:"",symbol:"",supply:21e3,decimals:18,type:[],advancedSettings:!1,deflation:!1,transferFee:0,burnFee:0,feeAddress:"",tokenOwner:""},rules:{tokenName:[{required:!0,message:b.a.t("createToken.tokenNameMsg"),trigger:"blur"}],symbol:[{required:!0,message:b.a.t("createToken.symbolMsg"),trigger:"blur"}],supply:[{required:!0,message:b.a.t("createToken.supplyMsg"),trigger:"blur"}],decimals:[{required:!0,message:b.a.t("createToken.decimalsMsg"),trigger:"blur"}],tokenOwner:[{validator:function(t,r,n){e.createTokenForm.advancedSettings?""!==r?Object(d.h)(r)?n():n(new Error(e.$t("createToken.addressError"))):n(new Error(e.$t("createToken.inputAddressHint"))):n()},trigger:"blur"}],feeAddress:[{validator:function(t,r,n){e.createTokenForm.deflation?""!==r?Object(d.h)(r)?n():n(new Error(e.$t("createToken.addressError"))):n(new Error(e.$t("createToken.inputAddressHint"))):n()},trigger:"blur"}]}}},methods:{jumpUrl:function(e){this.$router.push(e)},mint:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.adminFrom.mintAddress&&Object(d.h)(e.adminFrom.mintAddress)){t.next=3;break}return e.$message.error(e.$t("createToken.addressError")),t.abrupt("return");case 3:return e.loading.mint=!0,r=e.adminFrom.mintAmount>0?Object(l.c)(e.adminFrom.mintAmount,parseInt(e.adminFrom.decimals)):"0",t.next=7,Object(u.f)(e.adminFrom.contractAddress,e.adminFrom.mintAddress,r);case 7:n=t.sent,e.loading.mint=!1,n&&(e.$message.success(e.$t("success")),e.inAdmin());case 10:case"end":return t.stop()}}),t)})))()},burn:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.burn=!0,r=e.adminFrom.burn>0?Object(l.c)(e.adminFrom.burn,parseInt(e.adminFrom.decimals)):"0",t.next=4,Object(u.b)(e.adminFrom.contractAddress,r);case 4:n=t.sent,e.loading.burn=!1,n&&(e.$message.success(e.$t("success")),e.inAdmin());case 7:case"end":return t.stop()}}),t)})))()},addBlackList:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.adminFrom.blackAddress&&Object(d.h)(e.adminFrom.blackAddress)){t.next=3;break}return e.$message.error(e.$t("createToken.addressError")),t.abrupt("return");case 3:return e.loading.addBlackList=!0,t.next=6,Object(u.a)(e.adminFrom.contractAddress,e.adminFrom.blackAddress,e.adminFrom.blackFlag);case 6:t.sent&&e.$message.success(e.$t("success")),e.loading.addBlackList=!1;case 9:case"end":return t.stop()}}),t)})))()},paused:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=!1,e.loading.paused=!0,!e.adminFrom.paused){t.next=8;break}return t.next=5,Object(u.g)(e.adminFrom.contractAddress);case 5:r=t.sent,t.next=11;break;case 8:return t.next=10,Object(u.i)(e.adminFrom.contractAddress);case 10:r=t.sent;case 11:e.loading.paused=!1,r&&e.$message.success(e.$t("success")),e.inAdmin();case 14:case"end":return t.stop()}}),t)})))()},destroyOwner:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.destroyOwner=!0,t.next=3,Object(u.k)(e.adminFrom.contractAddress);case 3:r=t.sent,e.loading.destroyOwner=!1,r&&(e.$message.success(e.$t("success")),e.inAdmin());case 6:case"end":return t.stop()}}),t)})))()},updateOwner:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.adminFrom.ownerAddress&&Object(d.h)(e.adminFrom.ownerAddress)){t.next=3;break}return e.$message.error(e.$t("createToken.addressError")),t.abrupt("return");case 3:if(e.adminFrom.ownerAddress!==e.adminFrom.owner){t.next=6;break}return e.$message.error(e.$t("createToken.addressSameError")),t.abrupt("return");case 6:return e.loading.updateOwner=!0,t.next=9,Object(u.h)(e.adminFrom.contractAddress,e.adminFrom.ownerAddress);case 9:r=t.sent,e.loading.updateOwner=!1,r&&(e.$message.success(e.$t("success")),e.inAdmin());case 12:case"end":return t.stop()}}),t)})))()},updateFee:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.updateFee=!0,r=e.adminFrom.feeAddress?e.adminFrom.feeAddress:"0x0000000000000000000000000000000000000000",t.next=5,Object(u.j)(e.adminFrom.contractAddress,e.adminFrom.txFee,e.adminFrom.burnFee,r);case 5:n=t.sent,e.loading.updateFee=!1,n&&(e.$message.success(e.$t("success")),e.inAdmin());case 8:case"end":return t.stop()}}),t)})))()},tempDestroyOwner:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading.tempDestroyOwner=!0,t.next=3,Object(u.e)(e.adminFrom.contractAddress,e.adminFrom.destroyTime);case 3:r=t.sent,e.loading.tempDestroyOwner=!1,r&&(e.$message.success(e.$t("success")),e.inAdmin());case 6:case"end":return t.stop()}}),t)})))()},inAdmin:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.inAdminFrom.address&&Object(d.h)(e.inAdminFrom.address)){t.next=3;break}return e.$message.error(e.$t("createToken.addressError")),t.abrupt("return");case 3:if(e.initial){t.next=6;break}return e.$message.error(e.$t("networkError.walletConn")),t.abrupt("return");case 6:return e.loading.inAdmin=!0,t.next=9,Object(u.d)(e.inAdminFrom.address);case 9:if(r=t.sent,e.loading.inAdmin=!1,r.owner&&Object(m.n)(r.owner)===Object(m.n)(e.myAddress)){t.next=16;break}return e.$message.error(e.$t("createToken.PermissionError")),e.inAdminFrom.flag=!1,t.abrupt("return");case 16:e.adminFrom.owner=r.owner,e.adminFrom.name=r.name,e.adminFrom.symbol=r.symbol,e.adminFrom.totalSupply=r.totalSupply,e.adminFrom.txFee=r.txFee,e.adminFrom.burnFee=r.burnFee,e.adminFrom.FeeAddress=r.FeeAddress,e.adminFrom.decimals=r.decimals,e.adminFrom.paused=r.paused,e.adminFrom.contractAddress=r.contractAddress,e.adminFrom.ownerAddress=r.owner,e.inAdminFrom.flag=!0;case 28:case"end":return t.stop()}}),t)})))()},clipboardSuccess:function(){this.$message.success(this.$t("success"))},onBar:function(e){this.bar=e},onCreateToken:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.initial){r.next=3;break}return t.$message.error(t.$t("networkError.walletConn")),r.abrupt("return");case 3:t.$refs[e].validate(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,a,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=11;break}return n=t.createTokenForm.feeAddress?t.createTokenForm.feeAddress:"0x0000000000000000000000000000000000000000",a=t.createTokenForm.tokenOwner?t.createTokenForm.tokenOwner:t.myAddress,o=t.chainNetwork.multiSenderAddress,t.loading.submit=!0,e.next=7,Object(u.c)(t.createTokenForm.tokenName,t.createTokenForm.symbol,t.createTokenForm.decimals,t.createTokenForm.supply,t.createTokenForm.transferFee,t.createTokenForm.burnFee,n,a,o,t.currentFee,t.createTokenForm.type.indexOf("铸币")>-1);case 7:(s=e.sent)&&(t.$message.success(t.$t("success")),Object(m.a)(s,t.createTokenForm.symbol,t.createTokenForm.decimals)),t.loading.submit=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return r.stop()}}),r)})))()}},created:function(){document.body.clientWidth<640&&(this.lWidth="100px")}},k=f,w=(r("eb0e"),r("2877")),F=Object(w.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.menu?r("NetworkError"):e._e(),r("div",{staticClass:"card"},[r("div",{staticClass:"left"},[r("div",{staticClass:"codeView",on:{click:function(t){e.dialog.contractCode=!0}}},[r("svg-icon",{attrs:{"icon-class":"code"}})],1),r("svg-icon",{staticClass:"icon",attrs:{"icon-class":"tokenAdmin"}}),r("h1",[e._v(e._s(e.$t("createToken.createToken")))]),r("p",{staticClass:"desc"},[e._v(e._s(e.$t("createToken.tips1")))]),r("p",{staticClass:"desc"},[e._v(e._s(e.$t("createToken.tips2")))]),r("p",{staticClass:"desc"},[e._v(e._s(e.$t("createToken.tips3")))]),r("p",{staticClass:"desc"},[e._v(e._s(e.$t("createToken.tips4")))]),r("p",{staticClass:"desc"},[e._v(e._s(e.$t("createToken.tips5")))]),r("div",{staticClass:"bottomBtn"},[r("el-button",{attrs:{type:"success",plain:""},on:{click:function(t){return e.jumpUrl("/createToken/V2")}}},[e._v(e._s(e.$t("createToken.createTokenV2")))]),r("el-button",{attrs:{type:"success",plain:""},on:{click:function(t){return e.jumpUrl("/lock/create")}}},[e._v("Token Lock")])],1)],1),r("div",{staticClass:"right"},[r("div",{staticClass:"rightBox"},[r("div",{staticClass:"tabDiv"},[r("ul",{staticClass:"tabs"},[r("li",{class:1===e.bar?"on":"",on:{click:function(t){return e.onBar(1)}}},[e._v(e._s(e.$t("createToken.createToken")))]),r("li",{class:2===e.bar?"on":"",on:{click:function(t){return e.onBar(2)}}},[e._v(e._s(e.$t("createToken.createAdmin")))]),r("li",{on:{click:function(t){return e.jumpUrl("/createToken/V2")}}},[e._v(e._s(e.$t("createToken.createTokenV2")))])])]),r("div",{staticClass:"formBox",style:1===e.bar?"display: block":"display: none"},[r("el-form",{ref:"createTokenForm",attrs:{model:e.createTokenForm,rules:e.rules,"status-icon":"","label-width":e.lWidth}},[r("el-form-item",{attrs:{label:e.$t("createToken.tokenName")+":",prop:"tokenName"}},[r("el-input",{attrs:{placeholder:"Good Luck Token"},model:{value:e.createTokenForm.tokenName,callback:function(t){e.$set(e.createTokenForm,"tokenName",t)},expression:"createTokenForm.tokenName"}})],1),r("el-form-item",{attrs:{label:e.$t("createToken.symbol")+":",prop:"symbol"}},[r("el-input",{attrs:{placeholder:"GLT"},model:{value:e.createTokenForm.symbol,callback:function(t){e.$set(e.createTokenForm,"symbol",t)},expression:"createTokenForm.symbol"}})],1),r("el-form-item",{attrs:{label:e.$t("createToken.initialSupply")+":",prop:"supply"}},[r("el-input",{model:{value:e.createTokenForm.supply,callback:function(t){e.$set(e.createTokenForm,"supply",t)},expression:"createTokenForm.supply"}})],1),r("el-form-item",{attrs:{label:e.$t("createToken.decimals")+"(1-18):",prop:"decimals"}},[r("el-input-number",{attrs:{min:1,max:18},model:{value:e.createTokenForm.decimals,callback:function(t){e.$set(e.createTokenForm,"decimals",t)},expression:"createTokenForm.decimals"}})],1),r("el-form-item",{attrs:{prop:"advancedSettings"}},[r("el-switch",{attrs:{"active-text":e.$t("createToken.advanced")},model:{value:e.createTokenForm.advancedSettings,callback:function(t){e.$set(e.createTokenForm,"advancedSettings",t)},expression:"createTokenForm.advancedSettings"}})],1),r("el-form-item",{style:e.createTokenForm.advancedSettings?"":"display: none",attrs:{label:e.$t("createToken.owner")+":",prop:"tokenOwner"}},[r("el-input",{attrs:{placeholder:e.$t("createToken.tokenOwnerHint")},model:{value:e.createTokenForm.tokenOwner,callback:function(t){e.$set(e.createTokenForm,"tokenOwner",t)},expression:"createTokenForm.tokenOwner"}})],1),r("el-form-item",{attrs:{label:e.$t("createToken.otherConfig")+":",prop:"type"}},[r("el-checkbox-group",{model:{value:e.createTokenForm.type,callback:function(t){e.$set(e.createTokenForm,"type",t)},expression:"createTokenForm.type"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.canBurnTooltip"),placement:"top"}},[r("el-checkbox",{attrs:{label:e.$t("createToken.canBurn"),name:"type"}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.canMintTooltip"),placement:"top"}},[r("el-checkbox",{attrs:{label:e.$t("createToken.canMint"),name:"type"}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.canPauseTooltip"),placement:"top"}},[r("el-checkbox",{attrs:{label:e.$t("createToken.canPause"),name:"type"}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("createToken.blackListTooltip"),placement:"top"}},[r("el-checkbox",{attrs:{label:e.$t("createToken.blackList"),name:"type"}})],1)],1)],1),r("el-form-item",{attrs:{prop:"type"}},[r("el-checkbox-group",{model:{value:e.createTokenForm.deflation,callback:function(t){e.$set(e.createTokenForm,"deflation",t)},expression:"createTokenForm.deflation"}},[r("el-checkbox",{attrs:{label:e.$t("createToken.Deflation"),name:"deflation"}})],1)],1),e.createTokenForm.deflation?r("el-form-item",{attrs:{label:e.$t("createToken.transactionFee")+":",prop:"transferFee"}},[r("el-input-number",{attrs:{min:0,max:99,"controls-position":"right"},model:{value:e.createTokenForm.transferFee,callback:function(t){e.$set(e.createTokenForm,"transferFee",t)},expression:"createTokenForm.transferFee"}}),e._v(" % "),r("br"),r("el-tag",{staticClass:"transferFeeTag",attrs:{type:"success"}},[e._v(e._s(e.$t("createToken.transferFeeTag")))])],1):e._e(),e.createTokenForm.deflation?r("el-form-item",{attrs:{label:e.$t("createToken.burnFee")+":",prop:"burnFee"}},[r("el-input-number",{attrs:{min:0,max:99,"controls-position":"right"},model:{value:e.createTokenForm.burnFee,callback:function(t){e.$set(e.createTokenForm,"burnFee",t)},expression:"createTokenForm.burnFee"}}),e._v(" % "),r("br"),r("el-tag",{staticClass:"burnFeeTag",attrs:{type:"success"}},[e._v(e._s(e.$t("createToken.burnFeeTag")))])],1):e._e(),r("el-form-item",{style:e.createTokenForm.deflation?"":"display: none",attrs:{label:e.$t("createToken.receiveAddress")+":",prop:"feeAddress"}},[r("el-input",{attrs:{placeholder:e.$t("createToken.inputAddressHint")},model:{value:e.createTokenForm.feeAddress,callback:function(t){e.$set(e.createTokenForm,"feeAddress",t)},expression:"createTokenForm.feeAddress"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loading.submit},on:{click:function(t){return e.onCreateToken("createTokenForm")}}},[e._v(e._s(e.$t("createToken.createBtn")))]),r("el-link",{attrs:{target:"_blank",href:"https://www.youtube.com/watch?v=K0PExlXV0LI"}},[e._v(" "+e._s(e.$t("createToken.teachVideo"))),r("i",{staticClass:"el-icon-view el-icon--right"})])],1)],1)],1),r("div",{staticClass:"formBox",style:2===e.bar?"display: block":"display: none"},[e.inAdminFrom.flag?e._e():r("el-form",{ref:"inAdminFrom",attrs:{model:e.inAdminFrom,"label-width":e.lWidth}},[r("el-form-item",{attrs:{label:e.$t("createToken.tokenAddress")+":"}},[r("el-input",{attrs:{placeholder:e.$t("createToken.inputTokenAddressHint")},model:{value:e.inAdminFrom.address,callback:function(t){e.$set(e.inAdminFrom,"address",t)},expression:"inAdminFrom.address"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.loading.inAdmin},on:{click:function(t){return e.inAdmin()}}},[e._v(e._s(e.$t("confirm")))])],1)],1),e.inAdminFrom.flag?r("el-form",{ref:"adminFrom",attrs:{model:e.adminFrom,"label-width":e.lWidth}},[r("el-form-item",{attrs:{label:e.$t("createToken.tokenName")+":"}},[r("el-tag",[e._v(e._s(e.adminFrom.name))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.supply")+":"}},[r("el-tag",{attrs:{type:"danger"}},[e._v(e._s(e.decimalsCarry(e.adminFrom.totalSupply)))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.ownerAddress")+":"}},[r("el-input",{staticClass:"oper",attrs:{placeholder:e.$t("createToken.inputTokenAddressHint")},model:{value:e.adminFrom.ownerAddress,callback:function(t){e.$set(e.adminFrom,"ownerAddress",t)},expression:"adminFrom.ownerAddress"}}),r("el-button",{attrs:{type:"primary",loading:e.loading.updateOwner},on:{click:function(t){return e.updateOwner()}}},[e._v(e._s(e.$t("confirm")))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.destroyOwner")+":"}},[r("el-button",{attrs:{type:"danger",loading:e.loading.destroyOwner},on:{click:function(t){return e.destroyOwner()}}},[e._v(e._s(e.$t("confirm")))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.tokenPause")+":"}},[r("el-switch",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.paused,expression:"loading.paused"}],on:{change:function(t){return e.paused()}},model:{value:e.adminFrom.paused,callback:function(t){e.$set(e.adminFrom,"paused",t)},expression:"adminFrom.paused"}})],1),r("el-form-item",{attrs:{label:e.$t("createToken.blackListOper")+":"}},[r("el-radio",{attrs:{label:!0},model:{value:e.adminFrom.blackFlag,callback:function(t){e.$set(e.adminFrom,"blackFlag",t)},expression:"adminFrom.blackFlag"}},[e._v(e._s(e.$t("createToken.add")))]),r("el-radio",{attrs:{label:!1},model:{value:e.adminFrom.blackFlag,callback:function(t){e.$set(e.adminFrom,"blackFlag",t)},expression:"adminFrom.blackFlag"}},[e._v(e._s(e.$t("createToken.remove")))])],1),r("el-form-item",[r("el-input",{staticClass:"oper",attrs:{placeholder:e.$t("createToken.inputTokenAddressHint")},model:{value:e.adminFrom.blackAddress,callback:function(t){e.$set(e.adminFrom,"blackAddress",t)},expression:"adminFrom.blackAddress"}}),r("el-button",{attrs:{type:"primary",loading:e.loading.addBlackList},on:{click:function(t){return e.addBlackList()}}},[e._v(e._s(e.$t("confirm")))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.burnAmount")+":"}},[r("el-input-number",{staticClass:"oper",attrs:{min:1,"controls-position":"right"},model:{value:e.adminFrom.burn,callback:function(t){e.$set(e.adminFrom,"burn",t)},expression:"adminFrom.burn"}}),r("el-button",{attrs:{type:"primary",loading:e.loading.burn},on:{click:function(t){return e.burn()}}},[e._v(e._s(e.$t("confirm")))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.mintAmount")+":"}},[r("el-input-number",{staticClass:"oper",attrs:{min:1,"controls-position":"right"},model:{value:e.adminFrom.mintAmount,callback:function(t){e.$set(e.adminFrom,"mintAmount",t)},expression:"adminFrom.mintAmount"}})],1),r("el-form-item",[r("el-input",{staticClass:"oper",attrs:{placeholder:e.$t("createToken.inputTokenAddressHint")},model:{value:e.adminFrom.mintAddress,callback:function(t){e.$set(e.adminFrom,"mintAddress",t)},expression:"adminFrom.mintAddress"}}),r("el-button",{attrs:{type:"primary",loading:e.loading.mint},on:{click:function(t){return e.mint()}}},[e._v(e._s(e.$t("confirm")))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.transactionFee")+":",prop:"transferFee"}},[r("el-input-number",{attrs:{min:0,max:99,"controls-position":"right"},model:{value:e.adminFrom.txFee,callback:function(t){e.$set(e.adminFrom,"txFee",t)},expression:"adminFrom.txFee"}}),e._v(" % ")],1),r("el-form-item",{attrs:{label:e.$t("createToken.burnFee")+":",prop:"burnFee"}},[r("el-input-number",{attrs:{min:0,max:99,"controls-position":"right"},model:{value:e.adminFrom.burnFee,callback:function(t){e.$set(e.adminFrom,"burnFee",t)},expression:"adminFrom.burnFee"}}),e._v(" % ")],1),r("el-form-item",{attrs:{label:e.$t("createToken.receiveAddress")+":",prop:"feeAddress"}},[r("el-input",{staticClass:"oper",attrs:{placeholder:e.$t("createToken.inputAddressHint")},model:{value:e.adminFrom.feeAddress,callback:function(t){e.$set(e.adminFrom,"feeAddress",t)},expression:"adminFrom.feeAddress"}}),r("el-button",{attrs:{type:"primary",loading:e.loading.updateFee},on:{click:function(t){return e.updateFee()}}},[e._v(e._s(e.$t("confirm")))])],1),r("el-form-item",{attrs:{label:e.$t("createToken.tempDestroyOwner")+":",prop:"feeAddress"}},[r("el-input-number",{attrs:{min:1,"controls-position":"right"},model:{value:e.adminFrom.destroyTime,callback:function(t){e.$set(e.adminFrom,"destroyTime",t)},expression:"adminFrom.destroyTime"}}),e._v(e._s(e.$t("createToken.second"))+" "),r("el-button",{attrs:{type:"primary",loading:e.loading.tempDestroyOwner},on:{click:function(t){return e.tempDestroyOwner()}}},[e._v(e._s(e.$t("confirm")))]),r("br"),r("el-tag",{staticClass:"burnFeeTag",attrs:{type:"success"}},[e._v(e._s(e.$t("createToken.tempDestroyOwnerTips")))])],1)],1):e._e()],1),r("div",{staticClass:"tips"},[e._v(e._s(e.$t("createToken.warmTips")))])])])]),r("el-dialog",{attrs:{title:e.$t("createToken.contractCode"),visible:e.dialog.contractCode,width:"50%",center:""},on:{"update:visible":function(t){return e.$set(e.dialog,"contractCode",t)}}},[r("div",{staticStyle:{height:"300px","overflow-y":"scroll"}},[r("json-editor",{ref:"jsonEditor",model:{value:e.contractCode,callback:function(t){e.contractCode=t},expression:"contractCode"}})],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialog.contractCode=!1}}},[e._v(e._s(e.$t("cancel")))]),r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.contractCode,expression:"contractCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"primary",icon:"el-icon-document-copy"}},[e._v(e._s(e.$t("copy")))])],1)])],1)}),[],!1,null,"66b47b3e",null);t.default=F.exports},"4c94":function(e,t,r){},"7aeb":function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return i})),r.d(t,"h",(function(){return u})),r.d(t,"k",(function(){return d})),r.d(t,"e",(function(){return m})),r.d(t,"i",(function(){return l})),r.d(t,"g",(function(){return p})),r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f})),r.d(t,"f",(function(){return k})),r.d(t,"j",(function(){return w}));var n=r("1da1"),a=(r("b0c0"),r("96cf"),r("4360")),o=r("e9b6"),s=r("cf29"),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n,c,i,u,d,m,l,p,b){var f,k,w,F;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Create Token",f={value:p,from:a.a.state.dapp.web3.account,gas:35e5},k=[t,r,n,c,i,u,d,m,l],w={data:b?o.mintBytecode:o.bytecode,arguments:k},F=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi),e.next=8,Object(s.a)(F,f,w,"Create Token",a.a.state.dapp.web3.account);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t,r,n,a,o,s,c,i,u,d,m){return e.apply(this,arguments)}}(),i=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,c,i,u,d,m,l,p,b,f,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="getCoinTokenInfo",n=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),c={name:"owner",erc20:!0,data:[]},e.next=5,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 5:return i=e.sent,c.name="name",e.next=9,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 9:return u=e.sent,c.name="symbol",e.next=13,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 13:return d=e.sent,c.name="totalSupply",e.next=17,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 17:return m=e.sent,c.name="txFee",e.next=21,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 21:return l=e.sent,c.name="burnFee",e.next=25,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 25:return p=e.sent,c.name="FeeAddress",e.next=29,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 29:return b=e.sent,c.name="decimals",e.next=33,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 33:return f=e.sent,c.name="paused",e.next=37,Object(s.b)(n,c,a.a.state.dapp.web3.account,r);case 37:return k=e.sent,e.abrupt("return",{owner:i,name:u,symbol:d,totalSupply:m,txFee:l,burnFee:p,FeeAddress:b,decimals:f,paused:k,contractAddress:t});case 39:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"setOwnerAddress",n={name:"transferOwnership",erc20:!0,data:[r]},c=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=7,Object(s.c)(c,n,a.a.state.dapp.web3.account,"setOwnerAddress");case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"waiveOwnership",r={name:"waiveOwnership",erc20:!0,data:[]},n=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=6,Object(s.c)(n,r,a.a.state.dapp.web3.account,"waiveOwnership");case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"lock",n={name:"lock",erc20:!0,data:[r]},c=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=5,Object(s.c)(c,n,a.a.state.dapp.web3.account,"lock");case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"unpause",r={name:"unpause",erc20:!0,data:[]},n=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=5,Object(s.c)(n,r,a.a.state.dapp.web3.account,"unpause");case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"pause",r={name:"pause",erc20:!0,data:[]},n=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=5,Object(s.c)(n,r,a.a.state.dapp.web3.account,"pause");case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var c,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",c=n?"add black address":"remove black address",i={name:"blackListAddress",erc20:!0,data:[r,n]},u=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=6,Object(s.c)(u,i,a.a.state.dapp.web3.account,c);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"burn",n={name:"burn",erc20:!0,data:[r]},c=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=5,Object(s.c)(c,n,a.a.state.dapp.web3.account,"burn");case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mint",c={name:"mint",erc20:!0,data:[r,n]},i=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=5,Object(s.c)(i,c,a.a.state.dapp.web3.account,"mint");case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n,c){var i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"updateFee",i={name:"updateFee",erc20:!0,data:[r,n,c]},u=new a.a.state.dapp.web3.web3Instance.eth.Contract(o.abi,t),e.next=5,Object(s.c)(u,i,a.a.state.dapp.web3.account,"updateFee");case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}()},b05e:function(e,t,r){"use strict";r("4c94")},b6ed:function(e,t,r){"use strict";var n=r("5530"),a=r("2f62"),o=r("b893"),s={name:"NetworkError.vue",computed:Object(n.a)({},Object(a.d)({myAddress:function(e){return e.dapp.web3.account},networkId:function(e){return e.dapp.web3.networkId},web3Instance:function(e){return e.dapp.web3.web3Instance},initial:function(e){return e.dapp.web3.initial},chainNetwork:function(e){return e.dapp.chainNetwork}})),watch:{initial:function(){this.initCheck()}},data:function(){return{routerChain:null,show:!1}},methods:{close:function(){this.show=!1},changeNetwork:function(){if(1!==this.routerChain.chainId)Object(o.c)(this.routerChain);else{var e=this.routerChain.chainName+"网络需要你手动切换！";this.$message.warning(e)}},justNetwork:function(){if(this.$route.path){var e=this.$route.path.lastIndexOf("/"),t=this.$route.path.substring(0,e)+"/"+Object(o.m)(this.chainNetwork.aliasName);this.$router.push(t)}},initCheck:function(){if(this.initial){var e=this.$route.meta.symbol;this.routerChain=Object(o.i)(e),this.routerChain&&this.routerChain.chainId!==this.networkId&&(this.show=!0)}}},created:function(){this.initCheck()}},c=s,i=(r("b05e"),r("2877")),u=Object(i.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:"NetworkError"},[r("h5",{staticClass:"title"},[r("i",{staticClass:"el-icon-warning icon"}),r("span",[e._v(e._s(e.$t("networkError.warning")))])]),r("p",{staticClass:"desc"},[e._v(e._s(e.$t("networkError.warningTips",[e.routerChain.aliasName])))]),r("div",{staticClass:"btnBox"},[r("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(t){return e.changeNetwork()}}},[e._v(e._s(e.$t("networkError.changeNetwork",[e.routerChain.aliasName])))]),r("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(t){return e.justNetwork()}}},[e._v(e._s(e.$t("networkError.justNetwork")))])],1),r("div",{staticClass:"close",on:{click:function(t){return e.close()}}},[r("i",{staticClass:"el-icon-close"})])]):e._e()}),[],!1,null,"8ec2da7c",null);t.a=u.exports},d8e0:function(e,t,r){},e39d:function(e,t,r){},eb0e:function(e,t,r){"use strict";r("e39d")},fa7e:function(e,t,r){"use strict";var n=r("56b3"),a=r.n(n);r("0dd0"),r("a7be"),r("acdf"),r("f9d4"),r("8822"),r("d2de"),r("ae67");var o={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){e!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(this.value)}},mounted:function(){var e=this;this.jsonEditor=a.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,theme:"idea",screenReaderLabel:"text/javascript",lint:!0}),this.jsonEditor.setValue(this.value),this.jsonEditor.on("change",(function(t){e.$emit("changed",t.getValue())})),this.jsonEditor.on("inputRead",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},s=o,c=(r("49f3"),r("2877")),i=Object(c.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"json-editor"},[t("textarea",{ref:"textarea",attrs:{placeholder:"请输入地址和数量，以逗号分隔"}})])}),[],!1,null,"358ecc3c",null);t.a=i.exports}}]);