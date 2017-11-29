define(function(require,exports,module){
    
    var Calculate = require('./calculation.js');
    var cal = new Calculate('calculate');
    cal.init();

    var Tab = require('./tab.js');
    var tab = new Tab('tab');
    tab.init();

    var Drag = require('./drag.js');
    var drag = new Drag('drag');
    drag.init();

    exports.showLog = function(){
        console.log('init');
    }
});