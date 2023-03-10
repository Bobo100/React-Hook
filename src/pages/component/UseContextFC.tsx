// UseContext 範例

import React, { useContext, useState } from 'react'
import { CodeBlockTS } from './Common'

export const UseContextFC = () => {
    const value = useContext(MyContext)

    const { value2, updateValue2 } = useContext(MyContext2)
    const [updatedValue, setUpdatedValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedValue(e.target.value)
    }

    const handleClick = () => {
        updateValue2(updatedValue)
    }


    return (
        <div>
            <h1>useContext</h1>
            <p>useContext是一個React Hook，可以讓你在函數組件中讀取到Context的值。</p>
            <p>Context可以讓你在組件之間傳遞數據，而不需要一層一層地傳遞props。</p>

            <h3>步驟比前面的都繁雜</h3>

            <ol>
                <li>使用Context之前，需要先使用React.createContext創建一個Context。</li>
                <li>然後使用Context.Provider來包裹組件，並且傳遞一個value值。</li>
                <li>最後在組件中使用useContext來讀取Context的值。</li>
                <li>useContext接收一個Context對象（React.createContext返回的值）作為參數。useContext返回的就是Context的value值。如果Context的value值是一個函數，則需要在useContext中調用這個函數。</li>
            </ol>

            <p>使用方式：首先先建立一個React.createContext創建我們的Context</p>
            <CodeBlockTS>
                {`export const MyContext = React.createContext('defaultValue')`}
            </CodeBlockTS>
            <p>然後使用Context.Provider來包裹組件，並且傳遞一個value值。</p>
            <CodeBlockTS>
                {`<MyContext.Provider value="Hello, world!">
</MyContext.Provider>`}
            </CodeBlockTS>
            <p>最後在組件中使用useContext來讀取Context的值。</p>
            <CodeBlockTS>
                {`const value = useContext(MyContext)`}
            </CodeBlockTS>
            <p>成功執行的話就會顯示 {value}</p>

            <p>當然，我們可以複雜一些，像是可以加上function讓我們去更新內容，例如</p>
            <CodeBlockTS>
                {`export const MyContext2 = React.createContext({
    value2: 'defaultValue',
    updateValue2: (value2: string) => {
    }
});
`}
            </CodeBlockTS>
            <CodeBlockTS>
                {`const { value2, updateValue2 } = useContext(MyContext2)`}
            </CodeBlockTS>
            <p>再新增兩個UI component一個input和一個button用來輸入和修改</p>
            <p>並且分別給予onChange事件和onClick事件</p>
            <p>概念是當使用者輸入在input的時候會更新state，當button Click的時候去使用useContext的update功能</p>
            <CodeBlockTS>
                {`const { value2, updateValue2 } = useContext(MyContext2)
const [updatedValue, setUpdatedValue] = useState('');
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedValue(e.target.value)
}
const handleClick = () => {
    updateValue2(updatedValue)
}
`}
            </CodeBlockTS>

            <p>我們需要去父層的組件去傳遞一個function給子層的組件</p>
            <CodeBlockTS>
                {`const [value, setValue] = useState('defaultValue');
const updateValue2 = (newValue: string) => {
    setValue(newValue);
}`}
            </CodeBlockTS>
            <p>將組件包裹起來</p>
            <CodeBlockTS>
                {`<MyContext2.Provider value={{ value2: value, updateValue2 }}>
</MyContext2.Provider>`}
            </CodeBlockTS>


            <p>成功執行的話就會顯示 {value2}</p>
            <input type="text" value={updatedValue} onChange={handleChange} placeholder="請輸入要更改的value" />
            <button onClick={handleClick}>更新</button>

        </div >
    )
}

export const MyContext = React.createContext('defaultValue')

export const MyContext2 = React.createContext({
    value2: 'defaultValue',
    updateValue2: (value2: string) => {
    }
});
