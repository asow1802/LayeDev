(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[519,474],{2727:function(e,t,n){"use strict";n.r(t),n.d(t,"sharePointItemByFullUrlAddon",function(){return P});var a=n(0),i=n(8),r=n(269),o=n(268),s=n(182),c=n(327),d=n(719),l=n(985),u=n(495),f=n(166),p=n(213),m=n(404),_=n(523),h=n(39),b=n(89),g=n(1),v=n(4),y=n(7),S=n(316),D=n(319),I=n(392),x=n(102),C=n(194),O=n(637),w=n(416),E=n(361),A=n(641),L=n(154),k=n(47),M=n(72),P=Object(i.t)(function(){return function(e){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(t){return e(Object(p.t)({keyFacet:u.e,facets:[h.e,M.e,v.u,v.p,g.Ln,v._,g._e,y.t,g.$e,C.e,C.n,g.vt,v.i]})),e(Object(r.a)(u.e,m.e)(Object(i.i)({maxParallelOperationCount:8})(T))),[2]})})}});function T(e){var t=this,n=e.itemKey,i=u.e.deserialize(n);return function(e){return Object(a.__awaiter)(t,void 0,void 0,function(){var t,r,p,m,v,C,M,P,U,F,H,R,N,B,j,V,z,G,K,W,q;return Object(a.__generator)(this,function(Q){switch(Q.label){case 0:t=new o.e({publisher:T}),r=!1,p=new s.e(i.itemFullUrl),m=e(function(e,t,n){return function(t){var n,a=e.itemFullUrl;return n=[new s.e(a).path],t(Object(x.e)({contentTypeId:g._},u.e.serialize(e))),{webAbsoluteUrl:"",listFullUrl:a,currentPageContext:void 0,qosName:"getSPItemByFullUrl",viewXml:Object(I.i)({itemRefs:n,recurseInFolders:!0,pageSize:1,fieldNames:["File_x0020_Type","FileRef","FileLeafRef","_ip_UnifiedCompliancePolicyUIAction","_ComplianceFlags","CheckoutUser","CheckedOutUserId","Created_x0020_Date.ifnew"]}),rootFolder:void 0,postDataContext:{needsMountPoint:t(Object(L.e)({enableMountPointRenderOption:k.l})).enableMountPointRenderOption,needUpdatePageContext:!0,needsSchema:!0}}}}(i)),Q.label=1;case 1:return Q.trys.push([1,3,,4]),[4,e(Object(S.e)({getItemContext:m}))];case 2:return v=Q.sent(),C=v.WebUrl||_.i(decodeURIComponent(v.HttpRoot||""))||p.authority,M="".concat(new s.e(C).authority).concat(v.ListUrl||decodeURIComponent(v.listUrlDir||"")),P={webAbsoluteUrl:C,listFullUrl:M,rootFolder:""},U=e(Object(D.t)({serverData:v,itemSetKey:P,currentPageContext:m.currentPageContext,contentTypes:void 0,isItemSetRequest:r})),F=U.itemResolver,H=U.childKeys,R=U.pageContext,N=H[0],B=b.e.serialize(P),N&&t.mapKeys({mappings:(W={},W[N]=u.e.serialize(i),W)}),R&&e(Object(d.t)({pageContext:R,spPageContextKey:{webAbsoluteUrl:C,listFullUrl:M}})),t.merge(F),h.e.matches(N)&&(j=h.e.deserialize(N),(V=e(Object(O.t)({webAbsoluteUrl:j.webAbsoluteUrl,listFullUrl:j.listFullUrl,serverData:v,pageContext:R})))&&t.merge(V.itemResolver)),z=f.e.serialize({webAbsoluteUrl:C,listFullUrl:M}),t.resolveItems({items:(q={},q[h.e.serialize(P)]=Object(a.__assign)({},y.t.pack({itemKey:B})),q[n]=Object(a.__assign)({},c.n.pack(h.e)),q[z]=Object(a.__assign)({},Object(l.e)(v,R)),q)}),e(t.execute()),e(Object(w.e)({itemSetKey:B,serverData:v,isItemSetRequest:r})),[3,4];case 3:throw G=Q.sent(),K=Object(A.t)(G),new E.e({facets:K,innerError:G});case 4:return[2]}})})}}},4827:function(e,t,n){"use strict";n.r(t),n.d(t,"sharePointGraphAddon",function(){return O});var a=n(0),i=n(8),r=n(213),o=n(198),s=n(47),c=n(268),d=n(39),l=n(495),u=n(327),f=n(1389),p=n(2),m=n(2727),_=n(4),h=n(461),b=n(1),g=n(154),v=n(1547),y=n(989),S=n(978),D=n(1548),I=n(182),x=n(13);function C(e){var t=e.itemKey,n=e.driveItem;return function(e){var i,r,o,s,m,v,O,w,E=e(Object(g.e)({enableSharePointItemMapping:b.ne})).enableSharePointItemMapping,A=void 0===E||E,L=new c.e({publisher:C}),k=n.webDavUrl||n.remoteItem&&n.remoteItem.webDavUrl||n.webUrl,M=k&&decodeURIComponent(k);if(n.root&&M){var P=d.e.serialize({webAbsoluteUrl:"",listFullUrl:M,rootFolder:""});L.mapKeys({mappings:(i={},i[P]=t,i)}),L.resolveItems({items:(r={},r[P]=Object(a.__assign)({},u.n.pack(d.e)),r)})}if(M){var T={itemFullUrl:M},U=l.e.serialize(T),F=n.sharepointIds||(null===(v=n.remoteItem)||void 0===v?void 0:v.sharepointIds);L.mapKeys({mappings:(o={},o[U]=t,o)});var H=new I.e(M).path;if(x.e.isActivated("33867C1B-A99C-4211-9081-62D3300F54EB","10/24/2022","Clean invalid keys when resolving SP items from Graph")||L.merge(e(Object(D.e)({itemKey:t,spItem:{webAbsoluteUrl:"",listFullUrl:"",rootFolder:H},spItemFullUrl:T})).itemResolver),L.resolveItems({items:(s={},s[U]=Object(a.__assign)({},A?Object(a.__assign)({},Object(p.t)({preferredKeyFacet:u.n},{preferredKeyFacet:new f.e(l.e,function(e){return e===d.e})})):{}),s)}),!n.root){var R=Object(h.e)(M),N={itemFullUrl:R},B=l.e.serialize(N);L.resolveItems({items:(m={},m[B]=Object(a.__assign)(Object(a.__assign)(Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({},_._.pack({})),_.i.pack(R)),_.A.pack(encodeURI(R))),y.e.pack(null===(w=null===(O=n.remoteItem)||void 0===O?void 0:O.parentReference)||void 0===w?void 0:w.driveType)),F?S.e.pack({tenantId:F.tenantId,siteId:F.siteId}):{}),m[U]=Object(a.__assign)({},_.k.pack({itemKey:B})),m)})}}return{itemResolver:L}}}var O=Object(i.t)(function(){return function(e){var t;e(v.e),e(m.sharePointItemByFullUrlAddon),e(Object(r.e)({items:(t={},t[o.e]=Object(a.__assign)({},s.M.pack({process:C})),t)}))}})}}]);