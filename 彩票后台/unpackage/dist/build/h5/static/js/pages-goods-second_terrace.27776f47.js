(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-second_terrace"],{"22b2":function(t,i,a){"use strict";var e=a("2b38"),s=a.n(e);s.a},"2b38":function(t,i,a){var e=a("dabb");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("7e8befc4",e,!0,{sourceMap:!1,shadowMode:!1})},"47af":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},s=[]},"4b9d":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},"50f9":function(t,i,a){"use strict";var e=a("f5ae"),s=a.n(e);s.a},5778:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white"}},[t.barShow?a("template",{attrs:{slot:"content"},slot:"content"},[t._v("商品详情")]):a("template",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",{staticClass:"text-price text-red text-xxl"},[t._v("3999")])],1),a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-text",{staticClass:"cuIcon-forward"}),a("v-uni-text",{staticClass:"cuIcon-more"})],1)],2),t.barShow?t._e():a("v-uni-view",{staticClass:"bg-white zaiui-scroll-tab-view"},[a("v-uni-scroll-view",{staticClass:"nav z text-center",attrs:{"scroll-x":!0}},[t._l(t.tabListData,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item",class:e==t.TabCur?"text-black select":"",attrs:{"data-id":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSelect.apply(void 0,arguments)}}},[a("v-uni-view",[t._v(t._s(i))]),a("v-uni-view",{staticClass:"tab-dot bg-red"})],1)]}))],2)],1),t.barShow?t._e():a("v-uni-view",{staticClass:"zaiui-scroll-height-view"}),a("v-uni-view",{staticClass:"bg-white padding zaiui-goods-synopsis-view"},[a("v-uni-view",{staticClass:"user-view"},[a("v-uni-view",{staticClass:"cu-avatar sm round",staticStyle:{"background-image":"url(/static/images/avatar/1.jpg)"}}),a("v-uni-view",{staticClass:"text-black text-name"},[t._v("仔仔")]),a("v-uni-view",{staticClass:"cu-tag text-right-view"},[a("v-uni-text",[t._v("今天寄存在平台")]),a("v-uni-text",{staticClass:"cuIcon-right icon-text"})],1)],1),a("v-uni-view",{staticClass:"margin-tb-lg price-view"},[a("v-uni-text",{staticClass:"text-price text-red"},[t._v("3899")]),a("v-uni-view",{staticClass:"cu-tag line-orange sm radius"},[a("v-uni-text",{staticClass:"cuIcon-refresharrow icon-text"}),a("v-uni-text",[t._v("已降12元")])],1),a("v-uni-view",{staticClass:"cu-tag line-blue sm radius"},[t._v("7天无理由")]),a("v-uni-view",{staticClass:"cu-tag line-blue sm radius"},[t._v("一口价")])],1),a("v-uni-view",{staticClass:"text-xl text-black"},[t._v("iPhoneX苹果银色256G其他版本9成新无拆修有发票有配")]),a("v-uni-view",{staticClass:"text-sm margin-top-sm zaiui-row-view"},[a("v-uni-text",{staticClass:"cuIcon-refresharrow text-red icon-text"}),a("v-uni-text",{staticClass:"text-gray margin-left-xs"},[t._v("比同型号商品便宜712元，值得入手!")])],1),a("v-uni-view",{staticClass:"margin-top zaiui-hot-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"text-gray"},[t._v("活动")])],1),a("v-uni-view",{staticClass:"basis-8"},[a("v-uni-view",{staticClass:"tag-view-box"},[a("v-uni-text",{staticClass:"cu-tag line-red sm radius"},[t._v("赠品")]),a("v-uni-text",{staticClass:"text-sm margin-left-xs"},[t._v("本商品赠送转转专属包装及品胜配件")])],1),a("v-uni-view",{staticClass:"tag-view-box"},[a("v-uni-text",{staticClass:"cu-tag line-red sm radius"},[t._v("分期")]),a("v-uni-text",{staticClass:"text-sm margin-left-xs"},[t._v("￥455/月 花呗/微信组合支付")])],1)],1),a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"text-gray text-right icon-view"},[a("v-uni-text",{staticClass:"cuIcon-right icon"})],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"margin-top padding bg-white zaiui-service-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"text-gray"},[t._v("服务")])],1),a("v-uni-view",{staticClass:"basis-8"},[a("v-uni-view",{staticClass:"tag-view-box"},[a("v-uni-text",{staticClass:"cu-tag bg-white tag-view"},[a("v-uni-text",{staticClass:"cuIcon-roundcheck text-red"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("已验机")])],1),a("v-uni-text",{staticClass:"cu-tag bg-white tag-view"},[a("v-uni-text",{staticClass:"cuIcon-roundcheck text-red"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("24小时内发货")])],1),a("v-uni-text",{staticClass:"cu-tag bg-white tag-view"},[a("v-uni-text",{staticClass:"cuIcon-roundcheck text-red"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("7天无理由退货")])],1),a("v-uni-text",{staticClass:"cu-tag bg-white tag-view"},[a("v-uni-text",{staticClass:"cuIcon-roundcheck text-red"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("30天质保")])],1),a("v-uni-text",{staticClass:"cu-tag bg-white tag-view"},[a("v-uni-text",{staticClass:"cuIcon-roundcheck text-red"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("质检消毒")])],1)],1)],1),a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"text-gray text-right icon-view"},[a("v-uni-text",{staticClass:"cuIcon-right icon"})],1)],1)],1)],1),a("v-uni-view",{staticClass:"margin-top padding bg-white zaiui-details-view-box"},[a("v-uni-view",{staticClass:"text-xl title-view"},[a("v-uni-text",{staticClass:"cuIcon-titles text-red"}),a("v-uni-text",{staticClass:"text-black"},[t._v("商品详情")])],1),a("v-uni-view",{staticClass:"text-black zaiui-text-content-view"},[t._v("iphoneX,美版256G,原装正品，无拆修，配件齐全，功能正常使用")]),a("v-uni-view",{staticClass:"zaiui-img-box"},[a("v-uni-image",{attrs:{src:"/static/images/home/goods/11.png",mode:"widthFix"}}),a("v-uni-image",{attrs:{src:"/static/images/home/goods/12.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"text-black title-view"},[t._v("买家自荐")]),a("v-uni-view",{staticClass:"bg-gray padding radius zaiui-bubble-view"},[a("v-uni-view",{staticClass:"cuIcon-usefullfill usefull-icon"}),a("v-uni-view",{staticClass:"text-black text-sm"},[t._v("苹果iPhone Xs Max 256G深空灰色")]),a("v-uni-view",{staticClass:"text-orange text-sm margin-top-sm"},[a("v-uni-text",{staticClass:"cuIcon-infofill"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("卖家描述仅供参考，实际情况以验机报告为准。")])],1)],1),a("v-uni-view",{staticClass:"text-right text-gray margin-top text-sm"},[a("v-uni-text",[t._v("1人想要")]),a("v-uni-text",{staticClass:"cuIcon-titles margin-lr-xs"}),a("v-uni-text",[t._v("106次浏览")])],1)],1),a("v-uni-view",{staticClass:"margin-top bg-white zaiui-selll-user-view-box"},[a("v-uni-view",{staticClass:"padding text-xl title-view"},[a("v-uni-text",{staticClass:"cuIcon-titles text-red"}),a("v-uni-text",{staticClass:"text-black"},[t._v("关于卖家")])],1),a("v-uni-view",{staticClass:"cu-list menu-avatar "},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(/static/images/avatar/1.jpg)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-black"},[a("v-uni-view",{staticClass:"text-cut"},[t._v("仔仔")]),a("v-uni-view",{staticClass:"cu-tag radius bg-grey sm"},[a("v-uni-text",{staticClass:"cuIcon-selectionfill"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("银牌卖家")])],1),a("v-uni-view",{staticClass:"cu-tag radius bg-orange sm just"},[a("v-uni-text",{staticClass:"cuIcon-radiobox"})],1),a("v-uni-view",{staticClass:"cu-tag radius bg-blue sm just"},[a("v-uni-text",{staticClass:"cuIcon-myfill"})],1)],1),a("v-uni-view",{staticClass:"flex"},[a("v-uni-text",{staticClass:"text-sm text-gray"},[t._v("90后 白羊座 女生")]),a("v-uni-text",{staticClass:"cuIcon-titles text-gray margin-lr-xs"}),a("v-uni-text",{staticClass:"text-sm text-gray"},[t._v("好评率")]),a("v-uni-text",{staticClass:"text-sm text-red"},[t._v("87.50%")])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"cuIcon-right text-gray"})],1)],1)],1),a("v-uni-view",{staticClass:"padding zaiui-grid-tab-view"},[a("v-uni-view",{staticClass:"grid text-center col-3 bg-gray"},[a("v-uni-view",{staticClass:"item-view"},[a("v-uni-view",{staticClass:"text-lg"},[t._v("43")]),a("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("在售宝贝")])],1),a("v-uni-view",{staticClass:"item-view"},[a("v-uni-view",{staticClass:"text-lg"},[t._v("188")]),a("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("累计交易")])],1),a("v-uni-view",{staticClass:"item-view"},[a("v-uni-view",{staticClass:"text-lg"},[t._v("80%")]),a("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("回复率")])],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-goods-swiper-view"},[a("v-uni-swiper",{staticClass:"screen-swiper square-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!1}},t._l(t.goodsList.length/4,(function(i,e){return a("v-uni-swiper-item",{key:e},[a("v-uni-view",{staticClass:"grid col-4"},[t._l(t.goodsList,(function(i,s){return t.setSwiperItem(s,e)?[a("v-uni-view",{key:s+"_0",staticClass:"goods-item"},[a("v-uni-view",{staticClass:"cu-avatar radius xl",style:[{backgroundImage:"url("+i.img+")"}]}),a("v-uni-text",{staticClass:"text-sm text-price-view"},[t._v("￥"+t._s(i.price))])],1)]:t._e()}))],2)],1)})),1)],1)],1),a("v-uni-view",{staticClass:"margin-top padding bg-white zaiui-interaction-view-box"},[a("v-uni-view",{staticClass:"text-xl title-view"},[a("v-uni-text",{staticClass:"cuIcon-titles text-red"}),a("v-uni-text",{staticClass:"text-black"},[t._v("互动")])],1),a("v-uni-view",{staticClass:"text-center zaiui-interaction-view"},[a("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("卖家已将商品寄送到平台，互动暂时关闭。")])],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"padding-bottom text-black text-lg"},[t._v("大家都想问")]),a("v-uni-view",{staticClass:"flex flex-wrap margin-bottom"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"cu-tag bg-grey radius sm"},[t._v("问")])],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-view",{staticClass:"margin-bottom-xs text-black"},[t._v("手机是正品吗?有保障吗?")]),a("v-uni-view",{staticClass:"text-sm text-gray"},[t._v("转转自营的每部二手手机皆经过质检工程师51项专业质检并出具了详细的配套验机评估报告，且提供7天试用和180天售后质保服务;成色为[全新]的手机，为官方全新原装手机，与官方门店购买的没有任何差别，享受官方质保与转转提供的180天售后质保服务，可以放心选购哦")])],1)],1),a("v-uni-view",{staticClass:"flex flex-wrap margin-bottom"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-text",{staticClass:"cu-tag bg-grey radius sm"},[t._v("问")])],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-view",{staticClass:"margin-bottom-xs text-black"},[t._v("都有哪些渠道版本的手机?")]),a("v-uni-view",{staticClass:"text-sm text-gray"},[t._v("版本包括:国行、港澳、国际版(包括美欧日韩等版本)。其中除了零售机还包括:演示机，官换机，官翻机。")])],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"text-center text-blue"},[t._v("查看更多问答")])],1),a("v-uni-view",{staticClass:"margin-tb zaiui-resemble-goods-box"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-sm text-right"},[a("v-uni-image",{staticClass:"img-aau",attrs:{src:"/static/zaiui/img/aau.png","lazy-load":!0,mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"basis-xs text-center"},[a("v-uni-text",{staticClass:"text-black text-lg"},[t._v("相关推荐")])],1),a("v-uni-view",{staticClass:"basis-sm text-left"},[a("v-uni-image",{staticClass:"img-aau",attrs:{src:"/static/zaiui/img/aau.png","lazy-load":!0,mode:"widthFix"}})],1)],1),a("v-uni-view",{staticClass:"margin-top-sm grid col-2"},[a("v-uni-view",{staticClass:"grid-item-box"},[a("v-uni-view",{staticClass:"bg-white item-view"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(/static/images/home/goods/1.png)"}}),a("v-uni-view",{staticClass:"padding-sm zaiui-text-view"},[a("v-uni-view",{staticClass:"text-cut text-black text-sm"},[t._v("99新 苹果 iPhoneX 256G 银色")]),a("v-uni-view",{staticClass:"text-sm text-gray text-cut tag-view-box"},[a("v-uni-text",[t._v("银色")]),a("v-uni-text",[t._v("256G")]),a("v-uni-text",[t._v("苹果")]),a("v-uni-text",[t._v("99")])],1),a("v-uni-view",{staticClass:"text-price-view"},[a("v-uni-text",{staticClass:"text-price text-lg text-red"},[t._v("2280")]),a("v-uni-text",{staticClass:"cu-tag light bg-red sm radius"},[t._v("已验机")])],1),a("v-uni-view",{staticClass:"gps-right-view"},[a("v-uni-text",{staticClass:"text-sm text-gray"},[t._v("重庆 渝北区")]),a("v-uni-text",{staticClass:"text-sm text-gray text-right"},[t._v("当前在线")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"grid-item-box"},[a("v-uni-view",{staticClass:"bg-white item-view"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(/static/images/home/goods/4.png)"}}),a("v-uni-view",{staticClass:"padding-sm zaiui-text-view"},[a("v-uni-view",{staticClass:"text-cut text-black text-sm"},[t._v("99新 苹果 iPhoneX 256G 银色")]),a("v-uni-view",{staticClass:"text-sm text-gray text-cut tag-view-box"},[a("v-uni-text",[t._v("银色")]),a("v-uni-text",[t._v("256G")]),a("v-uni-text",[t._v("苹果")]),a("v-uni-text",[t._v("99")])],1),a("v-uni-view",{staticClass:"text-price-view"},[a("v-uni-text",{staticClass:"text-price text-lg text-red"},[t._v("2280")]),a("v-uni-text",{staticClass:"cu-tag line-blue sm radius"},[t._v("支持验机")])],1),a("v-uni-view",{staticClass:"gps-right-view"},[a("v-uni-text",{staticClass:"text-sm text-gray"},[t._v("正品保障 7天无理由")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"grid-item-box"},[a("v-uni-view",{staticClass:"bg-white item-view"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(/static/images/home/goods/11.png)"}}),a("v-uni-view",{staticClass:"padding-sm zaiui-text-view"},[a("v-uni-view",{staticClass:"text-cut text-black text-sm"},[t._v("99新 苹果 iPhoneX 256G 银色")]),a("v-uni-view",{staticClass:"text-sm text-gray text-cut tag-view-box"},[a("v-uni-text",[t._v("银色")]),a("v-uni-text",[t._v("256G")]),a("v-uni-text",[t._v("苹果")]),a("v-uni-text",[t._v("99")])],1),a("v-uni-view",{staticClass:"text-price-view"},[a("v-uni-text",{staticClass:"text-price text-lg text-red"},[t._v("2280")]),a("v-uni-text",{staticClass:"cu-tag light bg-red sm radius"},[t._v("已验机")])],1),a("v-uni-view",{staticClass:"gps-right-view"},[a("v-uni-text",{staticClass:"text-sm text-gray"},[t._v("重庆 渝北区")]),a("v-uni-text",{staticClass:"text-sm text-gray text-right"},[t._v("当前在线")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"grid-item-box"},[a("v-uni-view",{staticClass:"bg-white item-view"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(/static/images/home/goods/10.png)"}}),a("v-uni-view",{staticClass:"padding-sm zaiui-text-view"},[a("v-uni-view",{staticClass:"text-cut text-black text-sm"},[t._v("99新 苹果 iPhoneX 256G 银色")]),a("v-uni-view",{staticClass:"text-sm text-gray text-cut tag-view-box"},[a("v-uni-text",[t._v("银色")]),a("v-uni-text",[t._v("256G")]),a("v-uni-text",[t._v("苹果")]),a("v-uni-text",[t._v("99")])],1),a("v-uni-view",{staticClass:"text-price-view"},[a("v-uni-text",{staticClass:"text-price text-lg text-red"},[t._v("2280")]),a("v-uni-text",{staticClass:"cu-tag light bg-red sm radius"},[t._v("已验机")])],1),a("v-uni-view",{staticClass:"gps-right-view"},[a("v-uni-text",{staticClass:"text-sm text-gray"},[t._v("重庆 渝北区")]),a("v-uni-text",{staticClass:"text-sm text-gray text-right"},[t._v("当前在线")])],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-tabbar-height"}),a("v-uni-view",{staticClass:"bg-white zaiui-footer-fixed zaiui-foot-padding-bottom"},[a("v-uni-view",{staticClass:"cu-bar"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-xs"},[a("v-uni-view",{staticClass:"text-center"},[a("v-uni-view",{staticClass:"cuIcon-like"}),a("v-uni-view",{staticClass:"text-sm"},[t._v("想要")])],1)],1),a("v-uni-view",{staticClass:"basis-xs"},[a("v-uni-view",{staticClass:"text-center"},[a("v-uni-view",{staticClass:"cuIcon-service"}),a("v-uni-view",{staticClass:"text-sm"},[t._v("客服")])],1)],1),a("v-uni-view",{staticClass:"basis-sm"},[a("v-uni-view",{staticClass:"btn-view"},[a("v-uni-button",{staticClass:"cu-btn bg-orange radius shadow-blur"},[t._v("买前聊一聊")])],1)],1),a("v-uni-view",{staticClass:"basis-sm"},[a("v-uni-view",{staticClass:"btn-view"},[a("v-uni-button",{staticClass:"cu-btn bg-red radius shadow-blur"},[t._v("马上买")])],1)],1)],1)],1)],1)],1)},s=[]},"5c6d":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={bannerListData:function(){return[{url:"/static/images/home/goods/1.png"},{url:"/static/images/home/goods/4.png"},{url:"/static/images/home/goods/5.png"},{url:"/static/images/home/goods/6.png"},{url:"/static/images/home/goods/9.png"},{url:"/static/images/home/goods/10.png"},{url:"/static/images/home/goods/11.png"}]},goodsList:function(){return[{mold:!0,price:"2280",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/1.png"},{mold:!1,price:"5049",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/2.png"},{mold:!0,price:"2980",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/3.png"},{mold:!0,price:"2280",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/4.png"},{mold:!0,price:"5049",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/5.png"},{mold:!0,price:"2980",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/6.png"},{mold:!0,price:"2280",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/7.png"},{mold:!0,price:"5049",title:"商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题，商品标题",img:"/static/images/home/goods/8.png"}]}};i.default=e},"700c":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.zaiui-goods-synopsis-view .user-view[data-v-39ba28b2]{position:relative;width:100%}.zaiui-goods-synopsis-view .user-view .cu-avatar[data-v-39ba28b2]{position:absolute}.zaiui-goods-synopsis-view .user-view .text-name[data-v-39ba28b2]{position:relative;padding:0 %?181.81?% 0 %?61.81?%;line-height:%?47.27?%;height:%?47.27?%}.zaiui-goods-synopsis-view .user-view .text-right-view[data-v-39ba28b2]{border-radius:%?54.54?% 0 0 %?54.54?%;padding:0 %?27.27?%;position:absolute;right:%?-29.09?%;top:0}.zaiui-goods-synopsis-view .user-view .text-right-view .icon-text[data-v-39ba28b2]{position:relative;top:%?2?%}.zaiui-goods-synopsis-view .price-view[data-v-39ba28b2]{position:relative}.zaiui-goods-synopsis-view .price-view .text-price[data-v-39ba28b2]{font-size:%?54.54?%}.zaiui-goods-synopsis-view .price-view uni-text[data-v-39ba28b2]{margin-right:%?18.18?%}.zaiui-goods-synopsis-view .price-view .cu-tag[data-v-39ba28b2]{position:relative;top:%?-9.09?%}.zaiui-goods-synopsis-view .price-view .cu-tag .icon-text[data-v-39ba28b2]{position:relative;margin-right:%?3.63?%;top:%?2?%}.zaiui-goods-synopsis-view .zaiui-hot-view-box[data-v-39ba28b2]{position:relative}.zaiui-goods-synopsis-view .zaiui-hot-view-box .flex .basis-1[data-v-39ba28b2]{flex-basis:10%}.zaiui-goods-synopsis-view .zaiui-hot-view-box .flex .basis-8[data-v-39ba28b2]{flex-basis:80%}.zaiui-goods-synopsis-view .zaiui-hot-view-box .tag-view-box[data-v-39ba28b2]{position:relative;margin-bottom:%?10.9?%}.zaiui-goods-synopsis-view .zaiui-hot-view-box .tag-view-box .cu-tag[data-v-39ba28b2]{position:relative;top:%?-2?%}.zaiui-goods-synopsis-view .zaiui-hot-view-box .icon-view[data-v-39ba28b2]{height:100%;display:flex;align-items:center}.zaiui-goods-synopsis-view .zaiui-hot-view-box .icon-view .icon[data-v-39ba28b2]{position:absolute;right:15px}.zaiui-service-view-box[data-v-39ba28b2]{position:relative;padding-bottom:%?18.18?%}.zaiui-service-view-box .flex .basis-1[data-v-39ba28b2]{flex-basis:10%}.zaiui-service-view-box .flex .basis-8[data-v-39ba28b2]{flex-basis:80%}.zaiui-service-view-box .tag-view-box[data-v-39ba28b2]{position:relative;top:%?-3.63?%}.zaiui-service-view-box .tag-view-box .tag-view[data-v-39ba28b2]{margin-right:%?18.18?%;padding:0}.zaiui-service-view-box .tag-view-box .cu-tag + .cu-tag[data-v-39ba28b2]{margin-left:0}.zaiui-service-view-box .icon-view[data-v-39ba28b2]{height:100%;display:flex;align-items:center}.zaiui-service-view-box .icon-view .icon[data-v-39ba28b2]{position:absolute;right:15px}.zaiui-details-view-box[data-v-39ba28b2]{position:relative}.zaiui-details-view-box .title-view[data-v-39ba28b2]{padding:%?9.09?% 0 %?18.18?%}.zaiui-details-view-box .col-item[data-v-39ba28b2]{margin:%?9.09?% 0}.zaiui-details-view-box .zaiui-text-content-view[data-v-39ba28b2]{margin:%?27.27?% 0}.zaiui-details-view-box .zaiui-img-box[data-v-39ba28b2]{position:relative;width:100%}.zaiui-details-view-box .zaiui-img-box uni-image[data-v-39ba28b2]{width:100%;border-radius:%?18.18?%}.zaiui-details-view-box .zaiui-img-box uni-image + uni-image[data-v-39ba28b2]{margin-top:%?18.18?%}.zaiui-details-view-box .zaiui-bubble-view[data-v-39ba28b2]{position:relative;margin-top:%?36.36?%;background-color:#f8f8f8;width:100%}.zaiui-details-view-box .zaiui-bubble-view .usefull-icon[data-v-39ba28b2]{position:absolute;font-size:%?32.72?%;top:%?-21.81?%;color:#f8f8f8;left:%?18.18?%}.zaiui-footer-fixed[data-v-39ba28b2]{box-shadow:0 %?-2?% %?9.09?% 0 #ececec}.zaiui-footer-fixed .cu-bar[data-v-39ba28b2], .zaiui-footer-fixed .flex-wrap[data-v-39ba28b2]{width:100%}.zaiui-footer-fixed .cu-bar[data-v-39ba28b2]{padding-right:%?18.18?%}.zaiui-footer-fixed .cu-bar .basis-xs[data-v-39ba28b2]{flex-basis:15%}.zaiui-footer-fixed .cu-bar .basis-sm[data-v-39ba28b2]{flex-basis:35%}.zaiui-footer-fixed .cu-bar .btn-view[data-v-39ba28b2]{padding:0 %?18.18?%}.zaiui-footer-fixed .cu-bar .btn-view .cu-btn[data-v-39ba28b2]{width:100%}.zaiui-border-view[data-v-39ba28b2]{position:relative;background:#efebeb;margin:%?36.36?% 0;height:%?2?%;width:100%}.zaiui-selll-user-view-box .cu-list.menu-avatar > .cu-item[data-v-39ba28b2]{height:%?99.99?%}.zaiui-selll-user-view-box .cu-list.menu-avatar > .cu-item .content[data-v-39ba28b2]{left:%?127.27?%;width:calc(100% - %?94.54?% - %?127.27?%)}.zaiui-selll-user-view-box .cu-list.menu-avatar > .cu-item .content .cu-tag.sm[data-v-39ba28b2]{line-height:%?29.09?%;padding:0 %?5.45?%}.zaiui-selll-user-view-box .cu-list.menu-avatar > .cu-item .content .cu-tag.sm .margin-left-xs[data-v-39ba28b2]{margin-left:%?3.63?%}.zaiui-selll-user-view-box .cu-list.menu-avatar > .cu-item .content .cu-tag.sm.just[data-v-39ba28b2]{padding:0;width:%?27.27?%;height:%?27.27?%;text-align:center;line-height:%?27.27?%}.zaiui-selll-user-view-box .cu-list.menu-avatar > .cu-item[data-v-39ba28b2]:after{width:0;height:0;border-bottom:0}.zaiui-selll-user-view-box .cu-list.menu-avatar > .cu-item > .cu-avatar[data-v-39ba28b2]{width:%?72.72?%;height:%?72.72?%}.zaiui-selll-user-view-box .zaiui-grid-tab-view[data-v-39ba28b2]{position:relative;width:100%}.zaiui-selll-user-view-box .zaiui-grid-tab-view .grid[data-v-39ba28b2]{border-radius:%?9.09?%}.zaiui-selll-user-view-box .zaiui-grid-tab-view .grid .item-view[data-v-39ba28b2]{position:relative;padding:%?14.54?% 0}.zaiui-selll-user-view-box .zaiui-grid-tab-view .grid .item-view + .item-view[data-v-39ba28b2]:before{content:"";position:absolute;background:#e2e2e2;height:%?45.45?%;top:%?27.27?%;width:%?2?%;z-index:0;left:0}.zaiui-selll-user-view-box .zaiui-goods-swiper-view .goods-item[data-v-39ba28b2]{position:relative;text-align:center}.zaiui-selll-user-view-box .zaiui-goods-swiper-view .goods-item .text-price-view[data-v-39ba28b2]{position:absolute;bottom:%?3.63?%;left:%?36.36?%;color:#fff}.zaiui-selll-user-view-box .zaiui-goods-swiper-view .screen-swiper[data-v-39ba28b2]{min-height:%?145.45?%;height:%?172.72?%}.zaiui-interaction-view-box .zaiui-null-view[data-v-39ba28b2]{position:relative;text-align:center;height:%?218.18?%;width:100%}.zaiui-interaction-view-box .zaiui-null-view .text-view-box[data-v-39ba28b2]{padding:%?45.45?% 0 %?36.36?% 0}.zaiui-interaction-view-box .zaiui-null-view .cu-btn[data-v-39ba28b2]{height:%?61.81?%;font-size:%?23.63?%;padding:0 %?45.45?%}.zaiui-interaction-view-box .zaiui-interaction-view[data-v-39ba28b2]{position:relative;width:100%}.zaiui-interaction-view-box .flex .basis-1[data-v-39ba28b2]{flex-basis:10%}.zaiui-interaction-view-box .flex .basis-9[data-v-39ba28b2]{flex-basis:90%}.zaiui-interaction-view-box .zaiui-border-view[data-v-39ba28b2]{position:relative;background:#efebeb;margin:%?21.81?% 0;height:%?2?%;width:100%}.zaiui-interaction-view-box .zaiui-tag-text-view-box[data-v-39ba28b2]{position:relative;padding:%?18.18?% 0}.zaiui-interaction-view-box .zaiui-tag-text-view-box .text-cut[data-v-39ba28b2]{padding:%?9.09?% 0}.zaiui-interaction-view-box .zaiui-tag-text-view-box .text-cut .cu-tag[data-v-39ba28b2]{position:relative;top:%?-3.63?%}.zaiui-resemble-goods-box[data-v-39ba28b2]{position:relative}.zaiui-resemble-goods-box .flex .img-aau[data-v-39ba28b2]{width:%?81.81?%;margin-top:%?12.72?%}.zaiui-resemble-goods-box .flex .text-right .img-aau[data-v-39ba28b2]{margin-right:%?14.54?%}.zaiui-resemble-goods-box .flex .text-left .img-aau[data-v-39ba28b2]{margin-left:%?14.54?%}.zaiui-resemble-goods-box .grid[data-v-39ba28b2]{padding:0 %?18.18?%}.zaiui-resemble-goods-box .grid .grid-item-box[data-v-39ba28b2]{padding:%?9.09?%}.zaiui-resemble-goods-box .grid .grid-item-box .item-view[data-v-39ba28b2]{border-radius:%?10.9?%}.zaiui-resemble-goods-box .grid .grid-item-box .item-view .cu-avatar[data-v-39ba28b2]{width:100%;height:%?309.09?%;border-radius:%?10.9?% %?10.9?% 0 0}.zaiui-resemble-goods-box .grid .grid-item-box .item-view .zaiui-text-view[data-v-39ba28b2]{line-height:1.6}.zaiui-resemble-goods-box .grid .grid-item-box .item-view .zaiui-text-view .tag-view-box uni-text[data-v-39ba28b2]{margin-right:%?9.09?%}.zaiui-resemble-goods-box .grid .grid-item-box .item-view .zaiui-text-view .text-price-view[data-v-39ba28b2]{position:relative}.zaiui-resemble-goods-box .grid .grid-item-box .item-view .zaiui-text-view .text-price-view .cu-tag[data-v-39ba28b2]{position:absolute;top:%?9.09?%;right:0}.zaiui-resemble-goods-box .grid .grid-item-box .item-view .zaiui-text-view .gps-right-view[data-v-39ba28b2]{position:relative}.zaiui-resemble-goods-box .grid .grid-item-box .item-view .zaiui-text-view .gps-right-view .text-right[data-v-39ba28b2]{position:absolute;right:0;top:%?7.27?%}.zaiui-scroll-tab-view[data-v-39ba28b2]{box-shadow:0 %?2?% %?21.81?% 0 hsla(0,0%,53.3%,.29);position:fixed;width:100%;z-index:99}.zaiui-scroll-height-view[data-v-39ba28b2]{position:relative;height:%?63.63?%;width:100%}',""]),t.exports=i},8390:function(t,i,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e(a("c89c")),v=e(a("5c6d")),n=e(a("7ec3")),o={components:{barTitle:s.default},data:function(){return{bannerCur:0,bannerList:[],bottomModal:!1,modalTitle:"",modalType:"promotion",selectType:"",goodsList:[],interaction:!0,barShow:!0,TabCur:0,tabListData:["宝贝","卖家","互动","推荐"]}},onLoad:function(){this.goodsList=v.default.goodsList()},onReady:function(){n.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{getttImgUrl:function(t){return n.default.getttImgUrl(t)},serviceTap:function(){this.modalTitle="服务",this.modalType="service",this.showModal()},showModal:function(){this.bottomModal=!0},hideModal:function(t){this.bottomModal=!1,this.modalTitle="",this.modalType=""},setSwiperItem:function(t,i){var a=4*(i+1),e=a-4,s=t+1;return s>e&&s<=a},tabSelect:function(t){var i=t.currentTarget.dataset.id;this.TabCur=i,0==i&&uni.pageScrollTo({scrollTop:300,duration:200}),1==i&&uni.pageScrollTo({scrollTop:1418,duration:200}),2==i&&uni.pageScrollTo({scrollTop:1723,duration:200}),3==i&&uni.pageScrollTo({scrollTop:2413,duration:200})}},onPageScroll:function(t){this.scrollY=t.scrollTop}};i.default=o},ac8b:function(t,i,a){"use strict";a.r(i);var e=a("8390"),s=a.n(e);for(var v in e)["default"].indexOf(v)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(v);i["default"]=s.a},c89c:function(t,i,a){"use strict";a.r(i);var e=a("47af"),s=a("dd05");for(var v in s)["default"].indexOf(v)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(v);a("22b2");var n=a("f0c5"),o=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"d67b7c4c",null,!1,e["a"],void 0);i["default"]=o.exports},dabb:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-d67b7c4c]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-d67b7c4c]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-d67b7c4c]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-d67b7c4c]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-d67b7c4c]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-d67b7c4c]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-d67b7c4c]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},dd05:function(t,i,a){"use strict";a.r(i);var e=a("4b9d"),s=a.n(e);for(var v in e)["default"].indexOf(v)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(v);i["default"]=s.a},f5ae:function(t,i,a){var e=a("700c");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("4edbb70f",e,!0,{sourceMap:!1,shadowMode:!1})},fb4c:function(t,i,a){"use strict";a.r(i);var e=a("5778"),s=a("ac8b");for(var v in s)["default"].indexOf(v)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(v);a("50f9");var n=a("f0c5"),o=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"39ba28b2",null,!1,e["a"],void 0);i["default"]=o.exports}}]);