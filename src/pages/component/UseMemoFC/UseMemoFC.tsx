// UseCallback 範例
import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ClearButton from '../ClearButton';


function slowFunction(num: number) {
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}
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

    // const slowNumber2 = useCallback(() => {
    //     console.log('useCallback')
    //     return slowFunction(number)
    // }, [number])

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
            <h1 id="useMemo">useMemo</h1>
            <p>useMemo是一個React Hook，可以讓你在函數組件中儲存一個值，並且在函數組件重新渲染時，不會重新計算這個值。除非這個值的依賴值發生了變化。</p>
            <p>useMemo接收兩個參數，第一個參數是一個函數，第二個參數是一個陣列，陣列中的元素是函數所依賴的值。</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {`const cachedValue = useMemo(fn, dependencies)
`}
            </Prism>

            <p>聽起來就非常棒，因為可以不用一直重新渲染，那為甚麼不讓每個元件都使用useMemo呢？</p>
            <p>因為memo會吃掉你的記憶體，如果你的元件很大，那麼你的記憶體就會被吃掉，所以要小心使用。</p>

            <p>下面我們實作，看memo的幫助下有多棒</p>

            <Prism language="javascript" style={vscDarkPlus}>
                {`import React, { useMemo, useState, useEffect } from 'react'
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ClearButton from '../ClearButton';

function slowFunction(num: number) {
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}

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
    const theme = useMemo(() => ({
        background: drak ? '#333' : '#fff',
        color: drak ? '#fff' : '#333'
    }), [drak])

    useEffect(() => {
        console.log('theme changed')
    }, [theme])

    return (
        <div>
            <h1 id="useMemo">useMemo</h1>
            <p style={theme}>{\`The current number is \${number}\`}</p>
            <p style={theme}>{\`The slow number is \${slowNumber}\`}</p>
            <input type="number" value={number} onChange={inputOnChange} placeholder="1" />
            <button onClick={() => setDrak(prevDark => !prevDark)}>Change Theme</button>
            <ClearButton />
        </div>
    )
}
`}
            </Prism>

            <p>我們在一個計算很大量的函數中，使用了memo，可以看到，只有在number改變時，才會重新計算slowNumber</p>
            <p>如果沒有使用memo，那麼每次重新渲染(例如當我變更theme的時候)，就都會重新計算slowNumber，會導致程式運行的非常慢</p>
            <p>這樣就可以避免不必要的計算，提升效能</p>

            <p style={theme}>{`The current number is ${number}`}</p>
            <p style={theme}>{`The slow number is ${slowNumber}`}</p>
            <input type="number" value={number} onChange={inputOnChange} placeholder="1" />
            <button onClick={() => setDrak(prevDark => !prevDark)}>Change Theme</button>
            <ClearButton />
        </div>
    )
}

