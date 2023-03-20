import { useState } from 'react';
import UseStateFC from './component/UseStateFC/UseStateFC';
import { UseRefFC, UseReFCTimer } from './component/UseRefFC/UseRefFC';
import { UseEffectFC } from './component/UseEffectFC/UseEffectFC';
import { UseContextFC, MyContext, MyContext2 } from './component/UseContextFC/UseContextFC';
import UseStateFCMore from './component/UseStateFC/UseStateFCMore';
import { UseCallbackFC } from './component/UseCallbackFC/UseCallbackFC';
import { UseMemoFC } from './component/UseMemoFC/UseMemoFC';
import { UseReducerFC } from './component/UseReducerFc/UseReducerFC';
import { HashLink } from 'react-router-hash-link';
import ContextAndReducer from './component/ContextAndReducer';
import { CallbackAndMemo } from './component/CallbackAndMemo';
import UseTransitionFC from './component/UseTransitionFC/UseTransitionFC';
export const Home = () => {

    const [value, setValue] = useState('defaultValue');

    const updateValue2 = (newValue: string) => {
        setValue(newValue);
    }

    return (
        <div className="container">
            <p>快速連結區</p>
            <div>
                <HashLink to="/#useState" className='hightlight'>useState</HashLink>
                <HashLink to="/#useRef" className='hightlight'>useRef</HashLink>
                <HashLink to="/#useEffect" className='hightlight'>useEffect</HashLink>
                <HashLink to="/#useContext" className='hightlight'>useContext</HashLink>
                <HashLink to="/#useReducer" className='hightlight'>useReducer</HashLink>
                <HashLink to="/#different1" className='hightlight'>useContext和useReducer的差別</HashLink>
                <HashLink to="/#useMemo" className='hightlight'>useMemo</HashLink>
                <HashLink to="/#useCallback" className='hightlight'>useCallback</HashLink>
                <HashLink to="/#different2" className='hightlight'>useMemo和useCallback的差別</HashLink>
                <HashLink to="/#useTransition" className='hightlight'>useTransition</HashLink>
            </div>
            <a className='hightlight' href="https://courses.webdevsimplified.com/view/courses/react-hooks-simplified">很棒的教學網站</a>
            <UseStateFC />
            <UseStateFCMore />
            <UseRefFC />
            <UseReFCTimer />
            <UseEffectFC />
            <MyContext.Provider value="Hello, world!">
                <MyContext2.Provider value={{ value2: value, updateValue2 }}>
                    <UseContextFC />
                </MyContext2.Provider>
            </MyContext.Provider>
            <UseReducerFC />

            <h2 id='different1' className='hightlight'>關於useContext和useReducer的差別</h2>
            <p>關於useContext和useReducer的差別</p>
            <p>先說一下，基本上兩者能做的事情非常像，但我們還使以這些元件原先的開發目的來說明：</p>
            <ol>
                <li>useContext是用來獲取全局的context，而useReducer是用來處理複雜的狀態邏輯。</li>
            </ol>
            <p>useContext 主要用於獲取 React 中的全局狀態。<br />
                通常情況下，當我們需要在多個組件之間共享數據時，可以使用 Context 來實現。</p>

            <p>useReducer 則主要用於處理複雜的狀態邏輯。<br />
                它可以幫助開發者更好地管理組件中的狀態，尤其是當狀態的更新有較複雜的邏輯時。</p>

            <p className='hightlight'>實現全局狀態管理</p>
            <p>如果要實現全局狀態管理，通常會同時使用 useContext 和 useReducer。
                具體來說，開發者可以在 Context 中定義一個 state 和 reducer，然後將它們注入到組件中。
                在需要使用全局狀態的組件中，可以使用 useContext 獲取到 Context 中的 state，然後使用 useReducer 更新 Context 中的 state。這樣就可以實現全局狀態管理了。</p>
            {/* useReducer useContext搭配使用 */}
            <ContextAndReducer />

            <UseMemoFC />
            <UseCallbackFC />
            <h2 id="different2" className='hightlight'>關於useCallback和useMemo的差別</h2>
            <p>關於useCallback和useMemo的差別，可以簡單地解釋成下面兩點：</p>
            <ol>
                <li>useCallback用來儲存函數並返回這個函數的memoized版本。當你傳遞的callback函數需要作為props傳到子元件時，使用useCallback() 可以避免因為父元件重新渲染而導致子元件不必要的重複渲染。</li>
                <li>useMemo是用來儲存具有昂貴計算代價的函數的返回值。當你多次需要調用某一個方案，但每次都要重新計算，建議使用useMemo。</li>
            </ol>

            <p>白話的說，useCallback會回傳memoized函數，而useMemo只會回傳函數的memoized回傳值。</p>

            <h3>memoized函數(又稱作pure function)</h3>
            <p>memoized函數是指一個函數，它會記住之前的輸入和輸出，如果輸入沒有改變，就會直接回傳之前的輸出，而不是重新計算。</p>
            <p>useCallback主要用於緩存函數，而useMemo主要用於緩存函數的返回值。</p>

            <p>使用 useCallback 可以使得函數被 memoized，從而在下次渲染時可以重複使用已經緩存的函數，以減少渲染成本。而使用 useMemo 則是避免在每次渲染時都重新計算某個值，同樣可以提高應用程序的性能。</p>

            <p className='hightlight'>如果要靈活的使用useMemo和useCallback，就要努力了解！！</p>
            <p>下面提供一個範例，我會解釋一下差別</p>
            <CallbackAndMemo />

            <p className='hightlight'>
                {/* ???  */}
                useMemo 主要是用來最小化渲染時的計算量，尤其是當某個值需要根據複雜的計算邏輯才能取得時，可以透過 useMemo 避免每次 render 都要重新計算一次。
                <br />
                {/* (這時候不能用callback，因 */}
            </p>
            <p className='hightlight'>
                {/* usememo 也可以避免欸 回家查證 */}
                useCallback 則是用來避免不必要的子元件重新渲染，尤其是當某個 props 傳入子元件後，當該 props 觸發 callback 重新導致該 props 發生改變時，會使該子元件重新渲染，這時可以透過 useCallback 把 callback 函式 memoize 起來，來避免不必要的子元件渲染。


                {/* 
                const slowNumber = useMemo(() => {
                    console.log('useMemo')
                    return slowFunction(number)
                }, [number])

                const slowNumber2 = useCallback(() => {
                    console.log('useCallback')
                    return slowFunction(number)
                }, [number])

                function slowFunction(num: number) {
                    for (let i = 0; i <= 1000000000; i++) { 
                    
                    }
                    return num * 2
                } 
                我沒辦法理解欸 差別 只知道 回傳的內容不同 一個是function 一個式vaule
                */}

            </p>

            <UseTransitionFC />

        </div >
    );
};
