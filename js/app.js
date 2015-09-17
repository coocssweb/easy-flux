var React = require("react");
var AppStore =  require("./store.js");
var AppAction =  require("./action.js");
var App = React.createClass({
        _sequenceID : 0,
        getInitialState : function(){
            return {
                isUpdate : false
            }
        },
        componentDidMount: function() {
            /**
             * 完成渲染后，对Store绑定change事件
             */
            AppStore.addChangeListener( this.storeChanged );
        },
        componentWillUnmount: function() {
            AppStore.removeChangeListener( this.storeChanged );
        },
        /**
         * 当Store发生变化，重新渲染
         */
        storeChanged : function(){
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        },
        createNewItems : function(e){
            this._sequenceID++;
            var keyValue = this.refs.key.getDOMNode().value;
            if(keyValue==""){
                return ;
            }
            this.refs.key.getDOMNode().value="";
            /**
             * 抛给事件分发器处理
             */

            AppAction.add({
                key : keyValue,
                id  : this._sequenceID
            })

        },
        removeItems : function(id){
            /**
             * 抛给事件分发器处理
             */

            AppAction.remove(id);
        },
        render : function(){
            var items = AppStore.getAll();
            var elements = items.map(function(value,index){
                        return (
                            <li><span>{value.key}</span> , <span onClick={ this.removeItems.bind(this,value.id)}>删除</span></li>
                        )
        }.bind(this));
            return (
                    <div id="main-container">
                    <ul className="key-list">
                    {elements}
                    </ul>
                    <div id="addBox">
                    <input type="text" ref="key" /><a href="javascript:;" onClick={this.createNewItems}>添加</a>
                    </div>
                    </div>
                )
        }
});

React.render(
<App /> ,document.body
)