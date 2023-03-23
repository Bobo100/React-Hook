// UseTransition 範例
import { Suspense, useEffect, useState, useTransition } from 'react';
import uuid from 'react-uuid';
import { CommonPrism } from '../../Common';
import ClearButton from '../ClearButton';

const UseTransitionFC = () => {
    const [isPending, startTransition] = useTransition(); // 建立一個useTransition的hook
    const [list, setList] = useState<string[]>([]) // 建立一個狀態
    const [inputValue, setInputValue] = useState('') // 建立一個狀態
    const LIST_LENGTH = 20000; // 設定一個list的長度

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_LENGTH; i++) {
                l.push(e.target.value)
            }
            setList(l);
        })
    }

    useEffect(() => {
        console.log("every render ", "inputValue ", inputValue, "list ", list[0]);
    })

    const handleOnChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_LENGTH; i++) {
                l.push(e.target.value)
            }
            console.log("startTransition");
            setList(l);
            console.log("endTransition");
        })
        setTimeout(() => {
            console.log("setTimeout");
        }, 1000);
        console.log("Start...");
        setInputValue(e.target.value)
        console.log("End...")
        // 執行順序會是
        // startTransition
        // useTransition裡面的更新狀態 (但要等到目前沒有其他的異步操作在執行)
        // setTimeout 放到event loop的佇列中
        // endTransition
        // Start...
        // 去更新狀態 => 標記為A
        // End...
        // render (因為A的state有更新，所以會重新render)
        // render 因為A也更新完成了，目前沒有其他的異步操作在執行，所以會執行useTransition裡面的更新狀態
        // setTimeout (stack沒有其他執行內容了，執行queue中的setTimeout)
    }

    // const handleOnChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     startTransition(() => {
    //         const l = []
    //         for (let i = 0; i < LIST_LENGTH; i++) {
    //             l.push(e.target.value)
    //         }
    //         console.log("startTransition");
    //         console.log("endTransition");
    //     })
    //     setTimeout(() => {
    //         console.log("setTimeout");
    //     }, 1000);
    //     console.log("Start...");
    // }

    return (
        <div>
            <h1 id="useTransition">useTransition</h1>
            <p>useTransition是React 18的新特性，可以讓你在更新狀態時，先顯示一個loading的UI，等到狀態更新完畢後，再顯示正確的UI。</p>
            {/* <p>一般來說我們都是用來管理其他的異步操作，例如：axios、fetch、setTimeout、setInterval等等。(還待驗證)</p> */}
            <p>使用方式：{`const [isPending, startTransition] = useTransition();`}<br />
                startTransition是一個function，用來觸發狀態更新，isPending是一個boolean，用來判斷是否正在更新狀態。</p>

            <p>實際上，useTransition是一個hook，它會回傳一個array，裡面的第一個元素是一個boolean，用來判斷是否正在更新狀態，第二個元素是一個function，用來觸發狀態更新。一旦使用就一定會重新render，所以要小心免得無限迴圈</p>
            <p>另外這個startTransition是不能直接使用的，必須要將放在其他的function中才能使用，例如：</p>
            <CommonPrism>
                {`const handleOnChange = () => {
    startTransition(() => {
    })
}`}
            </CommonPrism>

            <p>我們是在startTransition這個function裡面去更新狀態，他的優先度是比較低的，也就是說會先執行之外的程式碼，然後再執行startTransition裡面的程式碼。聽起來很像是event loop的概念，但是實際上，他們是不一樣的。</p>
            <p className='hightlight'>React 並不會在所有異步操作中暫停渲染，而是只有當使用了 **`startTransition`** API 時才會暫停渲染。
                當 **`startTransition`** 函數被調用時，React 將會暫停渲染，並且將處於 **`pending`** 狀態的異步操作排入優先級較高的佇列中，等待其他的操作完成後再進行執行。在這種情況下，React 將暫停渲染，直到異步操作完成或者超時。
                對於普通的異步操作，例如 Promise 或 async/await，React 並不會暫停渲染，而是會繼續進行渲染操作。當異步操作完成後，React 會檢查組件是否需要進行重新渲染，如果需要，則進行重新渲染。</p>
            <h2>Example</h2>
            <CommonPrism>
                {`const [isPending, startTransition] = useTransition(); // 建立一個useTransition的hook`}
            </CommonPrism>

            <p>實際運作：</p>
            <CommonPrism>
                {`const UseTransitionFC = () => {
    const [isPending, startTransition] = useTransition();
    const [list, setList] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('') // 建立一個狀態
    const LIST_LENGTH = 20000;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_LENGTH; i++) {
                l.push(e.target.value)
            }
            setList(l);
        })
    }

    return (
        <input type="text" placeholder='text' onChange={handleOnChange} value={inputValue} />
        {isPending ? <div>Loading...</div> : null}
        <p>{inputValue}</p>
        <Suspense fallback={<div>Loading...</div>}>
            {!isPending ? <div className='list_limit'>
                {list.map((item, index) => {
                    return <div key={uuid()}>{item}</div>
                })}
            </div> : null}
        </Suspense>
    )
}`}
            </CommonPrism>

            <p>在這個範例中，我們先建立一個list，長度為20000，然後在input的onChange事件中，觸發startTransition，並且在裡面去更新狀態，這樣就可以看到loading的UI了。</p>
            <p>假如不放到startTransition裡面去更新狀態，就會造成畫面卡住。因為狀態更新的時候，會導致畫面重新渲染，這樣就會造成畫面卡住。</p>

            <input type="text" placeholder='text' onChange={handleOnChange} />
            <ClearButton />

            {/* {isPending ? <div>loading...</div> : <div>done</div>}
            <p>{inputValue}</p>
            {!isPending && (<div className='list_limit'>
                {list.map((item, index) => {
                    return <div key={uuid()}>{item}</div>
                })}
            </div>)
            } */}

            {/* 這樣寫也可以 */}
            {isPending ? <div>Loading...</div> : null}
            <p>{inputValue}</p>
            <Suspense fallback={<div>Loading...</div>}>
                {!isPending ? <div className='list_limit'>
                    {list.map((item, index) => {
                        return <div key={uuid()}>{item}</div>
                    })}
                </div> : null}
            </Suspense>

            {/* 條件運算很吃效能 用上面的*/}
            {/* {isPending ? <div>loading...</div> :
                (!isPending && <div className='list_limit'>
                    {list.map((item, index) => {
                        return <div key={uuid()}>{item}</div>
                    })}
                </div>
                )
            } */}

            <h1>假如有其他的異步，那執行順序到底是如何</h1>
            <p>下面有一段程式碼，你可以猜猜看</p>
            <CommonPrism>
                {`useEffect(() => {
    console.log("every render ", "inputValue ", inputValue, "list ", list[0]);
})

const handleOnChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
        const l = []
        for (let i = 0; i < LIST_LENGTH; i++) {
            l.push(e.target.value)
        }
        console.log("startTransition");
        setList(l);
        console.log("endTransition");
    })
    setTimeout(() => {
        console.log("setTimeout");
    }, 1000);
    console.log("Start...");
    setInputValue(e.target.value)
    console.log("End...")
    // 執行順序會是
    // startTransition
    // useTransition裡面的更新狀態 (但要等到目前沒有其他的異步操作在執行)
    // setTimeout 放到event loop的佇列中
    // endTransition
    // Start...
    // 去更新狀態 => setInputValue
    // End...
    // render (因為setInputValue的state有更新，所以會重新render)
    // render 因為A也更新完成了，目前沒有其他的異步操作在執行，所以會執行useTransition裡面的更新狀態 並且React會自動將isPending和setList的狀態一起更新 所以只會render一次
    // setTimeout (stack沒有其他執行內容了，執行queue中的setTimeout)
}`}
            </CommonPrism>

            <p>正確順序為：</p>
            <CommonPrism>
                {`// 執行順序會是
1. startTransition
2. useTransition裡面的更新狀態 (但要等到目前沒有其他的異步操作在執行)
3. setTimeout 放到event loop的佇列中
4. endTransition
5. Start...
6. 去更新狀態 => setInputValue
7. End...
8. render (因為setInputValue的state有更新，所以會重新render)
9. render 因為A也更新完成了，目前沒有其他的異步操作在執行，所以會執行useTransition裡面的更新狀態 並且React會自動將isPending和setList的狀態一起更新 所以只會render一次
10. setTimeout (stack沒有其他執行內容了，執行queue中的setTimeout)`}
            </CommonPrism>

            <input type="text" placeholder='text' onChange={handleOnChange2} />
            <p>{inputValue}</p>

            <ClearButton />

        </div>
    )
}

export default UseTransitionFC
