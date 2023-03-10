// UseEffect 範例
import React, { useState, useEffect } from 'react';
import { CodeBlockTS } from './Common';

export const UseEffectFC = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect without array');
    });
    useEffect(() => {
        console.log('useEffect with empty array');
    }, []);
    useEffect(() => {
        console.log('useEffect with count');
    }, [count]);

    return (
        <div>
            <h1>useEffect</h1>
            <p>useEffect是一個React Hook，可以讓你在函數組件中執行副作用操作。</p>
            <p>副作用操作指的是，組件渲染後，需要執行的操作，比如發送網絡請求，或者修改DOM。</p>
            <p>{`使用方式：useEffect(() => {副作用操作}, [依賴的參數])`}</p>
            <p>如果第二個參數沒有傳，表示組件每次渲染時都會執行副作用操作。</p>
            <p>如果第二個參數是空數組，表示只在組件第一次渲染時執行副作用操作。</p>
            <p>第二個參數是一個數組，表示只有在依賴的參數發生變化時，才會執行副作用操作。</p>

            <h2>Example</h2>
            <CodeBlockTS>
                {`useEffect(() => {副作用操作}, [依賴的參數])`}
            </CodeBlockTS>
            就會有三種常見的形式：
            <CodeBlockTS>
                {`
// 每次組件渲染時都會執行副作用操作
useEffect(() => {
    console.log('useEffect without array');
});`}
            </CodeBlockTS>

            <CodeBlockTS>
                {`
// 只在組件第一次渲染時執行副作用操作
useEffect(() => {
    console.log('useEffect with empty array');
}, []);`}
            </CodeBlockTS>

            <CodeBlockTS>
                {`
// 只有在依賴的參數發生變化時，才會執行副作用操作
useEffect(() => {
    console.log('useEffect with count');
}, [count]);`}
            </CodeBlockTS>

        </div>
    );
};
