(this["webpackJsonpword-classifier"]=this["webpackJsonpword-classifier"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/pepe2.5f7469dc.gif"},,,,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),o=a(2),l=a(3),i=a(5),m=a(4),u=a(1),d=a.n(u),h=a(46),p=a(44),f=a(45),E=(a(27),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"borderMe pt-1",as:"header"},r.a.createElement(f.a,{xs:4,className:"pl-2 pr-0"},r.a.createElement(d.a,{cursor:{show:!1},className:"h4"},"Word Classifier")),r.a.createElement(f.a,{xs:4},r.a.createElement(d.a,{cursor:{show:!1},className:"text-center h5 pt-1",startDelay:3e3},"Text Here")),r.a.createElement(f.a,{xs:4,className:"px-0"},r.a.createElement(d.a,{cursor:{show:!1},className:"pt-1"},"Omer Marquez 2020")))}}]),a}(n.Component)),v=a(7),b=(a(28),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentTime:(new Date).toLocaleTimeString()},n.runClock=n.runClock.bind(Object(v.a)(n)),n}return Object(l.a)(a,[{key:"runClock",value:function(){this.setState({currentTime:(new Date).toLocaleTimeString()})}},{key:"componentDidMount",value:function(){console.log("Big Nav mounted"),this.runClockInterval=setInterval(this.runClock,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.runClockInterval),console.log("Time Deleted on Big Nav")}},{key:"render",value:function(){return r.a.createElement(p.a,{as:"header",className:"mt-n3"},r.a.createElement(f.a,null,r.a.createElement(d.a,{cursor:{show:!0,hideWhenDoneDelay:500,hideWhenDone:!0},className:"text-right display-4"},r.a.createElement("span",null,"Word Classifier"))),r.a.createElement(f.a,{className:"pt-4"},r.a.createElement("span",{className:"text-left h3"},this.state.currentTime)))}}]),a}(n.Component)),x=(a(29),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentBar:0},n.theAnimation=n.theAnimation.bind(Object(v.a)(n)),n}return Object(l.a)(a,[{key:"theAnimation",value:function(){this.setState((function(e,t){return 12===e.currentBar?{currentBar:0}:{currentBar:e.currentBar+1}}))}},{key:"componentDidMount",value:function(){this.animationInterval=setInterval(this.theAnimation,200)}},{key:"componentWillUnmount",value:function(){clearInterval(this.animationInterval),console.log("Loading Animation stopped")}},{key:"render",value:function(){return r.a.createElement(p.a,{className:"pt-5"},r.a.createElement(f.a,{className:"pt-5"},r.a.createElement("div",null,r.a.createElement(p.a,{noGutters:!0},r.a.createElement(f.a,{xs:12,md:{span:8,offset:2},className:"theBar w-100"},r.a.createElement(p.a,{className:"h-100",noGutters:!0},r.a.createElement(f.a,{xs:1,className:1===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:2===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:3===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:4===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:5===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:6===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:7===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:8===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:9===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:10===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:11===this.state.currentBar?"setBorder bg-success":"setBorder"}),r.a.createElement(f.a,{xs:1,className:12===this.state.currentBar?"setBorder bg-success":"setBorder"})))))))}}]),a}(n.Component)),N=a(17),B=a.n(N),y=(a(30),n.Component,a(31),n.Component,a(18)),g=a(47),w=(a(34),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).dummyTest="Hello there, this's a dummy test.\nUsed only for testing, don't mind it",n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.dummyTest.split(" ").map((function(t){var a=t.toLowerCase();return r.a.createElement("span",null,r.a.createElement("span",{className:e.props.currentWord===a?"active":""},t),r.a.createElement("span",null," "))}));return r.a.createElement("div",{className:"pl-1"},r.a.createElement("h1",null,"File Title Here"),r.a.createElement("pre",{className:"pre h4"},t))}}]),a}(n.Component)),k=(a(35),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{className:"h1 py-2 w-100"},r.a.createElement(f.a,{xs:{span:"auto"}},r.a.createElement(d.a,{cursor:{show:!1}},"> Current Word: ",r.a.createElement("span",{className:"active"},"The Word")," "))),r.a.createElement(p.a,{className:"h3 w-100"},r.a.createElement(f.a,{xs:12,className:"py-2"},r.a.createElement(d.a,{cursor:{show:!1},st:!0},"> Grammatical Classification "),r.a.createElement("div",{className:"inputStyle pl-3 text-info"},">",r.a.createElement("input",{type:"text",placeholder:"Add Grammatical Category Here",className:"w-75"})))),r.a.createElement(p.a,{className:"h3 w-100"},r.a.createElement(f.a,{xs:12,className:"py-2"},r.a.createElement(d.a,{cursor:{show:!1},st:!0},"> Description of the Word"),r.a.createElement("div",{className:"inputStyle pl-3 text-info"},">",r.a.createElement("input",{type:"text",placeholder:"Optional, will fill to 'word' by default",className:"w-75"})))),r.a.createElement(p.a,{className:"pt-4 pt-md-0"},r.a.createElement(f.a,{xs:6,className:"text-center h1 text-primary",role:"button"},r.a.createElement("div",null,"\u2190"),"Preview Word Button Here"),r.a.createElement(f.a,{xs:6,className:"text-center h1 text-primary",role:"button"},r.a.createElement("div",null,"\u2192"),"Next Word Button Here")),r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"text-success text-center pt-5 h4",role:"button",xs:12},r.a.createElement("p",null,"\u2193 Download .txt with the work you have so far"))),r.a.createElement(p.a,{className:"w-100 h5 pl-md-4 pl-1 pt-3 pt-md-0"},r.a.createElement(f.a,{xs:12},"Word Info:"),r.a.createElement(f.a,{xs:4},"Current: 9999"),r.a.createElement(f.a,{xs:4},"Total: 9999"),r.a.createElement(f.a,{xs:4},"Left: 9999")))}}]),a}(n.Component)),O=(a(36),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).dummyString="Hello, this is a test string.\n To be used by other components",n.currentWord="hello",n.state={onLeftTop:!1},n.onClick=n.onClick.bind(Object(v.a)(n)),n.moveToRight=n.moveToRight.bind(Object(v.a)(n)),n.moveToLeft=n.moveToLeft.bind(Object(v.a)(n)),n}return Object(l.a)(a,[{key:"onClick",value:function(e){var t=e;t.ctrlKey&&(t.preventDefault(),t.screenX>=window.innerWidth/2?this.moveToRight():this.moveToLeft())}},{key:"moveToRight",value:function(){this.state.onLeftTop?(console.debug("Moved to Right"),this.setState({onLeftTop:!1})):console.debug("Already on Right")}},{key:"moveToLeft",value:function(){this.state.onLeftTop?console.debug("Already on Left"):(console.debug("Moved to Left"),this.setState({onLeftTop:!0}))}},{key:"render",value:function(){return r.a.createElement(y.a,{onSwipedLeft:this.moveToLeft,onSwipedRight:this.moveToRight},r.a.createElement(p.a,{className:"h-100 overflow-hidden",onClick:this.onClick},r.a.createElement(g.a,{in:this.state.onLeftTop,timeout:3,classNames:"FilePreview"},r.a.createElement(f.a,{xs:12,md:6,className:"mt-2 px-0 positionAbsolute default"}," ",r.a.createElement("div",{className:"borderMe mx-0 mx-md-1 vh-custom px-1"},r.a.createElement(w,{file:this.dummyString,currentWord:this.currentWord})))),r.a.createElement(g.a,{in:!this.state.onLeftTop,timeout:3,classNames:"WordEdit"},r.a.createElement(f.a,{xs:12,md:6,className:"mt-2 px-0 positionAbsolute"}," ",r.a.createElement("div",{className:"borderMe mx-0 mx-md-1 vh-custom px-1"},r.a.createElement(k,{currentWord:this.currentWord}))))))}}]),a}(n.Component)),j=(a(37),n.Component,a(38),a(39),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=window.matchMedia("(min-width: 768px)");return n.state={isDesktop:r.matches},r.addListener((function(e){n.setState({isDesktop:e.matches})})),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0,className:"TopElement min-vh-100"},this.state.isDesktop?r.a.createElement(b,null):r.a.createElement(E,null),r.a.createElement(O,{isDesktop:this.state.isDesktop}),this.state.isDesktop?r.a.createElement("footer",{className:"pl-2 mt-3 fixed-bottom"},r.a.createElement(d.a,{cursor:{show:!1},startDelay:3e3},r.a.createElement("span",{className:"h4"},">Omer Marquez 2020"))):"")}}]),a}(n.Component));a(40),a(41);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.83dfb9a8.chunk.js.map