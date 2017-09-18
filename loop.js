function loop() {
  ctx.clearRect(0, 0, 800, 600);
  switch(gameState) {
      
    case 0: gsIntro(); break;
			
    default:
      console.error("ERROR: UNKNOWN GAME STATE");
      error = true;
      break;
  }
	
  if(lines.length) {
    printLines();
    ctx.fillStyle = "rgba(0,0,0," + linesCoverAlpha + ")";
    ctx.fillRect(0, 0, 800, 600);

    for(var i=0; i<objs.length; i++) {
      if(objs[i].img) {
        ctx.globalAlpha = objs[i].alpha;
        ctx.drawImage(objs[i].img, objs[i].x, objs[i].y);
        ctx.globalAlpha = 1;
      }
    }

    for(var i=0; i<buttons.length; i++) {
      switch(buttons[i].state) {
        case 0:
          ctx.strokeStyle = "rgba(255,0,0,"+buttons[i].alpha+")";
          ctx.fillStyle   = "rgba( 50,0,0,"+buttons[i].alpha+")";
          break;

        case 1:
          ctx.strokeStyle = "rgba(0,255,0,"+buttons[i].alpha+")";
          ctx.fillStyle   = "rgba(0, 50,0,"+buttons[i].alpha+")";
          break;

        case 2:
          ctx.strokeStyle = "rgba(0,0,255,"+buttons[i].alpha+")";
          ctx.fillStyle   = "rgba(0,0, 50,"+buttons[i].alpha+")";
          break;
      }

      ctx.strokeRect(buttons[i].x, buttons[i].y, buttons[i].w, buttons[i].h);
      ctx.fillRect(buttons[i].x, buttons[i].y, buttons[i].w, buttons[i].h);
      ctx.fillStyle = "rgba(255, 255, 255, " + buttons[i].alpha + ")";
      ctx.fillText(buttons[i].text, buttons[i].x+(buttons[i].w/2)-(ctx.measureText(buttons[i].text).width/2), buttons[i].y+(buttons[i].h/2));
    }
  }

  if(!error) window.requestAnimFrame(loop);
} loop();

