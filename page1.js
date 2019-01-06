 /*
	Function  :drawCover
	Author    :翁涤非
	Build_Date:2018-12-26
	Version   :0.1
 */
//用于page1
var textPic= new Image();
textPic.src="image/text2.png";
//用于画圈
var mul1=1,
	mul2=1,
	mul3=1,
	tmpMul=0.5;//0.2
var tmpAngle=0.1,
	angle=Math.PI * tmpAngle;
var waveAlpha=1;
var page1Time=+new Date(),
	lastPage1Time=+new Date();
//用于写字
var textAlpha=0,
	tmpAlpha=0.1;
var text1Done=0,
	text2Done=0,
	text3Done=0;
//清屏
var clearOver=0;
//用于画小女孩
var sadGirl= new Image(),
	txtHelp= new Image();
sadGirl.src="image/cry.png";
txtHelp.src="image/text.png";
var drawGirlTime=+new Date(),
	lastDrawGirlTime=+new Date();
var girlDone=0;
var textHelpdrawtimes=0;
var girlAlpha=0;
var cut=10;

function page1(){
	ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
	ctx.fillStyle = "black";
	ctx.fillRect(-1, -1, iCanvasWidth+1, iCanvasHeight+1);
	ctx.drawImage(cover, 0, 0, 393.5, 380, 
		iCanvasWidth/2-393.5/20*(mul1+tmpMul)/2, iCanvasHeight/2-380/20*(mul1+tmpMul)/2, 393.5/20*(mul1+tmpMul), 380/20*(mul1+tmpMul));
	//圈变大
	if(mul1<20){mul1+=tmpMul;}
	if(mul1>=5){
		ctx.drawImage(cover, 0, 0, 393.5, 380, 
			iCanvasWidth/2-393.5/20*(mul2+tmpMul)/2, iCanvasHeight/2-380/20*(mul2+tmpMul)/2, 393.5/20*(mul2+tmpMul), 380/20*(mul2+tmpMul));
		if(mul2<20){mul2+=tmpMul;}
	}
	if(mul2>=5){
		ctx.drawImage(cover, 0, 0, 393.5, 380, 
			iCanvasWidth/2-393.5/20*(mul3+tmpMul)/2, iCanvasHeight/2-380/20*(mul3+tmpMul)/2, 393.5/20*(mul3+tmpMul), 380/20*(mul3+tmpMul));
		if(mul3<21){mul3+=tmpMul;}
	}

	//圈旋转
	// if(mul3<20){
	// 	ctx.translate((iCanvasWidth / 2 - 393.5 / 20 * (mul1 + tmpMul) / 2 + 393.5 / 20 * (mul1 + tmpMul) / 2),
	// 		(iCanvasHeight / 2 - 380 / 20 * (mul1 + tmpMul) / 2 + 380 / 20 * (mul1 + tmpMul) / 2));
	// 	ctx.rotate(angle);
	// 	ctx.translate(-(iCanvasWidth / 2 - 393.5 / 20 * (mul1 + tmpMul) / 2 + 393.5 / 20 * (mul1 + tmpMul) / 2), 
	// 		-(iCanvasHeight / 2 - 380 / 20 * (mul1 + tmpMul) / 2 + 380 / 20 * (mul1 + tmpMul) / 2));
	// 	angle*=2;
	// }
	// else{
	// 	waveAlpha-=0.1;
	// 	ctx.globalAlpha=waveAlpha;
	// }
}
function drawSadgirl(){
	drawGirlTime=+new Date();
	// console.log(drawGirlTime);
	// console.log(drawGirlTime-lastDrawGirlTime);
	if(drawGirlTime-lastDrawGirlTime>=100&&!girlDone){
		// console.log(lastDrawGirlTime);
		ctx.save();
		lastDrawGirlTime=drawGirlTime;
		ctx.globalAlpha = girlAlpha;
		ctx.drawImage(sadGirl, 0, 0, 720, 1080, 
			0, 0, 400, 600);
		girlAlpha+=tmpAlpha;
		if(girlAlpha>=1.1){
			textHelpdrawtimes++;
			girlAlpha=1;
			ctx.drawImage(txtHelp, 0, 0, 328, 111, 
				iCanvasWidth/10, iCanvasHeight/6*5, 328/2, 111/2);
			if(textHelpdrawtimes>=15){girlDone=1;}
		}
		ctx.restore();
	}
	else if(drawGirlTime-lastDrawGirlTime>=100&&girlDone&&cut<=30){
		lastDrawGirlTime=drawGirlTime;
		ctx.save();
		// var data=ctx.getImageData(0, 0, iCanvasWidth, iCanvasHeight);
		if(girlAlpha>0){
			girlAlpha-=0.05;
		}
		ctx.globalAlpha = girlAlpha;
		ctx.drawImage(canvas, cut, cut,  iCanvasWidth-cut*2, iCanvasHeight-cut*2, 
			0, 0, iCanvasWidth, iCanvasHeight);
		cut+=1;
		ctx.restore();
	}
	if(cut<=30){requestNextAnimationFrame(drawSadgirl);}
	else{
		textAlpha=1;
		tmpAlpha=0.1;
		requestNextAnimationFrame(testPage2);
	}
}
function drawTextPic(){
	page1Time=+new Date();
	if(page1Time-lastPage1Time>=120&&!text1Done){
		lastPage1Time=page1Time;

		ctx.clearRect(iCanvasWidth/2-33/2/2, iCanvasHeight/2-358/2/2, 32/2, 358/2);
		ctx.fillRect(iCanvasWidth/2-33/2/2-1, iCanvasHeight/2-358/2/2-1, 32/2+2, 358/2+2);

		ctx.save();
		ctx.globalAlpha = textAlpha;
		ctx.drawImage(textPic, 0, 0, 32,358, iCanvasWidth/2-33/2/2, iCanvasHeight/2-358/2/2, 32/2, 358/2);
		textAlpha+=tmpAlpha;
		if(textAlpha>=1){
			tmpAlpha=-tmpAlpha;
		}
		if(tmpAlpha==-0.1&&textAlpha<=0){
			text1Done=1;
			textAlpha=0;
			tmpAlpha=0.1;
		}
		ctx.restore();
	}
	else if(page1Time-lastPage1Time>=120&&text1Done&&!text2Done&&!text3Done){
		lastPage1Time=page1Time;

		ctx.clearRect(iCanvasWidth/2-29/2/2, iCanvasHeight/2-358/2/2, 29/2, 358/2);
		ctx.fillRect(iCanvasWidth/2-29/2/2-1, iCanvasHeight/2-358/2/2-1, 29/2+2, 358/2+2);

		ctx.save();
		ctx.globalAlpha = textAlpha;
		ctx.drawImage(textPic, 33, 0, 29 ,264, 
			iCanvasWidth/2-29/2/2, iCanvasHeight/2-264/2/2, 29/2, 264/2);
		textAlpha+=tmpAlpha;
		if(textAlpha>=1){
			tmpAlpha=-tmpAlpha;
		}
		if(tmpAlpha==-0.1&&textAlpha<=0){
			text2Done=1;
			textAlpha=0;
			tmpAlpha=0.1;
		}
		ctx.restore();
	}
	else if (page1Time - lastPage1Time >= 120 &&text1Done&&text2Done&& !text3Done) {
		lastPage1Time = page1Time;

		ctx.clearRect(iCanvasWidth / 2 - 31 / 2 / 2, iCanvasHeight / 2 - 358 / 2 / 2, 31 / 2, 358 / 2);
		ctx.fillRect(iCanvasWidth / 2 - 31 / 2 / 2 - 1, iCanvasHeight / 2 - 358 / 2 / 2 - 1, 31 / 2 + 2, 358 / 2 + 2);


		ctx.save();
		ctx.globalAlpha = textAlpha;
		ctx.drawImage(textPic, 62, 0, 31, 358,
			iCanvasWidth / 2 - 31 / 2 / 2, iCanvasHeight / 2 - 358 / 2 / 2, 31 / 2, 358 / 2);
		textAlpha += tmpAlpha;
		if (textAlpha >= 1) {
			tmpAlpha = -tmpAlpha;
		}
		if (tmpAlpha == -0.1 && textAlpha <= 0) {
			text3Done = 1;
			textAlpha=0;
			tmpAlpha=0.1;
		}
		ctx.restore();
	}
	else if(!clearOver&&page1Time - lastPage1Time >= 120 &&text1Done&&text2Done&&text3Done){
			ctx.save();
			ctx.globalAlpha = textAlpha;
			textAlpha+=tmpAlpha;
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
			ctx.restore();

			if(textAlpha>=1.1){
				clearOver=1;
		}
	}
	if(!clearOver){requestNextAnimationFrame(drawTextPic);}
	else{
		requestNextAnimationFrame(drawSadgirl);
	}
}
function testPage1(){
	page1Time=+new Date();
	if(page1Time-lastPage1Time>=120){
		lastPage1Time=page1Time;
		requestNextAnimationFrame(page1);
	}
	if(hit==2&&mul3<21){requestNextAnimationFrame(testPage1);}
	else{
		requestNextAnimationFrame(drawTextPic);
	}
}