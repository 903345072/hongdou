(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-flow-flowDetail","components-zaiui-common-basics-orderdetail"],{"010d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",["foot"==this.orderdetail.type?e("footdetail",{attrs:{orderdetail:this.orderdetail}}):this._e(),"basket"==this.orderdetail.type?e("basketdetail",{attrs:{orderdetail:this.orderdetail}}):this._e()],1)},r=[]},"073c":function(t,e,i){"use strict";i.r(e);var n=i("882c"),r=i("9630");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"420ef20f",null,!1,n["a"],void 0);e["default"]=c.exports},"143d":function(t,e,i){"use strict";i.r(e);var n=i("2555"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"206a":function(t,e,i){"use strict";var n=i("206d"),r=i.n(n);r.a},"206d":function(t,e,i){var n=i("d631");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("d1ba54a4",n,!0,{sourceMap:!1,shadowMode:!1})},"212e":function(t,e,i){"use strict";i.r(e);var n=i("4f87"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"21f9":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-scroll-view",{staticClass:"wuc-tab",class:t.tabClass,style:t.tabStyle,attrs:{"scroll-with-animation":!0,"scroll-x":!0,"scroll-left":t.scrollLeft}},[t.textFlex?t._e():i("div",t._l(t.tabList,(function(e,n){return i("div",{key:n,staticClass:"wuc-tab-item",class:[n===t.tabCur?t.selectClass+" cur":""],attrs:{id:n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(n,e)}}},[i("v-uni-text",{class:e.icon}),i("span",[t._v(t._s(e.name))])],1)})),0),t.textFlex?i("div",{staticClass:"flex text-center"},t._l(t.tabList,(function(e,n){return i("div",{key:n,staticClass:"wuc-tab-item flex-sub",class:n===t.tabCur?t.selectClass+" cur":"",attrs:{id:n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(n,e)}}},[i("v-uni-text",{class:e.icon}),i("span",[t._v(t._s(e.name))])],1)})),0):t._e()])},r=[]},2555:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"gameImg",props:{width:null,height:null,type:null}}},"28e3":function(t,e,i){var n=i("a70a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("87c85260",n,!0,{sourceMap:!1,shadowMode:!1})},2902:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},r=[]},"29c3":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(t){return"1"==t["ret"]}}}},"2a32":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("e2d7")),a={name:"flowRecord",data:function(){return{list:[],config:""}},props:{id:null},created:function(){var t=this;this.config=r.default;var e={id:this.id};this.$dashen.getFlowRecord(e).then((function(e){t.list=e.data}))},onLoad:function(t){}};e.default=a},3199:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={wucTab:i("aa3d").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:t.isBack}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("跟单详情")])],2),t.order?i("v-uni-view",{staticStyle:{padding:"40rpx 30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goHomePage(t.order.user.uid)}}},[i("v-uni-image",{staticStyle:{width:"90rpx",height:"90rpx","border-radius":"90rpx"},attrs:{src:t.config.config.url+t.order.user.avatar}})],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"20rpx"}},[i("v-uni-view",{staticStyle:{"margin-bottom":"10rpx"}},[t._v(t._s(t.order.user.real_name))]),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","font-size":"22rpx"}},[i("v-uni-view",{staticStyle:{color:"#ff5359",border:"1px solid red","border-radius":"15rpx 0 0 15rpx",height:"40rpx","line-height":"40rpx","text-align":"center",padding:"0 20rpx"}},[t._v(t._s(t.order.user.seven_target))]),i("v-uni-view",{staticStyle:{height:"40rpx","line-height":"40rpx",padding:"0 20rpx","background-color":"#ff5359","text-align":"center","border-radius":"0 15rpx 15rpx 0",color:"white"}},[t._v("盈利率"+t._s(t.order.user.profit_rate)+"%")])],1)],1)],1),i("v-uni-view",{style:{border:0==t.order.is_guanzhu?"1px solid #ff5359":"1px solid grey","border-radius":"30rpx",height:"50rpx","line-height":"50rpx",padding:"0 30rpx","text-align":"center",color:0==t.order.is_guanzhu?"#ff5359":"grey"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.guanzhu(t.order.uid)}}},[t._v(t._s(0==t.order.is_guanzhu?"关注":"取消关注"))])],1),i("v-uni-view",{staticStyle:{"background-color":"white",padding:"20rpx 20rpx","border-radius":"20rpx","margin-top":"60rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between","border-bottom":"1px solid #EEEEEE","padding-bottom":"10rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("gameImg",{attrs:{width:50,height:50,type:t.order.type}}),i("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(t.order.en_type))])],1),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"grey"}},[t._v("佣金")]),i("v-uni-text",{staticStyle:{color:"red"}},[t._v("10%")])],1)],1),i("v-uni-view",[i("v-uni-view",{staticStyle:{margin:"20rpx 0"}},[t._v(t._s(t.order.plan_desc))]),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[0==t.order.state&&1==t.order.can_flow?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"20rpx"}},[i("v-uni-view",[t._v("截止时间")]),i("v-uni-view",[t._v(t._s(t.order.grouptime_h)+":"+t._s(t.order.grouptime_m)+":"+t._s(t.order.grouptime_s))])],1):t._e(),1==t.order.state?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"20rpx"}},[i("v-uni-view",[t._v("未中奖")])],1):t._e(),0==t.order.state&&0==t.order.can_flow?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"20rpx"}},[i("v-uni-view",[t._v("未开奖")])],1):t._e(),2==t.order.state||3==t.order.state?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","margin-right":"20rpx",color:"red"}},[i("v-uni-view",[t._v("已中奖")]),i("v-uni-view",[t._v("￥"+t._s(t.order.award_money))])],1):t._e(),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"#f9f9f9",padding:"20rpx 20rpx","border-radius":"20rpx",width:"80%","justify-content":"space-around"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("v-uni-view",[t._v("自购金额")]),i("v-uni-view",{staticStyle:{color:"red"}},[t._v(t._s(t.order.amount))])],1),i("v-uni-view",{staticStyle:{"border-right":"1px solid #d6d6d6",height:"50rpx",width:"1px"}}),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("v-uni-view",[t._v("跟单金额")]),i("v-uni-view",{staticStyle:{color:"red"}},[t._v(t._s(t.order.flow_amount))])],1),i("v-uni-view",{staticStyle:{"border-right":"1px solid #d6d6d6",height:"50rpx",width:"1px"}}),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("v-uni-view",[t._v("起投金额")]),i("v-uni-view",{staticStyle:{color:"red"}},[t._v(t._s(t.order.amount/t.order.bei)+".00")])],1)],1)],1)],1)],1),t.order?i("v-uni-view",{staticStyle:{"margin-bottom":"120rpx"}},[i("wuc-tab",{staticStyle:{"background-color":"white"},attrs:{textFlex:!0,"tab-list":t.tabList,tabCur:t.TabCur},on:{"update:tabCur":function(e){arguments[0]=e=t.$handleEvent(e),t.TabCur=e},"update:tab-cur":function(e){arguments[0]=e=t.$handleEvent(e),t.TabCur=e},change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}}),i("v-uni-swiper",{staticStyle:{"min-height":"1300rpx"},style:{padding:"30rpx 20rpx","background-color":"white",height:t.order.order_detail_.length>0?350*t.order.order_detail_.length+"rpx":"350rpx"},attrs:{current:t.TabCur,duration:"300"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[i("v-uni-swiper-item",[0==t.TabCur?i("commonDetail",{attrs:{orderdetail:t.order}}):t._e()],1),i("v-uni-swiper-item",[1==t.TabCur?i("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":!0,"upper-threshold":50,"enable-back-to-top":!0}},[i("flowRecord",{attrs:{id:t.order.id}})],1):t._e()],1)],1)],1):t._e()],1):t._e(),1==t.order.can_flow?i("v-uni-view",{staticStyle:{position:"fixed",left:"0",right:"0",bottom:"0","background-color":"white",padding:"20rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{flex:"8"}}),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center",flex:"2","margin-right":"40rpx"}},[i("v-uni-text",[t._v("投")]),i("v-uni-button",{staticStyle:{height:"60rpx","line-height":"60rpx",padding:"0 25rpx"},attrs:{disabled:t.can_del},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sub()}}},[t._v("-")]),i("v-uni-view",[i("v-uni-input",{staticClass:"input",attrs:{type:"number"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)}},model:{value:t.bei,callback:function(e){t.bei=e},expression:"bei"}})],1),i("v-uni-button",{staticStyle:{height:"60rpx","line-height":"60rpx",padding:"0 25rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add()}}},[t._v("+")]),i("v-uni-text",[t._v("倍")])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","margin-left":"60rpx"}},[i("v-uni-text",[t._v(t._s(t.bei)+"倍")]),i("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[t._v("合计"),i("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(t.bei*t.order.bei_amount)+".00")]),t._v("元")],1)],1),i("v-uni-view",{staticStyle:{"margin-right":"40rpx",background:"linear-gradient(50deg,#54d6ff,#54bbff 11%,#8653ff 67%,#aa3ad9)",height:"70rpx","line-height":"70rpx","text-align":"center",padding:"0 90rpx","border-radius":"20rpx",color:"white","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openorderpop()}}},[t._v("立即跟单")])],1)],1):t._e(),t.order?i("payfloworder",{ref:"orderpop_",attrs:{id:t.order.id,amount:t.bei*t.order.bei_amount,shop_money:t.shop_money,bei:t.bei,game_type:t.order.type,plan_desc:t.desc},on:{closeopendoor:function(e){arguments[0]=e=t.$handleEvent(e),t.closeopendoor()}}}):t._e()],1)},a=[]},"36b6":function(t,e,i){"use strict";var n=i("df51"),r=i.n(n);r.a},3965:function(t,e,i){"use strict";i.r(e);var n=i("53ee"),r=i("143d");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"7fa02b7b",null,!1,n["a"],void 0);e["default"]=c.exports},"4e67":function(t,e,i){t.exports=i.p+"static/img/renjiu.71c1eb9c.png"},"4f87":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4");var n={name:"payfloworder",data:function(){return{arr:{foot:"竞彩足球",bd:"北京单场",basket:"竞彩篮球",pl3:"排列三",pl5:"排列五"}}},props:{shop_money:null,amount:null,game_type:{type:String,default:"foot"},mode:null,bei:null,id:null},methods:{goRecharge:function(){uni.navigateTo({url:"/pages/finace/recharge"})},doorder:function(){var t={id:this.id,bei:this.bei};this.$api.dofloworder(t).then((function(t){var e=encodeURIComponent(JSON.stringify(t.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+e})}))},openorderpop:function(){this.$emit("closeopendoor")}}};e.default=n},5297:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,e){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};e.default=n},"53ee":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",["foot"==t.type?n("v-uni-image",{style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("bfa4")}}):t._e(),"basket"==t.type?n("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("8a87")}}):t._e(),"bd"==t.type?n("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("b485")}}):t._e(),"pl3"==t.type?n("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("7d4f")}}):t._e(),"renjiu"==t.type||"sfc"==t.type?n("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("4e67")}}):t._e()],1)],1)},r=[]},"577b":function(t,e,i){"use strict";i.r(e);var n=i("2902"),r=i("be4f");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("36b6");var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"1f1d0f19",null,!1,n["a"],void 0);e["default"]=c.exports},"5ff2":function(t,e,i){"use strict";i.r(e);var n=i("8e8c"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"639e":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("577b")),a=n(i("e2d7")),o=n(i("7896")),c=n(i("d8f2")),l=n(i("e8a4")),u=n(i("3965")),d={name:"flowDetail",components:{barTitle:r.default,commonDetail:o.default,flowRecord:c.default,payfloworder:l.default,gameImg:u.default},data:function(){return{desc:"ads",chuan_arr:[],check_game:{},is_order_open:!1,shop_money:0,can_del:!0,bei:1,order:"",isBack:!0,id:"",TabCur:0,tabList:[{name:"方案详情",type:"buy_lottery"},{name:"跟单次数",type:"0"}]}},created:function(){this.config=a.default},onLoad:function(t){var e=this;this.id=t.id;var i={id:this.id};this.$dashen.getOrderDetail(i).then((function(t){e.order=t.data,e.tabList[1]["name"]="跟单次数("+t.data.flow_count+")",e.countdown()}))},watch:{bei:function(t,e){this.can_del=!(t>1)}},methods:{goHomePage:function(t){uni.navigateTo({url:"/pages/flow/homePage?uid="+t})},closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},getUserInfo:function(){var t=this;this.$api.getUserInfo({}).then((function(e){t.shop_money=e.data.data.total_money,t.$refs.orderpop_.$refs.orderpop.open("bottom"),t.is_order_open=!0}))},openorderpop:function(){0==this.is_order_open?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},sub:function(){this.bei>1&&this.bei--},add:function(){this.bei++},input:function(t){var e=t.detail.value;e<=0&&(e=1),this.bei=e},guanzhu:function(t){var e=this,i={uid:t};this.$dashen.guanzhu(i).then((function(t){uni.showToast({title:"操作成功"}),e.order.is_guanzhu=0==e.order.is_guanzhu?1:0}))},tabChange:function(t){this.TabCur=t},swiperChange:function(t){var e=t.target.current;this.TabCur=e},countdown:function(){var t=this;if(this.order)var e=setInterval((function(){t.order.stime-=1;var i=t.order.stime;if(i>0){var n=Math.floor(i/86400),r=Math.floor(i/3600%24)+24*n,a=Math.floor(i/60%60),o=Math.floor(i/1%60);n=n<10?"0"+n:n,r=r<10?"0"+r:r,a=a<10?"0"+a:a,o=o<10?"0"+o:o,t.order.grouptime_d=n,t.order.grouptime_h=r,t.order.grouptime_m=a,t.order.grouptime_s=o}else clearInterval(e),t.order.grouptime_d=0,t.order.grouptime_h=0,t.order.grouptime_m=0,t.order.grouptime_s=0}),1e3)}}};e.default=d},6761:function(t,e,i){"use strict";i.r(e);var n=i("639e"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"710e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[0==t.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[t._v("开赛后可见")]),i("v-uni-view",[t._v("截止时间 "+t._s(t.orderdetail.stop_time))])],1):t._e(),t.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[t._v(t._s(t.orderdetail.en_type))]),i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[t._v(t._s(t.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[t._v(t._s(t.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[t._v(t._s(t.orderdetail.chuan))])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("主队/客队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("赛果(全/半)")])],1),t._l(t.orderdetail.order_detail_,(function(e,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[t._v(t._s(e[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[t._v(t._s(e[0]["h_name"])+"("),e[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[t._v("+"+t._s(e[0]["p_goal"]))]):t._e(),e[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[t._v(t._s(e[0]["p_goal"]))]):t._e(),t._v(")")],1),i("v-uni-view",[t._v("vs")]),i("v-uni-view",[t._v(t._s(e[0]["a_name"]))])],1),i("v-uni-view",{staticStyle:{width:"25%"}},t._l(e,(function(e,n){return i("v-uni-view",{key:n,staticStyle:{"text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:t.checkred(e)?"red":"black"}},[t._v(t._s(e.name))]),i("v-uni-view",[t._v("("+t._s(e.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[t._v(t._s(e[0]["qcbf"]?e[0]["qcbf"]:"__/__"))]),i("v-uni-view",[t._v("半:"+t._s(e[0]["bcbf"]?e[0]["bcbf"]:"__/__"))])],1)],1)}))],2):t._e()],1)},r=[]},7773:function(t,e,i){"use strict";i.r(e);var n=i("710e"),r=i("5ff2");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"0a581963",null,!1,n["a"],void 0);e["default"]=c.exports},7896:function(t,e,i){"use strict";i.r(e);var n=i("010d"),r=i("a3f4");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3bcffbdc",null,!1,n["a"],void 0);e["default"]=c.exports},"7d4f":function(t,e,i){t.exports=i.p+"static/img/pl3.d66cc098.png"},"7e29":function(t,e,i){"use strict";i.r(e);var n=i("3199"),r=i("6761");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("206a");var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"fdb5b7dc",null,!1,n["a"],void 0);e["default"]=c.exports},"821c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",color:"grey"}},[i("v-uni-view",[t._v("用户")]),i("v-uni-view",[t._v("跟单金额")])],1),i("v-uni-view",{staticStyle:{"background-color":"#ff976a","text-align":"center",color:"white",margin:"20rpx 0",height:"50rpx","line-height":"50rpx","border-radius":"10rpx"}},[t._v("默认展示前10位跟单用户")]),i("v-uni-view",t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,style:{display:"flex","align-items":"center","justify-content":"space-between",margin:"20rpx 10rpx",background:n%2==0?"white":"#f9f9f9",padding:"15rpx 10rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",[i("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx","border-radius":"50rpx"},attrs:{src:t.config.config.url+e.user.avatar}})],1),i("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[t._v(t._s(e.user.real_name))])],1),i("v-uni-view",{staticStyle:{color:"red"}},[t._v("￥"+t._s(e.amount))])],1)})),1)],1)},r=[]},"882c":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[0==t.orderdetail.order_detail_.length?i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","font-size":"40rpx",color:"grey","line-height":"80rpx"}},[i("v-uni-view",{staticClass:"cuIcon-lock",staticStyle:{"font-size":"80rpx","margin-top":"20rpx"}}),i("v-uni-view",[t._v("开赛后可见")]),i("v-uni-view",[t._v("截止时间 "+t._s(t.orderdetail.stop_time))])],1):t._e(),t.orderdetail.order_detail_.length>0?i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-text",[t._v(t._s(t.orderdetail.en_type))]),4!=t.orderdetail.mode?i("v-uni-view",{staticStyle:{color:"white"}},[i("v-uni-view",{staticStyle:{"background-color":"#6bb4f9",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[t._v(t._s(t.orderdetail.num)+"注")]),i("v-uni-view",{staticStyle:{"background-color":"red",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx",margin:"0 6rpx"}},[t._v(t._s(t.orderdetail.bei)+"倍")]),i("v-uni-view",{staticStyle:{"background-color":"#bf8ef0",display:"inline-block",padding:"4rpx 10rpx","border-radius":"10rpx"}},[t._v(t._s(t.orderdetail.chuan))])],1):t._e()],1),i("v-uni-view",{staticStyle:{display:"flex","background-color":"#ebebeb",width:"100%",padding:"5rpx 0","margin-top":"15rpx"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("场次")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("客队/主队")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("投注内容")]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"grey"}},[t._v("赛果")])],1),t._l(t.orderdetail.order_detail_,(function(e,n){return i("v-uni-view",{key:n,style:{display:"flex",width:"100%",margin:"25rpx 0","align-items":"center","background-color":n%2==0?"white":"#ebebeb",padding:"15rpx 0"}},[i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black"}},[t._v(t._s(e[0]["week"]))]),i("v-uni-view",{staticStyle:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[t._v(t._s(e[0]["a_name"]))]),i("v-uni-view",[t._v("vs")]),i("v-uni-view",[t._v(t._s(e[0]["h_name"])+"("),e[0]["p_goal"]>0?i("v-uni-text",{staticStyle:{color:"red"}},[t._v("+"+t._s(e[0]["p_goal"]))]):t._e(),e[0]["p_goal"]<0?i("v-uni-text",{staticStyle:{color:"green"}},[t._v(t._s(e[0]["p_goal"]))]):t._e(),t._v(")")],1)],1),i("v-uni-view",{staticStyle:{width:"25%"}},t._l(e,(function(n,r){return i("v-uni-view",{key:r,style:{"text-align":"center",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",{style:{color:t.checkred(n)?"red":"black"}},[t._v(t._s(n.name)),i("v-uni-text",{staticStyle:{color:"#007AFF"}},[t._v(t._s(3==n.met.substr(0,1)?"("+e[0]["dxf"]+")":""))])],1),i("v-uni-view",[t._v("("+t._s(n.pl)+")")])],1)})),1),i("v-uni-view",{style:{width:"25%","text-align":"center",color:"black",display:"flex","flex-direction":"column","justify-content":"center"}},[i("v-uni-view",[t._v(t._s(e[0]["qcbf"]?e[0]["qcbf"]:"__/__"))])],1)],1)}))],2):t._e()],1)},r=[]},"8a87":function(t,e,i){t.exports=i.p+"static/img/jclq.8aac4248.png"},"8e8c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"footdetail",props:{orderdetail:null},methods:{checkred:function(t){return"1"==t["ret"]}}}},"8f5e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=e},9630:function(t,e,i){"use strict";i.r(e);var n=i("29c3"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},a3f4:function(t,e,i){"use strict";i.r(e);var n=i("ecc3"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},a70a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"div[data-v-cb749a20],\r\nuni-scroll-view[data-v-cb749a20],\r\nuni-swiper[data-v-cb749a20]{box-sizing:border-box}.wuc-tab[data-v-cb749a20]{white-space:nowrap}.wuc-tab-item[data-v-cb749a20]{height:%?90?%;display:inline-block;line-height:%?90?%;margin:0 %?10?%;padding:0 %?20?%}.wuc-tab-item.cur[data-v-cb749a20]{border-bottom:%?4?% solid}.wuc-tab.fixed[data-v-cb749a20]{position:fixed;width:100%;top:0;z-index:1024;box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1)}.flex[data-v-cb749a20]{display:flex}.text-center[data-v-cb749a20]{text-align:center}.flex-sub[data-v-cb749a20]{flex:1}.text-blue[data-v-cb749a20]{color:#0081ff}.text-white[data-v-cb749a20]{color:#fff}.bg-white[data-v-cb749a20]{background-color:#fff}.bg-blue[data-v-cb749a20]{background-color:#0081ff}.text-orange[data-v-cb749a20]{color:#f37b1d}.text-xl[data-v-cb749a20]{font-size:%?36?%}",""]),t.exports=e},aa3d:function(t,e,i){"use strict";i.r(e);var n=i("21f9"),r=i("e7f1");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("ceb8");var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"cb749a20",null,!1,n["a"],void 0);e["default"]=c.exports},b485:function(t,e,i){t.exports=i.p+"static/img/bjdc.b529018a.png"},b69f:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("1400").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-popup",{ref:"orderpop",staticStyle:{"z-index":"9999",height:"600rpx"},attrs:{"mask-click":!0,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticClass:"cuIcon-roundclose",staticStyle:{position:"absolute",top:"35rpx",right:"35rpx","font-size":"40rpx",color:"grey"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openorderpop()}}}),i("v-uni-view",{staticStyle:{"min-height":"300rpx",padding:"40rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",color:"grey","padding-bottom":"20rpx","border-bottom":"1px solid #EEEEEE"}},[i("v-uni-view",{staticStyle:{color:"#000000"}},[t._v("支付给店主")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20rpx"}},[i("v-uni-view",[t._v(t._s(t.arr[t.game_type]))]),i("v-uni-view",[t._v(t._s(t.amount)+".00元")])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-view",[t._v("店铺余额")]),i("v-uni-view",[t._v(t._s(this.shop_money>=t.amount?-1*t.amount+".00元":"预存不足"))])],1),this.shop_money<t.amount?i("v-uni-view",{staticStyle:{"background-color":"#007AFF",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRecharge()}}},[t._v("预存入口1")]):t._e(),this.shop_money>=t.amount?i("v-uni-view",{staticStyle:{"background-color":"red",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doorder()}}},[t._v("立即支付")]):t._e()],1)],1)],1)},a=[]},bd80:function(t,e,i){"use strict";i.r(e);var n=i("2a32"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},be4f:function(t,e,i){"use strict";i.r(e);var n=i("e9a6"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},bfa4:function(t,e,i){t.exports=i.p+"static/img/jczq.eacea4f2.png"},ceb8:function(t,e,i){"use strict";var n=i("28e3"),r=i.n(n);r.a},d631:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".scroll[data-v-fdb5b7dc]{position:absolute;top:0;left:0;width:100%;height:100%}.input[data-v-fdb5b7dc]{width:%?120?%;margin:0;font-size:%?30?%;height:%?60?%;text-align:center;vertical-align:top;background:#f2f3f5;border-right:.02rem solid #fff;border-left:.02rem solid #fff}",""]),t.exports=e},d8f2:function(t,e,i){"use strict";i.r(e);var n=i("821c"),r=i("bd80");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"4751f0fc",null,!1,n["a"],void 0);e["default"]=c.exports},df51:function(t,e,i){var n=i("8f5e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("ed698c7a",n,!0,{sourceMap:!1,shadowMode:!1})},e7f1:function(t,e,i){"use strict";i.r(e);var n=i("5297"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},e8a4:function(t,e,i){"use strict";i.r(e);var n=i("b69f"),r=i("212e");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"d8260f06",null,!1,n["a"],void 0);e["default"]=c.exports},e9a6:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};e.default=n},ecc3:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("7773")),a=n(i("073c")),o={name:"commonDetail",components:{footdetail:r.default,basketdetail:a.default},props:{orderdetail:{type:Object,default:""}}};e.default=o}}]);