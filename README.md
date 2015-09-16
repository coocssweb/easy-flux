# easy-flux
<br/>
项目说明：自己做的一个flux案例，相对简单（比官网上的todos案例更简单），flux的模式都有用到，相信大家都能看得懂。网上资料太少了，flux并不是框架，而是可以理解为一种模式。内含明细的代码注释。
<h5>代码结构说明</h5>
app.js ==> 入口程序，实现flux中的view<br />
store.js ==> 实现flux中的store<br />
action.js==>事件处理器。实现flux中的action。调用事件分发器dispatcher<br />
dispatcher.js==>事件分发器。实现flux中的dispatcher。
<h5>程序思路说明</h5>
View（app.js），负责：（1）完成渲染后添加对Store的监听，目的是，当Store变化时，回触发View中添加监听是传给监听的回调函数<br />
                     (2) 点击添加、删除等事件时，调用Action中定义的方法，并传递相应的数据参数<br />
Action(action.js)，处理View的事件请求，调用相应的事件分发器（Dispatcher）.<br />
Dispatcher(dispatcher.js)，事件分发器<br />
Store(store.js)，负责：(1) 定义数据的相应操作方法（如add、delete、getall等）。
                      (2) 定义对数据的监听操作(可以用第三方的如：events)，需对events.EventEmitter实现继承<br />
                      (3) 注册事件分发器，调用store中一定义的数据操作。<br />
                      (4) 当监听到数据变化时，调用对应的回调函数<br />
<h5>难点理解</h5>
其实比较难理解的是。（1）当 （添加/删除）数据后，store发生了变法后，怎么触发app.js重新render()<br />
这个的实现是靠引入（events）等第三方的等库（可以理解为监听器），实现对store的监听，当监听到store发生变化，就调用回调函数<br />
具体请看代码
