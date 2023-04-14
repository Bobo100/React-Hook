import { useEffect } from "react";
import ContextAndReducer from "./component/ContextAndReducerFC/ContextAndReducer"
import { ContextAndReducerCode } from "./component/ContextAndReducerFC/ContextAndReducerCode"

const ContextAndReducerPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="container">
            <h2 id='different1' className='hightlight'>關於useContext和useReducer的差別</h2>
            <p>關於useContext和useReducer的差別</p>
            <p>先說一下，基本上兩者能做的事情非常像，但我們還使以這些元件原先的開發目的來說明：</p>
            <ol>
                <li>useContext是用來獲取全局的context，而useReducer是用來處理複雜的狀態邏輯。</li>
            </ol>
            <p>useContext 主要用於獲取 React 中的全局狀態。<br />
                通常情況下，當我們需要在多個組件之間共享數據時，可以使用 Context 來實現。</p>

            <p>useReducer 則主要用於處理複雜的狀態邏輯。<br />
                它可以幫助開發者更好地管理組件中的狀態，尤其是當狀態的更新有較複雜的邏輯時。</p>

            <p className='hightlight'>實現全局狀態管理</p>
            <p>如果要實現全局狀態管理，通常會同時使用 useContext 和 useReducer。
                具體來說，開發者可以在 Context 中定義一個 state 和 reducer，然後將它們注入到組件中。
                在需要使用全局狀態的組件中，可以使用 useContext 獲取到 Context 中的 state，然後使用 useReducer 更新 Context 中的 state。這樣就可以實現全局狀態管理了。</p>
            {/* useReducer useContext搭配使用 */}
            <ContextAndReducer />
            <p className='hightlight'>完整的程式碼</p>
            <ContextAndReducerCode />
        </div>
    )
}

export default ContextAndReducerPage