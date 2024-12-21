import React, { useState } from 'react';

const App = () => {
    const [list, setList] = useState([
        { id: 1, name: '张三', age: 25 },
        { id: 2, name: '李四', age: 30 }
    ]);

    const updateItem = (id, newName) => {
        setList(prevList =>
            prevList.map(item =>
                item.id === id ? { ...item, name: newName } : item
            )
        );
    };

    return (
        <div>
            {list.map(item => (
                <div key={item.id}>
                    <p>姓名: {item.name}</p>
                    <p>年龄: {item.age}</p>
                </div>
            ))}
            <button onClick={() => updateItem(1, '赵六')}>修改张三的名字</button>
        </div>
    );
};

export default App;
