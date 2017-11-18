window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game("100%", "100%", Phaser.WEBGL, 'game', { preload: preload, create: create, render: render});
    var rect;
	var player;

    function preload () {

        //game.load.image('logo', 'phaser.png');

    }

    function create () {

        //var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);
		
		// Rechteck zeichnen
        var graphics = game.add.graphics(100, 100);
        graphics.lineStyle(2, 0xffffFF, 1);
        graphics.beginFill(0xfffffFF, 1);
        player = graphics.drawRect(50, 250, 20, 150);
        graphics.endFill();
		
		graphics = game.add.graphics(100, 100);
		graphics.lineStyle(2, 0xffffFF, 1);
        graphics.beginFill(0xfffffFF, 1);
        graphics.drawRect(game.width - 250 - 50, 250, 20, 150);
        graphics.endFill();

		// Text zeichnen
		var text = "0 : 0";
		var style = {font: "60px Arial", fill: "#FFFFFF", align: "center"};
		
		game.add.text(game.world.centerX - text.length / 2, 0, text, style);
		
		
		keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		keyUp.onDown.add(movePlayerUp, this);
		
		keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		keyDown.onDown.add(movePlayerDown, this);
		
        window.graphics = graphics;
    }

    function render()
    {

    }
	
	function movePlayerUp()
	{
		player.position.y -= 10;
	}
	
	function movePlayerDown()
	{
		player.position.y += 10;
	}

};
