var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gameState = 0; // 0 - intro; 1 - main menu
var gameStateTimestamp = +new Date();
var gameStateStage = 0;


var objs = [];
var buttons = [];

function addImage(x, y, alpha, src) {
  var id = objs.length;

  objs[id] = {
    x: x, y: y, alpha: alpha,
    img: new Image,
  };

  objs[id].img.src = src;
  return id;
}

function addButton(x, y, w, h, alpha, text, action) {
  var id = buttons.length;

  buttons[id] = {
    x: x, y: y, w: w, h: h,
    alpha: alpha, text: text,
    action: action,
    state: 0 // 0 - normal, 1 - mouse over, 2 - mouse down
  };

  return id;
}


function random(min, max) {
  if(max == undefined) {
    max = min;
    min = 0;
  }
	
  return Math.floor(Math.random()*(max-min+1))+min;
}

function elapsed() { return +new Date() - gameStateTimestamp; }
function setGameState(state) {
  switch(state) {
    case 0: case "intro": gameState = 0; break;
    case 1: case "mmenu": gameState = 1; break;
  }
	
  gameStateStage = 0;
  gameStateTimestamp = +new Date();
}

function nextStage() { gameStateStage++; gameStateTimestamp = +new Date(); }
function setStage(s) { gameStateStage=s; gameStateTimestamp = +new Date(); }


var lines = [];
function printLine(text, newline) {
  lines.push(text);
  if(newline) lines.push("");
  if(lines.length > 25) lines.shift();
}

function appendLine(text, newline) {
  if(typeof(text) == "number") lines[lines.length-1] = lines[lines.length-1].slice(0, text);
  else lines[lines.length-1] = lines[lines.length-1].concat(text);
	
  if(newline) lines.push("");
}


ctx.font = '20px "Ubuntu Mono"';
ctx.textBaseline = 'top';
ctx.fillStyle = "white";
ctx.textBaseline="middle"; 

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();


var error = false;
var linesCoverAlpha = 0;

function printLines() {
  var posMod = 0;
  ctx.fillStyle = "#fff";
	
  for(var i=0; i<lines.length; i++) {
    posMod = 0;
    ctx.fillStyle = "#fff";

    for(var j=0; j<lines[i].length; j++) {
      if(lines[i][j] == "#") {
        if(lines[i][j+1] == "#") ctx.fillText(lines[i][j], 10+((j+posMod)*10), 20+(i*20)); else {
ctx.fillStyle = lines[i].substr(j,4);
          j += 3; posMod -= 4;
        }
      } else {
        ctx.fillText(lines[i][j], 10+((j+posMod)*10), 20+(i*20));
      }
    }
  }
}

























