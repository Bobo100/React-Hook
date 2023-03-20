import { useState } from "react";
import { MyContext, MyContext2, UseContextFC } from "./component/UseContextFC/UseContextFC"
import { UseReducerFC } from "./component/UseReducerFc/UseReducerFC"

const UseContextPage = () => {
    const [value, setValue] = useState('defaultValue');

    const updateValue2 = (newValue: string) => {
        setValue(newValue);
    }
    
    return (
        <>
            <MyContext.Provider value="Hello, world!">
                <MyContext2.Provider value={{ value2: value, updateValue2 }}>
                    <UseContextFC />
                </MyContext2.Provider>
            </MyContext.Provider>
            <UseReducerFC />
        </>
    )
}

export default UseContextPage