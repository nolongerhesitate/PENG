// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const Player = require('Player');

var Game = cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: Player
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.fire = false;
        this.setInputControl();
    },

    start() {

    },

    setInputControl: function () {
        var self = this
        self.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
            self.player.startMove(touch.getLocationX() - self.node.width * 0.5);
            self.fire = true;
        }, self.node);

        self.node.on(self.node.on(cc.Node.EventType.TOUCH_MOVE, function (touch, event) {
            self.player.startMove(touch.getLocationX() - self.node.width * 0.5);
        }), self.node);

        self.node.on(self.node.on(cc.Node.EventType.TOUCH_END, function (touch, event) {
            self.player.stopMove();
            self.fire = false;
        }), self.node);
    },

    update(dt) {
        if (this.fire) {
            this.player.openFire(this);
        }
    },
});
