webpackJsonp([1],{"+/EZ":function(t,o){},NHnr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"leftNav"},[s("ul",[s("li",[s("i",{staticClass:"iconfont icon-home"}),t._v(" "),s("p",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-shezhi"}),t._v(" "),s("p",[t._v("设置")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-menu"}),t._v(" "),s("p",[t._v("菜单")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-form_Basicinformati"}),t._v(" "),s("p",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-hanbao"}),t._v(" "),s("p",[t._v("商品")])])])])}]};var n={name:"App",components:{leftNav:s("VU/8")({},a,!1,function(t){s("femk")},null,null).exports}},i={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("leftNav"),this._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},staticRenderFns:[]};var l=s("VU/8")(n,i,!1,function(t){s("l9ac")},null,null).exports,d=s("/ocq"),c=(s("mtWM"),{data:function(){return{tableData:[],oftenGoods:[{goodsId:1,goodsName:"香辣鸡腿堡",price:18},{goodsId:2,goodsName:"田园鸡腿堡",price:15},{goodsId:3,goodsName:"和风汉堡",price:15},{goodsId:4,goodsName:"大包薯条",price:18},{goodsId:5,goodsName:"脆皮炸鸡腿",price:20},{goodsId:6,goodsName:"魔法鸡块",price:20},{goodsId:7,goodsName:"可乐大杯",price:10},{goodsId:8,goodsName:"雪顶咖啡",price:18},{goodsId:9,goodsName:"儿童欢乐套餐",price:25},{goodsId:10,goodsName:"快乐全家桶",price:99}],type0Goods:[{goodsId:1,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"香辣鸡腿堡",price:18},{goodsId:2,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"田园鸡腿堡",price:15},{goodsId:3,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"和风汉堡",price:15}],type1Goods:[{goodsId:4,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"大包薯条",price:18},{goodsId:5,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"脆皮炸鸡腿",price:20},{goodsId:6,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"魔法鸡块",price:20}],type2Goods:[{goodsId:7,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"可乐大杯",price:10},{goodsId:8,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"雪顶咖啡",price:18}],type3Goods:[{goodsId:9,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",goodsName:"儿童欢乐套餐",price:25},{goodsId:10,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"快乐全家桶",price:99}],isPain:!1,painmsg:""}},mounted:function(){var t=document.body.clientHeight;document.getElementById("order").style.height=t+"px"},methods:{addGoodList:function(t){for(var o=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(o=!0);if(o){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var e={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(e)}},removeCur:function(t){this.tableData=this.tableData.filter(function(o){return o!==t})},removeAll:function(){this.tableData=[]},pain:function(){var t=this;console.log(this.tableData.length),0!==this.tableData.length?this.painmsg="支付成功":this.painmsg="请先选购",this.isPain=!0,setTimeout(function(){t.isPain=!1},1500)}},computed:{totalMoney:function(){return this.tableData.reduce(function(t,o){return t+o.count*o.price},0)},totalCount:function(){for(var t=0,o=0;o<this.tableData.length;o++)t+=this.tableData[o].count;return t}}}),r={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"pos"},[s("el-row",[s("el-col",{staticClass:"left-list",attrs:{span:7,id:"order"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","show-summary":""}},[s("el-table-column",{attrs:{label:"商品",prop:"goodsName"}}),t._v(" "),s("el-table-column",{attrs:{label:"数量",prop:"count"}}),t._v(" "),s("el-table-column",{attrs:{label:"金额",prop:"price"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",name:"del"},on:{click:function(s){t.removeCur(o.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text"},on:{click:function(s){t.addGoodList(o.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),s("div",{staticClass:"totalDiv"},[s("small",[t._v("数量：")]),t._v(" "),s("strong",[t._v(t._s(t.totalCount))]),t._v(" "),s("small",[t._v("总计:")]),t._v(" "),s("strong",[t._v(t._s(t.totalMoney))]),t._v("元\n                    ")]),t._v(" "),s("div",{staticClass:"div-btn"},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.removeAll}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.pain}},[t._v("结账")])],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n                    挂单\n                ")]),t._v(" "),s("el-tab-pane",{attrs:{label:"结账"}},[t._v("\n                    结账\n                ")])],1)],1),t._v(" "),s("el-col",{staticClass:"right-list",attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-lis"},[s("ul",t._l(t.oftenGoods,function(o,e){return s("li",{key:e,on:{click:function(s){t.addGoodList(o)}}},[s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o,e){return s("li",{key:e,on:{click:function(s){t.addGoodList(o)}}},[s("span",[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o,e){return s("li",{key:e,on:{click:function(s){t.addGoodList(o)}}},[s("span",[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o,e){return s("li",{key:e,on:{click:function(s){t.addGoodList(o)}}},[s("span",[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o,e){return s("li",{key:e},[s("span",[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",[t._v("￥"+t._s(o.price)+"元")])])}))])],1)],1)])],1),t._v(" "),t.isPain?s("div",{staticClass:"dialog"},[t._v(t._s(t.painmsg))]):t._e()],1)},staticRenderFns:[]};var p=s("VU/8")(c,r,!1,function(t){s("+/EZ")},null,null).exports;e.default.use(d.a);var g=new d.a({routes:[{path:"/",name:"Pos",component:p}]}),u=s("zL8q"),m=s.n(u);s("tvR6");e.default.config.productionTip=!1,e.default.use(m.a),new e.default({el:"#app",router:g,components:{App:l},template:"<App/>"})},femk:function(t,o){},l9ac:function(t,o){},tvR6:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.18069afec3c25c572407.js.map