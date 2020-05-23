class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Multiplayer Running Game");
        title.position(60,20);

        var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');

        input.position(110,160);
        button.position(170,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello, " + name);
            greeting.position(130,160);
        })
    }
}