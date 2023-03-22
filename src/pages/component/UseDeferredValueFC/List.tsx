import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react"
import uuid from "react-uuid";

// // 在 List.js 中
// const List = ({ input }: { input: string }) => {

//     const listRef = useRef<string[]>([])

//     const LIST_LENGTH = 20000;
//     const defferedValue = useDeferredValue(input);

//     useMemo(() => {
//         const newList = [];
//         for (let i = 0; i < LIST_LENGTH; i++) {
//             newList.push(defferedValue);
//         }
//         listRef.current = newList;
//     }, [defferedValue]);

//     useEffect(() => {
//         console.log(`Input: ${input}\n DefferedValue: ${defferedValue}`);
//     }, [input, defferedValue]);

//     return (
//         <div>
//             {listRef.current.map((item, index) => (
//                 <div key={uuid()}>{item}</div>
//             ))}
//         </div>
//     )
// };

// export default List;


const List = ({ input }: { input: string }) => {
    const LIST_LENGTH = 20000;
    const defferedValue = useDeferredValue(input);
    const list = useMemo(() => {
        const newList = [];
        for (let i = 0; i < LIST_LENGTH; i++) {
            newList.push(<div key={i}>{defferedValue}</div>);
        }
        return newList;
    }, [defferedValue]);

    useEffect(() => {
        console.log(`Input: ${input}\n DefferedValue: ${defferedValue}`);
    }, [input, defferedValue]);

    return <div className="list_limit">{list}</div>;
};

export default List;
