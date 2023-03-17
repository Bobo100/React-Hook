// UseRef 範例
import { useRef, useState } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const UseRefFC = () => {

    const myRef = useRef<HTMLDivElement>(null);
    // 在需要修改 ref 的值時，使用 myRef.current 屬性
    function handleClick() {
        if (myRef.current) {
            myRef.current.style.color = 'red';
        }
    }

    // 範例：使用 useRef 保存 setTimeout 的 id
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<number>(0);
    const isRunning = useRef<boolean>(false);


    function startTimer() {
        if (!isRunning.current) {
            isRunning.current = true;
            intervalRef.current = window.setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }
    }

    function stopTimer() {
        clearInterval(intervalRef.current);
        isRunning.current = false;
    }


    return (
        <div>
            <h1>useRef</h1>
            <p>useRef 是一個 React Hook，可以用來創建一個可變的引用(reference) 值，並且不會觸發組件重新渲染。</p>
            <p>useRef 會在每次渲染時返回同一個 ref 物件。</p>
            <p>使用方式：const myRef = useRef(initialState 通常是null);<br />
                表示創建 ref 時候，並不會指向任何一个DOM元素。</p>
            <p>然後，在要ref(連接)的物件上寫上ref屬性即可：{`<div ref={myRef}></div>`} </p>

            <h2>Example</h2>
            <Prism language="tsx" style={vscDarkPlus}>
                {`const myRef = useRef<HTMLDivElement>(null);`}
            </Prism>

            <p>然後，在要ref的物件上</p>
            <Prism language="tsx" style={vscDarkPlus}>
                {`<div ref={myRef}></div>`}
            </Prism>

            <p>之後，我們便可以透過 myRef.current 來取得這個物件的屬性或方法，也就可以對這個物件進行操作。例如：</p>            
            <Prism language="tsx" style={vscDarkPlus}>
                {`function handleClick() {
    if (myRef.current) {
        myRef.current.style.color = 'red';
    }
}`}
            </Prism>


            <div ref={myRef}>
                <p>點選下面按鈕，將會將這段文字變成紅色</p>
                <button onClick={handleClick}>Click Me</button>
            </div>

            <p> {`
                useRef 創建的引用對象不能自動註冊到 React 組件上，所以如果希望在節點上保存 ref 引用，必須使用 JSX 屬性 ref = {myRef} 明確指定引用.
                useRef 創造的引用值本身是可變的，當修改 current 屬性的值時 ，引用會保持不變且組件不會重新渲染。要特別注意在修改 current 值時必須按照原來對象的類型進行操作以避免錯誤。
                `}
            </p>

            <h2>Example 應用</h2>
            <p>useRef 可以用來保存一些不需要觸發組件重新渲染的數據，比如 setTimeout 的 id，或者是一些 DOM 元素的引用。</p>
            <p>我們建立了一個計時器組件 Timer。<br />
                當用戶點擊“Start”按鈕時，計時器開始運行，每秒更新顯示的時間。 <br />
                而點擊“Stop”按鈕則會停止計時器，清除定時器。</p>
            <div>
                <p>{seconds} seconds (useState) 會重新渲染</p>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
            </div>
            {/* <UseReFCTimer /> */}


        </div>
    );
};

export const UseReFCTimer = () => {
    // 範例：使用 useRef 保存 setTimeout 的 id
    const secondsRef = useRef<number>(0);
    const intervalRef = useRef<number>(0);
    const isRunning = useRef<boolean>(false);

    // 為了看到更新狀態，我們在這裡加一個 useState，之後再用它來觸發重新渲染
    const [count, setCount] = useState(0);

    // 開始計時
    function startTimer() {
        if (!isRunning.current) {
            isRunning.current = true;
            intervalRef.current = window.setInterval(() => {
                secondsRef.current++;
            }, 1000);
        }
    }

    // 停止計時，清除定時器
    function stopTimer() {
        clearInterval(intervalRef.current);
        isRunning.current = false;
    }

    return (
        <>
            <div>
                <p>{secondsRef.current} seconds (useRef) 不會重新渲染，雖然它有在更新，但我們看不到</p>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>

                <button onClick={() => setCount(count + 1)}>點這個可以看到更新的樣子</button>
            </div>
            <div>
                <Prism language="tsx" style={vscDarkPlus}>
                    {`
// 範例：使用 useRef 保存 setTimeout 的 id
const secondsRef = useRef<number>(0);
const intervalRef = useRef<number>(0);
const isRunning = useRef<boolean>(false);
// 為了看到更新狀態，我們在這裡加一個 useState，之後再用它來觸發重新渲染
const [count, setCount] = useState(0);
// 開始計時
function startTimer() {
    if (!isRunning.current) {
        isRunning.current = true;
        intervalRef.current = window.setInterval(() => {
            secondsRef.current++;
        }, 1000);
    }
}
// 停止計時，清除定時器
function stopTimer() {
    clearInterval(intervalRef.current);
    isRunning.current = false;
}
                `}
                </Prism>
            </div>
        </>
    );
}