(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var c=o(t(7294)),a=t(1689),i=t(2441),u=t(5749),f={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.asPath||"/",s=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,j=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),g=m&&"object"===typeof m&&m.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),O=r(w,2),x=O[0],E=O[1],P=c.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,c.useEffect)((function(){var e=E&&n&&(0,a.isLocalURL)(p),r="undefined"!==typeof j?j:t&&t.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(t,p,d,{locale:r})}),[d,p,E,j,n,t]);var _={ref:P,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}))}(e,t,p,d,h,y,b,j)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof j?j:t&&t.locale,L=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(d,N,t&&t.locales,t&&t.domainLocales);_.href=L||(0,a.addBasePath)((0,a.addLocale)(d,N,t&&t.defaultLocale))}return c.default.cloneElement(m,_)};n.default=s},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=(0,o.useRef)(),f=(0,o.useState)(!1),l=r(f,2),s=l[0],p=l[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||s||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!a&&!s){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=t(7294),c=t(8391),a="undefined"!==typeof IntersectionObserver;var i=new Map},681:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(5893);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t(2702),t(4570),t(212);var c=t(1664);function a(){return(0,r.jsx)("header",{className:"flex p-8",children:(0,r.jsxs)("div",{className:"flex justify-end text-gray-500",children:[(0,r.jsx)("ui",{className:"flex justify-center w-28",children:(0,r.jsx)(c.default,{href:"/",children:"Homepage"})}),(0,r.jsx)("ui",{className:"flex justify-center w-28",children:(0,r.jsx)(c.default,{href:"/portfolio",children:"Portfolio"})}),(0,r.jsx)("ui",{className:"flex justify-center w-28",children:(0,r.jsx)(c.default,{href:"/contact",className:"mx-6",children:"Contact Me"})})]})})}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)("div",{className:"w-full min-h-screen",children:[(0,r.jsx)(a,{}),(0,r.jsx)(n,u({},t))]})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(681)}])},212:function(){},2702:function(){},4570:function(){},1664:function(e,n,t){e.exports=t(6071)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(2441)}));var t=e.O();_N_E=t}]);