(this["webpackJsonprandom-video-chat"]=this["webpackJsonprandom-video-chat"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n,c=a(0),o=a.n(c),r=a(5),s=a.n(r),i=(a(13),a(2)),l=a(3),u=a.n(l),d=a(6);function m(){return(m=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 2:a=e.sent,t.srcObject=a;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){var t=e.srcObject;(function(e){return void 0!==e.getTracks}(t)?t.getTracks():[]).forEach((function(e){return e.stop()}))}!function(e){e.READY="ready",e.NOT_READY="not_ready",e.USERS_NUMBER="users_number",e.NEXT="next"}(n||(n={}));a(15);var f=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!1),l=Object(i.a)(s,2),u=l[0],d=l[1],f=Object(c.useState)(!1),b=Object(i.a)(f,1)[0],p=Object(c.useState)(null),E=Object(i.a)(p,2),_=E[0],O=E[1],N=Object(c.useRef)(null),h=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){t.current=new WebSocket("wss://evstar.ru:7000"),t.current.onmessage=e}),[e]),[function(e){var a,n=JSON.stringify(e);null===(a=t.current)||void 0===a||a.send(n)}]}(Object(c.useCallback)((function(e){var t=JSON.parse(e.data);switch(t.type){case n.USERS_NUMBER:O(t.payload)}}),[])),j=Object(i.a)(h,1)[0],y=Object(c.useCallback)((function(){a?(v(N.current),r(!1)):function(e){return m.apply(this,arguments)}(N.current).then((function(){return r(!0)})).catch(console.log)}),[a]),k=Object(c.useCallback)((function(){u?(j({type:n.NOT_READY}),d(!1)):(j({type:n.READY}),d(!0))}),[u,j]),w=Object(c.useCallback)((function(){console.log("next")}),[]);return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__column"},o.a.createElement("div",{className:"video"},null!==_&&o.a.createElement("div",{className:"video__attendance"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435: ",_),o.a.createElement("video",{className:"video__player",muted:!0,autoPlay:!0,playsInline:!0,ref:N},"\u0412\u0438\u0434\u0435\u043e \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c"),o.a.createElement("div",{className:"video__footer"},o.a.createElement("button",{className:"video__switch",onClick:y},a?"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u0443":"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u0430\u043c\u0435\u0440\u0443")))),o.a.createElement("div",{className:"app__column"},o.a.createElement("div",{className:"video"},o.a.createElement("div",{className:"video__status"},"\u0421\u0442\u0430\u0442\u0443\u0441: ",u?b?"\u043e\u0431\u0449\u0435\u043d\u0438\u0435":"\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435":"\u043d\u0435 \u0433\u043e\u0442\u043e\u0432"),o.a.createElement("video",{className:"video__player",autoPlay:!0,playsInline:!0},"\u0412\u0438\u0434\u0435\u043e \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c"),o.a.createElement("div",{className:"video__footer"},o.a.createElement("button",{className:"video__ready",onClick:k},u?"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c":"\u041d\u0430\u0447\u0430\u0442\u044c"),o.a.createElement("button",{className:"video__next",onClick:w,disabled:!b},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.1c9baf40.chunk.js.map