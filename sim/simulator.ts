/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />

namespace pxsim {
    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board(): Board {
        return runtime.board as Board;
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;
        public game: Phaser.Game;

        constructor() {
            super();
            this.bus = new EventBus(runtime);
        }

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {

            this.game = new Phaser.Game(320, 320, Phaser.AUTO, '', {
                preload: () => this.preload,
                create: () => this.create,
                update: () => this.update
            });

            return Promise.resolve();
        }

        preload() {
            this.game.load.image('sky', 'assets/sky.png');
            this.game.load.image('ground', 'assets/platform.png');
            this.game.load.image('star', 'assets/star.png');
            this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        }

        create() {
        }

        update() {
        }

        kill() {
            super.kill();
            this.game.destroy();
        }

        updateView() {
        }
    }
}