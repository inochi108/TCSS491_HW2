var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./fish.png");
ASSET_MANAGER.queueDownload("./shark.png");

ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');
    var gameEngine = new GameEngine();
    
//    var fish = new Fish(gameEngine, 50, 50);
//    var fish2 = new Fish(gameEngine, 100, 100);
//    var fish3 = new Fish(gameEngine, 300, 170);
//    gameEngine.addEntity(fish);
//    gameEngine.addEntity(fish2);
//    gameEngine.addEntity(fish3);
    gameEngine.addEntity(new Shark(gameEngine, 100, 100));
    for(var i = 0; i < 10; i++) {
        var x = Math.floor(Math.random() * 700 + 51);
        var y = Math.floor(Math.random() * 700 + 51);
        
        gameEngine.addEntity(new Fish(gameEngine, x, y));
    }
    gameEngine.addEntity(new Fish(gameEngine, 150, 150));
    
    gameEngine.init(ctx);
    gameEngine.start();
});
