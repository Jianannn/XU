const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

const iCanvasWidth=canvas.width,
	  iCanvasHeight=canvas.height;

//用于末尾
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

const backWhale = new Image();
backWhale.src="image/whaleBg.png";

let COUNTER_ADD_TIME = (+new Date());
const bgAlpha=0.5;
const spHeight=320;
let videoPos={
    x:canvas.width/2-(272/2)-30,
    y:iCanvasHeight+5
};
//用于滑动
let offsetY=0,
	startY=0;
let mouseHaveDown=0;
//用于音频
let bgmStart=document.getElementById("bgmStart");
let bgmEnd=document.getElementById("bgmEnd");
let bgmM=document.getElementById("bgmM");
let bgmD=document.getElementById("bgmD");
//用于点击
let hit=0;
//reminder的坐标
var x=0,y=0;

<!--TODO-->
function onMouseDown(e){
	let point={
		x:e.clientX,
		y:e.clientY};
  	point=windowToCanvas(canvas,point);

	// var startX=point.x,
	if(hit==0){
		startY=point.y;
		mouseHaveDown=1;
	}
	if(hit==1){
		if(point.x>=iCanvasWidth / 2-30&&point.x<=iCanvasWidth / 2+30&&
			point.y>=iCanvasHeight / 2-30&&point.y<=iCanvasHeight / 2+30) {
            hit++;
            requestNextAnimationFrame(testPage1);
        }
	}
	if(hit==3){
		if(point.x>=iCanvasWidth / 2-30&&point.x<=iCanvasWidth / 2+30&&
			point.y>=iCanvasHeight / 4-30&&point.y<=iCanvasHeight / 4+30) {
            hit++;
    	}
	}
	if(hit==5){
		if(point.x>=iCanvasWidth -40 -30&&point.x<=iCanvasWidth -40+30&&
			point.y>=60-30&&point.y<=60+30) {
            hit++;
         	requestNextAnimationFrame(testPage4);
    	}
	}
}
function onMouseMove(e) {
	if (mouseHaveDown&&hit==0) {
		offsetY = (e.clientY - startY)*-1;
		if (offsetY > 200) {
			bgmStart.play();
			hit++;
		}
	}
}
function onMouseUp(e){
	mouseHaveDown=0;
}
//3. 事件注册块...........................................................
requestNextAnimationFrame(step);


//4. 初始化块............................................................

onmousedown = onMouseDown;
onmousemove = onMouseMove;
onmouseup = onMouseUp;

// function animate() {
// 	ctx.drawImage(nife, 0, 0, 400, 600,
// 		iCanvasWidth - 40, 40, 400, 600);
// 	nifeAngle += 1;
// 	ctx.translate(iCanvasWidth - 40 + 400 / 2, 40 + 600 / 2);
// 	ctx.rotate(Math.PI / 180 * nifeAngle);
// 	ctx.translate(-(iCanvasWidth - 40 + 400 / 2), -(40 + 600 / 2));
// 	requestNextAnimationFrame(animate);
// }
// requestNextAnimationFrame(animate);

// requestNextAnimationFrame(testPage2);
// requestNextAnimationFrame(testPage3);

// function testEnd() {
//     video3.oncanplay=function () {
//         if (video1.paused) {
//             video1.play();
//             video2.play();
//             video3.play();
//         }
//         ctx.clearRect(0,0,iCanvasWidth,iCanvasHeight);
//         ctx.fillStyle="black";
//         ctx.fillRect(0,0,canvas.width,canvas.height);
//         drawMuseum();
//     };
// }