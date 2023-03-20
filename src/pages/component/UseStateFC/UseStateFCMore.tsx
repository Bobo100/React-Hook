// UseState 範例
import { useState } from "react";
import ClearButton from "../ClearButton";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const UseStateFCMore = () => {
    //////////////////////////////////////////
    const [count3, setCount3] = useState(() => {
        console.log("initial count3")
        for (let i = 0; i < 100; i++) {
            // do nothing
            console.log("do nothing 3")
        }
        return 0;
    });

    function increment3() {
        setCount3(prevState => prevState + 1);
    }

    const [count4, setCount4] = useState(getInitialCount());

    function getInitialCount() {
        console.log("initial count4");
        for (let i = 0; i < 100; i++) {
            // do nothing
            console.log("do nothing 4")
        }

        return 0;
    }

    function increment4() {
        setCount4(prevState => prevState + 1);
    }

    //////////////////////////////////////////
    const [currentTime, setCurrentTime] = useState(() => {
        const now = new Date();
        return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    });

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         const now = new Date();
    //         setCurrentTime(
    //             now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    //         );
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div>
            <h2>useState初始值 (補充說明)</h2>
            <p>當然，如果你的初始值是很複雜的，像是計算初始值很耗時或可能引起副作用，例如像從Server端載入資料或本地存儲加載，那麼我們會建議用function in function的方式去宣告，這樣可以保證只會在第一次render時執行一次</p>

            <p>舉例來說</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const [count4, setCount4] = useState(getInitialCount());
function getInitialCount() {
    console.log("initial count4");
    for (let i = 0; i < 100; i++) {
        // do nothing
        console.log("do nothing 4")
    }
    return 0;
}`}
            </Prism>
            <p>這樣的話，每次render時，都會執行一次這個function</p>
            <p>如果你的初始值是一個很複雜的函數，那麼這樣的寫法就會導致你的程式碼執行效能變差</p>
            <p>所以我們建議你用function in function的方式去宣告</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const [count3, setCount3] = useState(() => {
    console.log("initial count3")
    for (let i = 0; i < 100; i++) {
        // do nothing
        console.log("do nothing 3")
    }
    return 0;
});`}
            </Prism>

            <p>當我們透過button去更新state的時候，就會發現兩個宣告方式的差別</p>
            <div>
                <p>請打開console，你會發現第一種寫法，每次render時，都會執行一次這個function，所以我只要更新到其他的state之類的就會導致它重新執行</p>
                <p>console.log("do nothing4")就會一直執行，會吃效能</p>
                <div>
                    <p className="hightlight">Count: {count4}</p>
                    <button onClick={increment4}>觸發count4++</button>
                </div>
            </div>

            <div>
                <p>反之，無論你怎麼去更改count3，它都只會在第一次render時執行一次，反而會因為重新render導致getInitialCount()會一直重新執行<br />
                    也就是do nothing4反而會一直出現在console上
                </p>

                <p>console.log("do nothing3")就只會執行一次for迴圈</p>
                <p className="hightlight">Count: {count3}</p>
                <button onClick={increment3}>觸發count3++</button>
            </div>
            <ClearButton />

            <p>例如，我們想再渲染進頁面的時候獲得現在的時間</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
});`}
            </Prism>
            <p>這樣的話，我們就可以在頁面上顯示現在的時間</p>
            <p>當然，這樣的寫法並不會隨著時間的變化而變化</p>
            <div>
                <p className="hightlight">Current Time: {currentTime}</p>
            </div>
            <p>如果你想要一直實現更新，要加上下面這段code</p>
            <Prism language="javascript" style={vscDarkPlus}>
                {`useEffect(() => {
    const intervalId = setInterval(() => {
        const now = new Date();
        setCurrentTime(
            now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
        );
    }, 1000);

    return () => clearInterval(intervalId);
}, []);`}
            </Prism>
        </div >
    );
};
export default UseStateFCMore;