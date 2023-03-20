// UseReducer 範例
import { useReducer, useState } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import uuid from "react-uuid";
import { Action2, ActionType2, reducer2 } from "./Reducer2";

// 宣告state的interface
type State = {
    count: number,
    string: string,
}

// 把Action的type定義成一個enum，只能是INCREASE或DECREASE
enum ActionType {
    INCREASE = "increase",
    DECREASE = "decrease",
}

// 宣告action的interface
interface Action {
    type: ActionType; // 這裡的type是一個enum，只能是INCREASE或DECREASE
    payload: number; // 這裡的payload是一個數字，可以是任何值，只是因為我們是做加減法，所以這裡用數字
}

function reducer(state: State, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case ActionType.INCREASE:
            return {
                ...state,
                count: state.count + payload,
            };
        case ActionType.DECREASE:
            return {
                ...state,
                count: state.count - payload,
            };
        default:
            return state;
    }
}

function increment(dispatch: React.Dispatch<Action>) {
    dispatch({ type: ActionType.INCREASE, payload: 1 });
    // 一定使用dispatch就會觸發reducer
    // 我們這邊回傳要進行 case ActionType.INCREASE 的動作 然後 payload 是 1
    // 所以就會是 state.count + 1
}
function decrement(dispatch: React.Dispatch<Action>) {
    dispatch({ type: ActionType.DECREASE, payload: 1 });
}


// Action 2
function toDo_add(dispatch2: React.Dispatch<Action2>, text: string) {
    dispatch2({ type: ActionType2.ADD, payload: { text } });
}

function toDo_delete(dispatch2: React.Dispatch<Action2>, index: number) {
    dispatch2({ type: ActionType2.DELETE, payload: index });
}

export const UseReducerFC = () => {

    const [state, dispatch] = useReducer(reducer, { count: 1, string: "hello" });
    const [state2, dispatch2] = useReducer(reducer2, { value: ["hello", "world"] });
    const [input, setInput] = useState("")

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <h1 id="useReducer">useReducer</h1>
            <p>useReducer是一個hook，它接受一個reducer函數和一個初始值，並返回一個state和dispatch函數。</p>
            <p>useReducer的用法和redux很像，但是它不需要額外的套件</p>
            <p>useReducer的reducer函數接受兩個參數，分別是當前的state和action，根據資料處理後會回傳一個新的狀態。</p>
            <p>useReducer的dispatch函數接受一個action參數，並將action傳遞給reducer函數，根據相應的action去更新state。</p>

            <h3>步驟比前面的都繁雜</h3>
            <h2>Example</h2>
            <p>首先我們先定義一個reducer函數，它接受兩個參數，分別是當前的state和action，根據資料處理後會回傳一個新的狀態。</p>
            <p>state你可以說就是存放資料的地方，而action就是存放要進行的動作，例如：加減乘除</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`// 宣告state的interface
type State = {
    count: number,
    string: string,
}

// 把Action的type定義成一個enum，只能是INCREASE或DECREASE
enum ActionType {
    INCREASE = "increase",
    DECREASE = "decrease",
}

// 宣告action的interface
interface Action {
    type: ActionType; // 這裡的type是一個enum，只能是INCREASE或DECREASE
    payload: number; // 這裡的payload是一個數字，可以是任何值，只是因為我們是做加減法，所以這裡用數字
}

function reducer(state: State, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case ActionType.INCREASE:
            return {
                ...state,
                count: state.count + payload,
            };
        case ActionType.DECREASE:
            return {
                ...state,
                count: state.count - payload,
            };
        default:
            return state;
    }
}`}
            </Prism>

            <p>然後我們在component中使用useReducer，它接受一個reducer函數和一個初始值，並返回一個state和dispatch函數。</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const [state, dispatch] = useReducer(reducer, { count: 0 });`}
            </Prism>

            <p>最後我們在component中使用dispatch函數，並傳入一個action參數，並將action傳遞給reducer函數，根據相應的action去更新state。</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`function increment(dispatch: React.Dispatch<Action>) {
    dispatch({ type: ActionType.INCREASE, payload: 1 });
    // 一定使用dispatch就會觸發reducer
    // 我們這邊回傳要進行 case ActionType.INCREASE 的動作 然後 payload 是 1
    // 所以就會是 state.count + 1
}

function decrement(dispatch: any) {
    dispatch({ type: "decrease", payload: 1 });
}`}
            </Prism>

            <h2>都完成後，你就可以獲得下面的結果</h2>
            <p>目前的值：{state.count} 目前的字串：{state.string}</p>
            <button onClick={() => increment(dispatch)}>+按鈕</button>
            <button onClick={() => decrement(dispatch)}>-按鈕</button>

            <h2>我們也可以做一個TODO的例子</h2>
            <div className="border">
                <input type="text" onChange={handleOnChange} placeholder="text"/>
                <button onClick={() => toDo_add(dispatch2, input)}>新增</button>

                {state2.value.map((item, index) => {
                    return (
                        <div key={uuid()}>
                            <p className="border margin">{item}</p>
                            <button onClick={() => toDo_delete(dispatch2, index)}>刪除</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};