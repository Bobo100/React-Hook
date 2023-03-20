import { useEffect, useState } from "react";
import { MyContext, MyContext2, UseContextFC } from "./component/UseContextFC/UseContextFC"

const UseContextPage = () => {
    const [value, setValue] = useState('defaultValue');

    const updateValue2 = (newValue: string) => {
        setValue(newValue);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);

    return (
        <div className="container">
            <MyContext.Provider value="Hello, world!">
                <MyContext2.Provider value={{ value2: value, updateValue2 }}>
                    <UseContextFC />
                </MyContext2.Provider>
            </MyContext.Provider>           
        </div>
    )
}

export default UseContextPage