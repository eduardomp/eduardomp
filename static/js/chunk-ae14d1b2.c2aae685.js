(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ae14d1b2"],{19:function(e,t){},20:function(e,t){},21:function(e,t){},"323c":function(e,t,n){"use strict";n.r(t);var a=n("b85c"),r=n("1da1"),s=n("5530"),i=(n("96cf"),n("b680"),n("d3b7"),n("b0c0"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("159b"),n("a434"),n("ac1f"),n("1276"),n("a15b"),n("c740"),n("3796")),o=n("fa7e"),u=n("05b3"),l=n("828d"),c=n("61f7"),p=n("7052"),d=n("2f62"),y=n("b893"),m=n("ed08"),f=n("99e5"),b=n.n(f),h=n("901e"),v=n.n(h),g={name:"batchCheckBalance",components:{JsonEditor:o.a,UploadExcelComponent:i.a},computed:Object(s.a)(Object(s.a)({},Object(d.d)({chainNetwork:function(e){return e.dapp.chainNetwork},networkId:function(e){return e.dapp.web3.networkId},myAddress:function(e){return e.dapp.web3.account},initial:function(e){return e.dapp.web3.initial},web3Instance:function(e){return e.dapp.web3.web3Instance}})),{},{sunBalance:function(){return this.dataList&&this.dataList.length>0?this.dataList.reduce((function(e,t){return new v.a(t.balance).plus(e)}),0).toFixed(4):new v.a(0).toFixed(4)}}),data:function(){return{web3:null,global:{},value:"",show:{progress:!1,editor:!1},dialog:{setAmount:!1,openUpload:!1},tokenHoldScan:null,tokenHoldScanList:u.b,selectToken:null,userTokenAddress:[],loading:{scan:!1,exp:!1,select:!1},dataList:[],errorArray:[],demo:"0xd41b9AC5767cd90AbC7C997730591cBb7223D3D9\n0xB3CAB50183a7e414F3615eF1394384C203d8A8F5\n0x20b7819894b14C46Cb3c10704C6A5f13C36b7983",filterRepeat:!0,multipleSelection:[],statusArray:[{index:0,name:"batchCheck.statusInfo",type:"info"},{index:1,name:"batchCheck.statusSuccess",type:"success"},{index:2,name:"batchCheck.statusDanger",type:"danger"}]}},methods:{exportExcel:function(){var e=this;if(0!==this.$refs.multipleTable.selection.length){this.loading.download=!0;var t=this.selectToken?this.selectToken.name:this.global.symbol;Promise.all([n.e("chunk-519483dc"),n.e("chunk-09290bef")]).then(n.bind(null,"4bf8")).then((function(n){var a=["id","address","balance"],r=e.$refs.multipleTable.selection,s=e.formatJson(a,r),i=t+Object(m.i)(new Date,"{h}{i}{s}");n.export_json_to_excel({header:a,filename:i,data:s}),e.loading.download=!1}))}else this.$message.error(this.$t("batchCheck.selectionTips"))},delSelect:function(){if(0!==this.$refs.multipleTable.selection.length){var e=this.$refs.multipleTable.selection.map((function(e){return e.id}));this.dataList=this.dataList.filter((function(t){return-1===e.indexOf(t.id)}))}else this.$message.error(this.$t("batchCheck.selectionTips"))},toggleSelection:function(e){var t=this;this.$refs.multipleTable.clearSelection(),e&&e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)}))},handleDelete:function(e,t){t.splice(e,1)},handleRefresh:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function a(){var r,s,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n.selectToken){a.next=17;break}return a.next=3,Object(p.a)(n.selectToken.address,n.web3);case 3:return r=a.sent,a.prev=4,a.next=7,Object(p.c)(n.selectToken.address,r,t[e].address,n.web3);case 7:s=a.sent,t[e].balance=s.toNumber(),t[e].result=1,a.next=15;break;case 12:a.prev=12,a.t0=a.catch(4),t[e].result=2;case 15:a.next=29;break;case 17:return a.prev=17,a.next=20,Object(p.d)(t[e].address,n.global.decimals,n.web3);case 20:i=a.sent,t[e].balance=i.toNumber(),t[e].result=1,a.next=29;break;case 25:a.prev=25,a.t1=a.catch(17),t[e].result=2;case 29:n.$message.success(n.$t("success"));case 30:case"end":return a.stop()}}),a,null,[[4,12],[17,25]])})))()},handleSelectionChange:function(e){this.multipleSelection=e},deleteError:function(){if(0!==this.errorArray.filter((function(e){return 4!==e.errorStatus})).length){var e=this.value.split("\n"),t=this.errorArray.filter((function(e){return 4!==e.errorStatus})).map((function(e){return e.index})),n=e.filter((function(e,n,a){return-1===t.indexOf(n)}));0!==n.length?this.value=n.join("\n"):this.value=""}},deleteRepeat:function(){if(this.deleteError(),0!==this.errorArray.filter((function(e){return 4===e.errorStatus})).length){var e=this.value.split("\n").filter((function(e,t,n){return n.findIndex((function(t){return t.split(",")[0]===e.split(",")[0]}))===t}));0!==e.length?this.value=e.join("\n"):this.value=""}},retainRepeat:function(){var e=this;this.filterRepeat=!1,this.deleteError(),setTimeout((function(){e.filterRepeat=!0}),800)},getDemo:function(){this.value=this.demo},editorChanged:function(e){this.errorArray=[],""!==e&&this.validateNumber(e)},validateNumber:function(e){var t=this,n=e.split("\n");n.forEach((function(e,a){var r=e;if(Object(c.h)(r)){if(t.filterRepeat){var s=n.filter((function(e){return e.split(",")[0]===r})).length;if(s>1){var i={index:a,content:e,errorStatus:4,count:s};return void t.errorArray.push(i)}}}else{var o={index:a,content:r,errorStatus:2};t.errorArray.push(o)}}))},beforeUpload:function(e){return!!(e.size/1024/1024<10)||(this.$message.warning(this.$t("batchCheck.fileSizeTips")),!1)},handleSuccess:function(e){var t=e.results,n=e.header;this.value=n&&t?t.map((function(e){return e.Address})).join("\n"):t,this.dialog.openUpload=!1,this.editorChanged(this.value)},selectChange:function(e){if(this.$route.path){var t=this.$route.path.lastIndexOf("/"),n=this.$route.path.substring(0,t)+"/"+Object(y.m)(e.name);this.$router.push(n)}},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(m.i)(t[e]):t[e]}))}))},scanToken:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,s,i,o,u,l,c,d,y,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.value){t.next=3;break}return e.$message.error(e.$t("batchCheck.scanTokenError")),t.abrupt("return");case 3:if(e.loading.scan=!0,n=e.value.split("\n"),e.dataList=[],r=1,n.forEach((function(t){e.dataList.push({address:t,id:r++,balance:0,result:0})})),e.show.progress=!0,!e.selectToken){t.next=41;break}return t.next=12,Object(p.a)(e.selectToken.address,e.web3);case 12:s=t.sent,i=Object(a.a)(e.dataList),t.prev=14,i.s();case 16:if((o=i.n()).done){t.next=31;break}return u=o.value,t.prev=18,t.next=21,Object(p.c)(e.selectToken.address,s,u.address,e.web3);case 21:l=t.sent,u.balance=l.toNumber(),u.result=1,t.next=29;break;case 26:t.prev=26,t.t0=t.catch(18),u.result=2;case 29:t.next=16;break;case 31:t.next=36;break;case 33:t.prev=33,t.t1=t.catch(14),i.e(t.t1);case 36:return t.prev=36,i.f(),t.finish(36);case 39:t.next=68;break;case 41:c=Object(a.a)(e.dataList),t.prev=42,c.s();case 44:if((d=c.n()).done){t.next=60;break}return y=d.value,t.prev=46,t.next=49,Object(p.d)(y.address,e.global.decimals,e.web3);case 49:m=t.sent,y.balance=m.toNumber(),y.result=1,t.next=58;break;case 54:t.prev=54,t.t2=t.catch(46),y.result=2;case 58:t.next=44;break;case 60:t.next=65;break;case 62:t.prev=62,t.t3=t.catch(42),c.e(t.t3);case 65:return t.prev=65,c.f(),t.finish(65);case 68:e.loading.scan=!1,e.$message.success(e.$t("success"));case 70:case"end":return t.stop()}}),t,null,[[14,33,36,39],[18,26],[42,62,65,68],[46,54]])})))()},remoteSelect:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=t.userTokenAddress.findIndex((function(t){return t.address===e})),!Object(c.h)(e)||-1!==a){n.next=11;break}return t.loading.select=!0,n.next=5,Object(p.b)(e,t.web3);case 5:return r=n.sent,n.next=8,Object(p.a)(e,t.web3);case 8:s=n.sent,t.loading.select=!1,r&&s?t.userTokenAddress.push({name:r,address:e,decimals:parseInt(s)}):t.$message.error(t.$t("batchCheck.invalidContractAddress"));case 11:case"end":return n.stop()}}),n)})))()},initConfig:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.global.symbol=e.$route.meta.symbol,n=u.b.findIndex((function(t){return t.symbol===e.global.symbol})),n>-1&&(e.tokenHoldScan=u.b[n]),a=Object(y.i)(e.$route.meta.symbol),e.web3=new b.a(new b.a.providers.HttpProvider(a.rpcUrls[0])),e.global.chainId=a.chainId,e.global.rpcUrls=a.rpcUrls[0],e.global.decimals=a.decimals;case 8:case"end":return t.stop()}}),t)})))()},getUserInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.global.chainId||!e.myAddress){t.next=7;break}return e.loading.select=!0,t.next=4,Object(l.g)(e.global.chainId,e.myAddress).catch((function(e){return{data:null}}));case 4:(n=t.sent).data&&(e.userTokenAddress=n.data),e.loading.select=!1;case 7:case"end":return t.stop()}}),t)})))()}},created:function(){this.initConfig()},mounted:function(){this.getUserInfo()}},T=g,x=(n("572f"),n("2877")),k=Object(x.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"rpcInfo"},[n("span",[e._v(e._s(e.$t("batchCheck.rpcNode"))+": "+e._s(e.global.rpcUrls))]),n("el-button",{attrs:{icon:"el-icon-setting",type:"success",size:"medium"}},[e._v(e._s(e.$t("batchCheck.setting")))])],1),n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextLeft"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("batchCheck.chain"))+" "),n("el-tooltip",{attrs:{content:e.$t("batchCheck.selectChain"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1),n("svg-icon",{style:"color: "+e.tokenHoldScan.color,attrs:{"icon-class":e.tokenHoldScan.icon}})],1)]),n("div",{staticClass:"switchBox"},[n("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",placeholder:e.$t("pleaseChoose")},on:{change:e.selectChange},model:{value:e.tokenHoldScan,callback:function(t){e.tokenHoldScan=t},expression:"tokenHoldScan"}},e._l(e.tokenHoldScanList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),n("span",{staticStyle:{float:"right","font-size":"13px"}},[n("svg-icon",{style:"color:"+t.color,attrs:{"icon-class":t.icon}})],1)])})),1)],1)]),n("div",{staticClass:"inputContext inputContextRight"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("batchCheck.tokenAddress"))+" "),n("el-tooltip",{attrs:{content:e.$t("batchCheck.tokenTips"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1),n("el-tag",{attrs:{type:"success",size:"medium"}},[e._v(e._s(e.$t("batchCheck.tips1",[e.global.symbol])))])],1)]),n("div",{staticClass:"switchBox"},[n("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.select,expression:"loading.select"}],staticStyle:{width:"100%"},attrs:{"value-key":"address",filterable:"",clearable:"",remote:"","remote-method":e.remoteSelect,placeholder:e.$t("batchCheck.tokenTips")},model:{value:e.selectToken,callback:function(t){e.selectToken=t},expression:"selectToken"}},e._l(e.userTokenAddress,(function(t){return n("el-option",{key:t.address,attrs:{label:t.name,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.address))])])})),1)],1)])]),n("div",{staticClass:"editor"},[n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("batchCheck.addressList")))]),e.dialog.openUpload?n("span",{staticClass:"btnText",on:{click:function(t){e.dialog.openUpload=!1}}},[e._v(e._s(e.$t("batchCheck.insertManually")))]):n("span",{staticClass:"btnText",on:{click:function(t){e.dialog.openUpload=!0}}},[e._v(e._s(e.$t("batchCheck.uploadFile")))])]),e.dialog.openUpload?n("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}):n("json-editor",{ref:"jsonEditor",on:{changed:e.editorChanged},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e.dialog.openUpload?n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("batchCheck.accepted"))+"： CSV / Excel / Txt")]),n("span",{staticClass:"btnText"},[n("a",{attrs:{target:"_blank",href:"/address_example.xlsx"}},[e._v(e._s(e.$t("batchCheck.downExample")))])])]):n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("batchCheck.tips2")))]),n("span",{staticClass:"btnText",on:{click:function(t){return e.getDemo()}}},[e._v(e._s(e.$t("batchCheck.showExample")))])]),e.errorArray.length>0?n("div",{staticClass:"errorInfo"},[e.errorArray.findIndex((function(e){return 4===e.errorStatus}))>-1?n("div",{staticClass:"label-remark"},[n("span",[e._v(e._s(e.$t("batchCheck.duplicateAddress")))]),n("span",{staticClass:"btnText",on:{click:function(t){return e.deleteRepeat()}}},[e._v(e._s(e.$t("batchCheck.keepFirstOne")))])]):e.errorArray.findIndex((function(e){return 4!==e.errorStatus}))>-1?n("div",{staticClass:"label-remark"},[n("span",[e._v(e._s(e.$t("batchCheck.tips4")))]),n("span",{staticClass:"btnText",on:{click:function(t){return e.deleteError()}}},[e._v(e._s(e.$t("batchCheck.deleteThem")))])]):e._e(),n("div",{staticClass:"ul"},e._l(e.errorArray,(function(t,a){return n("div",{key:a,staticClass:"li"},[2===t.errorStatus?n("span",[e._v(e._s(e.$t("batchCheck.tips3",[t.index+1]))+": "+e._s(t.content)+" "+e._s(e.$t("batchCheck.invalidAddress")))]):e._e(),4===t.errorStatus?n("span",[e._v(e._s(e.$t("batchCheck.tips3",[t.index+1]))+": "+e._s(t.content)+" "+e._s(e.$t("batchCheck.invalidDupAddress")))]):e._e()])})),0)]):e._e()],1),n("div",{staticClass:"search"},[n("el-button",{attrs:{icon:"el-icon-search",size:"success",disabled:e.errorArray&&e.errorArray.length>0,loading:e.loading.scan},on:{click:function(t){return e.scanToken()}}},[e._v(e._s(e.$t("batchCheck.selectBalance")))])],1),e.show.progress?n("div",{staticClass:"resultInfo"},[n("span",[e._v(e._s(e.$t("batchCheck.resultInfo",[e.selectToken?e.selectToken.name:e.global.symbol,[e.sunBalance]])))])]):e._e(),e.show.progress?n("div",[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"max-height":"500",data:e.dataList,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),n("el-table-column",{attrs:{prop:"address",label:e.$t("batchCheck.address"),width:"380",align:"center"}}),n("el-table-column",{attrs:{prop:"balance",label:e.$t("batchCheck.balance"),width:"170",align:"center",sortable:""}}),n("el-table-column",{attrs:{prop:"result",label:e.$t("batchCheck.result"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e.statusArray[t.row.result].type}},[e._v(e._s(e.$t(e.statusArray[t.row.result].name)))])]}}],null,!1,1437660614)}),n("el-table-column",{attrs:{label:e.$t("batchCheck.operate"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{attrs:{content:e.$t("batchCheck.delete")}},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return e.handleDelete(t.$index,e.dataList)}}})],1),n("el-tooltip",{attrs:{content:e.$t("batchCheck.refresh")}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh",circle:""},on:{click:function(n){return e.handleRefresh(t.$index,e.dataList)}}})],1)]}}],null,!1,620989159)})],1),n("div",{staticClass:"multipleBtn"},[n("el-button",{attrs:{type:"success",plain:""},on:{click:function(t){e.toggleSelection(e.dataList.filter((function(e){return 0===e.balance})))}}},[e._v(e._s(e.$t("batchCheck.selectZero",[e.global.symbol])))]),n("el-button",{attrs:{type:"success",icon:"el-icon-top"},on:{click:function(t){return e.exportExcel()}}},[e._v(e._s(e.$t("batchCheck.selectExp")))]),n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.toggleSelection(e.dataList.filter((function(e){return 2===e.result})))}}},[e._v(e._s(e.$t("batchCheck.selectDelete")))]),n("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.delSelect()}}},[e._v(e._s(e.$t("batchCheck.deleteSelect")))])],1)],1):e._e()])])}),[],!1,null,"35788d4a",null);t.default=k.exports},3796:function(e,t,n){"use strict";var a=(n("ac1f"),n("00b4"),n("b0c0"),n("d3b7"),n("1146")),r=n.n(a),s={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var t=e.header,n=e.results;this.excelData.header=t,this.excelData.results=n,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var n=t[0];if(!this.isExcel(n))return this.$message.error(this.$t("excel.ext")),!1;this.upload(n),e.stopPropagation(),e.preventDefault()}else this.$message.error(this.$t("excel.handleDrop"))}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files[0];t&&this.upload(t)},upload:function(e){(this.$refs["excel-upload-input"].value=null,this.beforeUpload)?this.beforeUpload(e)&&this.readerData(e):this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,/\.(txt)$/.test(e.name)?new Promise((function(n,a){var r=new FileReader;r.onload=function(e){var a=e.target.result;t.generateData({header:null,results:a}),n()},r.readAsText(e,"utf8")})):new Promise((function(n,a){var s=new FileReader;s.onload=function(e){var a=e.target.result,s=r.a.read(a,{type:"array"}),i=s.SheetNames[0],o=s.Sheets[i],u=t.getHeaderRow(o),l=r.a.utils.sheet_to_json(o);t.generateData({header:u,results:l}),t.loading=!1,n()},s.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var t,n=[],a=r.a.utils.decode_range(e["!ref"]),s=a.s.r;for(t=a.s.c;t<=a.e.c;++t){var i=e[r.a.utils.encode_cell({c:t,r:s})],o="UNKNOWN "+t;i&&i.t&&(o=r.a.utils.format_cell(i)),n.push(o)}return n},isExcel:function(e){return/\.(xlsx|xls|csv|txt)$/.test(e.name)}}},i=s,o=(n("f296"),n("2877")),u=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"excel-upload"},[n("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls, .csv , .txt"},on:{change:e.handleClick}}),n("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover,click:e.handleUpload}},[e._m(0),n("p",[e._v(e._s(e.$t("excel.uploadTitle")))])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("i",{staticClass:"el-icon-upload icon"})])}],!1,null,"825cabc4",null);t.a=u.exports},"49f3":function(e,t,n){"use strict";n("d8e0")},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"572f":function(e,t,n){"use strict";n("8da5")},"5bb2":function(e,t,n){},7052:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return y})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return f}));var a=n("1da1"),r=(n("96cf"),n("51d2")),s=n("4360"),i=n("ed08"),o=n("cf29"),u=n("901e"),l=n.n(u),c=n("771e"),p=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,a,u){var c,p,d,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="getTokenBalance",e.next=3,new u.eth.Contract(r.abi,t);case 3:return p=e.sent,d={name:"balanceOf",erc20:!0,data:[a]},e.next=7,Object(o.b)(p,d,s.a.state.dapp.web3.account,c);case 7:return y=e.sent,e.abrupt("return",new l.a(Object(i.d)(y,n)));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),d=function(e,t,n){return n.eth.getBalance(e).then((function(e){return new l.a(Object(i.d)(e,t))}))},y=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(r.abi,t);case 2:return a=e.sent,i={name:"symbol",erc20:!0,data:[]},e.next=6,Object(o.b)(a,i,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(c.abi,t);case 2:return a=e.sent,r={name:"supportsInterface",erc20:!0,data:["0x80ac58cd"]},e.next=6,Object(o.b)(a,r,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(r.abi,t);case 2:return a=e.sent,i={name:"decimals",erc20:!0,data:[]},e.next=6,Object(o.b)(a,i,s.a.state.dapp.web3.account);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},"771e":function(e){e.exports=JSON.parse('{"contractName":"ERC721","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"armzs","outputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"string","name":"image","type":"string"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"}],"name":"create","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getArmz","outputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getCollection","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_new","type":"address"}],"name":"setFactoryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"armz","type":"tuple"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},"828d":function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return p})),n("99af");var a=n("b775"),r=function(e,t){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(e,"/address/").concat(t,"/balances_v2/?no-nft-fetch=true&key=ckey_4c2c43910c9c4730830a3551927")})},s=function(e,t,n,r){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent("https://api.yshyqxx.com/api/v1/klines?symbol=".concat(e,"&interval=").concat(t,"&startTime=").concat(n,"&endTime=").concat(r))})},i=function(e){return Object(a.a)({method:"GET",url:"/api/proxy?url="+encodeURIComponent(e)})},o=function(e){return Object(a.a)({method:"GET",url:"/api/v1/price",params:{chain:e}})},u=function(e,t,n,r){return Object(a.a)({method:"GET",url:"https://api.covalenthq.com/v1/".concat(e,"/tokens/").concat(t,"/token_holders/?block-height=").concat(r,"&page-number=0&page-size=").concat(n,"&key=ckey_4c2c43910c9c4730830a3551927")})},l=function(e){return Object(a.a)({method:"GET",url:"/api/v1/gas_price",params:{chain:e}})},c=function(){return Object(a.a)({method:"GET",url:"/api/v1/get_VipUser"})},p=function(e,t,n){return Object(a.a)({method:"GET",url:"/api/v1/contact_scan",params:{mac:e,expiry:t,tokenAddress:n}})}},"8da5":function(e,t,n){},b775:function(e,t,n){"use strict";var a=n("bc3a"),r=n.n(a);r.a.defaults.timeout=3e4,r.a.defaults.baseURL="https://service.cointools.workers.dev/",t.a=r.a},d8e0:function(e,t,n){},f296:function(e,t,n){"use strict";n("5bb2")},fa7e:function(e,t,n){"use strict";var a=n("56b3"),r=n.n(a);n("0dd0"),n("a7be"),n("acdf"),n("f9d4"),n("8822"),n("d2de"),n("ae67");var s={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){e!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(this.value)}},mounted:function(){var e=this;this.jsonEditor=r.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,theme:"idea",screenReaderLabel:"text/javascript",lint:!0}),this.jsonEditor.setValue(this.value),this.jsonEditor.on("change",(function(t){e.$emit("changed",t.getValue())})),this.jsonEditor.on("inputRead",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},i=s,o=(n("49f3"),n("2877")),u=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"json-editor"},[t("textarea",{ref:"textarea",attrs:{placeholder:"请输入地址和数量，以逗号分隔"}})])}),[],!1,null,"358ecc3c",null);t.a=u.exports}}]);