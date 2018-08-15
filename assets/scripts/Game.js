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

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: Player
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.setInputControl();
    },

    start() {

    },

    setInputControl: function () {
        var self = this
        self.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
            self.player.toPosX = touch.getLocationX() - self.node.width * 0.5;
        }, self.node);
    },

    update(dt) {
    },
});
