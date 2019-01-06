let comicNum=1;
let COMIC_BACKGROUND_ALPHA=0;
const DRAW_COMIC_INTERVAL=130;
let lastDrawComicTime= +new Date();

const comicBackground=new Image();
comicBackground.src="image/bg2.png";

function drawComic() {
    let comicPic=new Image();
    comicPic.src="image/gif/gs"+comicNum+".png";
    comicPic.onload = function () {
        let now=+new Date();
        if (now - lastDrawComicTime >= DRAW_COMIC_INTERVAL) {
            ctx.drawImage(comicBackground,0,0);
            ctx.drawImage(comicPic, iCanvasWidth-300, 200, 300, 300);
            lastDrawComicTime = now;
            comicNum++;
        }
    };
    console.log(comicNum);
    if (comicNum < 14) {
        requestAnimationFrame(drawComic);
    }
    else if (COMIC_BACKGROUND_ALPHA<=1){
        let now=+new Date();
        if (now - lastDrawComicTime >= DRAW_COMIC_INTERVAL) {
            ctx.save();
            ctx.globalAlpha = COMIC_BACKGROUND_ALPHA;
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, iCanvasWidth, iCanvasHeight);
            ctx.restore();
            COMIC_BACKGROUND_ALPHA += 0.1;
            lastDrawComicTime = now;
        }
        requestAnimationFrame(drawComic);
    }
    else {
        // video3.oncanplay=function () {
            if (video1.paused) {
                video1.play();
                video2.play();
                video3.play();
            }
            requestAnimationFrame(drawMuseum);
        // };
    }

}