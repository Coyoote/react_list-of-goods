(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),i=s.n(r),c=s(5),o=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=(s(14),s(15),s(2)),d=s.n(b),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var N=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={sortType:n.NONE,isReversed:!1},t.sortAlphabetic=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetList=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=function(t,e){var s=e.sortType,r=e.isReversed,i=Object(u.a)(t);return i.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&i.reverse(),i}(j,this.state),i=e!==n.NONE||s;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info ",{"is-light":e!==n.ALPHABET}),onClick:this.sortAlphabetic,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success ",{"is-light":e!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning ",{"is-light":!s}),onClick:this.reverseList,children:"Reverse"}),i&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.resetList,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:r.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.Component);i.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9638177f.chunk.js.map