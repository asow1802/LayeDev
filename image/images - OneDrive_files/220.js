(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[220],{4291:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2047),r=n(1300),o=n(334),s=n(2056),c=n(33),d=n(158),l=n(2604),u=function(e){function t(t){var n=e.call(this,t)||this;n.name="ViewInFolderAction";var a=n.resources;return n._actionMap=a.consume(o.e),n._itemSelectionHelper=new(n.child(s.e))({allowMultiSelect:!1,canFallback:!1}),n._navigationAction=new(n.managed(n._actionMap.NavigationAction))({url:n.createPureComputed(function(){return n._itemSelectionHelper.firstItem()&&n._itemSelectionHelper.firstItem().parentLink})}),Object(d.e)()&&(n._openInDesktopAction=new(n.managed(n._actionMap.OpenInDesktopAction))({openRelation:2,item:n._itemSelectionHelper.firstItem,actionType:l.e.OpenFileLocation})),n}return Object(a.__extends)(t,e),t.prototype.onExecute=function(e,t){return this._openInDesktopAction?this._openInDesktopAction.execute(e):this._navigationAction.execute(e)},t.prototype.onIsAvailable=function(){return!(this._openInDesktopAction&&!this._openInDesktopAction.isAvailable())&&Object(c.isFeatureEnabled)(c.EnableViewInFolder)&&this._navigationAction.isAvailable()},t.prototype.getEngagement=function(){return e.prototype.getEngagement.call(this).withPart(r.e,{item:this._itemSelectionHelper.firstItem})},t}(i.e);t.default=u}}]);