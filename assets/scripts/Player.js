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
        // 移动速度
        MOVESPEED: 5,
        // 子弹生成的Y 世界坐标
        BULLET_SHOT_Y: -273,
        toPosX: 0,
        bulletPrefab: {
            default: null,
            type: cc.Prefab,
        },
        //需要加入边界，移动位置不得超过
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 速度方向开关
        this.moveLeft = false;
        this.moveRight = false;
        this.toPosX = this.node.x;
        this.moveSpeed = this.MOVESPEED

        // initialize bullet
        this.bulletPool = new cc.NodePool('bullet_2_orange');
    },

    start() {

    },

    startMove: function (xPos) {
        this.moveSpeed = this.MOVESPEED
        this.toPosX = xPos
    },

    update(dt) {
        // limit player position inside screen
        if (this.node.x > this.node.parent.width / 2) {
            this.node.x = this.node.parent.width / 2;
            this.moveSpeed = 0;
        } else if (this.node.x < -this.node.parent.width / 2) {
            this.node.x = -this.node.parent.width / 2;
            this.moveSpeed = 0;
        }

        if (Math.abs(this.toPosX - this.node.x) <= this.moveSpeed) {
            this.node.x = this.toPosX
        }

        if (this.toPosX < this.node.x) {  //向左移动 
            this.node.x -= this.moveSpeed;
        } else if (this.toPosX > this.node.x) { //向右移动
            this.node.x += this.moveSpeed;
        }
    },

    stopMove: function () {
        this.moveSpeed = 0;
    },

    openFire: function (Game) {
        var newBullet = null;
        if (this.bulletPool.size() > 0) {
            newBullet = this.bulletPool.get(this);
        } else {
            newBullet = cc.instantiate(this.bulletPrefab);
        }
        Game.node.addChild(newBullet);
        newBullet.setPosition(cc.p(this.node.x, this.BULLET_SHOT_Y));
        newBullet.getComponent('Bullet').init(Game, this);
    },

    desBullet(bullet) {
        this.bulletPool.put(bullet);
    },

});
