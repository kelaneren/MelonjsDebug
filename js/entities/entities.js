/**
 * Player Entity
 */
game.PlayerEntity = me.Entity.extend({

    /**
     * constructor
     */
    init:function (x, y, settings) {
        // call the constructor
        this._super(me.Entity, 'init', [x, y, settings]);
        this.zIndex = 4;

        // set the default horizontal & vertical speed (accel vector)
        this.body.setVelocity(15, 15);

        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        // ensure the player is updated even when outside of the 
        this.alwaysUpdate = true;

    },

    /**
     * update the entity
     */
    update : function (dt) {
        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision : function (response, other) {
       return true;
    }
});

game.ClickablePlayer = game.PlayerEntity.extend({
    init : function (x, y, settings) {
        this._super(me.Entity, 'init', [x, y, settings]);

        this.isClickable = true;
        var _this = this;
        this.clicked = function(event) {
            if ((event.which === 1 || me.device.touch) && _this.isClickable) {
                _this.updated = true;
                return _this.onClick(event);
            }
        }

        // register on mouse event
        me.input.registerPointerEvent("pointerdown", this, this.clicked);
    },

    onClick : function () {
        console.log("clicked player");
        me.state.change(me.state.EDIT);
        return false;
    },

    onDeactivateEvent: function () {
        me.input.releasePointerEvent("pointerdown", this, this.clicked);
    }
});