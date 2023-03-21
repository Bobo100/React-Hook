// UseTransition 範例
import { Suspense, useState, useTransition } from 'react';
import uuid from 'react-uuid';
import { CommonPrism } from '../../Common';

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

    return (
        <div>
            <h1 id="useTransition">useTransition</h1>
            <p>useTransition是React 18的新特性，可以讓你在更新狀態時，先顯示一個loading的UI，等到狀態更新完畢後，再顯示正確的UI。</p>
            <p>使用方式: {`const [isPending, startTransition] = useTransition();`}<br />
                startTransition是一個function，用來觸發狀態更新，isPending是一個boolean，用來判斷是否正在更新狀態。</p>

            <p>實際上，useTransition是一個hook，它會回傳一個array，第一個元素是一個boolean，用來判斷是否正在更新狀態，第二個元素是一個function，用來觸發狀態更新。</p>

            <p>我們是在startTransition這個function裡面去更新狀態，他的優先度是比較低的，也就是說會先執行之外的程式碼，然後再執行startTransition裡面的程式碼。</p>
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

            <input type="text" placeholder='text' onChange={handleOnChange} value={inputValue} />
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


        </div>
    )
}

export default UseTransitionFC
