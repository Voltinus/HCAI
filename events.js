function buttonEvents(e) {
  var anyButtonActive = false;

  for(var i=0; i<buttons.length; i++) {
    if(e.offsetX > buttons[i].x && e.offsetY > buttons[i].y
    && e.offsetX < buttons[i].x + buttons[i].w
    && e.offsetY < buttons[i].y + buttons[i].h) {
      buttons[i].state = (e.buttons == 1 ? 2 : 1);
      anyButtonActive = true;
    } else {
      buttons[i].state = 0;
    }
  }

  if(anyButtonActive) {
    $("#canvas").css("cursor", "pointer");
  } else {
    $("#canvas").css("cursor", "auto");
  }
}

$("#canvas").mousemove(function(e) {
  buttonEvents(e);
}).mousedown(function(e) {
  buttonEvents(e);
}).mouseup(function(e){
  for(var i=0; i<buttons.length; i++) {
    if(buttons[i].state == 2) buttons[i].action();
  }
  buttonEvents(e);
});
