(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1155:function(t,e,r){"use strict";var n,o,l,c,d,h,f,v,m;r.d(e,"a",(function(){return C})),r.d(e,"c",(function(){return x})),r.d(e,"b",(function(){return w}));var y=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:52;var n=C(0,0,0,r);return n.addColorStop(0,t),n.addColorStop(1,e),n},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:52;var canvas=document.createElement("canvas"),o=canvas.getContext("2d"),l=o.createLinearGradient(t,e,r,n);return l},k=(o||(o=y("rgba(255, 225, 222, 1)","rgba(255, 225, 222, 0)")),l||(l=y("rgba(212, 212, 212, 1)","rgba(212, 212, 212, 0)")),n||(n=y("rgba(59, 191, 127, 0.29)","rgba(205, 249, 240, 0)")),{"-1":(d||(d=y("rgba(247, 231, 228, 1)","rgba(247, 231, 228, 0)",400)),d),0:(h||(h=y("rgba(220, 224, 232, 1)","rgba(220, 224, 232, 0)",400)),h),1:(c||(c=y("rgba(224, 243, 241, 1)","rgba(224, 243, 241, 0)",400)),c)}),_={"-1":(v||(v=y("rgba(72, 56, 53, 1)","rgba(72, 56, 53, 0)",400)),v),0:(m||(m=y("rgba(60, 64, 73, 1)","rgba(60, 64, 73, 0)",400)),m),1:(f||(f=y("rgba(16, 50, 46, 1)","rgba(16, 50, 46, 0)",400)),f)},O={"-1":"#db5541",0:"#9395A5",1:"rgba(75,192,192,1)"},x=function(data,t){return{datasets:[{data:data,fill:"origin",pointColor:"transparent",pointStrokeColor:"transparent",lineTension:.1,backgroundColor:"transparent",borderColor:O[t],borderWidth:1,pointRadius:0,pointHitRadius:0,clip:4}]}},w=function(data,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={datasets:[{data:data,fill:"origin",pointColor:"transparent",pointStrokeColor:"transparent",lineTension:.1,backgroundColor:e?_[t]:k[t],borderColor:O[t],borderWidth:1,pointRadius:0,pointHitRadius:0,clip:4}]};return r}},1164:function(t,e,r){"use strict";r.d(e,"a",(function(){return C}));r(8),r(9),r(12),r(13);var n,o=r(4),l=r(1148),c=(r(27),r(31),r(44),r(26),r(7),r(1163));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(t,e,r,o){t(e,r),void 0!==o&&o.emit(n.ChartRendered)}function v(t,e){t.destroy(),void 0!==e&&e.emit(n.ChartDestroyed)}function m(t,e,r){var n=[];t.datasets=e.datasets.map((function(e){var o=t.datasets.find((function(t){return t[r]===e[r]}));return o&&e.data&&!n.includes(o)?(n.push(o),Object.assign(o,e),o):h({},e)}))}!function(t){t.ChartRendered="chart_rendered",t.ChartUpdated="chart_updated",t.ChartDestroyed="chart_destroyed",t.LabelsUpdated="labels_updated"}(n||(n={}));function y(t,e,r){var o=null;return{props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:function(){}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null}},computed:{hasAnnotationPlugin:function(){var t,e;return void 0!==(null===(t=this.chartOptions)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.annotation)}},created:function(){c.d.register(r)},mounted:function(){o={current:null},"datasets"in this.chartData&&this.chartData.datasets.length>0&&(f(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered))},watch:{chartData:{handler:function(t,e){this.chartDataHandler(t,e)},deep:!0},chartOptions:{handler:function(t){this.chartOptionsHandler(t)},deep:!0}},methods:{renderChart:function(data,t){var r=this.getCurrentChart();if(null!==r&&(v(r),this.$emit(n.ChartDestroyed)),!this.$refs.canvas)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");var o=function(data,t){var e={labels:void 0===data.labels?[]:Object(l.a)(data.labels),datasets:[]};return m(e,h({},data),t),e}(data,this.datasetIdKey),d=this.$refs.canvas.getContext("2d");null!==d&&this.setCurrentChart(new c.d(d,{type:e,data:o,options:t,plugins:this.plugins}))},chartDataHandler:function(t,e){var r,o,l,c=h({},t),d=h({},e),y=this.getCurrentChart();if(Object.keys(d).length>0){var C=function(t,e){return e.datasets.length===t.datasets.length&&t.datasets.every((function(t,r){return t.label===e.datasets[r].label}))}(c,d);C&&null!==y?(m(y.data,c,this.datasetIdKey),void 0!==c.labels&&(r=y,o=c.labels,r.data.labels=o,void 0!==l&&l.emit(n.LabelsUpdated),this.$emit(n.LabelsUpdated)),this.updateChart(),this.$emit(n.ChartUpdated)):(null!==y&&(v(y),this.$emit(n.ChartDestroyed)),f(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered))}else null!==y&&(v(y),this.$emit(n.ChartDestroyed)),f(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered)},chartOptionsHandler:function(t){var e=this.getCurrentChart();null!==e?(!function(t,e){t.options=h({},e)}(e,t),this.updateChart()):f(this.renderChart,this.chartData,this.chartOptions)},updateChart:function(){var t,e=this.getCurrentChart();e.update(),void 0!==t&&t.emit(n.ChartUpdated)},toImage:function(){var t=this.getCurrentChart(),img=t.toBase64Image();return v(t),img},getCurrentChart:function(){return this.hasAnnotationPlugin?o.current:this.$data._chart},setCurrentChart:function(t){this.hasAnnotationPlugin?o.current=t:this.$data._chart=t}},beforeDestroy:function(){var t=this.getCurrentChart();null!==t&&(v(t),this.$emit(n.ChartDestroyed))},render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])}}}y("bar-chart","bar",c.a),y("doughnut-chart","doughnut",c.e);var C=y("line-chart","line",c.h);y("pie-chart","pie",c.k),y("polar-chart","polarArea",c.m),y("radar-chart","radar",c.n),y("bubble-chart","bubble",c.b),y("scatter-chart","scatter",c.o)},1172:function(t,e,r){"use strict";var n=r(1164),o=r(1163);o.d.register(o.i,o.j,o.l,o.c,o.p,o.f,o.g);var l={components:{LineChartGenerator:n.a},props:{chartId:{type:String,default:"area-chart"},chartData:{type:Object,default:function(){}},chartOptions:{type:Object,default:null},callbacks:{type:Object,default:function(){}},theme:{type:String,default:"day"}},computed:{mergeOptions:function(){var t="day"===this.theme?this.themeDayOptions:this.themeNightOptions;return this.chartOptions?this.$utils._merge(t,this.chartOptions):t},themeDayOptions:function(){var t=this;return{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},plugins:{legend:{display:!1},filler:{propagate:!0},tooltip:{enabled:!0,usePointStyle:!0,backgroundColor:"#fff",bodyColor:"#27282C",titleColor:"#AEB0B3",titleFont:{weight:"normal"},titleMarginBottom:10,callbacks:{title:function(t){return t[0].label},label:this.callbacks.tooltipLabel,labelColor:function(){return{borderColor:"function"==typeof t.callbacks.tooltipLabelColor?t.callbacks.tooltipLabelColor():"#0EAD98",backgroundColor:"function"==typeof t.callbacks.tooltipLabelColor?t.callbacks.tooltipLabelColor():"#0EAD98",radius:8}}}}},title:{show:!1},layout:{padding:{left:-30,right:0,top:0,bottom:1}},scales:{x:{grid:{color:"#F7F8FA",lineWidth:1,borderWidth:1,borderColor:"#F7F8FA",tickLength:0},ticks:{callback:this.callbacks.xTicks,color:"#A3A3A5",padding:30}},y:{grid:{color:"#F7F8FA",lineWidth:1,borderWidth:1,borderColor:"#F7F8FA",tickLength:0},ticks:{callback:this.callbacks.yTicks,color:"#27282C",padding:30}}},hover:{mode:"nearest",animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}}}},themeNightOptions:function(){var t=this;return{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},plugins:{legend:{display:!1},filler:{propagate:!0},tooltip:{enabled:!0,usePointStyle:!0,backgroundColor:"#393E47",bodyColor:"#F9FBFE",titleColor:"#909399",titleFont:{weight:"normal"},titleMarginBottom:10,callbacks:{title:function(t){return t[0].label},label:this.callbacks.tooltipLabel,labelColor:function(){return{borderColor:"function"==typeof t.callbacks.tooltipLabelColor?t.callbacks.tooltipLabelColor():"#0EAD98",backgroundColor:"function"==typeof t.callbacks.tooltipLabelColor?t.callbacks.tooltipLabelColor():"#0EAD98",radius:8}}}}},title:{show:!1},layout:{padding:{left:-30,right:0,top:0,bottom:1}},scales:{x:{grid:{color:"#2C3038",lineWidth:1,borderWidth:1,borderColor:"#2C3038",tickLength:0},ticks:{callback:this.callbacks.xTicks,color:"#A3A3A5",padding:30}},y:{grid:{color:"#2C3038",lineWidth:1,borderWidth:1,borderColor:"#2C3038",tickLength:0},ticks:{callback:this.callbacks.yTicks,color:"#A3A3A5",padding:30}}},hover:{mode:"nearest",animationDuration:0},responsiveAnimationDuration:0,elements:{line:{tension:0}}}}}},c=r(0),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.chartData?r("LineChartGenerator",{ref:"area",attrs:{"chart-options":t.mergeOptions,"chart-data":t.chartData,"chart-id":t.chartId}}):t._e()}),[],!1,null,null,null);e.a=component.exports},1800:function(t,e,r){"use strict";r(7),r(8),r(12),r(13);var n=r(4),o=(r(27),r(9),r(78),r(10)),l=r(372),c=r(172),d=r(3171);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{CoinLogo:l.a,Empty:c.a},props:{stratgyType:{type:String,default:"autoInvest"}},data:function(){return{visible:!1,inputVal:""}},computed:f(f({},Object(o.d)({infoDict:function(t){return t.market.spot.infoDict},spotStatus:function(t){return t.market.spot.status},assetPrices:function(t){return t.legalCurrency.assetPrices},marketList:function(t){return t.strategy.marketList},spotGridMarketList:function(t){return t.strategy.spotGridMarketList},isMobile:function(t){return t.responsive.screens.md}})),{},{list:function(){var t=this;return"autoInvest"===this.stratgyType?this.marketList.map((function(e){var r,n,o,l;return{buyAsset:null===(r=t.infoDict[e.market])||void 0===r?void 0:r.buy_asset_type,sellAsset:null===(n=t.infoDict[e.market])||void 0===n?void 0:n.sell_asset_type,last:null===(o=t.spotStatus[e.market])||void 0===o?void 0:o.last,change:(null===(l=t.spotStatus[e.market])||void 0===l?void 0:l.change)||"0",market:e.market}})).sort((function(a,b){return b.last-a.last})):this.spotGridMarketList.map((function(e){var r,n,o,l;return{buyAsset:null===(r=t.infoDict[e.market])||void 0===r?void 0:r.buy_asset_type,sellAsset:null===(n=t.infoDict[e.market])||void 0===n?void 0:n.sell_asset_type,last:null===(o=t.spotStatus[e.market])||void 0===o?void 0:o.last,change:(null===(l=t.spotStatus[e.market])||void 0===l?void 0:l.change)||"0",market:e.market}}))},renderList:function(){var t=this;return this.inputVal?this.list.filter((function(e){return new RegExp(t.inputVal.toLowerCase()).test("".concat(e.sellAsset,"/").concat(e.buyAsset).concat(e.sellAsset).concat(e.buyAsset).toLowerCase())})):this.list},fields:function(){return[{label:this.$VMarketPopover("名称","名称"),prop:"name",width:this.isMobile?120:180,align:"start"},{label:this.$VMarketPopover("价格","价格"),prop:"price",width:this.isMobile?"auto":128,align:"end",sortable:!0},{label:this.$VMarketPopover("涨跌幅","涨跌幅"),prop:"change",width:this.isMobile?"auto":128,align:"end",sortable:!0}]}}),mounted:function(){},methods:{handleBlur:function(){this.visible=!1},handleRowClick:function(data){this.$emit("change",data),this.visible=!1},sortCompare:function(a,b,t,e){return"price"===t?"asc"===e?b.last-a.last:a.last-b.last:"change"!==t||("asc"===e?b.change-a.change:a.change-b.change)}}};v.methods?Object.assign(v.methods,{$VMarketPopover:function(t,e){var r=d;if(!this.$lang&&!r.zh_Hans_CN)return e||t;var n=r[this.$lang]||r.zh_Hans_CN||{};return void 0===n[t]?e||t:n[t]}}):v.methods={$VMarketPopover:function(t,e){var r=d;if(!this.$lang&&!r.zh_Hans_CN)return e||t;var n=r[this.$lang]||r.zh_Hans_CN||{};return void 0===n[t]?e||t:n[t]}};var m=v,y=(r(3172),r(3174),r(3176),r(0)),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.handleBlur,expression:"handleBlur"}],staticClass:"c-strategy-auto-invest-market-popover"},[r("span",{class:{active:t.visible},on:{click:function(e){t.visible=!t.visible}}},[t._t("default")],2),t._v(" "),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"content"},[r("via-input",{attrs:{clearable:"",placeholder:t.$VMarketPopover("搜索")},scopedSlots:t._u([{key:"prefix",fn:function(){return[r("i",{staticClass:"iconfont icon-search1 text-b4b7bd font-bold"})]},proxy:!0}]),model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),t._v(" "),r("div",{staticClass:"mt-10"},[r("via-table",{staticClass:"w-full",attrs:{items:t.renderList,fields:t.fields,virtual:"","data-key":"market","table-height":300,"table-header-class":"table-header","prop-class":"px-0 bg-ffffff-gray1001 md:text-12","label-class":"px-0","sort-compare":t.sortCompare},on:{"row-click":t.handleRowClick},scopedSlots:t._u([{key:"name",fn:function(e){return[r("div",{staticClass:"flex items-center"},[r("CoinLogo",{attrs:{coin:e.item.sellAsset,size:24}}),t._v(" "),r("span",{staticClass:"text-14 ms-4"},[t._v(t._s(e.item.sellAsset+"/"+e.item.buyAsset))])],1)]}},{key:"price",fn:function(e){return[r("span",{staticClass:"text-14"},[t._v(t._s(e.item.last?e.item.last.decimalComma():"--"))])]}},{key:"change",fn:function(e){return[r("span",{class:[e.item.change.decimalCmp("0")>0?"text-0ead98":e.item.change.decimalCmp("0")<0?"text-db5541":""]},[t._v("\n              "+t._s(e.item.change.decimalPercent())+"\n            ")])]}}])},[t._v(" "),t._v(" "),t._v(" "),r("template",{slot:"empty"},[r("Empty")],1)],2)],1)],1)])],1)}),[],!1,null,"50fef411",null);e.a=component.exports},2015:function(t,e,r){var content=r(3173);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("49514c7a",content,!0,{sourceMap:!1})},2016:function(t,e,r){var content=r(3175);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("79ba3189",content,!0,{sourceMap:!1})},2017:function(t,e,r){var content=r(3177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("14335281",content,!0,{sourceMap:!1})},3171:function(t){t.exports=JSON.parse('{"ach_UG":{"价格":"价格","名称":"名称","搜索":"搜索","涨跌幅":"涨跌幅"},"ar_AE":{"价格":"سعر","名称":"اسم","搜索":"بحث","涨跌幅":"تردد الصعود والهبوط"},"de_DE":{"价格":"Preis","名称":"Name","搜索":"Suchen","涨跌幅":"Änderung"},"en_US":{"价格":"Price","名称":"Name","搜索":"Search","涨跌幅":"Change"},"es_ES":{"价格":"Precio","名称":"Nombre","搜索":"Buscar","涨跌幅":"Cambiar"},"fa_IR":{"价格":"قیمت","名称":"اسم","搜索":"جستجو","涨跌幅":"تغییر"},"fr_FR":{"价格":"Prix","名称":"Nom","搜索":"Rechercher","涨跌幅":"Variation en pourcentage"},"id_ID":{"价格":"Harga","名称":"Nama","搜索":"Cari","涨跌幅":"Fluktuasi"},"ja_JP":{"价格":"価格","名称":"名前","搜索":"検索","涨跌幅":"変動"},"ko_KP":{"价格":"가격","名称":"이름","搜索":"검색","涨跌幅":"등락률"},"pt_PT":{"价格":"Preço","名称":"Nome","搜索":"Pesquisar","涨跌幅":"Taxa de Subida e Caída"},"ru_KZ":{"价格":"Цена","名称":"Название","搜索":"Поиск","涨跌幅":"Изменить"},"th_TH":{"价格":"ราคา","名称":"ชื่อ","搜索":"ค้นหา","涨跌幅":"การเพิ่มขึ้นและลดลง"},"tr_TR":{"价格":"Fiyat","名称":"Ad","搜索":"Ara","涨跌幅":"Değişim"},"vi_VN":{"价格":"Giá cả","名称":"Tên","搜索":"Tìm","涨跌幅":"Mức tăng giảm"},"zh_Hans_CN":{"价格":"价格","名称":"名称","搜索":"搜索","涨跌幅":"涨跌幅"},"zh_Hant_HK":{"价格":"價格","名称":"名稱","搜索":"搜索","涨跌幅":"漲跌幅"}}')},3172:function(t,e,r){"use strict";r(2015)},3173:function(t,e,r){var n=r(5)(!1);n.push([t.i,".c-strategy-auto-invest-market-popover .active .arrow-down{background:rgba(14,173,152,.1);border-color:transparent}.c-strategy-auto-invest-market-popover .active .arrow-down i{color:var(--text-0ead98);transform:rotate(-180deg)}.c-strategy-auto-invest-market-popover .content{position:absolute;right:32px;left:32px;z-index:10;padding:16px 20px 0;margin-top:10px;background:var(--bg-ffffff-gray1001);border-radius:12px;box-shadow:0 10px 40px rgba(164,197,205,.3);overflow:hidden}@media (max-width:768px){.c-strategy-auto-invest-market-popover .content{right:10px;left:10px}}.c-strategy-auto-invest-market-popover .via-input{background-color:var(--bg-f7f8fa);border:1px solid var(--border-f7f8fa)}.c-strategy-auto-invest-market-popover .via-table-default.scrollable-x.is-scroll-start:after{display:none}.c-strategy-auto-invest-market-popover .via-table-default .table-header{background-color:transparent}.c-strategy-auto-invest-market-popover .via-table-body .table-prop-cell{border-bottom:none}.c-strategy-auto-invest-market-popover .table-label{padding:0!important}.c-strategy-auto-invest-market-popover .c-common-empty{min-height:200px;background:transparent}",""]),t.exports=n},3174:function(t,e,r){"use strict";r(2016)},3175:function(t,e,r){var n=r(5)(!1);n.push([t.i,".fade-enter-active[data-v-50fef411],.fade-leave-active[data-v-50fef411]{transition:opacity .3s}.fade-enter[data-v-50fef411],.fade-leave-to[data-v-50fef411]{opacity:0}",""]),t.exports=n},3176:function(t,e,r){"use strict";r(2017)},3177:function(t,e,r){var n=r(5)(!1);n.push([t.i,".theme-night .c-strategy-auto-invest-market-popover .content{box-shadow:none}",""]),t.exports=n}}]);