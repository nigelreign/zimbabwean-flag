window.onload = function(){
	var flag = document.getElementById('flag');
	drawFlag( flag, 320, 10, 130 );
	flag.style.marginLeft = -(flag.width/2)+'px';
	flag.style.marginTop  = -(flag.height/2)+'px';
};




function drawFlag( canvas, width, padX, padY ){
	if (!padX) padX = 0;
	if (!padY) padY = 0;
	
	var a = width / 1.9;
	var b = width;
	var c = 7*a/13;
	var d = 0.76*a;
	var e = 0.054*a;
	var g = 0.063*a;
	var k = 0.0616*a;
	var l = a / 13;
	canvas.width  = b+2*padX;
	canvas.height = a+2*padY;
	var ctx = canvas.getContext('2d');


// Our colors
// #006400 => Green
// #FFD200 => Yellow
// #D40000 => Red
// #000000 => Black
// #FFFFFF => White
// #FFCC00 => Yellow

	// Stripes

	// Green
	ctx.fillStyle = "#006400";
	  ctx.fillRect(5,25,300,20);
          ctx.fillStyle = "#fff";

	// Yellow
	ctx.fillStyle = "#FFD200";
	  ctx.fillRect(5,45,300,20);
          ctx.fillStyle = "#fff";

	// Red
	ctx.fillStyle = "#D40000";
	  ctx.fillRect(5,65,300,20);
          ctx.fillStyle = "#fff";

	// Black
	ctx.fillStyle = "#000000";
	  ctx.fillRect(5,85,300,20);
          ctx.fillStyle = "#fff";

	// Red
	ctx.fillStyle = "#D40000";
	  ctx.fillRect(5,104,300,20);
          ctx.fillStyle = "#fff";

	// Yellow
	ctx.fillStyle = "#FFD200";
	  ctx.fillRect(5,120,300,20);
          ctx.fillStyle = "#fff";

	// Green
	ctx.fillStyle = "#006400";
	  ctx.fillRect(5,140,300,20);
          ctx.fillStyle = "#fff";

}

