(this["webpackJsonpapp-maps"]=this["webpackJsonpapp-maps"]||[]).push([[0],{15:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(2),r=t.n(c),i=(t(15),t(3)),s=t(10),l=t.n(s),u=t(5),d=t(6),j=Object(d.b)({name:"location",initialState:{locations:[]},reducers:{addLocation:function(e,n){e.locations.push(n.payload)}}}),b=j.actions.addLocation,p=function(e){return e.location.locations},h=j.reducer,g=t(1);var O=function(){var e=Object(u.c)(p);return Object(g.jsx)(g.Fragment,{children:e.map((function(e,n){return Object(g.jsx)(i.b,{position:{lat:e.lat,lng:e.lng}},n)}))})};var f=function(e){var n=e.panTo,t=Object(u.b)(),a=o.a.useRef(),c=o.a.useCallback((function(e){a.current=e}),[]);return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(i.c,{onLoad:c,onPlacesChanged:function(){var e=a.current.getPlaces()[0].geometry.location,o=e.lat,c=e.lng,r={lat:o(),lng:c()};t(b(r)),n(r)},children:Object(g.jsx)("input",{type:"text",placeholder:"Search places...",className:"search"})})})},m=["places"],v={width:"100vw",height:"100vh"},x={lat:37.389091,lng:-5.984459},w={disableDefaultUI:!0};var y=function(){var e=Object(i.d)({googleMapsApiKey:"AIzaSyDnBrgwIQ6S0fPoSt58cOn7Z6UEd9wq7ac",libraries:m}),n=e.isLoaded,t=e.loadError,a=o.a.useRef(),c=o.a.useCallback((function(e){a.current=e}),[]),r=o.a.useCallback((function(e){var n=e.lat,t=e.lng;a.current.panTo({lat:n,lng:t}),a.current.setZoom(9)}),[]);return t?Object(g.jsx)("div",{children:"Map cannot be loaded right now, sorry."}):n?Object(g.jsxs)(i.a,{mapContainerStyle:v,zoom:5,center:x,options:w,onLoad:c,children:[Object(g.jsx)(O,{}),Object(g.jsx)(f,{panTo:r})]}):Object(g.jsx)(l.a,{})};var k=function(){return Object(g.jsx)(y,{})},S=Object(d.a)({reducer:{location:h}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(u.a,{store:S,children:Object(g.jsx)(k,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.702918f2.chunk.js.map