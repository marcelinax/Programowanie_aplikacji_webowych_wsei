(()=>{"use strict";var e={137:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]),o.push([e.id,'.container{width:100%;display:flex;flex-direction:column;height:100vh;align-items:center;justify-content:center}.container .board{display:flex;width:30%;align-items:center;justify-content:center;flex-wrap:wrap}.container .board .cell{display:flex;width:150px;margin-right:1rem;margin-bottom:1rem;height:150px;box-shadow:0 0 10px rgba(0,0,0,.2);transition:all .2;justify-content:center;align-items:center;font-size:30px}.container .board .cell:hover{transform:scale(1.1)}.container .game-over-box{width:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;margin:4rem 0}.container .game-over-box h1{font-size:30px;font-weight:400}.btns-box{width:100%;height:100vh;position:fixed;left:0;top:0;background-color:#fff;display:flex;align-items:center;justify-content:center}.btns-box.hide{display:none}.btns-box button:first-child{margin-right:4rem}button{padding:10px 20px;box-shadow:0 0 20px rgba(0,0,0,.2);border:none;outline:none;border-radius:4px;background-color:transparent;font-size:20px;font-weight:400;transition:all .4s;cursor:pointer}button:hover{transform:translateY(-10px)}*{margin:0;padding:0;font-family:"Poppins",sans-serif}body{background-color:#fff;color:#000}*.light-mode body{background-color:#000;color:#fff}',""]);const r=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);i&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:(e,t,n)=>{var i,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function s(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var c=e[o],a=t.base?c[0]+t.base:c[0],l=n[a]||0,d="".concat(a," ").concat(l);n[a]=l+1;var u=s(d),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:g(h,t),references:1}),i.push(d)}return i}function a(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function g(e,t){var n,i,o;if(t.singleton){var r=m++;n=f||(f=a(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=a(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);r[o].references--}for(var a=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=a}}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,i=n(379),o=n.n(i),r=n(137);o()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,function(e){e[e.TicTacToe=0]="TicTacToe"}(e||(e={})),function(e){e[e.X=0]="X",e[e.O=1]="O"}(t||(t={}));const s=function(){function e(e){this.board=e}return e.prototype.makeAIChoice=function(){var e;do{e=Math.floor(9*Math.random())}while(this.board.cells[e].sign===t.O||this.board.cells[e].sign===t.X);this.board.makeChoice(this.board.cells[e])},e}(),c=function(){function e(e){this.sign=null,this.cell=e}return e.prototype.setSign=function(e){switch(this.sign=e,e){case t.X:this.cell.innerHTML="X";break;case t.O:this.cell.innerHTML="O"}},e}(),a=function(){function e(e){var n=this;this.cells=[],this.currentSign=t.X,this.moveCounter=0,this.isGameOver=!1,this.gameWithAI=!0,this.gameWithAI=e,document.querySelectorAll(".cell").forEach((function(e){var t=new c(e);n.cells.push(t),e.addEventListener("click",(function(){n.makeChoice(t)}))})),this.gameWithAI&&(this.ai=new s(this))}return e.prototype.makeChoice=function(e){if(null===e.sign&&!this.isGameOver){switch(this.currentSign){case t.X:e.setSign(this.currentSign),this.currentSign=t.O;break;case t.O:e.setSign(this.currentSign),this.currentSign=t.X}this.moveCounter++,this.checkWin(),this.gameWithAI&&this.currentSign==t.O&&this.moveCounter<9&&!this.isGameOver&&this.ai.makeAIChoice()}},e.prototype.checkWin=function(){for(var e=0;e<9;e+=3)null!==this.cells[e].sign&&this.cells[e].sign===this.cells[e+1].sign&&this.cells[e+1].sign===this.cells[e+2].sign&&this.gameOver();for(e=0;e<3;e++)null!==this.cells[e].sign&&this.cells[e].sign===this.cells[e+3].sign&&this.cells[e+3].sign===this.cells[e+6].sign&&this.gameOver();null!==this.cells[0].sign&&this.cells[0].sign===this.cells[4].sign&&this.cells[4].sign===this.cells[8].sign&&this.gameOver(),null!==this.cells[2].sign&&this.cells[2].sign===this.cells[4].sign&&this.cells[4].sign===this.cells[6].sign&&this.gameOver(),9!=this.moveCounter||this.isGameOver||this.gameOver(!0)},e.prototype.gameOver=function(e){void 0===e&&(e=!1),this.isGameOver=!0;var n=document.querySelector(".game-over-box");if(n){switch(this.currentSign){case t.X:n.innerHTML="<h1>O wins!</h2>";break;case t.O:n.innerHTML="<h1>X wins!</h2>"}e&&(n.innerHTML="<h1>DRAW!</h2>"),n.innerHTML+="<p>To play again press F5 on you keyboard!</p>"}},e}(),l=function(){function e(){this.drawGame(),this.initButtons(),this.initNewGame()}return e.prototype.drawGame=function(){document.getElementById("game-box").innerHTML='<div class="btns-box">\n      <button id="player-btn">PLAY WITH PLAYER</button>\n      <button id="ai-btn">PLAY WITH COMPUTER</button>\n    </div>\n\n    <div class="container">\n      <button id="new-game-btn">NEW GAME</button>\n      <div class="game-over-box"> </div>\n      <div class="board">\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n        <div class="cell"></div>\n      </div>\n    </div>'},e.prototype.createGameWithAI=function(){new a(!0)},e.prototype.createGameWithPlayer=function(){new a(!1)},e.prototype.initButtons=function(){var e=this,t=document.getElementById("player-btn"),n=document.getElementById("ai-btn");t.addEventListener("click",(function(){e.createGameWithPlayer(),e.hideBtnsBox()})),n.addEventListener("click",(function(){e.createGameWithAI(),e.hideBtnsBox()}))},e.prototype.hideBtnsBox=function(){document.querySelector(".btns-box").classList.toggle("hide")},e.prototype.initNewGame=function(){document.getElementById("new-game-btn").addEventListener("click",(function(){location.reload()}))},e}();new(function(){function t(){this.initGameButtons(),this.initThemeChangeBtn()}return t.prototype.initGameButtons=function(){var t=this;document.getElementById("xoxoxo-game").addEventListener("click",(function(){t.initGame(e.TicTacToe)}))},t.prototype.initGame=function(t){switch(t){case e.TicTacToe:document.body.innerHTML='<div id="game-box"></div>',new l}},t.prototype.initThemeChangeBtn=function(){document.getElementById("change-theme-btn").addEventListener("click",(function(){document.querySelectorAll("*").forEach((function(e){e.classList.toggle("light-mode")}))}))},t}())})()})();