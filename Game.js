class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
    database.ref('/').update({
        gameState: state
    });
    }
    async start(){
        if(gameState===0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form();
        form.display();
        }
       s1 = createSprite(displayWidth/3,displayHeight/2,100,100);
       s2 = createSprite(displayWidth/2,displayHeight/2,100,100);
        sounds =[s1,s2];
       
    }
    play(){
        form.hide();

        Player.getPlayerInfo();
        player.sound();
        if(allPlayers!==undefined){
            background("white");

            var index = 0;

            var x = 175;
            var y;

            for (var plr in allPlayers){
                index = index+1;

                x = x+200;
                y = displayHeight- allPlayers[plr].distance;
                
            }
           
            
        }
        drawSprites()

    }
    end(){
      stroke(5);
      fill("red");
      Text("Test Finished!",200,200);
      console.log(player.rank);

    }
 
}