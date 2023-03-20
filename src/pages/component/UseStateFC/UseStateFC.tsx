// UseState 範例
import { useState } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const UseStateFC = () => {
    //////////////////////////////////////////
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevState => prevState + 1);
    }

    const [count2, setCount2] = useState(0);

    function increment_multiple_error() {
        setCount2(count2 + 1);
        setCount2(count2 + 1);
        setCount2(count2 + 1);
    }

    function increment_multiple() {
        setCount2(prevState => prevState + 1);
        setCount2(prevState => prevState + 1);
        setCount2(prevState => prevState + 1);
    }

    return (
        <div>
            <h1 id="useState">useState</h1>
            <p>useState使函數組件有狀態，類似於class組件的this.state。</p>
            <p>使用方式: const [state, setState] = useState(initialState); <br />
                state是狀態，setState是設定狀態的方法，initialState是初始狀態，可以是任何值，包括物件和陣列。</p>
            <h2>Example</h2>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const [count, setCount] = useState(0);`}
            </Prism>

            <p>然後我們新增一個Button，點擊時調用setCount方法，將count的值加1。</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`<button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>`}
            </Prism>

            <p>你也可以用帶入function的方式讓onClick去觸發</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`<button onClick={increment}>Increment Version 2</button>`}
            </Prism>
            <p>increment function則是這麼寫</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`function increment() { setCount(prevState => prevState + 1); }`}
            </Prism>

            <p>這兩個做法是相同的，取決於你自己，但一般來說我習慣用第二種方法</p>

            <p className="hightlight">Count: {count}</p>
            <button onClick={() => setCount(prevState => prevState + 1)}>
                Increment</button>
            <button onClick={increment}>Increment Version 2</button>

            <p>接下來要談到useState的重要觀念</p>
            <h2>useState的重要觀念</h2>
            <p>剛剛上面有看到我們寫了這樣的程式碼</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`setCount(prevState => prevState + 1);`}
            </Prism>
            <p>我們稱這種寫法為function in function</p>
            <p>這是因為我們在setCount的參數裡面又寫了一個function</p>
            <p>這個function會傳入一個參數，這個參數就是當前的state</p>
            <p>然後我們可以在這個function裡面去改變state的值</p>

            <p>因為setState是一個非同步的方法，如果你直接寫多個setCount(count + 1)，你會發現count的值不會立即更新，而是在下一次render時才會更新。</p>
            <p>這是因為React會把多個setState的調用合併成一次更新，這樣可以提高效能。</p>

            <p>我們可以看一下差別</p>
            <p>我們新增了一個function，裡面會去increment三次count的值</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`function increment_multiple_error() { 
    setCount2(count2 + 1);
    setCount2(count2 + 1);
    setCount2(count2 + 1);
}`}
            </Prism>
            <p>正常來說，我們會認為count2會一次從0變成3</p>
            <p>但是實際上，count2會從0變成1，你點一次button還是只會增加1</p>
            <p>原因是它是取當下的count2的值，而不是當下的最新值</p>
            <p>你可以試試看，不會+3只會+1</p>
            <p className="hightlight">Count: {count2}</p>
            <button onClick={increment_multiple_error}>Increment Multiple Error</button>

            <p>所以我們要這樣寫</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`function increment_multiple_error() {
    setCount2(prevState => prevState + 1);
    setCount2(prevState => prevState + 1);
    setCount2(prevState => prevState + 1);
}`}
            </Prism>
            <p>這樣就可以正常運作了</p>
            <p className="hightlight">Count: {count2}</p>
            <button onClick={increment_multiple}>Increment Multiple</button>
        </div >
    );
};
export default UseStateFC;