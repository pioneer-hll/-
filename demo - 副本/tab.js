define(function(require, exports, module) {

    function Tab(cId) {
        this.container = document.getElementById(cId);
        this.aInput = this.container.getElementsByTagName('input');
        this.aDiv = this.container.getElementsByTagName('div');
    }

    module.exports = Tab;

    Tab.prototype.init = function() {
        this.aInput[0].style.backgroundColor = 'orange';
        this.aDiv[0].style.display = 'block';

        var that = this;
        for (var i = 0; i < this.aInput.length; i++) {
            this.aInput[i].index = i;
            this.aInput[i].onclick = function() {
                // 这里的this指的是当前点击的按钮
                that.change(this);
            }
        }
    }

    Tab.prototype.change = function(obj) {
        for (var j = 0; j < this.aInput.length; j++) {
            this.aInput[j].style.backgroundColor = '';
            this.aDiv[j].style.display = 'none';
        }
        obj.style.backgroundColor = 'orange';
        this.aDiv[obj.index].style.display = 'block';
    }
});
