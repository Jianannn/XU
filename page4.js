/*
	Function  :page4
	Author    :翁涤非
	Build_Date:2018-1-1
	Version   :0.1
 */
 var page4Time=+new Date(),
 	 lastPage4Time=+new Date();
 //pic
 var page4Bg=new Image();
 page4Bg.src="image/page4.png";
 var withB=new Image();
 withB.src="image/with.png";
 var hungry=new Image();
 hungry.src="image/hungry.png";
 var nife=new Image();
 nife.src="image/nife.png";
  var blood2=new Image();
 blood2.src="image/bloud2.png";
 //图片移动
var offsetH=0,
    offsetW=0;
var withBDone=0,
	nifeAngleDone=0;
var nifeAngle=10;
var page4Alpha=0;
//bolldtimes
var drawBloodTimes=0;
 function page4(){
 	 ctx.save();
 	ctx.globalAlpha = page4Alpha;
 	ctx.drawImage(page4Bg, 0,0);
 	ctx.drawImage(hungry, 0,0, 400, 400,
 		26, 248-offsetH, 100, 100);
 	ctx.drawImage(withB, 0,0, 400, 400,
 		26, 248-offsetW, 100, 100);
 	ctx.restore();

 	if(page4Alpha<=1){
 		page4Alpha+=0.1;
 	}
 	else{
 		if(offsetW<=220){offsetH+=10;offsetW+=20;}
 		else if(offsetW>=220&&hit<6){
 			withBDone=1;
 			ctx.drawImage(nife,0, 0, 400, 600, 
 				iCanvasWidth-600/4-20, 40, 400/2, 600/2);
 			x=iCanvasWidth-40;y=60;
 			hit++;
 			requestNextAnimationFrame(testDrawReminder);
 		}
 		if(hit==6){
 			bgmD.play();
 			requestNextAnimationFrame(testPage5);
 		}
	}
 }
 // function drawNife(){
 // 	ctx.save();
	// ctx.globalAlpha = page4Alpha;
	// ctx.drawImage(page4Bg, 0, 0);
	// ctx.drawImage(hungry, 0, 0, 400, 400,
	// 	26, 248 - offsetH, 100, 100);
	// ctx.drawImage(withB, 0, 0, 400, 400,
	// 	26, 248 - offsetW, 100, 100);
	// ctx.restore();
	// ctx.save();
	// ctx.drawImage(nife, 0, 0, 400, 600,
	// 	iCanvasWidth - 40, 40, 400, 600);
	// nifeAngle += 1;
	// ctx.translate(iCanvasWidth - 40 + 400 / 2, 40 + 600 / 2);
	// ctx.rotate(Math.PI / 180 * nifeAngle);
	// ctx.translate(-(iCanvasWidth - 40 + 400 / 2), -(40 + 600 / 2));
	// if (nifeAngle >= 90) {
	// 	nifeAngleDone = 1;
	// }
	// if (nifeAngleDone) {
	// 	requestNextAnimationFrame(testPage5);
	// }
	// ctx.restore();
 // }
 function testPage4(){
	page4Time=+new Date();
	if(page4Time-lastPage4Time>=100){
		lastPage4Time=page4Time;
		requestNextAnimationFrame(page4);//if(hit<6){
		// if(hit == 6 && !nifeAngleDone){requestNextAnimationFrame(drawNife);}
	}
	if(hit==4)requestNextAnimationFrame(testPage4);//||hit==6
}