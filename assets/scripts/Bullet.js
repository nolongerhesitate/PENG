// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 暂存 Game 对象引用
        game: {
            default: null,
            serializable: false
        },
        player: {
            default: null,
            serializable: false,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.enable = false;
    },

    init: function (game, player) {
        this.game = game;
        this.player = player
        this.enabled = true;
    },

    reuse(game) {
        this.init(game);
    },

    start() {

    },

    update(dt) {
        this.node.y += 5;
        if (this.node.y > this.game.node.height / 2) {
            this.player.desBullet(this.node);
        }
    },
});
