/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim.player {
    /**
     * Sets the velocity of the player
     * @param dimension x or y
     * @param value new velocity
     */
    //% blockId=phasersetvelocity block="set player velocity %dimension to %value"
    export function setVelocity(dimension: Dimension, value: number) {
        //  Reset the players velocity (movement)
        switch (dimension) {
            case Dimension.X:
                board().player.body.velocity.x = value;
                break;
            case Dimension.Y:
                board().player.body.velocity.y = value;
                break;
        }
    }

    /** 
     * Checks if the player is hitting the platforms
    */
   //% blockId=phaserhitplatform block="is player hitting platforms"
    export function isHittingPlatforms(): boolean {
        const b = board();
        const hitPlatform = b.game.physics.arcade.collide(b.player, b.platforms);
        return hitPlatform;
    }

    /**
     * Plays an animation on the player
     * @param animation 
     */
    //% blockId=phaserplayanimation block="player play animation %animation"
    export function playAnimation(animation: Animation) {
        const b = board();
        switch(animation) {
            case Animation.Left: b.player.animations.play('left'); break;
            case Animation.Right: b.player.animations.play('right'); break;
        }
    }
}

namespace pxsim.cursors {
    /**
     * Queries is a cursor is down
     * @param cursor 
     */
    //% blockId=phasercursorsisdown block="is %cursor down"
    export function isDown(cursor: Cursor): boolean {
        const cursors = board().cursors;
        switch (cursor) {
            case Cursor.Left: return cursors.left.isDown;
            case Cursor.Right: return cursors.right.isDown;
            case Cursor.Up: return cursors.right.isUp;
            case Cursor.Down: return cursors.down.isDown;
            default: return false;
        }
    }
}

namespace pxsim.loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}
