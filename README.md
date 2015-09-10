# easy-flux
<br/>
项目说明：自己做的一个flux案例，相对简单（比官网上的todos案例更简单），flux的模式都有用到，相信大家都能看得懂。网上资料太少了，flux并不是框架，而是可以理解为一种模式。内含明细的代码注释。
<h5>代码结构说明</h5>
app.js ==> 入口程序，实现flux中的view<br />
store.js ==> 实现flux中的store<br />
action.js==>事件处理器。实现flux中的action。调用事件分发器dispatcher<br />
dispatcher.js==>事件分发器。实现flux中的dispatcher。
<h5>程序思路说明</h5>
在store中，定义数据、数据的（增、删、改）操作方法。注册事件分发器dispatcher。<br />
在app.js完成渲染后（componentDidMount）调用store添加store监听的方法（监听用events，也可以用其他的）。<br />
添加时，调用action（事件处理器）的add方法。注：add方法中调用相应的事件分发。<br />
<h5>难点理解</h5>
其实比较难理解的是。（1）当 （添加/删除）数据后，store发生了变法后，怎么触发app.js重新render()<br />
这个的实现是靠引入（events）等第三方的等库（可以理解为监听器），实现对store的监听，当监听到store发生变化，就调用回调函数<br />
具体请看代码
