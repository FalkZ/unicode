require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({3:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
module.exports={symbols:"⌂⌔⌕⌖⌗⌚⌛⌤⌨⌬⍟⎈⎉⎊⎋⎍⎎⎏⏰⏱⏲⏳⏣⎈⎉⎊⎋☊☋☌☍☎☏☕☖☗☘☙☚☛☜☝☞☟ ☠☡☢☣☤☥☦☧☨☩☪☫☬☭☮☯☸♰♱♨♿⚐⚑⚒⚓⚔⚕⚖⚗⚘⚙⚚⚛⚜⚝⚞⚟⚢⚣⚤⚥⚦⚧⚨⚩⚰⚱⚲⚳ ⚴⚵⚶⚷⚸⚹⚺⚻⚼⚽⚾⚿⛀⛁⛂⛃⛉⛊⛎⛏⛓",sign:"⚠⛔⛍⛐⛑⛒⛔⛕⛖⛗⛘⛙⛚⛛⛜⛝⛞⛟⛠⛡",weather:"☀☁☂☃☄★☆☔☼⏾☽☾⚡⛄⛅⛆⛇⛈",arrows:"←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁ ⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰ ⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿⊲⊳⋖⋗⋘⋙⊻⊼⊽⋪⋫⌃⌄⌅⌆〈〉⋚⋛⋜⋝⋞⋟⋎⋏⏴⏵⏶⏷▲△▴▵▶▷ ▸▹►▻▼▽▾▿◀◁◂◃◄◅◢◣◤◥◬◭◮◸◹◺◿☇☈",controls:"⌥⌫⌧⌦⏎⎇⌘",text:"☰☱☲☳☴☵☶☷⚊⚋⚌⚍⚎⚏",circles:"◉○◌◍◎●◐◑◒◓◔◕◖◗◜◝◞◟◠◡◦◯◴◵◶◷☉⚆⚇⚈⚉⚪⚫⚬⚭⚮⚯",dots:"⋮⋯⋰⋱",actions:"⏩⏪⏫⏬⏭⏮⏯⎆⎌⏏⏸⏹⏺⏻⏼⏽⏍⎗⎘⎙",music:"♩♪♫♬♭♮♯",electrical:"⍾⏚⏛",badges:"①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉ ⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪⓿⓫⓬⓭⓮⓯⓰⓱⓲ ⓳⓴⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾",squares:"▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◆◇◈◊◙◚◛ ◧◨◩◪◫◰◱◲◳◻◼◽◾⛋",checkbox:"☐☑☒",cross:"☓",smiles:"☹☺☻",astro:"☿♀♁♂♃♄♅♆♇♈♉♊♋♌♍♎♏2650♐♑♒♓",chess:"♔♕♖♗♘♙♚♛♜♝♞♟",poker:"♠♡♢♣♤♥♦♧",recicle:"♲♳♴♵♶♷♸♹♺♻♼♽♾",dice:"⚀⚁⚂⚃⚄⚅"};
},{}],2:[function(require,module,exports) {
"use strict";require("./style.styl");var e=require("./unicode.yml"),t=n(e);function n(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var t=e.target;return navigator.clipboard.writeText(t.innerHTML).then(function(){return console.log("Async: Copying to clipboard was successful!",t.innerHTML)},function(e){return console.error("Async: Could not copy text: ",e)})},a=function(e){var t=e.parent,n=e.value,a=document.createElement("p");a.onclick=r,a.appendChild(document.createTextNode(n)),t.appendChild(a)},c=document.getElementById("nav");Object.keys(t.default).map(function(e){var n=document.createElement("div");n.setAttribute("class","container");var r=document.createElement("h2");r.setAttribute("id",e);var d=document.createTextNode(e),o=document.createElement("a");r.appendChild(document.createTextNode(e)),o.appendChild(d),o.setAttribute("href","#"+e),c.appendChild(o),n.appendChild(r),t.default[e].replace(/\n/g,"").split("").map(function(e){return a({parent:n,value:e})}),document.body.appendChild(n)});
},{"./style.styl":3,"./unicode.yml":4}]},{},[2])