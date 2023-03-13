import React, { useContext, useState } from 'react';
import UseStateFC from './component/UseStateFC';
import { UseRefFC, UseReFCTimer } from './component/UseRefFC';
import { UseEffectFC } from './component/UseEffectFC';
import { UseContextFC, MyContext, MyContext2 } from './component/UseContextFC';
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
            <UseRefFC />
            <UseReFCTimer />
            <UseEffectFC />
            <MyContext.Provider value="Hello, world!">
                <MyContext2.Provider value={{ value2: value, updateValue2 }}>
                    <UseContextFC />
                </MyContext2.Provider>
            </MyContext.Provider>
        </div >
    );
};
