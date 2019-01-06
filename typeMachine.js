const typeText = "云朵很美|浪花很美|星光很美| |可是|我们还未准备好|····| |与世界告别";
const arr = typeText.split("|");
let line = 0;
let i = 0;
let newText="";
let timer=0;

function typeMachine() {

    newText = arr[line].charAt(i++);

    ctx.fillStyle = "white";
    ctx.font = "23px Verdana";
    ctx.textBaseline = "hanging";

    if (i > arr[line].length) {
        newText = arr[line].charAt(i);
        ctx.fillText(newText, 30+30*i, 20 + 33 * line);
        // 换行
        i = 0;
        line++;
        if (line < arr.length) {
            clearTimeout(timer);
            typeMachine();
        }
    } else {
        ctx.fillText(newText, 40+30*i, 70 + 35 * line);
        timer = setTimeout(typeMachine, 250);
    }

}