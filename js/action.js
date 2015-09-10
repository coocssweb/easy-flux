var AppDispatcher = require("./dispatcher.js");
/**
 *
 * 事件处理
 */
var AppActions = {
    add: function(value) {
        //调用事件分发器
        AppDispatcher.dispatch({
            eventName: 'new-item',
            item : value
        });
    },
    remove : function(value){
        //调用事件分发器
        AppDispatcher.dispatch({
            eventName: 'remove-item',
            item : value
        });
    }
};

module.exports = AppActions;