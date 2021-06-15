(function(t){function e(e){for(var r,c,i=e[0],o=e[1],u=e[2],b=0,f=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/simple-keyboard/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"67f5":function(t,e,a){"use strict";a("d855")},7908:function(t,e,a){},"85ec":function(t,e,a){},8604:function(t,e,a){"use strict";a("f73b")},9176:function(t,e,a){"use strict";a("c4f1")},"98e9":function(t,e,a){"use strict";a("7908")},c4f1:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Home")],1)},s=[],c=a("d4ec"),i=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("1b40"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"main"},[a("h1",[t._v("Virtual keyboard")]),a("textarea",{staticClass:"input",attrs:{id:"textarea",autofocus:"",placeholder:"Tap on the virtual keyboard to start"},domProps:{value:t.text}}),t._v(" "),a("Keyboard",{staticClass:"keyboard"})],1)])},f=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keyboardContainer"},[a("div",{staticClass:"rows"},t._l(t.bigViewKeys,(function(t){return a("keyboardRow",{key:t.id,staticClass:"row",attrs:{keys:t.data}})})),1)])},d=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row-container"},t._l(t.keys,(function(t){return a("keyboardKey",{key:t,attrs:{name:t}})})),1)},y=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[t.button,t.specialButton],style:t.specialButtonStyle,on:{click:function(e){return t.pressed()}}},[t._v(" "+t._s(t.name)+" ")])},m=[],j=a("bee2"),v=(a("b0c0"),a("ac1f"),a("466d"),a("2f62")),w=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.button="button",t.specialButton="standardButton",t}return Object(j["a"])(a,[{key:"created",value:function(){this.specialButtonStyle()&&(this.specialButton=this.name)}},{key:"specialButtonStyle",value:function(){switch(this.name){case"shift_l":return!0;case"shift_r":return!0;case"caps":return!0;case"tab":return!0;case"space":return!0;case"backspace":return!0;case"enter":return!0}return!1}},{key:"pressed",value:function(){switch(this.name){case"backspace":this.$store.commit("updateText",this.text.substring(0,this.text.length-1));break;case"space":this.$store.commit("updateText",this.text+" ");break;case"tab":this.$store.commit("updateText",this.text+"  ");break;case"enter":this.$store.commit("updateText",this.text+"\n");break;case"caps":this.updateKeyboardKeys();break;case"shift_l":this.updateKeyboardKeys();break;case"shift_r":this.updateKeyboardKeys();break;default:this.$store.commit("updateText",this.text+this.name)}this.name.match(/^[A-Za-z]+$/)&&1===this.name.length&&this.$store.commit("shuffleLetters")}},{key:"updateKeyboardKeys",value:function(){this.$store.commit("updateCapsFlag",!this.isCapsOrShiftOn),this.$store.commit("updateKeyboardKeys")}}]),a}(l["c"]);Object(u["a"])([Object(l["b"])()],w.prototype,"name",void 0),w=Object(u["a"])([Object(l["a"])({computed:Object(v["b"])(["text","isCapsOrShiftOn"])})],w);var g=w,k=g,x=(a("67f5"),a("2877")),_=Object(x["a"])(k,O,m,!1,null,"6bb7a0a9",null),K=_.exports,C=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);Object(u["a"])([Object(l["b"])()],C.prototype,"keys",void 0),C=Object(u["a"])([Object(l["a"])({components:{keyboardKey:K}})],C);var S=C,$=S,T=(a("98e9"),Object(x["a"])($,h,y,!1,null,"ba34913e",null)),M=T.exports,P=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);Object(u["a"])([Object(l["b"])()],P.prototype,"msg",void 0),P=Object(u["a"])([Object(l["a"])({components:{keyboardRow:M},computed:Object(v["b"])(["bigViewKeys"])})],P);var V=P,B=V,E=(a("8604"),Object(x["a"])(B,p,d,!1,null,"f2ac4af2",null)),J=E.exports,F=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);F=Object(u["a"])([Object(l["a"])({components:{Keyboard:J},computed:Object(v["b"])(["text"])})],F);var H=F,L=H,N=(a("9176"),Object(x["a"])(L,b,f,!1,null,"28bf7314",null)),R=N.exports,z=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);z=Object(u["a"])([Object(l["a"])({components:{Home:R}})],z);var A=z,Z=A,q=(a("034f"),Object(x["a"])(Z,n,s,!1,null,null,null)),D=q.exports,G=a("2909");a("fb6a"),a("4e82");r["a"].use(v["a"]);var I={row1:{id:1,data:["`",1,2,3,4,5,6,7,8,9,0,"-","=","backspace"]},row2:{id:2,data:["tab","Q","W","E","R","T","U","Y","I","O","P","[","]","\\"]},row3:{id:3,data:["caps","A","S","D","F","G","H","J","K","L",":",'"',"enter"]},row4:{id:4,data:["shift_l","Z","X","C","V","B","N","M",",",".","/","shift_r"]},row5:{id:5,data:[".com","@","space"]}},Q={row1:{id:1,data:["~","!","@","#","$","%","^","&","*","(",")","_","+","backspace"]},row2:{id:2,data:["tab","q","w","e","r","t","y","u","i","o","p","{","}","|"]},row3:{id:3,data:["caps","a","s","d","f","g","h","j","k","l",";","'","enter"]},row4:{id:4,data:["shift_l","z","x","c","v","b","n","m","<",">","?","shift_r"]},row5:{id:5,data:[".com","@","space"]}},U=new v["a"].Store({state:{text:"",isCapsOrShiftOn:!1,bigViewKeys:I},mutations:{updateText:function(t,e){t.text=e},updateCapsFlag:function(t,e){t.isCapsOrShiftOn=e},updateKeyboardKeys:function(t){t.isCapsOrShiftOn?t.bigViewKeys=Q:t.bigViewKeys=I},shuffleLetters:function(t){var e=JSON.parse(JSON.stringify(t.bigViewKeys)),a=Object(G["a"])(e["row1"].data),r=Object(G["a"])(a.slice(0,a.length-1));r.sort((function(){return Math.random()-.5})),r.push(a[a.length-1]),e["row1"].data=r;var n=Object(G["a"])(e["row2"].data),s=Object(G["a"])(n.slice(1,n.length));s.sort((function(){return Math.random()-.5})),s.unshift(n[0]),e["row2"].data=s;var c=Object(G["a"])(e["row3"].data),i=Object(G["a"])(c.slice(1,c.length-1));i.sort((function(){return Math.random()-.5})),i.push(c[c.length-1]),i.unshift(c[0]),e["row3"].data=i;var o=Object(G["a"])(e["row4"].data),u=Object(G["a"])(o.slice(1,o.length-1));u.sort((function(){return Math.random()-.5})),u.push(o[o.length-1]),u.unshift(o[0]),e["row4"].data=u,t.bigViewKeys=e}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:U,render:function(t){return t(D)}}).$mount("#app")},d855:function(t,e,a){},f73b:function(t,e,a){}});
//# sourceMappingURL=app.9c37dab1.js.map