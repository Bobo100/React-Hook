// UseState 範例
import { useState } from "react";
import { CodeBlockTS } from "./Common";
const UseStateFC = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>useState</h1>
            <p>useState使函數組件有狀態，類似於class組件的this.state。</p>
            <p>使用方式: const [state, setState] = useState(initialState); <br />
                第一個參數給出初始值，setState是一個方法用於更新狀態的值</p>
            <h2>Example</h2>
            <CodeBlockTS>
                {`const [count, setCount] = useState(0);`}
            </CodeBlockTS>

            <p>然後我們新增一個Button，點擊時調用setCount方法，將count的值加1。</p>
            <CodeBlockTS>
                {`<button onClick={() => setCount(count + 1)}>Increment</button>`}
            </CodeBlockTS>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}
            >Increment</button>
        </div>
    );
};

export default UseStateFC;