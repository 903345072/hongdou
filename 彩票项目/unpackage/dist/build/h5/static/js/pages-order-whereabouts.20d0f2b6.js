(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-whereabouts","components-zaiui-common-basics-orderdetail"],{1036:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-5de61edc]{background:#fff}body.?%PAGE?%[data-v-5de61edc]{background:#fff}.content-view-box[data-v-5de61edc]{position:relative}.content-view-box .font-view[data-v-5de61edc]{padding:%?18.18?%;line-height:1.7}.content-view-box uni-image[data-v-5de61edc]{padding-left:%?27.27?%;width:100%}.zaiui-hight-view[data-v-5de61edc]{width:100%;height:%?36.36?%}",""]),t.exports=e},"1e95":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("577b")),o=a(i("77ae")),c={components:{barTitle:n.default},data:function(){return{}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{}};e.default=c},2902:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},"36b6":function(t,e,i){"use strict";var a=i("df51"),n=i.n(a);n.a},"4fb0":function(t,e,i){"use strict";i.r(e);var a=i("1e95"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"577b":function(t,e,i){"use strict";i.r(e);var a=i("2902"),n=i("be4f");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("36b6");var c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1f1d0f19",null,!1,a["a"],void 0);e["default"]=s.exports},"87a7":function(t,e,i){"use strict";var a=i("da1c"),n=i.n(a);n.a},"8f5e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=e},be4f:function(t,e,i){"use strict";i.r(e);var a=i("e9a6"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c551:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[this._v("平台交易打款提示")]),e("template",{attrs:{slot:"right"},slot:"right"},[e("v-uni-text",{staticClass:"text-orange"},[this._v("联系客服")])],1)],2),e("v-uni-view",{staticClass:"content-view-box"},[e("v-uni-view",{staticClass:"font-view"},[e("v-uni-text",{staticClass:"text-green cuIcon-title"}),e("v-uni-text",[this._v("平台为卖家打款成功后，卖家会收到来自")]),e("v-uni-text",{staticClass:"text-green"},[this._v("微信支付")]),e("v-uni-text",[this._v("的消息")])],1),e("v-uni-view",{staticClass:"font-view"},[e("v-uni-image",{attrs:{src:"/static/images/home/goods/13.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"font-view"},[e("v-uni-text",{staticClass:"text-green cuIcon-title"}),e("v-uni-text",[this._v("在微信支付的消息中找到")]),e("v-uni-text",{staticClass:"text-green"},[this._v("零钱入账")])],1),e("v-uni-view",{staticClass:"font-view"},[e("v-uni-image",{attrs:{src:"/static/images/home/goods/10.png",mode:"widthFix"}})],1)],1),e("v-uni-view",{staticClass:"zaiui-hight-view"})],1)},n=[]},da1c:function(t,e,i){var a=i("1036");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("358bf898",a,!0,{sourceMap:!1,shadowMode:!1})},df51:function(t,e,i){var a=i("8f5e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ed698c7a",a,!0,{sourceMap:!1,shadowMode:!1})},e20c:function(t,e,i){"use strict";i.r(e);var a=i("c551"),n=i("4fb0");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("87a7");var c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5de61edc",null,!1,a["a"],void 0);e["default"]=s.exports},e9a6:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};e.default=a}}]);