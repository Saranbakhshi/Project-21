var canvas;
var music;
var box
var surface1
var surface2
var surface3
var surface4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(0,580,360,30)
    surface1.shapeColor = "blue"
    surface2 = createSprite(295,580,200,30)
    surface2.shapeColor = "orange"
    surface3 = createSprite(515,580,200,30)
    surface3.shapeColor = "red"
    surface4 = createSprite(740,580,220,30)
    surface4.shapeColor = "green"


    //create box sprite and give velocity
    box = createSprite(random(20,750),50,20,20)
    box.velocityX = 4
    box.velocityY = 9
    box.shapeColor = "white"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges)


    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue"
        music.play();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "orange"
        music.play();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red"
        music.stop();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green"
        music.play();
    }
    drawSprites();
}
