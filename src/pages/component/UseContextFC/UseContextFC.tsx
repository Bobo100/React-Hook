// UseContext 範例
import React, { useContext, useState } from 'react'
import { CommonPrism } from '../../Common';
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
            <h1 id="useContext">useContext</h1>
            <p>useContext是一個React Hook，可以讓你在函數組件中讀取到Context的值。</p>
            <p>Context可以讓你在組件之間傳遞數據，而不需要一層一層地傳遞props。</p>

            <h3>步驟比前面的都繁雜</h3>

            <ol>
                <li>使用Context之前，需要先使用React.createContext創建一個Context。</li>
                <li>然後使用Context.Provider來包裹組件，並且傳遞一個value值。</li>
                <li>最後在組件中使用useContext來讀取Context的值。</li>
                <li>useContext接收一個Context對象（React.createContext返回的值）作為參數。useContext返回的就是Context的value值。如果Context的value值是一個函數，則需要在useContext中調用這個函數。</li>
            </ol>

            <p className='hightlight'>白話的說法就是，創建一個可以在組件之間傳遞數據的Context(內容)，很像是全域變數，但是卻不是全域變數，而是只有在包裹中的組件可以使用。</p>

            <p>別擔心，我會一步一步教你建立</p>

            <p>首先先建立一個React.createContext創建我們的Context</p>
            <CommonPrism>
                {`export const MyContext = React.createContext('')`}
            </CommonPrism>
            <p>然後使用Context.Provider來包裹組件，並且傳遞一個value值，我們這邊直接寫死，傳遞了一個Hello, world!</p>
            <CommonPrism>
                {`<MyContext.Provider value="Hello, world!">
</MyContext.Provider>`}
            </CommonPrism>

            <p>舉例來說假如我要讓{`<Home>`}組件可以使用這個Context，那麼我就需要把{`<Home>`}包裹在{`<MyContext.Provider>`}中</p>
            <CommonPrism>
                {`<MyContext.Provider value="Hello, world!">
    <Home />
</MyContext.Provider>`}
            </CommonPrism>

            <p>最後在組件中使用useContext來讀取Context的值，所以我們這邊的value就會是Hello, world!</p>
            <CommonPrism>
                {`const value = useContext(MyContext)`}
            </CommonPrism>
            <p>再把value去渲染出來，成功的就會顯示Hello, world!</p>
            <p className='hightlight'>{value}</p>

            <p>當然，我們可以複雜一些，像是可以加上function讓我們去更新內容，例如：我們增加一個state(value2)，並且在Context中加入一個function(updateValue2)</p>
            <CommonPrism>
                {`export const MyContext2 = React.createContext({
    value2: 'defaultValue',
    updateValue2: (value2: string) => {
    }
});
`}
            </CommonPrism>
            <p>再新增兩個UI component一個input和一個button用來輸入和修改</p>
            <p>並且分別給予onChange事件和onClick事件</p>
            <p>概念是當使用者輸入在input的時候會更新state，當button Click的時候去使用useContext的update功能</p>
            <CommonPrism>
                {`const { value2, updateValue2 } = useContext(MyContext2)
const [updatedValue, setUpdatedValue] = useState('');
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedValue(e.target.value)
}
const handleClick = () => {
    updateValue2(updatedValue)
}
`}
            </CommonPrism>

            <p>我們需要去父層的組件去傳遞一個function給子層的組件，並且寫下updataValue2要做的事情，這邊就是要更新value2的值</p>
            <CommonPrism>
                {`const [value, setValue] = useState('defaultValue');
const updateValue2 = (newValue: string) => {
    setValue(newValue);
}`}
            </CommonPrism>
            <p>再將要使用到的上層去包裹</p>
            <CommonPrism>
                {`<MyContext2.Provider value={{ value2: value, updateValue2 }}>
    // 這邊是要使用到的組件
</MyContext2.Provider>`}
            </CommonPrism>

            <p>成功執行的話，就可以生成下方這個UI，可以將input的值更新到value2中，並且顯示在下方</p>
            <p className='hightlight'>{value2}</p>
            <input type="text" value={updatedValue} onChange={handleChange} placeholder="請輸入要更改的value" />
            <button onClick={handleClick}>更新</button>
        </div >
    )
}

export const MyContext = React.createContext('')

export const MyContext2 = React.createContext({
    value2: '',
    updateValue2: (value2: string) => {
    }
});

