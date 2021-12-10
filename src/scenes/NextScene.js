class NextScene extends Phaser.Scene {
    constructor() {
        super({ key: 'NextScene' });

        this.addImage = null;
        this.test1 = null;
    }

    preload() {
        this.load.image('background' ,'assets/newBackground.jpg');
    }

    create() {
        this.addImage = this.add.image(200, 360, 'background');
        this.add.text(570, 95, 'NextScene', { fill: '#000000', fontSize: '35px'});

        this.input.keyboard.on('keydown-W', () => {
            this.scene.stop('NextScene');
            this.scene.start('StartScene');
            console.log('go!');
        });
        console.log('NextScene Running');

        this.test1 = 'hello';
        
    }

    update() {
       this.scene.get("StartScene").indicate()
       console.log(this.scene.get("StartScene").indicate());
    }
}

export default NextScene;
