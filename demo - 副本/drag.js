define(function(require,exports,module){

    function Drag(targetId){
        this.target = document.getElementById(targetId);
    }

    module.exports = Drag;

    Drag.prototype.init = function(){
        var that = this;
        this.target.onmousedown = function(e){
            e = e || window.event;

            var disx = e.clientX - this.offsetLeft;
            var disy = e.clientY - this.offsetTop;

            document.onmousemove = function(e){
                e = e || window.event;

                var limitx = e.clientX - disx;
                var limity = e.clientY - disy;

                if(limitx < 0){
                    limitx = 0;
                }else if(limitx > document.documentElement.clientWidth-that.target.offsetWidth){
                    limitx = document.documentElement.clientWidth-that.target.offsetWidth;
                }

                if(limity < 0){
                    limity = 0;
                }else if(limity > document.documentElement.clientHeight-that.target.offsetHeight){
                    limity = document.documentElement.clientHeight-that.target.offsetHeight;
                }

                that.target.style.left = limitx + 'px';
                that.target.style.top = limity + 'px';
            }

            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
        }
    }
});