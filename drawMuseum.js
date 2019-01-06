/*
	Function  :视频
	Author    :徐佳男
	Build_Date:2018-11-27
	Version   :1.1
 */
let backCounter=0;

function drawMuseum() {
    //重绘
    ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
    //绘制视频
    drawVideo();
    //绘制文字与矩形
    drawWord();
    //绘制语句
    themeWords();

    let now = (+new Date());
    if (now - COUNTER_ADD_TIME >= 200) {
        COUNTER_ADD_TIME = now;
        backCounter++;
    }
    if (backCounter === 4){
        backCounter=0;
    }

    videoPos.y-=1;

    if (videoPos.y<=-(spHeight*2+125+100)) {
        ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
        ctx.fillStyle="black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.save();
        ctx.globalAlpha=bgAlpha;
        ctx.drawImage(backWhale,(890/2)*(backCounter%2),(1260/2)*parseInt(backCounter/2),890/2,1260/2,iCanvasWidth/2-890/6,iCanvasHeight/2-1260/6,890/3,1260/3);
        ctx.restore();
        typeMachine();
    }
    else{
        requestAnimationFrame(drawMuseum);
    }

}

function drawInBlackAndWhite(X,Y) {

    let average=0;

    //Video1
    let imageData = ctx.getImageData(X, Y, 272, 170);
    let data = imageData.data;
   	for (let i = 0; i < data.length - 4; i = i + 4) {
        average = data[i]*0.3 + data[i + 1]*0.59 + data[i + 2]*0.11;
        data[i] = average;
        data[i + 1] = average;
        data[i + 2] = average;
    }
	ctx.putImageData(imageData, X, Y);

    //Video2
    imageData = ctx.getImageData(X+(272/2)-30, Y+spHeight, 272, 170);
    data = imageData.data;
    for (let i = 0; i < data.length - 4; i = i + 4) {
        average = data[i]*0.3 + data[i + 1]*0.59 + data[i + 2]*0.11;
        data[i] = average;
        data[i + 1] = average;
        data[i + 2] = average;
    }
    ctx.putImageData(imageData, X+(272/2)-30, Y+spHeight);

    //Video3
    imageData = ctx.getImageData(X, Y+spHeight*2, 272, 170);
    data = imageData.data;
    for (let i = 0; i < data.length - 4; i = i + 4) {
        average = data[i]*0.3 + data[i + 1]*0.59 + data[i + 2]*0.11;
        data[i] = average;
        data[i + 1] = average;
        data[i + 2] = average;
    }
    ctx.putImageData(imageData, X, Y+spHeight*2);
}

function drawVideo() {
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //绘制背景
    ctx.save();
    ctx.globalAlpha=bgAlpha;
    ctx.drawImage(backWhale,(890/2)*(backCounter%2),(1260/2)*parseInt(backCounter/2),890/2,1260/2,iCanvasWidth/2-890/6,iCanvasHeight/2-1260/6,890/3,1260/3);
    ctx.restore();
    // 352 × 264
    ctx.drawImage(video1,0,50,352,150,videoPos.x,videoPos.y,200,125);
    // 848 × 480
    ctx.drawImage(video2,0,50,528,300,videoPos.x+(272/2),videoPos.y+spHeight,200,125);
    // 672 × 378
    ctx.drawImage(video3,0,50,440,250,videoPos.x,videoPos.y+spHeight*2,200,125);
    //视频黑白处理
    drawInBlackAndWhite(videoPos.x,videoPos.y);
}

function drawWord() {
    //绘制红色矩形
    ctx.fillStyle="Red";
    ctx.fillRect(videoPos.x+(272/2)+55,videoPos.y+30,40,22);
    ctx.fillRect(videoPos.x+(272/2)-20,videoPos.y+spHeight+30,40,22);
    ctx.fillRect(videoPos.x+(272/2)+55,videoPos.y+30+spHeight*2,40,22);
    //绘制白色矩形
    ctx.fillStyle="White";
    ctx.fillRect(videoPos.x+(272/2)+50,videoPos.y+70,40,22);
    ctx.fillRect(videoPos.x+(272/2)-15,videoPos.y+spHeight+70,40,22);
    ctx.fillRect(videoPos.x+(272/2)+50,videoPos.y+70+spHeight*2,40,22);
    //绘制白色字体
    ctx.textAlign="center";
    ctx.font="normal 400 16px arial";
    ctx.textBaseline="middle";
    ctx.fillText("濒危",videoPos.x+(272/2)+55+20,videoPos.y+30+11);
    ctx.fillText("易危",videoPos.x+(272/2)-20+20,videoPos.y+30+11+spHeight);
    ctx.fillText("濒危",videoPos.x+(272/2)+55+20,videoPos.y+30+11+spHeight*2);
    //绘制黑色字体
    ctx.fillStyle="black";
    ctx.fillText("鲸鱼",videoPos.x+(272/2)+50+20,videoPos.y+70+11);
    ctx.fillText("海豹",videoPos.x+(272/2)-15+20,videoPos.y+70+11+spHeight);
    ctx.fillText("犀牛",videoPos.x+(272/2)+50+20,videoPos.y+70+11+spHeight*2);
}

function themeWords() {
    ctx.fillStyle="White";
    ctx.font="italic normal bold 16px arial";
    ctx.textAlign="start";
    ctx.textBaseline="top";

    ctx.fillText("鲸鲨数量在75年间减少了63%",videoPos.x,videoPos.y+125+20);
    ctx.fillText("他们中的大多数都变成了：",videoPos.x,videoPos.y+125+50);
    ctx.fillText("鱼翅，皮具，护肤品，各类营养品。",videoPos.x,videoPos.y+125+80);

    ctx.textAlign="end";
    ctx.fillText("直到十九世纪末，",videoPos.x+(272/2)+200,videoPos.y+125+20+spHeight);
    ctx.fillText("全世界每年有超过九百万只海豹被猎杀，",videoPos.x+(272/2)+200,videoPos.y+125+50+spHeight);
    ctx.fillText("如今，已有十一种海豹濒临灭绝。",videoPos.x+(272/2)+200,videoPos.y+125+80+spHeight);

    ctx.textAlign="start";
    ctx.fillText("因犀牛角贸易被大肆屠杀取角，",videoPos.x,videoPos.y+125+20+spHeight*2);
    ctx.fillText("除了白犀牛外，",videoPos.x,videoPos.y+125+50+spHeight*2);
    ctx.fillText("现存五种犀牛均濒临灭绝。",videoPos.x,videoPos.y+125+80+spHeight*2);
}