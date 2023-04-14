import { CommonPrism } from "../../Common";
import { UseToggleFC } from "./CustomHookExample/useToggleFC";

export function CustomHookFC() {
    return (
        <div>
            <h1>Custom Hook</h1>
            <p>客製化Hook，可以讓你在不同的組件中重複使用狀態邏輯。</p>
            <p>你可以把一個組件中的狀態邏輯抽離出來，然後在其他組件中使用。</p>
            <p>這樣可以讓你在不同的組件中重複使用狀態邏輯，而不用在每個組件中都寫一次。</p>
            <p>另一個好處就是把讓程式碼更加可讀，因為你可以把狀態邏輯抽離出來。</p>

            <p>使用方式：很簡單的寫一個function然後裡面使用到hook就可以了。</p>
            <CommonPrism>
                {`// /useCustomHook.tsx
import {useState} from 'react';

function useCustomHook(defaultValue: any) {
    const [value, setValue] = useState(defaultValue);
    return [value, setValue];
}`}
            </CommonPrism>

            <p>就像上面寫的這樣，就可以使用自定義的hook，如下我們就可以引用近來並且使用</p>
            <CommonPrism>
                {` // UseCustomHookPage.tsx
export function UseCustomHookPage() {
    const [hookValue, setHookValue] = useCustomHook(false);
    
    return (
        <>
            <div>{hookValue.toString()}</div>
        </>
    )
}`}
            </CommonPrism>

            <p>上面我們寫的內容是非常簡單的，基本上根本不需要使用到custom hook，但是如果你的狀態邏輯很複雜，或是你有很多地方都需要使用到這個狀態邏輯，那麼就可以考慮使用custom hook。</p>
            <p>下面我們再做一個示範，我們來實作一個toggle的custom hook，如下：</p>
            <CommonPrism>
                {`// useToggleHook.tsx
import { useState } from "react";

// value 只能設定是any，因為我們要判斷傳入的參數是否為boolean，如果是boolean就直接設定，如果不是boolean就取反
export default function useToggleHook(defaultValue: boolean): [boolean, (value: any) => void] {
    const [value, setValue] = useState(defaultValue);

    // 這邊我們去判斷傳入的參數是否為boolean，如果是boolean就直接設定，如果不是boolean就取反
    function toggleValue(value?: boolean) {
        setValue(currentValue =>
            typeof value === 'boolean' ? value : !currentValue)
    }

    return [value, toggleValue]
}`}
            </CommonPrism>

            <p>接著我們來實作一個組件，這個組件要來使用我們剛剛寫的custom hook，如下：</p>
            <CommonPrism>
                {`// useToggleFC.tsx
import useToggleHook from "./useToggleHook";

export function UseToggleFC() {
    const [value, toggleValue] = useToggleHook(false);

    return (
        <>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>
                Toggle
            </button>
            <button onClick={() => toggleValue(true)}>
                True
            </button>
            <button onClick={() => toggleValue(false)}>
                False
            </button>
        </>
    )
}`}
            </CommonPrism>

            <p>最後我們來使用這個組件，如下：</p>
            <UseToggleFC />

            <p className="hightlight">當然，你可以實現很多的hook，像是useTimeout, useDebounce, useUpdateEffect, useArray</p>



        </div>

    )
}