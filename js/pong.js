window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, render: render});
    var rect;

    function preload () {

        //game.load.image('logo', 'phaser.png');

    }

    function create () {

        //var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);
        var graphics = game.add.graphics(100, 100);
        graphics.lineStyle(2, 0xffffFF, 1);
        graphics.beginFill(0xfffffFF, 1);
        graphics.drawRect(50, 250, 20, 150);
        graphics.drawRect(800, 250, 20, 150);
        graphics.endFill();

        window.graphics = graphics;
    }

    function render()
    {

    }

};
