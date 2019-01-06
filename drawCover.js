/*
	Function  :drawCover
	Author    :翁涤非
	Build_Date:2018-12-26
	Version   :0.1
 */
 //用于封面
var cover=new Image();
cover.src="image/circle.png";

var ballAlpha = 1,
	tmp = 0.1; //透明度降低值
var moveY = 20; //圆上滑值
var now = +new Date(),
	lastCircleMove = +new Date();

function drawCover() {
	ctx.save();
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
	ctx.restore();

	ctx.save();
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "20px Arial";
	ctx.fillText("自", iCanvasWidth / 2, iCanvasHeight / 2 + 15);
	ctx.fillText("白", iCanvasWidth / 2, iCanvasHeight / 2 - 15);
	ctx.restore();
}
function drawThreeText(){
	//txt1
	ctx.drawImage(cover, 420, 410, 20, 163,
		iCanvasWidth / 2 - 20, iCanvasHeight - 163 / 2 - 30, 20 / 2, 163 / 2);

	ctx.save();
	ctx.setLineDash([20, 5]);
	ctx.lineWidth = "3";
	ctx.strokeStyle = "white";
	ctx.beginPath();
	ctx.moveTo(iCanvasWidth / 2, iCanvasHeight - 30 - 163 / 2 - 5);
	ctx.lineTo(iCanvasWidth / 2, iCanvasHeight - 30 + 5);
	ctx.stroke();
	ctx.restore();
//txt2
	ctx.drawImage(cover, 444, 410, 20, 163,
		iCanvasWidth / 2 + 10, iCanvasHeight - 163 / 2 - 30, 20 / 2, 163 / 2);
}
function drawSmallCircle() {

	now = +new Date();
	// console.log(now);
	// console.log(lastCircleMove);
	if (now - lastCircleMove >= 100) {
		// console.log(now);
		// console.log(lastCircleMove);
		lastCircleMove = now;
		// console.log(lastCircleMove);
		// drawSmallCircle();
		ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
		drawCover();
		drawThreeText();
		ctx.save();
		ctx.fillStyle = "white";
		ctx.beginPath();
		ballAlpha -= tmp;
		ctx.globalAlpha = ballAlpha;
		ctx.arc(iCanvasWidth / 2, iCanvasHeight - 30 + 5 - moveY, 7, 0, Math.PI * 2, true);
		moveY += 10;
		if (iCanvasHeight - 30 + 5 - moveY <= iCanvasHeight - 30 - 163 / 2 - 5) {
			ballAlpha = 1;
			moveY = 0;
		}
		ctx.fill();
		ctx.restore();
	}
	if(bgmStart.paused){
		requestNextAnimationFrame(drawSmallCircle);
	}
	else{
		ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
		drawCover();
		x=iCanvasWidth/2;y=iCanvasHeight/2;
		requestNextAnimationFrame(testDrawReminder);
	}
}