// insert with 
// $("head").append('<script src="https://rawgit.com/mdaquin/doublefacetracket/master/trctrl.js" type="text/javascript"></script>');

// ----- 

var script = document.createElement('script');
script.src = 'https://cdn.rawgit.com/auduno/clmtrackr/dev/build/clmtrackr.min.js';

var lastpos = false;

script.onload = function(){
  console.log("Initialising ct tracker");
  var videoInput = document.getElementsByTagName("video")[0];
  var ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput);
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
  function positionLoop() {
    var positions = ctracker.getCurrentPosition();
    updatePositions(positions);
    requestAnimationFrame(positionLoop);
  }
  requestAnimationFrame(positionLoop);
  positionLoop();
}
document.head.appendChild(script); //inject where you need it to be
