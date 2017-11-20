// insert with 
// $("head").append('<script src="https://rawgit.com/mdaquin/doublefacetracket/master/trctrl.js" type="text/javascript"></script>');

// ----- 

var script = document.createElement('script');
script.src = 'https://cdn.rawgit.com/jaysalvat/jquery.facedetection/a3e52bd0/dist/jquery.facedetection.min.js';

script.onload = function(){
  var el = $('.OT_video-element').first();
  loop();
  function loop(){
    el.faceDetection({
        complete: function (faces) {
            console.log(faces);
            // find the wider face
	    // find the x position of its center
	    // difference with the center of the camera (can find from el)
            loop(); // timeout unnecessary as it takes some time...
        }
    });
  }
}
document.head.appendChild(script); //inject where you need it to be
