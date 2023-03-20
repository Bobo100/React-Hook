import { CommonPrism } from "../Common"

export const ContextAndReducerCode = () => {
    return (
        <CommonPrism limit_height="limit_height">
            {`import React, { useContext, useReducer, createContext, useState } from "react";

// 定義 state 和 reducer
type IState = {
    count: number;
    name: string;
}

enum ActionType {
    increment = "increment",
    decrement = "decrement",
    changeName = "changeName",
}

type Action = {
    type: ActionType;
    payload: any;
}

function reducer(state: IState, action: Action): IState {
    switch (action.type) {
        case ActionType.increment:
            return {
                ...state,
                count: state.count + action.payload,
                name: state.name // 更新 name 屬性
            };
        case ActionType.decrement:
            return {
                ...state,
                count: state.count - action.payload,
                name: state.name  // 更新 name 屬性
            };
        case ActionType.changeName:
            return {
                ...state,
                count: state.count, // 更新 count 屬性
                name: action.payload  // 更新 name 屬性
            };
        default:
            return state;
    }
}

interface IProps {
    children: React.ReactNode;
}

// useContext
// 定義一個 context，提供全局狀態給其他組件使用
const GlobalContext = createContext({
    state: { count: 0, name: "123" },
    dispatch: (action: Action) => { }
});

const initialState: IState = { count: 0, name: "123" };

// 定義一個組件，包裹所有需要使用全局狀態的子組件
const GlobalProvider = ({ children }: IProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        // 把useReducer的state和dispatch放在context中，讓子組件可以取得它們
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

// 定義一個子組件，使用 useContext 取得全局狀態並更新它
const SubComponent = () => {

    const [name, setName] = useState<string>("");

    // 子組件可以透過useContext獲得dispatch(從useReducer中獲得的)和state(從useReducer中獲得的
    const { state, dispatch } = useContext(GlobalContext);
    const handleIncrement = () => {
        dispatch({ type: ActionType.increment, payload: 1 });
    };
    const handleDecrement = () => {
        dispatch({ type: ActionType.decrement, payload: 1 });
    };

    // 改名字
    const handelChangeName = () => {
        dispatch({ type: ActionType.changeName, payload: name });
    };
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <p>Count: {state.count}</p>
            <p>Name: {state.name}</p>
            <input type="text" placeholder="change name" onChange={handleChangeName} />
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handelChangeName}>changeName</button>
        </div>
    );
};

// 將所有需要使用全局狀態的子組件放在 GlobalProvider 中
const ContextAndReducer = () => {
    return (
        <GlobalProvider>
            <SubComponent />
        </GlobalProvider>
    );
};

export default ContextAndReducer;`}
        </CommonPrism>
    )
}