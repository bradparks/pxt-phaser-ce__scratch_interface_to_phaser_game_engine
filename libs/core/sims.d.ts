// Auto-generated from simulator. Do not edit.
declare namespace player {
    /**
     * Sets the velocity of the player
     * @param dimension x or y
     * @param value new velocity
     */
    //% blockId=phasersetvelocity block="set player velocity %dimension to %value"
    //% shim=player::setVelocity
    function setVelocity(dimension: Dimension, value: number): void;

    /** 
     * Checks if the player is hitting the platforms
     */
    //% blockId=phaserhitplatform block="is player hitting platforms"
    //% shim=player::isHittingPlatforms
    function isHittingPlatforms(): boolean;

    /**
     * Plays an animation on the player
     * @param animation 
     */
    //% blockId=phaserplayanimation block="player play animation %animation"
    //% shim=player::playAnimation
    function playAnimation(animation: Animation): void;

}
declare namespace cursors {
    /**
     * Queries is a cursor is down
     * @param cursor 
     */
    //% blockId=phasercursorsisdown block="is %cursor down"
    //% shim=cursors::isDown
    function isDown(cursor: Cursor): boolean;

}
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}

// Auto-generated. Do not edit. Really.
