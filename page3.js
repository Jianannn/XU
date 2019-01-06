/*
	Function  :page3
	Author    :翁涤非
	Build_Date:2018-1-1
	Version   :0.1
 */
 var page3Time=+new Date(),
 	 lastPage3Time=+new Date();
 //用于图片
 var house=new Image();
 house.src="image/housesBack.png";
 var page3Bg=new Image();
 page3Bg.src="image/page3.png";
 var death=new Image();
 death.src="image/death.png";
 var blood=new Image();
 blood.src="image/bloud1.png";
 var mon=new Image();
 mon.src="image/mon.png";
 var textMon=new Image();
 textMon.src="image/text3.png";
 //用于文字
 var textG1Done=0,
 	 textG2Done=0,
 	 textG3Done=0;
 var textG1Alpha=0,
 	 textG2Alpha=0,
 	 textG3Alpha=0;
 var offsetText1=1,
 	 offsetText2=1,
 	 offsetText3=1;
 //用于死神
 var drawDeathTimes=0;
 var deathAlpha=0;
 //mon
 var monX=400,
 	 monY=0;
 var monDone=0;
 var textMonAlpha=0,
 	 textMonDone=0,
 	 textMonDoneTimes=0;

 function drawDage3Bg(){
 	ctx.drawImage(page3Bg, 0,0);
 	if(hit==4&&!monDone){
 		ctx.drawImage(mon, 0, 0, 496, 742, 
 			monX, monY, 496/2, 742/2);
 		monX-=15;
 		monY+=5
 		if(monX<=-496/2){monDone=1;}
 	}
 	if(monDone&&!textMonDone){
 		bgmM.play();
 		ctx.drawImage(blood, 0, 0, 800, 266, 
 			0, iCanvasHeight/5, 800/2, 266/2);
 		ctx.save();
 		ctx.globalAlpha = textMonAlpha;
 		ctx.drawImage(textMon, 0, 0, 328, 111, 
 			iCanvasWidth/2-328/2/2, iCanvasHeight/2-111/2/2, 328/2, 111/2);
 		ctx.restore();
 		textMonAlpha+=0.05;
 		if(textMonAlpha>=1){
 			textMonDoneTimes++;
 			if(textMonDoneTimes>=10){
 				textMonDone=1;
 				requestNextAnimationFrame(testPage4);
 			}
 		}
 	}
 }
 function page3(){
 	ctx.clearRect(0, 0, iCanvasWidth, iCanvasHeight);
 	ctx.drawImage(house,0,0,800,517,
 		0,iCanvasHeight-517/2,800/2,517/2);

	if (!textG1Done&&!textG2Done&&!textG3Done) {
		ctx.save();
		ctx.globalAlpha = textG1Alpha;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font = "15px arial";
		ctx.fillText("我生活的地方曾经平静美好", iCanvasWidth / 2, 100 -offsetText1 );
		ctx.restore();

		if(textG1Alpha>=1){
			textG1Done=1;
		}
		else{
			textG1Alpha+=0.1;
			offsetText1++;
		}
	}
	if (textG1Done&&!textG2Done&&!textG3Done) {
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"
		ctx.font = "15px arial";
		ctx.fillText("我生活的地方曾经平静美好", iCanvasWidth / 2, 100 -offsetText1 );

		ctx.save();
		ctx.globalAlpha = textG2Alpha;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"
		ctx.font = "15px arial";
		ctx.fillText("然而，意外降临的死神", iCanvasWidth / 2, 130 -offsetText2 );
		ctx.restore();

		if(textG2Alpha>=1){
			textG2Done=1;
		}
		else{
			textG2Alpha+=0.1;
			offsetText2++;
		}
	}
	if (textG1Done&&textG2Done&&!textG3Done) {
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"
		ctx.font = "15px arial";
		ctx.fillText("我生活的地方曾经平静美好", iCanvasWidth / 2, 100 -offsetText1 );
		ctx.fillText("然而，意外降临的死神", iCanvasWidth / 2, 130 -offsetText2 )

		ctx.save();
		ctx.globalAlpha = textG3Alpha;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"
		ctx.font = "15px arial";
		ctx.fillText("毁灭了一切", iCanvasWidth / 2, 160 -offsetText3 );
		ctx.restore();

		if(textG3Alpha>=1){
			textG3Done=1;
		}
		else{
			textG3Alpha+=0.1;
			offsetText3++;
		}
	}
	if(textG1Done&&textG2Done&&textG3Done&&deathAlpha<=1){
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"
		ctx.font = "15px arial";
		ctx.fillText("我生活的地方曾经平静美好", iCanvasWidth / 2, 100 -offsetText1 );
		ctx.fillText("然而，意外降临的死神", iCanvasWidth / 2, 130 -offsetText2 )
		ctx.fillText("毁灭了一切", iCanvasWidth / 2, 160 -offsetText3 );

		ctx.save();
		ctx.globalAlpha = "0.3";
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
		ctx.restore();
		ctx.drawImage(death, 0, 0, 800, 955, 0, iCanvasHeight-955/2+130, 800/2, 955/2);

		drawDeathTimes++;
	}
	if (drawDeathTimes >= 20&&deathAlpha<=1) {
		ctx.save();
		ctx.globalAlpha = deathAlpha;
		deathAlpha += 0.05;
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
		ctx.restore();
	}
	if(deathAlpha>=1){
		drawDage3Bg();
		x=iCanvasWidth/2;y=iCanvasHeight/4;
		hit++;
		requestNextAnimationFrame(testDrawReminder);
	}
 }
 function testPage3(){
	page3Time=+new Date();
	if(page3Time-lastPage3Time>=100){
		lastPage3Time=page3Time;
		if(deathAlpha<=1){requestNextAnimationFrame(page3);}
		else if(!textMonDone&&deathAlpha>=1){requestNextAnimationFrame(drawDage3Bg);}
	}
	if(!textMonDone)requestNextAnimationFrame(testPage3);
}