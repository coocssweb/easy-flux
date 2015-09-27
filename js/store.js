//引入EventEmitter实现监听
var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("./dispatcher.js");
//引入underscore,方便对数组的操作
var _ =require("underscore");
var _keys = [];

function removeItem(item){
    //用underscore过滤数组
    _keys = _.filter(_keys,function(value){
        return value.id !=item;
    })
}

function addItem(item){
    _keys.push(item);
}


/**
 *
 * keyStore 继承EventEmitter
 */
function KeyStore(){
    EventEmitter.call(this);
}
KeyStore.prototype = new EventEmitter();

KeyStore.prototype.getAll = function(){
    return _keys;
}
KeyStore.prototype.emitChange = function(){
    //抛出change变化事件
    this.emit("change");
}
KeyStore.prototype.addChangeListener = function(callback){
    //添加KeyStore监听变化，一旦变化调用回调函数
    this.on("change" ,callback);
}
KeyStore.prototype.removeChangeListener = function(callback){
    //移除KeyStore监听
    this.removeListener("change" ,callback)
}



var keyStore = new KeyStore();


/**
 * 注册事件分发器
 */

AppDispatcher.register( function( event ) {
    switch( event.eventName ) {
        case 'new-item':
            addItem(event.item);
            //触发Store change
            keyStore.emitChange();
            break;
        case 'remove-item':
            removeItem(event.item);
            //触发Store change
            keyStore.emitChange();
            break;
    }

    return true;
});

module.exports = keyStore;
