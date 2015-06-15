
game.TitleScreen = me.ScreenObject.extend({
 
  /**
   *  action to perform on state change
   */
  onResetEvent : function() {

    // change to play state on press Enter or click/tap
    me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
      if (action === "enter") {
        me.state.change(me.state.PLAY);
      }
    });
  },
 
  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent : function() {
    me.input.unbindKey(me.input.KEY.ENTER);
    me.event.unsubscribe(this.handler);
   }
});

game.EditScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {

        me.game.world.addChild(new me.ImageLayer(
            0,
            0,
            {
                width: game.WORLD_WIDTH,
                height: game.WORLD_HEIGHT,
                image: "bgOrigin",
                z: 0
            }
        ));

        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindPointer(me.input.mouse.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                me.state.change(me.state.PLAY);

            }
        });
    },






    /**
     *  action to perform when leaving this screen (state change)`
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindPointer(me.input.mouse.LEFT);
    }
});