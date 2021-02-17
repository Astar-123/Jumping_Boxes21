var canvas, rect1, rect2, rect3, rect4;
var music, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1=createSprite(150, 580, 100, 20 );
    rect1.shapeColor="blue";
    
    rect2=createSprite(300, 580, 100, 20);
    rect2.shapeColor="magenta";

    rect3=createSprite(450, 580, 100,20);
    rect3.shapeColor="turquoise";
    
    rect4=createSprite(600, 580, 100, 20);
    rect4.shapeColor="purple";

    box=createSprite(0,0,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,100,95));
    //create edgeSprite
   edges=createEdgeSprites();
   box.bounceOff(edges);

     drawSprites();
    //add condition to check if box touching surface and make it box
    if(box.x-rect1.x<box.width+rect1.width &&
        rect1.x-box.x<box.width+rect1.width  &&
        box.y-rect1.y<box.height+rect1.height  &&
        rect1.y-box.y< box.height+rect1.height){
    box.shapeColor="blue";
    box.velocityX=0;
    box.velocityY=0;
    music.stop();}

    if(box.x-rect2.x<box.width+rect2.width &&
        rect2.x-box.x<box.width+rect2.width  &&
        box.y-rect2.y<box.height+rect2.height  &&
        rect2.y-box.y< box.height+rect2.height){
    box.shapeColor="magenta";}
    
    if(box.x-rect3.x<box.width+rect3.width &&
        rect3.x-box.x<box.width+rect3.width  &&
        box.y-rect3.y<box.height+rect3.height  &&
        rect3.y-box.y< box.height+rect3.height){
    box.shapeColor="cyan";}

    if(box.x-rect4.x<box.width+rect4.width &&
        rect4.x-box.x<box.width+rect4.width  &&
        box.y-rect4.y<box.height+rect4.height  &&
        rect4.y-box.y< box.height+rect4.height){
    box.shapeColor="purple";
    music.play();}
}
