import "babel-polyfill";

import Boot from 'state/Boot';
import Preload from 'state/Preload';
import Menu from 'state/Menu';
import Main from 'state/Main';
import Results from 'state/Results';
import HadronGlobal from 'objects/hadron-global';

var game = new Phaser.Game({
    width: 720,
    height: 1280,
    renderer: Phaser.WEBGL,
    parent: 'app',
    transparent: false,
    antialias: true,
    scaleMode: Phaser.ScaleManager.SHOW_ALL
});

function onBoot() {

	window.HADRON = new HadronGlobal(game);

	game.state.add('Boot', Boot);
	game.state.add('Preload', Preload);
	game.state.add('Menu', Menu);
	game.state.add('Main', Main);
	game.state.add("Results", Results);
	game.state.start('Boot');

}


window.onload = function waitForDevice(){

	if (document.readyState === 'complete' || document.readyState === 'interactive'){
		 window.setTimeout(onBoot, 0);
	} else if (typeof window.cordova !== "undefined") {
		document.addEventListener('deviceready', onBoot, false);
	} else {
		document.addEventListener('DOMContentLoaded', this.onBoot, false);
		window.addEventListener('load', onBoot, false);
	}
	
}




