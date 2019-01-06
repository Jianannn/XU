/*
	Function  :loading
	Author    :翁涤非
	Build_Date:2018-12-16
	Version   :0.1
 */

// 用于进度条
var progressbar={
    w:canvas.width-20,
    h:30,
    x:canvas.width/2,
    y:canvas.height/2};
var lastTime=+new Date(),
    velocity=90;
var w=0;
//用于加载动画
var image1= new Image(),
    image2= new Image();

image1.src="image/rain.png";
image2.src="image/sea.png";
progressbar.x-=progressbar.w/2;
progressbar.y-=progressbar.h/2

var flag=1;
var seaHeight=1,temp=2;
var lastTime1=+new Date(),now=+new Date();

function drawBack(){
	ctx.save();
	ctx.fillStyle="black";
	ctx.fillRect(0,0,iCanvasWidth, iCanvasHeight);
	ctx.restore();

	ctx.save();
	ctx.globalAlpha=0.5;
	ctx.drawImage(image1,0,0,iCanvasWidth*3,iCanvasHeight*3,0,0,iCanvasWidth,iCanvasHeight);
	ctx.restore();
}
function drawPic(){
	drawBack();
	//下雨
	if(flag){
		ctx.drawImage(image1,20,20,iCanvasWidth*2,iCanvasHeight*2,0,0,iCanvasWidth,iCanvasHeight);
		flag=0;
	}
	else{
		ctx.drawImage(image1,iCanvasWidth*2,20,iCanvasWidth*2,iCanvasHeight*2,0,0,iCanvasWidth,iCanvasHeight);
		flag=1;
	}
	//海浪
	if(seaHeight>=50||seaHeight<=0){temp=-temp;}
	ctx.drawImage(image2,0,0,iCanvasWidth*1.5,190,0,iCanvasHeight-50-seaHeight,iCanvasWidth,190/1.5);
	seaHeight+=temp;
}
// 进度条绘制
function calculateFPS(){
	if(now==undefined) now = +new Date() ;
	if(now > lastTime){
		fps = parseInt(1000/(now-lastTime)) ;
	}
    lastTime = now;
	return fps ;
}
function step(){
	if(seaHeight>=50){
		ctx.clearRect(0,0 ,iCanvasWidth, iCanvasHeight);
		drawPic();
		ctx.fillText(parseInt(w/progressbar.w*100)+"%", progressbar.x+w, progressbar.y-5);
		ctx.fillRect(progressbar.x,progressbar.y,w,progressbar.h);
	}
	now = + new Date();
	// 绘制背景
	if(now-lastTime1>=100){
		lastTime1=now;
		drawPic();

		ctx.save();
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.textBaseline = "bottom";
		ctx.font = "15px Arial";
		ctx.fillText(parseInt(w/progressbar.w*100)+"%", progressbar.x+w, progressbar.y-5);
		ctx.fillRect(progressbar.x,progressbar.y,w,progressbar.h);
		ctx.restore();
	}
	// 绘制填充矩形progressbar
	w += velocity/calculateFPS(now);
	
	// 10、当矩形递增的实际长度w值小于矩形的目标长度时，继续执行动画
	if(w<=progressbar.w){requestNextAnimationFrame(step);}
	else{
		requestNextAnimationFrame(drawSmallCircle);
	}
}
