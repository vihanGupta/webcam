        var leyex = "";
        var reyex = "";
        var leyey = "";
        var reyey = "";
        var nx = "";
        var ny = "";
function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    
    canvas = createCanvas(500,500);
    canvas.position(0,0);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotpose);
}
function gotpose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leyex = results[0].pose.leftEye.x;
        reyex = results[0].pose.rightEye.x;
        leyey = results[0].pose.leftEye.y;
        reyey = results[0].pose.rightEye.y;
        nx = results[0].pose.nose.x;
        ny = results[0].pose.nose.y;
        console.log("lefteye x ="+leyex+"righteye y = "+reyex)  ;
    } 
}
function draw()
{
    fill(255,0,0)
    circle(leyex,leyey,10);
    circle(reyex,reyey,10);
    circle(nx,ny,10);
    setInterval(() => {
        clear() 
    }, 10000);
}
function modelloaded()
{
    console.log("posenet inensiaalized")
}