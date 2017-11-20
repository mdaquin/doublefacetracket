// insert with 
// $("head").append('<script src="https://rawgit.com/mdaquin/doublefacetracket/master/trctrl.js" type="text/javascript"></script>');

// ----- 

var script = document.createElement('script');
script.src = 'https://cdn.rawgit.com/auduno/clmtrackr/dev/build/clmtrackr.min.js';

script.onload = function(){
  console.log("Initialising ct tracker");
  var videoInput = document.getElementsByTagName("video")[0];
  var ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput);
  function positionLoop() {
    var positions = ctracker.getCurrentPosition();
    console.log(positions);
    updatePosition(positions);
    requestAnimationFrame(positionLoop);
  }
  requestAnimationFrame(positionLoop);
  positionLoop();
}
document.head.appendChild(script); //inject where you need it to be

var lastpos = false;

function updatePositions(pos){
  if (lastpos != pos) {
    if (!pos){
       console.log("No face detected")
    } else {
       console.log("face detected")
       console.log(pos)   
    }
  }
  lastpos = pos;
    // should update the turn
}
