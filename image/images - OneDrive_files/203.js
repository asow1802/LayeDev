(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[203],{4423:function(e,t,n){"use strict";n.r(t),n.d(t,"ShowItemAnalyticsHandler",function(){return u});var a=n(0),i=n(109),r=n(185);Object(r.n)([{rawString:".od-ItemAnalytics-highChart .ms-AnalyticsChart-SourcesCell-Label{max-width:100px}.od-ItemAnalytics-highChart .is-selected .ms-AnalyticsChart-SourcesCell-Label{max-width:160px}.od-ItemAnalytics-viewCounts,.od-ItemAnalytics-viewerCounts{display:inline-block;padding:10px}.od-ItemAnalytics-countsDetails{font-size:15px;padding-top:20px}.od-ItemAnalytics-titleBar{padding-bottom:10px;padding-top:22px}html[dir=ltr] .od-ItemAnalytics-titleBar{padding-left:16px}html[dir=rtl] .od-ItemAnalytics-titleBar{padding-right:16px}.od-ItemAnalytics-container{position:absolute;top:0;left:0;right:0;bottom:0;overflow-x:hidden}.od-ItemAnalytics-activities{margin:20px 16px}.od-ItemAnalytics-viewersTitle{font-size:14px;font-weight:600}html[dir=ltr] .od-ItemAnalytics-viewersTitle{padding-left:16px}html[dir=rtl] .od-ItemAnalytics-viewersTitle{padding-right:16px}.od-ItemAnalytics-fileName{font-size:"},{theme:"smallFontSize",defaultValue:"12px"},{rawString:";font-weight:"},{theme:"smallFontWeight",defaultValue:"400"},{rawString:";font-weight:600}.od-mediaAnalytics-main{padding-right:20px;margin-bottom:20px}"}]);var o=n(2034),s=n(2402),c=n(2056),d=n(33),l=n(32),u=function(e){function t(t){void 0===t&&(t={});var n=e.call(this,t)||this;return n._itemSelectionHelper=new(n.child(c.e))({allowMultiSelect:!1,canFallback:!1}),n.state=n.createPureComputed(n._computeState),n.item=t.item,n}return Object(a.__extends)(t,e),t.prototype.getParams=function(){return{item:this.item||this._itemSelectionHelper.firstItem}},t.prototype._computeState=function(){var e=this.item()||this._itemSelectionHelper.firstItem();return{isAvailable:!!e&&e.queryType===l.e.Files&&Object(d.isFeatureEnabled)(d.ItemAnalytics)}},t}(o.n),f=Object(s.e)({name:"ShowItemAnalytics",source:{moduleDefinition:{path:"./ShowItemAnalyticsExecutor",getModule:function(){return i.n.resolve(Promise.all([n.e("deferred.resx-deferred"),n.e(204)]).then(n.bind(null,5063)))}}},handlerType:u});t.default=f}}]);