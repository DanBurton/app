(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(8),r=n.n(c),s=(n(13),n(7)),i=n(2),u=n(3),l=n(5),h=n(4),p=(n(14),n(0));function d(t,e){switch(t){case"loading":return Object(p.jsx)(j,{phase:t,parent:e});case"start":return Object(p.jsx)(b,{phase:t,parent:e});case"todo":return Object(p.jsx)(O,{phase:t,parent:e});default:return Object(p.jsx)(v,{phase:t,parent:e})}}var j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("render: loading"),Object(p.jsx)("p",{children:"loading phase"})}}]),n}(o.a.Component),b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"todo",value:function(){var t=this.props.phase;console.log("fn: ".concat(t,".todo()")),this.props.parent.phaseChange("todo")}},{key:"render",value:function(){var t=this,e=this.props.phase;return console.log("render: ".concat(e)),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"start"}),Object(p.jsx)("button",{onClick:function(){return t.todo()},children:"todo"})]})}}]),n}(o.a.Component);function f(t,e,n){var a=(t.state||{})[e];return void 0!==a?a:n}var O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("items");if(t){var e=JSON.parse(t),n={items:e};Array.isArray(e)?(console.log("loaded",n),this.setState(n)):console.log("failed to load",n)}}},{key:"componentDidUpdate",value:function(){var t=this.state.items;localStorage.setItem("items",JSON.stringify(t))}},{key:"addItem",value:function(t){var e=this.props.phase;console.log("fn: ".concat(e,".addItem(").concat(JSON.stringify(t),")"));var n=[].concat(Object(s.a)(f(this,"items",[])),[t]);this.setState({items:n})}},{key:"removeItem",value:function(t){var e=this.props.phase;console.log("fn: ".concat(e,".removeItem(").concat(JSON.stringify(t),")"));var n=Object(s.a)(f(this,"items",[]));n.splice(t,1),this.setState({items:n})}},{key:"_handleKeydown",value:function(t){"Enter"===t.key&&this._handleAddItem()}},{key:"_handleAddItem",value:function(){var t=document.getElementById("theInput"),e=t.value;t.value="",t.focus(),this.addItem(e)}},{key:"render",value:function(){var t=this,e=this.props,n=e.phase,a=e.parent,o=f(this,"items",[]);return console.log("render: ".concat(n),o),Object(p.jsxs)("div",{children:[Object(p.jsx)("ol",{children:o.map((function(e,n){return Object(p.jsxs)("li",{children:[e,Object(p.jsx)("button",{onClick:function(){return t.removeItem(n)},children:"-"})]},n)}))}),Object(p.jsx)("input",{id:"theInput",onKeyDown:function(e){return t._handleKeydown(e)}}),Object(p.jsx)("button",{onClick:function(){return t._handleAddItem()},children:"+"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){return a.phaseChange("start")},children:"back to start"})]})}}]),n}(o.a.Component),v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("render: unknown"),Object(p.jsxs)("p",{children:["Unknown phase '",this.props.phase,"'"]})}}]),n}(o.a.Component),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({phase:"start"})}},{key:"phaseChange",value:function(t){console.log("fn: App.phaseChange(".concat(JSON.stringify(t),")")),this.setState({phase:t})}},{key:"render",value:function(){var t=(this.state||{}).phase||"loading";return Object(p.jsx)("div",{className:"App",children:d(t,this)})}}]),n}(o.a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),c(t),r(t)}))};r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.b34fd100.chunk.js.map