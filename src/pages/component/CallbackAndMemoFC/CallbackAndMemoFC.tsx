// UseCallback 範例
import React, { useState, useCallback, useMemo } from 'react'
import { CommonPrism } from '../../Common';

import ClearButton from '../ClearButton';
import { List } from '../UseCallbackFC/List';
import { ListForMemo } from '../UseCallbackFC/ListForMemo';

export function CallbackAndMemoFC() {
    const [number, setNumber] = useState(1)

    function inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.value) return;
        setNumber(parseInt(e.target.value))
    }

    const getItems = useCallback(() => {
        console.log("useCallback")
        return [number + 1, number + 2, number + 3]
    }, [number])

    const getItems2 = useMemo(() => {
        console.log("useMemo")
        return [number + 1, number + 2, number + 3]
    }, [number])

    /*
    useCallback Hook 會緩存整個函數對象，並且只有在依賴項 [number] 發生變化時才會重新創建一個新的函數對象。
    useMemo Hook 會緩存函數的返回值，並且只有在依賴項 [number] 發生變化時才會重新計算函數的返回值。
    */

    const [drak, setDrak] = useState(false)
    const theme = {
        background: drak ? '#333' : '#fff',
        color: drak ? '#fff' : '#333'
    }

    return (
        <div>
            <p style={theme}>{`The current number is ${number}`}</p>
            <input type="number" value={number} onChange={inputOnChange} placeholder="1" />
            <button onClick={() => setDrak(prevDark => !prevDark)}>Change Theme</button>
            <ClearButton />
            <div className='flexAll'>
                <List getItems={getItems} />
                <ListForMemo getItems={getItems2} />
            </div>

            <CommonPrism>
                {`// const getItems: () => number[]
const getItems = useCallback(() => {
    console.log("useCallback")
    return [number + 1, number + 2, number + 3]
}, [number])

// const getItems2: number[]
const getItems2 = useMemo(() => {
    console.log("useMemo")
    return [number + 1, number + 2, number + 3]
}, [number])
`}
            </CommonPrism>

            <p>還記得我們前面說的差別嗎?</p>
            <p>所以，getItems 是一個函數，而 getItems2 是一個數值。</p>
        </div>
    )
}


