// UseCallback 範例
import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ClearButton from './ClearButton';
export function UseMemoFC() {
    const [number, setNumber] = useState(1)
    function inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.value) return;
        setNumber(parseInt(e.target.value))
    }
    const slowNumber = useMemo(() => {
        console.log('useMemo')
        return slowFunction(number)
    }, [number])

    const [drak, setDrak] = useState(false)
    // const theme = {
    //     background: drak ? '#333' : '#fff',
    //     color: drak ? '#fff' : '#333'
    // }
    const theme = useMemo(() => ({
        background: drak ? '#333' : '#fff',
        color: drak ? '#fff' : '#333'
    }), [drak])

    useEffect(() => {
        console.log('theme changed')
    }, [theme])

    return (
        <div>
            <h1>useMemo</h1>
            <p>useMemo是一個React Hook，可以讓你在函數組件中儲存一個值，並且在函數組件重新渲染時，不會重新計算這個值。</p>
            <p>useMemo接收兩個參數，第一個參數是一個函數，第二個參數是一個陣列，陣列中的元素是函數所依賴的值。</p>

            <p>聽起來就非常棒，因為可以不用一直重新渲染，那為甚麼不讓每個元件都使用useMemo呢？</p>
            <p>因為memo會吃掉你的記憶體，如果你的元件很大，那麼你的記憶體就會被吃掉，所以要小心使用。</p>

            <Prism language="tsx" style={vscDarkPlus}>
                {`const cachedValue = useMemo(fn, dependencies)
`}
            </Prism>

            <p style={theme}>{`The current number is ${number}`}</p>
            <p style={theme}>{`The slow number is ${slowNumber}`}</p>
            <input type="number" value={number} onChange={inputOnChange} />
            <button onClick={() => setDrak(prevDark => !prevDark)}>Change Theme</button>
            <ClearButton />
        </div>
    )
}


function slowFunction(num: number) {
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}