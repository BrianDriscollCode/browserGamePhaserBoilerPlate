import Phaser, { Game } from "phaser";
import StartScene from './scenes/StartScene';
import NextScene from './scenes/NextScene';




const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            //debug:true
            // gravity: { y: 200 }
        }
    },
    scene: [    
                StartScene, 
                NextScene 
            ]
};

const game = new Phaser.Game(config);

