/*
	Function  :page2
	Author    :翁涤非
	Build_Date:2018-12-26
	Version   :0.1
 */
 //用于画云
 var cloud= new Image(),
 	 cloudOffsetY=0,
 	 cloudOffsetX=0;
cloud.src="image/cloud.png";
var page2Time=+new Date(),
	lastPage2Time=+new Date();
//用于text
var textDayDone=0;
//用于方块
var square1Alpha=1;
//用于人群
var bgP=new Image();
bgP.src="image/bg.png";
var people=new Image(),
	peopleOffest=4,
	peopleMul=1,
	peopleDone=0;
people.src="image/peoples.png";
//用于小女孩
var smileGirl=new Image();
smileGirl.src="image/girl.png";
//用于书写
var textTimes=0;
function page2(){
 	ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
	if (textAlpha > 0&&!peopleDone) {
		ctx.save();
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
		ctx.restore();
	}
	else{
		if (cloudOffsetY < 180) {
			ctx.drawImage(bgP, 0, 0, 400, 600, 0, 0, 400, 600);
			ctx.drawImage(people, 0, 0, 962, 639,
				iCanvasWidth / 2 - 963 / 2.5 / 2, iCanvasHeight - 639 / 2.5+50, 963 / 2.5, 639 / 2.5);
			if (square1Alpha > 0) {
				ctx.save();
				ctx.globalAlpha = square1Alpha;
				square1Alpha -= 0.04;
				ctx.fillStyle = "black";
				ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
				ctx.restore();
			}
		}
		else{
			if (iCanvasHeight - 639 / 2.5 - peopleOffest >= iCanvasHeight / 2) {
				ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
				ctx.drawImage(bgP, 0, 0, 400, 600, 0, 0, 400, 600);
				ctx.drawImage(people, 0, 0, 962, 639,
				iCanvasWidth / 2 - 963 / 2.5 / 2, iCanvasHeight - 639 / 2.5 +50-peopleOffest , 963 / 2.5, 639 / 2.5);
				peopleOffest+=4;
			}
			else if(iCanvasHeight - 639 / 2.5 - peopleOffest < iCanvasHeight / 2&&!peopleDone){
				ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
				ctx.drawImage(bgP, 0, 0, 400, 600, 0, 0, 400, 600);
				ctx.drawImage(people, 0, 0, 962, 639,
				iCanvasWidth / 2 - 963 / 2.5*peopleMul / 2, iCanvasHeight - 639 / 2.5*peopleMul +50-peopleOffest , 963 / 2.5*peopleMul, 639 / 2.5*peopleMul);
				peopleMul+=0.01
				if(peopleMul>=1.2){
					peopleDone=1;
				}
			}
			if(peopleDone){
				ctx.drawImage(bgP, 0, 0, 400, 600, 0, 0, 400, 600);
				ctx.drawImage(people, 0, 0, 962, 639,
				iCanvasWidth / 2 - 963 / 2.5*peopleMul / 2, iCanvasHeight - 639 / 2.5*peopleMul +50-peopleOffest , 963 / 2.5*peopleMul, 639 / 2.5*peopleMul);
				//girl
				ctx.drawImage(smileGirl, 0, 0, 273, 593, 
					iCanvasWidth/2-273/4/2+10, 400+5, 273/4, 593/4);

				ctx.save();
				ctx.fillStyle = "black";
				ctx.font = "15px arial";
				var textName="我叫  苞";
				ctx.fillText(textName, iCanvasWidth/2-ctx.measureText(textName).width/2, iCanvasHeight/2-30);
				ctx.restore();

				textTimes++;

				if (square1Alpha <= 1&&textTimes>15) {
					ctx.save();
					ctx.globalAlpha = square1Alpha;
					square1Alpha += 0.02;
					ctx.fillStyle = "black";
					ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
					ctx.restore();
				}
				if(square1Alpha>1){
					requestNextAnimationFrame(testPage3);
				}
			}
		}
	}
//cloud
 	ctx.drawImage(cloud, 291,880, 564,588, 
 		iCanvasWidth-564/2, 0-cloudOffsetY, 564/2, 588/2);
 	ctx.drawImage(cloud, 861,880, 420,588, 
 		0-cloudOffsetX, 0-cloudOffsetY, 420/2, 588/2);
 	ctx.drawImage(cloud, 0,880, 290,588, 
 		0-cloudOffsetX, 50, 290/2, 588/2);
 	ctx.drawImage(cloud, 0, 0, 750, 870, 
 		0-cloudOffsetX, iCanvasHeight-870/2+50+cloudOffsetY, 750/2, 870/2);
 	ctx.drawImage(cloud, 753, 0, 384, 860, 
 		iCanvasWidth-384/2+cloudOffsetX, 588/2-100, 384/2, 860/2);
//text
	// console.log(textAlpha);
	if (textAlpha > 0&&!textDayDone) {
		ctx.save();
		ctx.globalAlpha = textAlpha;
		// console.log(textAlpha);
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.textBaseline = "top";
		ctx.font = "18px arial";
		ctx.fillText("两天前...", iCanvasWidth / 2, iCanvasHeight / 2 - 30);
		textAlpha -= 0.1;
		// console.log(textAlpha);
		ctx.restore();
	}
	else{
		textDayDone=1;
		cloudOffsetX+=3;
		cloudOffsetY+=3;
	}
 }
 function testPage2(){
	page2Time=+new Date();
	if(page2Time-lastPage2Time>=120){
		lastPage2Time=page2Time;
		requestNextAnimationFrame(page2);
	}
	if(square1Alpha<=1){requestNextAnimationFrame(testPage2);}
}
 