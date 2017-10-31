var Game = function (game) { };
Game.prototype = {
	preload: function () {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
		this.load.onLoadComplete.add(function () {
			loadingComplete = true;
			document.querySelector('#loading-page').className += ' hidden'
			showRule()
		}, this);
		this.load.crossOrigin = "Anonymous";
		this.load.image('maze', 'img/p4/maze.jpg');
		// load the physics data json
		this.load.physics('maze', 'img/p4/maze.json');
		this.load.image('ball', 'img/p4/ball.png')
		this.load.physics('ball', 'img/p4/ball.json')
		this.load.image('destination', 'img/p4/destination.png');
		game.load.spritesheet('start', 'img/p4/start.254x36.png', 254, 36);
		game.load.spritesheet('finish', 'img/p4/finish.264x35.png', 264, 35);
	},
	create: function () {
		this.physics.startSystem(Phaser.Physics.P2JS)
		window.addEventListener("deviceorientation", this.handleOrientation, true)
		game.physics.p2.setImpactEvents(true)
		game.physics.p2.updateBoundsCollisionGroup()
		this.keys = this.game.input.keyboard.createCursorKeys();

		var ballCollisionGroup = game.physics.p2.createCollisionGroup()
		var mazeCollisionGroup = game.physics.p2.createCollisionGroup()
		var trapCollisionGroup = game.physics.p2.createCollisionGroup()
		var destCollisionGroup = game.physics.p2.createCollisionGroup()

		var maze = this.add.sprite(540, 960, 'maze');

		var startSprite = game.add.sprite(49, 335, 'start')
		var startBlinkAnimation = startSprite.animations.add('blink')
		startSprite.animations.play('blink', 4, true)
		var finishSprite = game.add.sprite(390, 1824, 'finish')
		var finishBlinkAnimation = finishSprite.animations.add('blink')
		finishSprite.animations.play('blink', 4, true)

		var trap = this.add.sprite(540, 960)
		var ball = this.add.sprite(50, 380, 'ball');
		var dest = this.add.sprite(958, 1778, 'destination');
		game.physics.p2.enable([maze, trap, ball, dest]);
		maze.body.clearShapes();
		maze.body.loadPolygon('maze', 'maze');
		maze.body.static = true
		maze.body.setCollisionGroup(mazeCollisionGroup)
		maze.body.collides(ballCollisionGroup)
		trap.width = 1080
		trap.height = 1920
		trap.body.clearShapes();
		trap.body.addCircle(15, 444, -484)
		trap.body.addCircle(15, -33, -364)
		trap.body.addCircle(15, -349, -297)
		trap.body.addCircle(15, 444, 1)
		trap.body.addCircle(15, -464, 81)
		trap.body.addCircle(15, 247, 261)
		trap.body.addCircle(15, 444, 595)
		trap.body.addCircle(15, -69, 722)
		trap.body.addCircle(15, -446, 724)
		trap.body.static = true
		trap.body.setCollisionGroup(trapCollisionGroup)
		trap.body.collides(ballCollisionGroup)
		dest.body.static = true
		dest.body.setCollisionGroup(destCollisionGroup)
		dest.body.collides(ballCollisionGroup)
		ball.body.setCircle(40, -26, -23);
		ball.body.fixedRotation = true
		ball.body.setCollisionGroup(ballCollisionGroup)
		ball.body.collides(mazeCollisionGroup)
		ball.body.mass = 0.2
		var restartGame = function () {
			this.game.state.restart();
		}
		var winGame = function () {
		
      var prize;
      url = 'http://casio.maxantad.com/users/' + userID + '/prizes';
      $.getJSON(url, function (data) {
        prize = data["result"];
        if (prize == 4) {
          prizeURL = "p5.html"
        } else if (prize <= 3 && prize >= 1){
          prizeURL = "p6.html?p=" + prize
        } else {
          prizeURL = "p9.html"
        }
        sendplayed();
        window.location.href = prizeURL;
      })
		}
		ball.body.collides(trapCollisionGroup, restartGame)
		ball.body.collides(destCollisionGroup, winGame)
	},
	update: function () {
		if (this.keys.left.isDown) {
			game.physics.p2.gravity.x = -60
		}
		else if (this.keys.right.isDown) {
			game.physics.p2.gravity.x = 60

		}
		if (this.keys.up.isDown) {
			game.physics.p2.gravity.y = -60
		}
		else if (this.keys.down.isDown) {
			game.physics.p2.gravity.y = 60
		}
	},
	handleOrientation: function (e) {
		// Device Orientation API
		var x = e.gamma; // range [-90,90], left-right
		var y = e.beta;  // range [-180,180], top-bottom
		var z = e.alpha; // range [0,360], up-down
		game.physics.p2.gravity.x = x * 10 > 250 ? 250 : x * 90;
		game.physics.p2.gravity.y = y * 10 > 250 ? 250 : y * 90;
	}
};