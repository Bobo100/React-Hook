// UseState 範例
import { useState } from "react";
import { CodeBlockTS } from "./Common";
const UseStateFC = () => {
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
    
    //////////////////////////////////////////
    const [count3, setCount3] = useState(() => {
        console.log("initial count3")
        for (let i = 0; i < 100; i++) {
            // do nothing
            console.log("do nothing 3")
        }
        return 0;
    });

    function increment3() {
        setCount3(prevState => prevState + 1);
    }

    const [count4, setCount4] = useState(getInitialCount());

    function getInitialCount() {
        console.log("initial count4");
        for (let i = 0; i < 100; i++) {
            // do nothing
            console.log("do nothing 4")
        }

        return 0;
    }

    function increment4() {
        setCount4(prevState => prevState + 1);
    }

    const [currentTime, setCurrentTime] = useState(() => {
        const now = new Date();
        return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    });

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
                {`<button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>`}
            </CodeBlockTS>

            <p>你也可以用帶入function的方式讓onClick去觸發</p>
            <CodeBlockTS>
                {`<button onClick={increment}>Increment Version 2</button>`}
            </CodeBlockTS>
            <p>increment function則是這麼寫</p>
            <CodeBlockTS>
                {`function increment() { setCount(prevState => prevState + 1); }`}
            </CodeBlockTS>

            <p>你可以嘗試看看下面的button</p>

            <p className="hightlight">Count: {count}</p>
            <button onClick={() => setCount(prevState => prevState + 1)}>
                Increment</button>
            <button onClick={increment}>Increment Version 2</button>

            <p>接下來要談到useState的重要觀念</p>
            <h2>useState的重要觀念</h2>
            <p>剛剛上面有看到我們寫了這樣的程式碼</p>
            <CodeBlockTS>
                {`setCount(prevState => prevState + 1);`}
            </CodeBlockTS>
            <p>我們稱這種寫法為function in function</p>
            <p>這是因為我們在setCount的參數裡面又寫了一個function</p>
            <p>這個function會傳入一個參數，這個參數就是當前的state</p>
            <p>然後我們可以在這個function裡面去改變state的值</p>

            <p>因為setState是一個非同步的方法，如果你直接寫多個setCount(count + 1)，你會發現count的值不會立即更新，而是在下一次render時才會更新。</p>
            <p>這是因為React會把多個setState的調用合併成一次更新，這樣可以提高效能。</p>

            <p>我們可以看一下差別</p>
            <p>我們新增了一個function，裡面會去increment三次count的值</p>
            <CodeBlockTS>
                {`function increment_multiple_error() { 
    setCount2(count2 + 1);
    setCount2(count2 + 1);
    setCount2(count2 + 1);
}`}
            </CodeBlockTS>
            <p>正常來說，我們會認為count2會一次從0變成3</p>
            <p>但是實際上，count2會從0變成1，你點一次button還是只會增加1</p>
            <p>原因是它是取當下的count2的值，而不是當下的最新值</p>
            <p>所以我們要這樣寫</p>
            <CodeBlockTS>
                {`function increment_multiple_error() {
    setCount2(prevState => prevState + 1);
    setCount2(prevState => prevState + 1);
    setCount2(prevState => prevState + 1);
}`}
            </CodeBlockTS>
            <p>這樣就可以正常運作了</p>
            <p>你可以試試看左右兩個button的差別</p>
            <p className="hightlight">Count: {count2}</p>
            <button onClick={increment_multiple_error}>Increment Multiple Error</button>
            <button onClick={increment_multiple}>Increment Multiple</button>

            <h2>useState初始值 (補充說明)</h2>

            <p>當然，如果你的初始值是很複雜的，像是計算初始值很耗時或可能引起副作用，例如像從Server端載入資料或本地存儲加載，那麼我們會建議用function in function的方式去宣告，這樣可以保證只會在第一次render時執行一次</p>

            <p>舉例來說</p>
            <CodeBlockTS>
                {`const [count4, setCount4] = useState(getInitialCount());
function getInitialCount() {
    console.log("initial count4");
    for (let i = 0; i < 100; i++) {
        // do nothing
        console.log("do nothing 4")
    }
    return 0;
}`}
            </CodeBlockTS>
            <p>這樣的話，每次render時，都會執行一次這個function</p>
            <p>如果你的初始值是一個很複雜的函數，那麼這樣的寫法就會導致你的程式碼執行效能變差</p>
            <p>所以我們建議你用function in function的方式去宣告</p>
            <CodeBlockTS>
                {`const [count3, setCount3] = useState(() => {
    console.log("initial count3")
    for (let i = 0; i < 100; i++) {
        // do nothing
        console.log("do nothing 3")
    }
    return 0;
});`}
            </CodeBlockTS>

            <p>當我們透過button去更新state的時候，就會發現兩個宣告方式的差別</p>
            <p>請打開console，你會發現第一種寫法，每次render時，都會執行一次這個function，所以我只要更新到其他的state之類的就會導致它重新執行</p>
            <p>console.log("do nothing4")就會一直執行，會吃效能</p>
            <p className="hightlight">Count: {count3}</p>
            <button onClick={increment3}>觸發Button count3</button>
            <p className="hightlight">Count: {count4}</p>
            <button onClick={increment4}>觸發Button count4</button>

            <p>例如，我們想再渲染進頁面的時候獲得現在的時間</p>
            <CodeBlockTS>
                {`const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
});`}
            </CodeBlockTS>
            <p>這樣的話，我們就可以在頁面上顯示現在的時間</p>
            <p className="hightlight">Current Time: {currentTime}</p>
        </div >
    );
};
export default UseStateFC;