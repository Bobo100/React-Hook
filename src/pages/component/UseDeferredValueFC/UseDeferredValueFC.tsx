import { useDeferredValue, useEffect, useState } from "react";
import { CommonPrism } from "../../Common";
import List from "./List";

// UseDeferredValue 範例
export function UseDeferredValueFC() {
    const [inputValue, setInputValue] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    /////
    const LIST_LENGTH = 20000;
    const defferedValue = useDeferredValue(inputValue);
    const list = [];
    if (defferedValue)
        for (let i = 0; i < LIST_LENGTH; i++) {
            list.push(<div key={i}>{defferedValue}</div>);
        }

    useEffect(() => {
        console.log(`Input: ${inputValue}\n DefferedValue: ${defferedValue}, list.length: ${list.length}`);
    }, [inputValue, defferedValue, list.length]);

    return (
        <div>
            <h1 id="useDeferredValue">useDeferredValue</h1>
            <p>useDeferredValue是一個React Hook，就如同它的名字一樣，它可以讓你延遲一個值的更新，等到當沒有其他的更新時，再更新這個值。</p>
            <p>使用 useDeferredValue 時，defferedValue 的更新不會實時地反映到 DOM 上，而是等待 React 空閒在更新。所以你看到的效果就像是延後了一樣。</p>
            <p>有點像是debounce，但是它是在React的生命週期中使用的。</p>

            <p>useDeferredValue接收一個參數，這個參數是一個值，這個值會被延遲更新。</p>
            <CommonPrism>
                {`const deferredValue = useDeferredValue(value)`}
            </CommonPrism>

            <p>下面我們實作，看useDeferredValue的幫助下有多棒：你可以打開控制台，看看當你輸入文字時，輸入框的值和列表的值是如何同步更新的。</p>
            <CommonPrism>
                {`const [inputValue, setInputValue] = useState('')

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
}

/////
const LIST_LENGTH = 20000;
const defferedValue = useDeferredValue(inputValue);　// 把inputValue傳入useDeferredValue 告訴它要延遲更新
const list = [];
if (defferedValue)
    for (let i = 0; i < LIST_LENGTH; i++) {
        list.push(<div key={i}>{defferedValue}</div>);
    }

useEffect(() => {
    console.log(\`Input: \${inputValue} \\n DefferedValue: \${defferedValue}\`);
}, [inputValue, defferedValue]);
`}
            </CommonPrism>
            <input type="text" onChange={handleOnChange} placeholder="text" value={inputValue} />
            {/* <List input={inputValue} /> */}
            <div className="list_limit">{list}</div>
        </div>
    )
}

