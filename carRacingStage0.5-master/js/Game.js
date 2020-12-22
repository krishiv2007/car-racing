class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
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
    if(gameState === 0){
      player = new Player();
      var playerCountRef= await database.ref("playerCount").once("value")
      if (playerCountRef.exists()){
        playerCount = playerCountRef.val()
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide()
    textSize(35)
    text("GameStart",120,100)
    Player.getPlayerInfo()
    if(allplayers!==undefined){
      var displayPosition=130
      for(var plr in allplayers ){
        if(plr==="player"+player.index){
          fill("red")
        }
        else{
         fill("black")
  }

      displayPosition=20
      text(allplayers[plr].name+" "+allplayers[plr].distance,120,displayPosition)
      }
    }
  }

}
