class Game{
    constructor(){}
 
    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form;
            form.display();
        }

        player1 = createSprite(100,200);
        player2 = createSprite(300,200);
        player3 = createSprite(500,200);
        player4 = createSprite(700,200);
        players = [player1, player2, player3, player4];
    }

    play(){
        form.hide();

        Player.getPlayerInfo();
        Player.getPlayersAtEnd();

        if(allPlayers !== undefined){
            background('#c68767')

            var index = 0;
            var x = 0;
            var y;

            for(var plr in allPlayers){
                index = index + 1;

                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;

                players[index - 1].x = x;
                players[index - 1].y = y;

                if(index === player.index){
                    players[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = players[index-1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();
        }

        if(player.distance > 3860){
            gameState = 2;
            player.rank += 1;
            Player.updatePlayersAtEnd(player.rank);
            textSize(30);
            textStyle(BOLD);
            textFont("Algeria");
            strokeWeight(5);
            stroke(0);
            fill(0,200,0);
            text(player.name + ":" + player.distance,100,100);
        }

        drawSprites();
    }

    end(){
        game.update(2);
    }
}