class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Start');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
  
    display(){
      this.title.html("Hearing Aid");
      this.title.position(displayWidth/2 -50, 0);
  
      this.input.position(displayWidth/2 -50 , displayHeight/4);
      this.button.position(displayWidth/2 , displayHeight/3);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  }
  