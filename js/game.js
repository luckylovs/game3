class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref('/').update({
      gameState: state
    })
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form();
      form.display();

    }

    ball1 = createSprite(100, 200);
    ball1.addAnimation("ball1", ball1Img)
    ball1.scale = 1.3
  //  ball1.addAnimation("fireball", fireball_img)
   // ball1.addAnimation("slimeball", slimeball_img)

    ball2 = createSprite(300, 200);
    ball2.addAnimation("ball2", ball2Img)
    ball2.scale = 1.3
   // ball2.addAnimation("fireball", fireball_img)
    //ball2.addAnimation("slimeball", slimeball_img)
    ball3 = createSprite(500, 200);
    ball3.addAnimation("ball3", ball3Img)
    ball3.scale = 1.3
   // ball3.addAnimation("fireball", fireball_img)
  //  ball3.addAnimation("slimeball", slimeball_img)
    ball4 = createSprite(700, 200);
    ball4.addAnimation("ball4", ball4Img)
    ball4.scale = 1.3
  //  ball4.addAnimation("fireball", fireball_img)
   // ball4.addAnimation("slimeball", slimeball_img)
    balls = [ball1, ball2, ball3, ball4];
  // fire = createSprite(200,100)
   //fire = addImage("fire",fire_img)

  }

  play() {
    form.hide();
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var index = 0;
      background(rgb(198, 135, 103));
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

      var x = 0;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
        //position the cars a little away from each other in x direction
        x = x + 350;
        //use data form the database to display the balls in y direction
        y = displayHeight - allPlayers[plr].distance;
        balls[index - 1].x = x;
        balls[index - 1].y = y;



        if (index === player.index) {
          balls[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = balls[index - 1].y
        }


      }


    }


    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
    }

    if (keyIsDown(38) && player.index !== null) {
      yVel += 0.9
      if (keyIsDown(37)) {
        xVel -= 0.2
      }
      if (keyIsDown(39)) {
        xVel += 0.2
      }


    }
   if (frameCount % 20 === 0) {
      obstacles = createSprite(random(100, 1000), 0, 100, 100);
      obstacles.velocityY = 6;
      var rand = Math.round(random(1, 2));
      switch (rand) {
        case 1: obstacles.addImage("fire", fire_img);
         break;
       /* case 2: obstacles.addImage("slime", slime_img);
          break;
      /*  case 3: obstacles.addImage("bomb", bomb_img);
          break;
        case 4: obstacles.addImage("coins1", coins1_img);
          break;
        case 5: obstacles.addImage("stone", stone_img);
          break;*/

      }
      obstacleGroup.add(obstacles);

    }

    if (balls[index-1].isTouching(firesGroup)) {
      text("helloWorld",200,200)
    }

   // if (balls.isTouching(slimesGroup)) {
     //balls.changeAnimation("slimeball", slimeball_img)
    //}

   /* if (balls[index - 1].isTouching(coins1)) {
      score = +1
    }
    if (balls[index - 1].isTouching(bomb)) {
      health = -2
    }
    if (balls[index - 1].isTouching(stone)) {

      health = -1
    }*/


    if(frameCount % 300 === 0){
      fire = createSprite(0,300)
    fire.addImage("fire", fire_img)
    fire.scale = 0.06
    fire.velocityX = 3 
    fire.x = Math.round(random(750,270))
    firesGroup.add(fire)
     
   }

   /*if(frameCount % 300 === 0){
   slime = createSprite(0,300)
   slime.addImage("slime", slime_img)
   slime.scale = 0.06
   slime.velocityX = 3 
   slime.x = Math.round(random(750,270))
   slimesGroup.add(slime)
   
 }*/

    drawSprites();

  }
}
