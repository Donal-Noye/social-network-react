"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[992],{992:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t=r(5671),o=r(3144),i=r(136),s=r(7277),u=r(8687),l=r(2338),a=r(2791),c=r(9996),f=(r(641),r(184));function g(e){for(var n=e.currentPage,r=e.onPageChanged,t=e.totalItemsCount,o=e.pageSize,i=(e.portionSize,Math.ceil(t/o)),s=[],u=1;u<=i;u++)s.push(u);var l=n-6<0?0:n-6,a=n+6,c=s.slice(l,a);return(0,f.jsx)("div",{className:"flex items-center justify-center gap-2 pag w-4/5 mx-auto my-0",children:c.map((function(e){return(0,f.jsx)("button",{onClick:function(){r(e)},className:"px-4 py-1 border-2 border-light-blue rounded-xl hover:bg-light-blue transition-colors ".concat(n===e&&"bg-light-blue"),children:e},e)}))})}var p=r(2635),d=r(1087);function h(e){var n=e.user,r=e.followingInProgress,t=e.follow,o=e.unfollow;return(0,f.jsxs)("div",{className:"bg-black p-6 rounded-2xl",children:[(0,f.jsxs)(d.OL,{to:"/profile/".concat(n.id),className:"grid grid-cols-[60px_1fr] items-center gap-5 mb-6",children:[(0,f.jsx)("div",{className:"rounded-full w-[60px] h-[60px] overflow-hidden",children:(0,f.jsx)("img",{className:"w-full h-full object-cover",src:n.photos.small?n.photos.small:p,alt:""})}),(0,f.jsxs)("div",{className:"overflow-hidden",children:[(0,f.jsx)("h4",{className:"text-[18px] text-ellipsis overflow-hidden",children:n.name}),(0,f.jsx)("p",{className:"text-sm mt-1 text-white/75 overflow-hidden overflow-ellipsis whitespace-nowrap",children:n.status})]})]}),(0,f.jsx)("div",{className:"grid",children:n.followed?(0,f.jsx)("button",{disabled:r.some((function(e){return e===n.id})),onClick:function(){o(n.id)},className:"disabled:text-white/60 disabled:border-light-blue/60 disabled:hover:bg-transparent inline-flex justify-center border-2 border-light-blue hover:bg-light-blue active:bg-light-blue/75 px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-gray-200 transition-colors",children:"Unfollow"}):(0,f.jsx)("button",{disabled:r.some((function(e){return e===n.id})),onClick:function(){t(n.id)},className:"disabled:text-white/60 disabled:border-light-blue/60 disabled:hover:bg-transparent inline-flex justify-center border-2 border-light-blue hover:bg-light-blue active:bg-light-blue/75 px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-gray-200 transition-colors",children:"Follow"})})]})}function v(e){var n=e.currentPage,r=e.onPageChanged,t=e.totalUsersCount,o=e.pageSize,i=e.isFetching,s=e.users,u=e.followingInProgress,l=e.follow,a=e.unfollow;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{currentPage:n,onPageChanged:r,totalItemsCount:t,pageSize:o}),i?(0,f.jsx)(c.Z,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"grid grid-cols-3 gap-6 my-5",children:s.map((function(e){return(0,f.jsx)(h,{user:e,followingInProgress:u,follow:l,unfollow:a},e.id)}))}),(0,f.jsx)(g,{currentPage:n,onPageChanged:r,totalUsersCount:t,pageSize:o})]})]})}var m=r(7781),b="NOT_FOUND";var w=function(e,n){return e===n};function x(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?w:t,i=r.maxSize,s=void 0===i?1:i,u=r.resultEqualityCheck,l=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),a=1===s?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:b},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return b}return{get:t,put:function(n,o){t(n)===b&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(s,l);function c(){var n=a.get(arguments);if(n===b){if(n=e.apply(null,arguments),u){var r=a.getEntries().find((function(e){return u(e.value,n)}));r&&(n=r.value)}a.put(arguments,n)}return n}return c.clearCache=function(){return a.clear()},c}function y(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];return function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i,s=0,u={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(u=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var a=u.memoizeOptions,c=void 0===a?r:a,f=Array.isArray(c)?c:[c],g=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}(t),p=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(f)),d=e((function(){for(var e=[],n=g.length,r=0;r<n;r++)e.push(g[r].apply(null,arguments));return i=p.apply(null,e)}));return Object.assign(d,{resultFunc:l,memoizedResultFunc:p,dependencies:g,lastResult:function(){return i},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),d}}var P=y(x),j=P((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),C=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.totalUsersCount},N=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},S=function(e){return e.usersPage.followingInProgress},F=function(e){(0,i.Z)(r,e);var n=(0,s.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).onPageChanged=function(n){var r=e.props.pageSize;e.props.requestUsers(n,r)},e}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,r=e.pageSize;this.props.requestUsers(n,r)}},{key:"render",value:function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(v,{totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching})})}}]),r}(a.Component),U=(0,m.qC)((0,u.$j)((function(e){return{users:j(e),pageSize:C(e),totalUsersCount:k(e),currentPage:N(e),isFetching:z(e),followingInProgress:S(e)}}),{follow:l.ZN,unfollow:l.fv,setCurrentPage:l.D4,toggleFollowingProgress:l.ZH,requestUsers:l.D7}))(F)}}]);
//# sourceMappingURL=992.bb7aae5c.chunk.js.map