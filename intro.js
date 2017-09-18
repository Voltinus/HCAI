var logoId = addImage(0, 0, 0, "https://i.imgur.com/2AYUjdF.png");
objs[logoId].x = 400-objs[logoId].img.width/2;
objs[logoId].y = 300-objs[logoId].img.height/2;

var button1 = addButton(300, 300, 200, 40, 0, "INITIALIZE", function(){ console.log("INITIALIZE"); });
var button2 = addButton(300, 360, 200, 40, 0, "OPTIONS", function(){ console.log("OPTIONS"); });
var button3 = addButton(300, 480, 200, 40, 0, "CREDITS", function(){ console.log("CREDITS"); });

var bootingTexts = [
  "Initializing hardware check...    #0f0[OK]",
  "Loading core modules:",
  "- Hardware interfaces...          #0f0LOADED",
  "- Power management module...      #0f0LOADED",
  "- Weapons controller...           #0f0LOADED",
  "- Aim assist module...            #0f0LOADED",
  "- Memory controller...            #0f0LOADED",
  "- Personality core...             #0f0LOADED",
  "- Voice synthesis module...       #0f0LOADED",
  "Starting up core modules...",
  "Hardware interfaces  -            #0f0ONLINE",
  "Power management     -            #0f0ONLINE",
  "Weapons              -            #0f0ONLINE",
  "Aim assist           -            #0f0ONLINE",
  "Memory               -            #0f0ONLINE",
  "Persinality core     -            #0f0ONLINE",
  "Voice synthesis      -            #0f0ONLINE",
  "Sysem startup complete",
  "Loading User Interface"
];


function gsIntro() {

  switch(gameStateStage) {
    case 0:  if(elapsed() > 500)  {  printLine(bootingTexts[0].substr(0, 32));    nextStage(); } break;
    case 1:  if(elapsed() > 1000) { appendLine(bootingTexts[0].substr(32), true); nextStage(); } break;
    case 2:  if(elapsed() > 200)  {  printLine(bootingTexts[1]);                  nextStage(); } break;
    	
    case 3:  if(elapsed() > 100)              {  printLine(bootingTexts[2].substr(0, 32)); nextStage(); } break;
    case 4:  if(elapsed() > random(200, 500)) { appendLine(bootingTexts[2].substr(32));    nextStage(); } break;
    case 5:  if(elapsed() > 100)              {  printLine(bootingTexts[3].substr(0, 32)); nextStage(); } break;
    case 6:  if(elapsed() > random(200, 500)) { appendLine(bootingTexts[3].substr(32));    nextStage(); } break;
    case 7:  if(elapsed() > 100)              {  printLine(bootingTexts[4].substr(0, 32)); nextStage(); } break;
    case 8:  if(elapsed() > random(200, 500)) { appendLine(bootingTexts[4].substr(32));    nextStage(); } break;
    case 9:  if(elapsed() > 100)              {  printLine(bootingTexts[5].substr(0, 32)); nextStage(); } break;
    case 10: if(elapsed() > random(200, 500)) { appendLine(bootingTexts[5].substr(32));    nextStage(); } break;
    case 11: if(elapsed() > 100)              {  printLine(bootingTexts[6].substr(0, 32)); nextStage(); } break;
    case 12: if(elapsed() > random(200, 500)) { appendLine(bootingTexts[6].substr(32));    nextStage(); } break;
    case 13: if(elapsed() > 100)              {  printLine(bootingTexts[7].substr(0, 32)); nextStage(); } break;
    case 14: if(elapsed() > random(200, 500)) { appendLine(bootingTexts[7].substr(32));    nextStage(); } break;
    case 15: if(elapsed() > 100)              {  printLine(bootingTexts[8].substr(0, 32)); nextStage(); } break;
    case 16: if(elapsed() > random(200, 500)) { appendLine(bootingTexts[8].substr(32), 1); nextStage(); } break;
    	
    case 17: if(elapsed() > random(200, 500)) {  printLine(bootingTexts[9]);               nextStage(); } break;
    case 18: if(elapsed() > 1000) { printLine(bootingTexts[10]);    nextStage(); } break;
    case 19: if(elapsed() > 50)   { printLine(bootingTexts[11]);    nextStage(); } break;
    case 20: if(elapsed() > 50)   { printLine(bootingTexts[12]);    nextStage(); } break;
    case 21: if(elapsed() > 50)   { printLine(bootingTexts[13]);    nextStage(); } break;
    case 22: if(elapsed() > 50)   { printLine(bootingTexts[14]);    nextStage(); } break;
    case 23: if(elapsed() > 50)   { printLine(bootingTexts[15]);    nextStage(); } break;
    case 24: if(elapsed() > 50)   { printLine(bootingTexts[16], 1); nextStage(); } break;
    	
    case 25: if(elapsed() > 50)   { printLine(bootingTexts[17]);    nextStage(); } break;
    case 26: if(elapsed() > 500)  { printLine(bootingTexts[18]);    nextStage(); } break;
    
    case 27:
      $({n: 0}).animate({n: 1}, { duration: 3000, step: function(now, fx) {
        linesCoverAlpha = now;
        objs[logoId].alpha = now;
      }, complete: function() {

        $({n: objs[logoId].y}).animate({n: 40}, { duration: 1000, step: function(now, fx) {
          objs[logoId].y = now;
        }, complete: function() {
          
          $({n: 0}).animate({n: 5}, { duration: 1000, step: function(now, fx) {
            buttons[button1].alpha = Math.min(1, Math.max(0, now));
            buttons[button2].alpha = Math.min(1, Math.max(0, now-2));
            buttons[button3].alpha = Math.min(1, Math.max(0, now-4));
          }, complete: function(){ /* main menu */ }});

        }});
      }}); nextStage(); break;
    
    case 28: if(elapsed() > 500)  { appendLine("."); nextStage(); } break;
    case 29: if(elapsed() > 500)  { appendLine("."); nextStage(); } break;
    case 30: if(elapsed() > 500)  { appendLine("."); nextStage(); } break;
    case 31: if(elapsed() > 500)  { appendLine(-2); setStage(28); } break;
  }
}
