import { Game } from 'phaser';
import WebFontFile from '../WebFontFile';
import NextScene from './NextScene';

class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });

        this.addImage = null;
    }

    preload() {
        this.load.image('background' ,'assets/newBackground.jpg');
        const fonts = new WebFontFile(this.load, 'Abel')
		  this.load.addFile(fonts);
    }

    create() {
        this.addImage = this.add.image(200, 360, 'background');
        this.add.text(570, 95, 'startScene', { fill: '#000000', fontSize: '35px'});
        this.indicate();


        this.input.keyboard.on('keydown-W', () => {
            this.scene.stop('StartScene');
            this.scene.start('NextScene');
            console.log('go!');
        });

         console.log('StartScene Running');
    }

    update() {
        //console.log('StartScene Running');
    }

    indicate() {
        console.log('indicate');

        return "returnIndicate";
    }

    
}

export default StartScene;

