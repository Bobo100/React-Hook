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
