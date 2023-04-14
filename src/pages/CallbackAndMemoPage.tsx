import { useEffect } from "react";
import { CallbackAndMemoFC } from "./component/CallbackAndMemoFC/CallbackAndMemoFC"

const CallbackAndMemoPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    return (
        <div className="container">
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
            <CallbackAndMemoFC />

            <p >
                {/* ???  */}
                useMemo 主要是用來最小化渲染時的計算量，尤其是當某個值需要根據複雜的計算邏輯才能取得時，可以透過 useMemo 避免每次 render 都要重新計算一次。
                <br />
                {/* (這時候不能用callback，因 */}
            </p>
            <p >
                {/* usememo 也可以避免欸 回家查證 */}
                useCallback 則是用來避免不必要的子元件重新渲染，尤其是當某個 props 傳入子元件後，子元件會根據這個 props 的值來決定是否要重新渲染時，可以透過 useCallback 避免每次父元件重新渲染時都要重新傳入一個新的函數給子元件。


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

            <p className="hightlight">最近詢問chatGPT得到的最後答案是基本上兩者都能夠互相使用，差別就只在回傳的內容不同。我要表達的是前面說的，如果要靈活的使用useMemo和useCallback，但實際上是可以互相使用的，只是回傳的內容不同而已。</p>
        </div>
    )
}

export default CallbackAndMemoPage