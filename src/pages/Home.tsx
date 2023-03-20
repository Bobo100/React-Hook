import { useState } from 'react';
import UseStateFC from './component/UseStateFC/UseStateFC';
import { UseRefFC, UseReFCTimer } from './component/UseRefFC/UseRefFC';
import { UseEffectFC } from './component/UseEffectFC/UseEffectFC';
import { UseContextFC, MyContext, MyContext2 } from './component/UseContextFC/UseContextFC';
import UseStateFCMore from './component/UseStateFC/UseStateFCMore';
import { UseCallbackFC } from './component/UseCallbackFC/UseCallbackFC';
import { UseMemoFC } from './component/UseMemoFC/UseMemoFC';
import { UseReducerFC } from './component/UseReducerFc/UseReducerFC';
import ContextAndReducer from './component/ContextAndReducer';
import { CallbackAndMemo } from './component/CallbackAndMemo';
import UseTransitionFC from './component/UseTransitionFC/UseTransitionFC';
import { ContextAndReducerCode } from './component/ContextAndReducerCode';
import { Link } from 'react-router-dom';
export const Home = () => {



    return (
        <div className="container">
            <p>快速連結區</p>
            <div>
                <Link to="/useState" className='hightlight'>useState</Link>
                <Link to="/useRef" className='hightlight'>useRef</Link>
                <Link to="/useEffect" className='hightlight'>useEffect</Link>
                <Link to="/useContext" className='hightlight'>useContext</Link>
                <Link to="/useReducer" className='hightlight'>useReducer</Link>
                <Link to="/different1" className='hightlight'>useContext和useReducer的差別</Link>
                <Link to="/useMemo" className='hightlight'>useMemo</Link>
                <Link to="/useCallback" className='hightlight'>useCallback</Link>
                <Link to="/different2" className='hightlight'>useMemo和useCallback的差別</Link>
                <Link to="/useTransition" className='hightlight'>useTransition</Link>
            </div>
            <a className='hightlight' href="https://courses.webdevsimplified.com/view/courses/react-hooks-simplified">很棒的教學網站</a>



           
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
