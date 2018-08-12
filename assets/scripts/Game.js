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
        player: {
            default: null,
            type: cc.Node,
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
        /*
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_NE_BY_ONE,
            onTouchBegan: function (touch, event) {
                self.player.x = touch.getLocationX()*0.5;

                return true;   // 此处如果不返回true，onTouchEnded方法不会触发
            },
            onTouchEnded: function (touch, event) {
                console.log("接触结束");
            }
        }, self.node);
        */
        self.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
            self.player.x = touch.getLocationX() - self.node.width * 0.5;
            // var a = cc.moveBy(1, cc.p(touch.getLocationX(), self.player.y)).easing(cc.easeCubicActionIn());
            // self.node.runAction(cc.repeatForever(cc.sequence(a)));
        }, self.node);
    },

    update(dt) { },
});
