var gameState="play";
var monster , monster_running;
var enemy ,enemyImg ;
var hero, heroImg;
var EnemyGroup, MonsterGroup;
var score;
var bgImg;
var score=0;
function preload(){
  
  heroImg= loadImage("superhero1.png");
  monster_running = loadAnimation("monster2.png","monster1.png");
  enemyImg = loadImage("monster.png");
  bgImg= loadImage("back.jpg");
  powerImg=loadImage("power.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  hero= createSprite(100,357,20,20);
  hero.addImage(heroImg);
  hero.scale=0.135;
  
  EnemyGroup= createGroup();
  MonsterGroup= createGroup();
  
}


function draw() {
  background(bgImg);
  fill("yellow");
  textSize(20);
  text("score-"+score,500,50);
  if(keyDown("space")&& gameState==="play"){
    var power= createSprite(hero.x+10,hero.y);
    power.addImage(powerImg)
  }
  if(keyDown("down")&& gameState==="play"){
   hero.y=hero.y+10;
  }
  if(keyDown("up")&& gameState==="play"){
    hero.y=hero.y-10;
 }
  if(keyDown("right")&& gameState==="play"){
   hero.x=hero.x+10;
  }
  if(keyDown("left")&& gameState==="play"){
    hero.x=hero.x-10;
  }
    if(hero.isTouching(EnemyGroup)&& gameState==="play"){
        gameState="end";
    }
    if(hero.isTouching(MonsterGroup)&& gameState==="play"){
      gameState="end";
      
    }
if(gameState==="end"){
  text("GAMEOVER",300,300);
      EnemyGroup.destroyEach();
      MonsterGroup.destroyEach();
    }

  spawnEnemy();
  spawnMonster();
drawSprites();
}
function spawnEnemy(){
  if(frameCount%80===0){
    var enemy = createSprite(200,200,20,20);
    enemy.addImage(enemyImg);
    enemy.scale=0.17;
    enemy.velocityX=-5;
    enemy.x=Math.round(random(1500,1600));
    enemy.y=Math.round(random(100,800));
    enemy.lifetime=300;
      EnemyGroup.add(enemy);

  }
}
function spawnMonster(){
  if(frameCount%100===0){
    var monster = createSprite(550,373,20,20);
    monster.addAnimation("running",monster_running);
    monster.scale=0.07;
    monster.velocityX=-8;
    monster.x= Math.round(random(1500,1600));
    monster.y=Math.round(random(100,800));

    monster.lifetime=300;
    MonsterGroup.add(monster);
  }
}




















