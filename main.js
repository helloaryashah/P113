function preload()
{}
function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 200, 150, 220, 220);
    fill("purple");
    circle(75, 75, 100);
    circle(75, 410, 100);
    circle(550, 75, 100);
    circle(550, 410, 100);
    fill("lightblue");
    rect(120,75, 380, 20);
    rect(120,410, 380, 20);
    rect(70,125, 20, 235);
    rect(545,125, 20, 235);
}
function take_snapshot()
{
    save("Arya.png");
}