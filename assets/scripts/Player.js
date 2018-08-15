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
        //移动速度
        moveSpeed: 5,
        toPosX: 0,
        //需要加入边界，移动位置不得超过
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 速度方向开关
        this.moveLeft = false;
        this.moveRight = false;
        this.toPosX = this.node.x;
    },

    start() {

    },

    startMoveTo: function (xPos) {
        console.log(xPos + "++++++++++++++" + this.node.x);
        if (xPos < this.node.x) {  //向左移动 
            this.moveLeft = true;
            this.moveRight = false;
        } else if (xPos > this.node.x) { //向右移动
            this.moveLeft = false;
            this.moveRight = true;
        } else {  //不动
            this.moveLeft = false;
            this.moveRight = false;
        }
    },


    update(dt) {
        /*
        if (this.moveLeft) {
            this.node.x -= this.moveSpeed;
        } else if (this.moveRight) {
            this.node.x += this.moveSpeed;
        }
        */

        // console.log("before" + this.node.x);
        console.log("speed" + this.moveSpeed);

        if (Math.abs(this.toPosX - this.node.x) <= this.moveSpeed) {
            this.node.x = this.toPosX
        }

        if (this.toPosX < this.node.x) {  //向左移动 
            this.node.x -= this.moveSpeed;
        } else if (this.toPosX > this.node.x) { //向右移动
            this.node.x += this.moveSpeed;
        }

        // console.log("after" + this.node.x);

        // limit player position inside screen
        if (this.node.x > this.node.parent.width / 2) {
            this.node.x = this.node.parent.width / 2;
            this.moveSpeed = 0;
        } else if (this.node.x < -this.node.parent.width / 2) {
            this.node.x = -this.node.parent.width / 2;
            this.moveSpeed = 0;
        }
    },
});
