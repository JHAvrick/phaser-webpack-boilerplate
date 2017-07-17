import AudioDoctor from 'objects/audio-doctor';

class Preload extends Phaser.State {

	preload(){
		console.log("Preload");

		//this.game.load.image('fractalNoise', 'assets/sprites/fractal-noise.png');
		//this.game.load.atlas('results', 'assets/sprites/results.png', 'assets/sprites/results.json');
		//this.game.load.json('mechanics', 'assets/mechanics.json');
		//this.game.load.bitmapFont('Modeka', 'assets/font/modeka.png', 'assets/font/modeka.xml');

	}

	create(){
		this.game.state.start('Menu');
	}



}

export default Preload;