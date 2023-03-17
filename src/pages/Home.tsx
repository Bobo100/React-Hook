import { useState } from 'react';
import UseStateFC from './component/UseStateFC';
import { UseRefFC, UseReFCTimer } from './component/UseRefFC';
import { UseEffectFC } from './component/UseEffectFC';
import { UseContextFC, MyContext, MyContext2 } from './component/UseContextFC';
import UseStateFCMore from './component/UseStateFCMore';
import { UseCallbackFC } from './component/UseCallbackFC';
import { UseMemoFC } from './component/UseMemoFC';
import { UseReducerFC } from './component/UseReducerFC';
export const Home = () => {

    const [value, setValue] = useState('defaultValue');

    const updateValue2 = (newValue: string) => {
        setValue(newValue);
    }

    return (
        <div className="container">
            <h1>最近找到一個很棒的教學網站</h1>
            <h2>https://courses.webdevsimplified.com/view/courses/react-hooks-simplified</h2>
            <UseStateFC />
            <UseStateFCMore />
            <UseRefFC />
            <UseReFCTimer />
            <UseEffectFC />
            <MyContext.Provider value="Hello, world!">
                <MyContext2.Provider value={{ value2: value, updateValue2 }}>
                    <UseContextFC />
                </MyContext2.Provider>
            </MyContext.Provider>
            <UseMemoFC />
            <UseCallbackFC />
            <h2 className='hightlight'>關於useCallback和useMemo的差別</h2>
            <p>關於useCallback和useMemo的差別，可以簡單地解釋成下面兩點：</p>
            <ol>
                <li>useCallback用來儲存函數並返回這個函數的memoized版本。當你傳遞的callback函數需要作為props傳到子元件時，使用useCallback() 可以避免因為父元件重新渲染而導致子元件不必要的重複渲染。也就是當函數是作為props傳遞給其他組件時，通常搭配React.memo來提高性能。</li>
                <li>useMemo是用來儲存具有昂貴計算代價的函數的返回值。當你多次需要調用某一個方案，但每次都要重新計算，建議使用useMemo。</li>
            </ol>

            <UseReducerFC />
        </div >
    );
};
