canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 255;

function add() {
backgorund_imgTag = new Image();
backgound_imgTag.onload = uploadBackground;
backgorund_imgTag.src = backgound_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.greencar_width, canvas.height);


}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + " y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_Y<=500){
        greencar_y = greencar_y + 10;
        console.log("When down arrow key is pressend, x = " + greencar_x + "y = " +greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(greencar_x<=0){
        greencar_x = greencar_y + 10;
        console.log("When left arrow key is pressend, x = " + greencar_x + "y = " +greencar_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
	if(greencar_x<=){
        greencar_x = greencar_x + 10;
        console.log("When right  arrow key is pressend, x = " + greebcar_x + "y = " +greencar_y);
        uploadBackground();
        uploadrover();
    }
}
