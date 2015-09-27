var AppDispatcher = require("./dispatcher.js");
/**
 *
 * 事件处理
 */
var AppActions = {
    add: function(value) {
        /**
         * 这里可以做Ajax数据请求，这是FACEBOOK官方的做法
         * https://github.com/facebook/flux/blob/master/examples/flux-chat/js/actions/ChatMessageActionCreators.js#L28
         * 然后调用dispatch
         */

        //调用事件分发器
        AppDispatcher.dispatch({
            eventName: 'new-item',
            item : value
        });
    },
    remove : function(value){

        /**
         * 这里可以做Ajax数据请求，这是FACEBOOK官方的做法，下面时facebook flux用得请求数据
         * https://github.com/facebook/flux/blob/master/examples/flux-chat/js/actions/ChatMessageActionCreators.js#L28
         * 然后调用dispatch
         */

        //调用事件分发器
        AppDispatcher.dispatch({
            eventName: 'remove-item',
            item : value
        });
    }
};

module.exports = AppActions;