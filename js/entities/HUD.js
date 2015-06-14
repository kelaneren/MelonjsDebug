/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({

    init: function() {
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // make sure our object is always draw first
        this.z = Infinity;

        // give a name
        this.name = "HUD";

        // add our child score object at the top left corner
        this.addChild(new game.HUD.MenuButton(80, 80, 128, 128), 4 /** z-index **/);
        
    }
});

game.HUD.MenuButton = me.GUI_Object.extend(
{
    init:function (x, y, w, h)
    {
        var settings = {}
        settings.image = "uiMenu";
        settings.framewidth = w;
        settings.frameheight = h;
        // super constructor
        this._super(me.GUI_Object, "init", [x, y, settings]);
        // define the object z order
        this.z = 4;
    },

    // output something in the console
    // when the object is clicked
    onClick:function (event)
    {
        console.log("menu clicked!");
        // don't propagate the event
        me.audio.stop("bmg-apes-in-space")
        me.state.change(me.state.MENU);
        return false;
    }
});

