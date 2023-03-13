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

    // 宣告物件
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 20
    });

    function changeName() {
        console.log("render")
        setPerson({ ...person, name: 'John' });
    }
    // 宣告物件 用 function in function
    const [person2, setPerson2] = useState({
        name: 'Peter',
        age: 20
    });

    function changeName2() {
        console.log("render")
        setPerson2(prevState => {
            return {
                ...prevState,
                name: 'John'
            }
        });
    }

    //////////////////////////////////////////
    const [count3, setCount3] = useState(() => {
        console.log("initial count3")
        return 0;
    });

    function increment3() {
        setCount3(prevState => prevState + 1);
    }

    const [count4, setCount4] = useState(getInitialCount()
    );

    function getInitialCount() {
        console.log("initial count4");
        return 0;
    }

    function increment4() {
        setCount4(prevState => prevState + 1);
    }


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

            <p>Count: {count}</p>
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
            <p>Count: {count2}</p>
            <button onClick={increment_multiple_error}>Increment Multiple Error</button>
            <button onClick={increment_multiple}>Increment Multiple</button>

            <h2>useState初始值 (補充說明)</h2>
            <p>useState的初始值可以是任何值，包括物件、陣列、函數等等</p>
            <p>但是要注意的是，如果你的初始值是一個物件或陣列，那麼你在更新state時，你必須要用function in function的方式去更新</p>
            <p>另外，宣告初始值的時候，如果你的初始值也是很複雜的，那麼也請你用function in function的方式去宣告</p>

            <p>舉例來說，我們有一個物件</p>
            <CodeBlockTS>
                {`const obj = { name: 'John', age: 20 };`}
            </CodeBlockTS>
            <p>如果我們直接這樣寫 和 我們使用function in function的方式去宣告</p>
            <CodeBlockTS>
                {`const [obj, setObj] = useState(obj);
const [obj, setObj] = useState(() => obj);`}
            </CodeBlockTS>
            <p>這兩種方式的結果是不一樣的</p>
            <p>第一種方式，我們是直接把obj的值給了useState，所以obj的值就會是一個物件</p>
            <p>第二種方式，我們是把obj的值給了一個function，所以obj的值就會是一個function</p>

            <p>假如因為其他的原因，像是其他的state改變了，導致頁面重新render，這時候第一種寫法就會重新執行一次，而第二種寫法就不會</p>
            <p>一般來說，我們都會使用function in function的方式去宣告</p>
            <p>因為這樣可以讓你在每次render時，都可以取得最新的props或state</p>

            {/* <h3>第一種寫法</h3>
            <div>
                <p>obj: {person.name}</p>
                <p>age: {person.age}</p>
                <button onClick={changeName}>Set Person</button>
            </div>

            <h3>第二種寫法</h3>
            <div>
                <p>obj: {person2.name}</p>
                <p>age: {person2.age}</p>
                <button onClick={changeName2}>Set Person</button>
            </div>

            <p>差別在哪，我們可以用console.log來看一下</p>
            <p>我們透過更新另一個state來觸發頁面重新render</p>
            <p>這時候，第一種寫法就會重新執行一次，而第二種寫法就不會</p>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button> */}

            <p>當然，如果你的初始值是很複雜的，像是計算初始值很耗時或可能引起副作用，例如像從Server端載入資料或本地存儲加載，那麼我們會建議用function in function的方式去宣告</p>
            <p>這樣可以保證只會在第一次render時執行一次</p>
            
        
            <p>舉例來說</p>
            <CodeBlockTS>
                {`const [count4, setCount4] = useState(getInitialCount()
    );

    function getInitialCount() {
        console.log("initial state");
        return 0;
    }`}
            </CodeBlockTS>
            <p>這樣的話，每次render時，都會執行一次這個function</p>
            <p>如果你的初始值是一個很複雜的函數，那麼這樣的寫法就會讓你的程式碼變得很難維護</p>
            <p>所以我們建議你用function in function的方式去宣告</p>
            <CodeBlockTS>
                {`const [count3, setCount3] = useState(() => {
        console.log("initial state")
        return 0;
    });`}
            </CodeBlockTS>

            <p>當我們透過button去更新state的時候，就會發現兩個宣告方式的差別</p>
            <p>請打開console，你會發現第一種寫法，每次render時，都會執行一次這個function，所以我只要更新到其他的state之類的就會導致它重新宣告</p>
            <p>{count3}</p>
            <button onClick={increment3}>觸發Button count3</button>
            <p>{count4}</p>
            <button onClick={increment4}>觸發Button count4</button>
        </div >
    );
};
export default UseStateFC;