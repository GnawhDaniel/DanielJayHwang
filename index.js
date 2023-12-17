var id = null;

function titleEvent() {
  var elem = document.getElementById("titleAnimation");
  var titleDiv = document.getElementById("title");

  // Phase in
  var opacity = 0;
  clearInterval(id);
  id = setInterval(frame1, 20);
  function frame1() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      opacity += 0.01;
      elem.style.opacity = opacity;
    }
  }

  // Parallax Effect
  var x_mid = titleDiv.clientWidth / 2;
  var y_mid = titleDiv.clientHeight / 2;
  var originMarginLeft = parseFloat(getComputedStyle(elem).marginLeft);
  var originMarginRight = parseFloat(getComputedStyle(elem).marginRight);
  var originMarginTop = parseFloat(getComputedStyle(elem).marginTop);
  var originMarginBot = parseFloat(getComputedStyle(elem).marginBottom);

  var offset = 35;
  titleDiv.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;

    // Left
    if (x < x_mid) {
      elem.style.marginRight = originMarginRight + "px";
      elem.style.marginLeft = originMarginLeft + offset + "px";
    }

    // Right
    else if (x > x_mid) {
      elem.style.marginLeft = originMarginLeft + "px";
      elem.style.marginRight = originMarginRight + offset + "px"
    }

    // Upper y
    if (y < y_mid) {
      console.log(1);
      elem.style.marginBottom = originMarginBot + "px";
      elem.style.marginTop = originMarginTop + offset + "px"
    }

    // Lower y
    else if (y > y_mid) {
      console.log(2);
      elem.style.marginTop = originMarginTop + "px";
      elem.style.marginBottom = originMarginBot + offset + "px"
    }
  
  })
  

  function frame2() {

  }


}

document.addEventListener('DOMContentLoaded', function() {
  titleEvent();
});