(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-contact-cards","components-zaiui-common-basics-orderdetail"],{2902:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"2ebb":function(t,a,e){"use strict";var i=e("7d4f9"),n=e.n(i);n.a},"36b6":function(t,a,e){"use strict";var i=e("df51"),n=e.n(i);n.a},"52cc":function(t,a,e){"use strict";e.r(a);var i=e("927b"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"577b":function(t,a,e){"use strict";e.r(a);var i=e("2902"),n=e("be4f");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("36b6");var c=e("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"1f1d0f19",null,!1,i["a"],void 0);a["default"]=u.exports},6486:function(t,a,e){"use strict";e.r(a);var i=e("fad0"),n=e("52cc");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("2ebb");var c=e("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"2208776e",null,!1,i["a"],void 0);a["default"]=u.exports},7677:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-body[data-v-2208776e]{background:#fff}body.?%PAGE?%[data-v-2208776e]{background:#fff}.form-view[data-v-2208776e]{border-bottom:%?2?% solid #f5f5f5}.form-view .title[data-v-2208776e]{margin-bottom:%?27.27?%}.form-view uni-input[data-v-2208776e]{color:#333}",""]),t.exports=a},"7d4f9":function(t,a,e){var i=e("7677");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("06c18e00",i,!0,{sourceMap:!1,shadowMode:!1})},"8f5e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"927b":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("577b")),o=i(e("77ae")),c={components:{barTitle:n.default},data:function(){return{}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{}};a.default=c},be4f:function(t,a,e){"use strict";e.r(a);var i=e("e9a6"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},df51:function(t,a,e){var i=e("8f5e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("ed698c7a",i,!0,{sourceMap:!1,shadowMode:!1})},e9a6:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=i},fad0:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("联系卡")]),e("template",{attrs:{slot:"right"},slot:"right"},[e("v-uni-text",{staticClass:"text-red"},[t._v("保存")])],1)],2),e("v-uni-view",{staticClass:"bg-red light text-sm padding-sm"},[e("v-uni-text",{staticClass:"cuIcon-warnfill"}),e("v-uni-text",{staticClass:"margin-left-xs"},[t._v("重要交易信息建议在平台内进行沟通，并务必在平台内下单及付款，切勿私下转账交易！走平台担保更安全~")])],1),e("v-uni-view",{staticClass:"bg-white padding"},[e("v-uni-view",{staticClass:"text-lg text-black margin-bottom"},[t._v("我的联系卡")]),e("v-uni-view",{staticClass:"text-sm text-gray"},[t._v("您可以选择添加以下一种或多种联系方式，根据具体沟通需求选择对应号码发送")])],1),e("v-uni-view",{staticClass:"bg-white padding form-view"},[e("v-uni-view",{staticClass:"text-black title"},[t._v("微信")]),e("v-uni-input",{attrs:{placeholder:"请填写您的微信号",value:""}})],1),e("v-uni-view",{staticClass:"bg-white padding form-view"},[e("v-uni-view",{staticClass:"text-black title"},[t._v("QQ号")]),e("v-uni-input",{attrs:{placeholder:"请填写您的QQ号",value:""}})],1),e("v-uni-view",{staticClass:"bg-white padding form-view"},[e("v-uni-view",{staticClass:"text-black title"},[t._v("手机号")]),e("v-uni-input",{attrs:{placeholder:"请填写您的手机号",value:""}})],1)],1)},n=[]}}]);