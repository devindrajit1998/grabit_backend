(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[741],{1491:(C,f,n)=>{var l,D;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(i){var d;if(l=i,D=typeof l=="function"?l.call(f,n,f,C):l,D!==void 0&&(C.exports=D),d=!0,C.exports=i(),d=!0,!d){var O=window.Cookies,o=window.Cookies=i();o.noConflict=function(){return window.Cookies=O,o}}})(function(){function i(){for(var o=0,E={};o<arguments.length;o++){var M=arguments[o];for(var P in M)E[P]=M[P]}return E}function d(o){return o.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function O(o){function E(){}function M(_,s,t){if(!(typeof document>"u")){t=i({path:"/"},E.defaults,t),typeof t.expires=="number"&&(t.expires=new Date(new Date*1+t.expires*864e5)),t.expires=t.expires?t.expires.toUTCString():"";try{var v=JSON.stringify(s);/^[\{\[]/.test(v)&&(s=v)}catch{}s=o.write?o.write(s,_):encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),_=encodeURIComponent(String(_)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var r="";for(var e in t)t[e]&&(r+="; "+e,t[e]!==!0&&(r+="="+t[e].split(";")[0]));return document.cookie=_+"="+s+r}}function P(_,s){if(!(typeof document>"u")){for(var t={},v=document.cookie?document.cookie.split("; "):[],r=0;r<v.length;r++){var e=v[r].split("="),a=e.slice(1).join("=");!s&&a.charAt(0)==='"'&&(a=a.slice(1,-1));try{var I=d(e[0]);if(a=(o.read||o)(a,I)||d(a),s)try{a=JSON.parse(a)}catch{}if(t[I]=a,_===I)break}catch{}}return _?t[_]:t}}return E.set=M,E.get=function(_){return P(_,!1)},E.getJSON=function(_){return P(_,!0)},E.remove=function(_,s){M(_,"",i(s,{expires:-1}))},E.defaults={},E.withConverter=O,E}return O(function(){})})},70741:(C,f,n)=>{"use strict";n.r(f),n.d(f,{ADMIN_PERMISSIONS_EE:()=>W,ROUTES_EE:()=>h,SETTINGS_LINKS_EE:()=>K});var l=n(92132),D=n(21272),i=n(55506),d=n(1491),O=n(54894),o=n(17703),E=n(88880),M=n(15126),P=n(63299),_=n(67014),s=n(59080),t=n(79275),v=n(14718),r=n(82437),e=n(76885),a=n(5790),I=n(12083),L=n(35223),m=n(5409),c=n(74930),S=n(2600),p=n(48940),j=n(41286),w=n(56336),x=n(13426),N=n(84624),y=n(77965),F=n(54257),G=n(71210),J=n(51187),z=n(39404),V=n(58692),H=n(501),Y=n(57646),Z=n(23120),$=n(44414),Q=n(25962),X=n(14664),k=n(42588),b=n(90325),q=n(62785),nn=n(87443),tn=n(41032),on=n(22957),_n=n(93179),En=n(73055),sn=n(15747),an=n(85306),dn=n(26509),rn=n(32058),en=n(81185),ln=n(82261);const B=()=>{const A=(0,o.W5)("/auth/login/:authResponse"),{formatMessage:U}=(0,O.A)(),{push:R}=(0,o.W6)(),T=D.useCallback(()=>{R(`/auth/oops?info=${encodeURIComponent(U({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[R,U]),{setToken:g}=(0,E.a)("AuthResponse");return D.useEffect(()=>{if(A?.params.authResponse==="error"&&T(),A?.params.authResponse==="success"){const u=d.get("jwtToken");u?(g(u),d.remove("jwtToken"),R("/auth/login")):T()}},[A,T,g,R]),(0,l.jsx)(i.Bl,{})},W={settings:{auditLogs:{main:[{action:"admin::audit-logs.read",subject:null}],read:[{action:"admin::audit-logs.read",subject:null}],update:[{action:"admin::audit-logs.update",subject:null}]},"review-workflows":{main:[{action:"admin::review-workflows.read",subject:null}],read:[{action:"admin::review-workflows.read",subject:null}],create:[{action:"admin::review-workflows.create",subject:null}],delete:[{action:"admin::review-workflows.delete",subject:null}],update:[{action:"admin::review-workflows.update",subject:null}]},sso:{main:[{action:"admin::provider-login.read",subject:null}],read:[{action:"admin::provider-login.read",subject:null}],update:[{action:"admin::provider-login.update",subject:null}]}}},h=[{Component:()=>({default:B}),to:"/auth/login/:authResponse",exact:!0}],K=()=>({global:[...window.strapi.features.isEnabled(window.strapi.features.SSO)?[{intlLabel:{id:"Settings.sso.title",defaultMessage:"Single Sign-On"},to:"/settings/single-sign-on",id:"sso"}]:[],...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)?[{intlLabel:{id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"},to:"/settings/review-workflows",id:"review-workflows"}]:[]],admin:[...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)?[{intlLabel:{id:"global.auditLogs",defaultMessage:"Audit Logs"},to:"/settings/audit-logs?pageSize=50&page=1&sort=date:DESC",id:"auditLogs"}]:[]]})}}]);
