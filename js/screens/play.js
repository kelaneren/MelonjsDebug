game.PlayScreen = me.ScreenObject.extend({
    init: function () {
        this.counter = 0;
    },
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // load a level
        this.counter += 1;
        console.log("play screen counter "+ this.counter);
        me.levelDirector.loadLevel("level01");

        // add our HUD to the game world
        this.hud = new game.HUD.Container();
        me.game.world.addChild(this.hud);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove the HUD from the game world
        for (var i=0;i<me.game.world.children.length;i++){
            me.game.world.removeChild(me.game.world.children[i]);
        }
    }
});
