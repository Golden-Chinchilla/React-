function Son({ onGetMsg }) {
    const msg = 'the msg from children'
    return (
        <div>
            {/* 子组件接收函数，然后调用，同时把信息通过参数传递 */}
            <button onClick={() => { onGetMsg(msg) }}>send msg</button>
        </div>
    )
}


function App() {
    // 父组件中定义函数，给子组件用
    const getMsg = (value) => { console.log(`get value from son: ${value}`) }
    return (
        <div>
            <Son onGetMsg={getMsg} />
        </div>
    )
}