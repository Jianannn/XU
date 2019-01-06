/*
	Function  :moveInteraction
	Author    :翁涤非
	Build_Date:2018-12-26
	Version   :0.1
 */
 var radius=30,
 	radiusChange=0.4;
 var lastReminderTime=+new Date(),
 	 reminderTime=+new Date();
function drawReminder(){
	if(hit==1){	drawCover();}
	else if(hit==3){ctx.drawImage(page3Bg, 0,0);}
	else if(hit==5){
		ctx.drawImage(page4Bg, 0,0);
 		ctx.drawImage(hungry, 0,0, 400, 400,
 			26, 248-offsetH, 100, 100);
 		ctx.drawImage(withB, 0,0, 400, 400,
 			26, 248-offsetW, 100, 100);
 		ctx.drawImage(nife,0, 0, 400, 600, 
 			iCanvasWidth-600/4-20, 40, 400/2, 600/2);
	}


	ctx.save();
	ctx.beginPath();
	ctx.arc(x, y,radius, 0, Math.PI*2, true);
	ctx.lineWidth = "3";
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.stroke();
	ctx.restore();

	ctx.save();
	ctx.shadowBlur = "20";
	ctx.shadowColor = "rgb(255,255,255)";
	ctx.shadowOffsetX = "5";
	ctx.shadowOffsetY = "5";
	ctx.stroke();
	// ctx.fill();
	ctx.shadowOffsetX = "-5";
	ctx.shadowOffsetY = "5";
	ctx.stroke();
	// ctx.fill();
	ctx.shadowOffsetX = "-5";
	ctx.shadowOffsetY = "-5";
	ctx.stroke();
	// ctx.fill();
	ctx.shadowOffsetX = "5";
	ctx.shadowOffsetY = "-5";
	// ctx.fill();
	ctx.stroke();
	ctx.restore();

	radius+=radiusChange;
	if(radius>=40||radius<=20){
		radiusChange=-radiusChange;
	}
	// ctx.save();
	// var g=ctx.createRadialGradient(iCanvasWidth / 2, iCanvasHeight / 2, radius, 
	// 		iCanvasWidth / 2, iCanvasHeight / 2, radius*2);
	// g.addColorStop(0,"rgb(255,255,255,1)");
	// g.addColorStop(1,"rgb(255,255,255,0)");
	// ctx.beginPath();
	// ctx.arc(iCanvasWidth / 2, iCanvasHeight / 2,radius*2, 0, Math.PI*2, true);
	// ctx.fillStyle =g;
	// ctx.fill();
	// ctx.restore();
}
function testDrawReminder(){
	reminderTime=+new Date();
	if(reminderTime-lastReminderTime>=1){
		lastReminderTime=reminderTime;
		requestNextAnimationFrame(drawReminder);
	}
	if(hit==1||hit==3||hit==5){requestNextAnimationFrame(testDrawReminder);}
}