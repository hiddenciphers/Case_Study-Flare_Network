(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{620:function(t,i,o){"use strict";o.r(i);var s={name:"NotificationBar",props:{content:{type:String,default:""},postID:{type:Number,required:!0},bgColor:{type:String,default:""}},data:function(){return{isVisible:!1}},computed:{iconColor:function(){return(299*parseInt(this.bgColor.substr(1,2),16)+587*parseInt(this.bgColor.substr(3,2),16)+114*parseInt(this.bgColor.substr(5,2),16))/1e3>=128?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)"}},created:function(){var t=this;document.cookie.split(";").filter((function(i){return i.indexOf("rv_notification_bar_dismiss_".concat(t.postID,"=1"))>=0})).length||(this.isVisible=!0)},methods:{close:function(){this.isVisible=!1,document.cookie="rv_notification_bar_dismiss_".concat(this.postID,"=1"),window.dataLayer.push({event:"NotificationBar",label:window.location.pathname,action:"dismiss"})}}},n=o(149),e=Object(n.a)(s,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return t.isVisible?o("div",{staticClass:"notification-bar",style:{"background-color":t.bgColor}},[o("div",{staticClass:"container"},[o("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),o("a",{staticClass:"notification-bar__close",on:{click:t.close}},[o("i",{staticClass:"fa fa-times-circle",style:{color:t.iconColor}})])])]):t._e()}),[],!1,null,"2c17808c",null);i.default=e.exports}}]);