// UseState 範例
import { useEffect, useState } from "react";
import { CommonPrism } from '../../Common';


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

    const [obj, setObj] = useState({ value: 0 });

    const handleClickError = () => {
        obj.value += 1; // 直接修改 obj 物件的內容
        setObj(obj); // 透過同一個物件更新 state
    }

    const handleClick = () => {
        const newObj = { value: obj.value + 1 }; // 創建一個新物件
        setObj(newObj);
    }


    return (
        <div>
            <h1 id="useState">useState</h1>
            <p>useState使函數組件有狀態，類似於class組件的this.state。</p>
            <p>使用方式: const [state, setState] = useState(initialState); <br />
                state是狀態，setState是設定狀態的方法，initialState是初始狀態，可以是任何值，包括物件和陣列。</p>
            <h2>Example</h2>
            <CommonPrism>
                {`const [count, setCount] = useState(0);`}
            </CommonPrism>

            <p>然後我們新增一個Button，點擊時調用setCount方法，將count的值加1。</p>
            <CommonPrism>
                {`<button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>`}
            </CommonPrism>

            <p>你也可以用帶入function的方式讓onClick去觸發</p>
            <CommonPrism>
                {`<button onClick={increment}>Increment Version 2</button>`}
            </CommonPrism>

            <p className="hightlight">請注意：我是帶入function而不是increment()讓他立即執行喔！！</p>
            <CommonPrism>
                {` // 錯誤的寫法
<button onClick={increment()}>Increment Version 2</button>`}
            </CommonPrism>
            <p>{`如果您的 onClick 屬性是一個函數呼叫，例如 onClick={increment()}，那麼它將在渲染期間立即執行 increment 函數並返回其結果。這不是您想要的，因為您需要在按鈕被單擊時才調用函數。
                但是，當您使用 onClick={increment} 時，將函數本身傳遞給 onClick，而非函數的返回值。這意味著當用戶單擊按鈕時，才會調用該函數，並且不是在渲染期間立即執行`}</p>

            <p>increment function則是這麼寫</p>
            <CommonPrism>
                {`function increment() { setCount(prevState => prevState + 1); }`}
            </CommonPrism>

            <p>這兩個做法是相同的，取決於你自己，但一般來說我習慣用第二種方法</p>

            <p className="hightlight">Count: {count}</p>
            <button onClick={() => setCount(prevState => prevState + 1)}>
                Increment</button>
            <button onClick={increment}>Increment Version 2</button>

            <p>接下來要談到useState的重要觀念</p>
            <h2>useState的重要觀念</h2>
            <p>剛剛上面有看到我們寫了這樣的程式碼</p>
            <CommonPrism>
                {`setCount(prevState => prevState + 1);`}
            </CommonPrism>
            <p>我們稱這種寫法為function in function</p>
            <p>這是因為我們在setCount的參數裡面又寫了一個function</p>
            <p>這個function會傳入一個參數，這個參數就是當前的state</p>
            <p>然後我們可以在這個function裡面去改變state的值</p>

            <p>因為setState是一個非同步的方法，如果你直接寫多個setCount(count + 1)，你會發現count的值不會立即更新，而是在下一次render時才會更新。</p>
            <p>這是因為React會把多個setState的調用合併成一次更新，這樣可以提高效能。</p>

            <p>我們可以看一下差別</p>
            <p>我們新增了一個function，裡面會去increment三次count的值</p>
            <CommonPrism>
                {`function increment_multiple_error() { 
    setCount2(count2 + 1);
    setCount2(count2 + 1);
    setCount2(count2 + 1);
}`}
            </CommonPrism>
            <p>正常來說，我們會認為count2會一次從0變成3</p>
            <p>但是實際上，count2會從0變成1，你點一次button還是只會增加1</p>
            <p>原因是它是取當下的count2的值，而不是當下的最新值</p>
            <p>你可以試試看，不會+3只會+1</p>
            <p className="hightlight">Count: {count2}</p>
            <button onClick={increment_multiple_error}>Increment Multiple Error</button>

            <p>所以我們要這樣寫</p>
            <CommonPrism>
                {`function increment_multiple_error() {
    setCount2(prevState => prevState + 1);
    setCount2(prevState => prevState + 1);
    setCount2(prevState => prevState + 1);
}`}
            </CommonPrism>
            <p>這樣就可以正常運作了</p>
            <p className="hightlight">Count: {count2}</p>
            <button onClick={increment_multiple}>Increment Multiple</button>

            <p>還有值得一提的是，如果我們明明說只要state變更，就會導致頁面需要重新render，但是如果我們的state是一個物件或陣列，而我們只是改變了物件或陣列裡面的某個值，這時候頁面是不會重新render的。</p>
            <p>白話的說，修改物件裡面的內容，不會導致state改變，所以頁面不會重新render。必須修改整個物件才會導致state改變，所以頁面才會重新render。</p>
            <p>舉個例子</p>
            <CommonPrism>
                {`const [obj, setObj] = useState({ value: 0 });

const handleClickError = () => {
    obj.value += 1; // 直接修改 obj 物件的內容
    setObj(obj); // 透過同一個物件更新 state
}`}
            </CommonPrism>
            <p>這時候我們只是改變了obj裡面的value值，但是因為obj是一個物件，所以state沒有變更，所以頁面不會重新render。</p>
            <p>這時候我們可以這樣寫</p>
            <CommonPrism>
                {`const handleClick = () => {
  const newObj = { value: obj.value + 1 }; // 創建一個新物件
  setObj(newObj);
}`}
            </CommonPrism>
            <p>這樣就可以正常運作了。下面是實作的例子，左邊是用錯誤的方法，右邊是正確。<br />
                當你點選左邊的時候物件的內容是有變更的，但是頁面不會重新render，而右邊的則是正常的，有變化且會重新render。</p>
            <p>{obj.value}</p>
            <button onClick={handleClickError} >Increment Obj Error</button>
            <button onClick={handleClick}>Increment Obj</button>

            <p className="hightlight">另外當你在一個function執行多個setState時，React會把這些setState合併成一次更新，這樣可以提高效能。所以只會render一次。</p>

        </div >
    );
};
export default UseStateFC;