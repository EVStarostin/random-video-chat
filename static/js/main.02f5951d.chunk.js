(this["webpackJsonprandom-video-chat"]=this["webpackJsonprandom-video-chat"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r,a,c,o=n(0),s=n.n(o),u=n(8),i=n.n(u),l=(n(15),n(4)),d=n(2),p=n.n(d),f=n(5),v=[{urls:"stun:stun.i.google.com:19302"},{urls:"turn:194.87.239.193:3478?transport=udp",username:"evstarostin",credential:"jck30011989"},{urls:"turn:194.87.239.193:3478?transport=tcp",username:"evstarostin",credential:"jck30011989"}];function b(){return(b=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 4:return n=e.sent,t.srcObject=n,e.abrupt("return",Promise.resolve());case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(){return(m=Object(f.a)(p.a.mark((function e(t,n){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.srcObject,a=N(n),E(r)){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,r.getTracks().forEach((function(e){return a.addTrack(e,r)}));case 7:return e.abrupt("return",Promise.resolve(a));case 10:return e.prev=10,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[4,10]])})))).apply(this,arguments)}function O(){return(O=Object(f.a)(p.a.mark((function e(t,n,a,c){var o,s,u,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(o=t.srcObject)){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,s=N(c),u=new RTCSessionDescription(a),e.next=8,s.setRemoteDescription(u);case 8:return o.getTracks().forEach((function(e){return s.addTrack(e,o)})),e.next=11,s.createAnswer();case 11:return i=e.sent,e.next=14,s.setLocalDescription(i);case 14:return n.send(JSON.stringify({type:r.VIDEO_ANSWER,payload:s.localDescription})),e.abrupt("return",Promise.resolve(s));case 18:return e.prev=18,e.t0=e.catch(3),e.abrupt("return",Promise.reject(e.t0));case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}function E(e){return void 0!==e.getTracks}function _(e,t){null===e||void 0===e||e.send(JSON.stringify(t))}function N(e){var t=new RTCPeerConnection({iceServers:v});return Object.assign(t,e),t}!function(e){e.NEW_ICE_CANDIDATE="[webrtc]: new_ice_candidate",e.VIDEO_OFFER="[webrtc]: video_offer",e.VIDEO_ANSWER="[webrtc]: video_answer"}(r||(r={})),function(e){e.READY="[client]: ready",e.NOT_READY="[client]: not_ready",e.CONNECTED="[client]: connected",e.NOT_CONNECTED="[client]: not_connected"}(a||(a={})),function(e){e.INFO="[server]: info",e.CALL="[server]: call",e.HANG_UP="[server]: hang_up"}(c||(c={}));n(6);n(17);var y=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],u=t[1],i=Object(o.useState)(!1),d=Object(l.a)(i,2),p=d[0],f=d[1],v=Object(o.useState)(!1),E=Object(l.a)(v,2),N=E[0],y=E[1],j=Object(o.useState)(""),h=Object(l.a)(j,2),k=h[0],C=h[1],D=Object(o.useRef)(null),w=Object(o.useRef)(null),g=Object(o.useRef)(null),R=Object(o.useRef)(null);Object(o.useEffect)((function(){(function(e){return b.apply(this,arguments)})(D.current).then((function(){u(!0)})).catch((function(){u(!1)}))}),[]);var T=Object(o.useCallback)((function(){var e;null===(e=R.current)||void 0===e||e.createOffer().then((function(e){var t;return null===(t=R.current)||void 0===t?void 0:t.setLocalDescription(e)})).then((function(){var e;_(g.current,{type:r.VIDEO_OFFER,payload:null===(e=R.current)||void 0===e?void 0:e.localDescription})}))}),[]),I=Object(o.useCallback)((function(e){e.candidate&&_(g.current,{type:r.NEW_ICE_CANDIDATE,payload:e.candidate})}),[]),A=Object(o.useCallback)((function(e){console.log("ontrack"),w.current.srcObject=e.streams[0],_(g.current,{type:a.CONNECTED}),y(!0)}),[]),S=Object(o.useMemo)((function(){return{onnegotiationneeded:T,onicecandidate:I,ontrack:A}}),[I,T,A]),x=Object(o.useCallback)((function(e){var t=JSON.parse(e.data);switch(console.log(t.type),t.type){case c.INFO:C("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ".concat(t.payload.users," (\u0432 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0438: ").concat(t.payload.readyUsers,", \u043d\u0430 \u0441\u0432\u044f\u0437\u0438: ").concat(t.payload.connectedUsers,")"));break;case c.CALL:(function(e,t){return m.apply(this,arguments)})(D.current,S).then((function(e){return R.current=e||null}));break;case c.HANG_UP:w.current.srcObject=null,y(!1);break;case r.VIDEO_OFFER:(function(e,t,n,r){return O.apply(this,arguments)})(D.current,g.current,t.payload,S).then((function(e){return R.current=e||null}));break;case r.VIDEO_ANSWER:!function(e,t){var n=new RTCSessionDescription(t);e.setRemoteDescription(n)}(R.current,t.payload);break;case r.NEW_ICE_CANDIDATE:!function(e,t){var n=new RTCIceCandidate(e);try{t.addIceCandidate(n)}catch(r){}}(t.payload,R.current)}}),[S]),P=Object(o.useMemo)((function(){return{onMessage:x}}),[x]);g.current=function(e){var t=e.onMessage,n=Object(o.useRef)(null);return Object(o.useEffect)((function(){n.current=new WebSocket("wss://evstar.ru:7000"),n.current.onmessage=t}),[t]),[n.current]}(P)[0];var W=Object(o.useCallback)((function(){p?(_(g.current,{type:a.NOT_READY}),f(!1)):(_(g.current,{type:a.READY}),f(!0))}),[p]),F=Object(o.useCallback)((function(){w.current.srcObject=null,_(g.current,{type:a.NOT_CONNECTED}),y(!1)}),[]);return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app__column"},s.a.createElement("div",{className:"video"},s.a.createElement("div",{className:"video__info"},k),s.a.createElement("video",{className:"video__player",muted:!0,autoPlay:!0,playsInline:!0,ref:D},"\u0412\u0438\u0434\u0435\u043e \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c"))),s.a.createElement("div",{className:"app__column"},s.a.createElement("div",{className:"video"},s.a.createElement("video",{className:"video__player",autoPlay:!0,playsInline:!0,ref:w},"\u0412\u0438\u0434\u0435\u043e \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c"),!p&&s.a.createElement("button",{className:"video__ready",onClick:W},s.a.createElement("div",{className:"video__ready-text"},"\u041d\u0430\u0447\u0430\u0442\u044c")),N&&s.a.createElement("button",{className:"video__next",onClick:F},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439"),p&&!N&&s.a.createElement("span",{className:"video__spinner"}))),!n&&s.a.createElement("h1",{className:"app__warning"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043c\u0435\u0440\u0435 \u0447\u0442\u043e\u0431\u044b \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.02f5951d.chunk.js.map