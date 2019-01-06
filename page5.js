 /*
	Function  :page5
	Author    :翁涤非
	Build_Date:2018-1-1
	Version   :0.1
 */
  var page5Time=+new Date(),
 	 lastPage5Time=+new Date();

  var page5Bg=new Image();
  page5Bg.src="image/page5.png";
  var textDad=new Image();
  textDad.src="image/text4.png";
  var blood2=new Image();
  blood2.src="image/bloud2.png";
  var brother=new Image();
  brother.src="image/brother.png";
  var waves=new Image();
  waves.src="image/wave.png";

  var textDadAlpha=0;

  var offBotherX=5,
      offBotherY=0;
  var botherwithSDone=0;

  var waveOffsetY=0;
  var waveMoveDone=0;
 function page5(){
 	ctx.drawImage(page5Bg, 0,0);
 	ctx.drawImage(brother,0,0 , 372, 370, 
 				0+offBotherX, iCanvasHeight/2+370/4+offBotherY, 372/4, 370/4);
 	ctx.save();
 	ctx.globalAlpha = textDadAlpha;
 	ctx.drawImage(textDad, 0, 0, 328, 111, 
 		iCanvasWidth/2-328/2/2, iCanvasHeight/2, 328/2, 111/2);
 	ctx.restore();
 	if(textDadAlpha<1){textDadAlpha+=0.1;}
 	if(textDadAlpha>=1){
 		ctx.drawImage(blood2, 0, 0, 400, 322, 
 				0, 30, 400, 322);
 		offBotherX+=5;
 		offBotherY=Math.random()*5;
 		if(offBotherX>=300){

 			if(bgmEnd.paused){
 				bgmStart.pause();
 				bgmEnd.play();
 			}

 			botherwithSDone=1;
 			ctx.save();
 			ctx.font = "15px arial";
 			ctx.fillStyle = "black";
 			ctx.fillText("现在只有哥哥了..", iCanvasWidth/2-15, iCanvasHeight/2+111/2+20);
 			ctx.restore();
 			ctx.drawImage(waves, 0, 0, 800, 2000, 
 				0, iCanvasHeight-waveOffsetY, 800/2, 2000/2);
 			if(waveOffsetY<iCanvasHeight+400){waveOffsetY+=5;}
 			if(waveOffsetY>=iCanvasHeight+400){
 				waveMoveDone=1;
 				requestNextAnimationFrame(drawComic);
 			}
 		}
 	}
 }
 function testPage5(){
	page5Time=+new Date();
	if(page5Time-lastPage5Time>=100){
		lastPage5Time=page5Time;
		requestNextAnimationFrame(page5);
	}
	if(!waveMoveDone){requestNextAnimationFrame(testPage5);}
}