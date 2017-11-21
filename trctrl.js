// insert with 
// $("head").append('<script src="https://rawgit.com/mdaquin/doublefacetracket/master/trctrl.js" type="text/javascript"></script>');

// ----- 

var script = document.createElement('script');
script.src = 'https://cdn.rawgit.com/jaysalvat/jquery.facedetection/a3e52bd0/dist/jquery.facedetection.min.js';
var speed  = 5;
var rspeed = 5;

script.onload = function(){
  var el = $('.OT_video-element').first();
  loop();
  function loop(){
    el.faceDetection({
        complete: function (faces) {  
             var maxw = 0;
             var maxf = {};
	     for (face in faces){
	          if (faces[face].width && faces[face].width > maxw) {
		      maxw = faces[face].width;
                      maxf = faces[face];
                  }
             }
            if (maxw != 0){
            	var xposition = maxf.x + (maxf.width / 2);
                // var acenter = $("video").first().width()/2; // seems fixed not matter the width of the screem
                var acenter = 300;
                var diff = acenter - xposition;
	        sendCommandWithData(8, { "drive" : 0, "turn" : diff/(10-speed)});
		console.log(acenter+" "+xposition+" "+diff);
            }
           setTimeout(loop, 500-(100*rspeed)); // timeout might not be necessary as it takes some time...
        }
    });
  }
}
document.head.appendChild(script); //inject where you need it to be
