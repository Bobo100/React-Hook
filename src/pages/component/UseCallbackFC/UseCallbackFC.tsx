// UseCallback 範例
import React, { useState, useCallback, useMemo } from 'react'
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ClearButton from '../ClearButton';
import { List } from './List';

export function UseCallbackFC() {
    const [number, setNumber] = useState(1)

    function inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.value) return;
        setNumber(parseInt(e.target.value))
    }

    const getItems = useCallback(() => {
        console.log("useCallback")
        return [number + 1, number + 2, number + 3]
    }, [number])
    //// 這邊也可以寫成
    // function getItemsfunction() {
    //     return [number + 1, number + 2, number + 3]
    // }
    // const getItems = useCallback(getItemsfunction, [number])

    const getItemsWithOutUseCallback = () => {
        console.log("Without useCallback")
        return [number + 1, number + 2, number + 3]
    }

    const [drak, setDrak] = useState(false)
    const theme = {
        background: drak ? '#333' : '#fff',
        color: drak ? '#fff' : '#333'
    }

    return (
        <div>
            <h1 id="useCallback">useCallback</h1>
            <p>useCallback是一個React Hook，可以讓你在函數組件中儲存一個函數，並且在函數組件重新渲染時，不會重新創建這個函數。</p>
            <p>useCallback接收兩個參數，第一個參數是一個函數，第二個參數是一個陣列，陣列中的元素是函數所依賴的值。</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {`const cachedFn = useCallback(fn, dependencies)
`}
            </Prism>
            <p>useCallback會返回一個函數，這個函數就是傳遞給useCallback的第一個參數。</p>
            <p>useCallback的第二個參數是一個陣列，陣列中的元素是函數所依賴的值。如果陣列中的元素沒有發生變化，則不會重新創建函數。</p>
            <p>如果陣列中的元素發生變化，則會重新創建函數。</p>

            <p>概念上來說，useCallback和useMoemo很像，都是用來儲存值的，但是useCallback儲存的是一個函數，而useMemo儲存的是一個值。</p>
            <p>依賴的部分也很像前面說的useEffect，如果依賴的值沒有發生變化，則不會重新創建函數。</p>

            <h2>Example</h2>
            <p>我們將比較兩個組件，一個使用useCallback，一個不使用useCallback。</p>
            <p>並且透過更改其他的state來觀察useCallback的效果(因為會重新render) {`=>我們前面有教過喔`}。</p>
            <p>這邊新增一個重新渲染theme的按鈕，來觀察useCallback的效果。</p>
            <p>請開啟console觀察。</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const [number, setNumber] = useState(1)

function inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) return;
    setNumber(parseInt(e.target.value))
}

const getItems = useCallback(() => {
    console.log("useCallback")
    return [number + 1, number + 2, number + 3]
}, [number])

const getItemsWithOutUseCallback = () => {
    console.log("Without useCallback")
    return [number + 1, number + 2, number + 3]
}
`}
            </Prism>

            <p style={theme}>{`The current number is ${number}`}</p>
            <input type="number" value={number} onChange={inputOnChange} placeholder="1" />
            <button onClick={() => setDrak(prevDark => !prevDark)}>Change Theme</button>
            <ClearButton />
            <div className='flexAll'>
                <List getItems={getItems} />
                <List getItems={getItemsWithOutUseCallback} />
            </div>
        </div>
    )
}


