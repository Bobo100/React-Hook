export default function ClearButton() {
    // 設立一個清除console的按鈕
    function clearConsole() {
        console.clear(); // 清除瀏覽器 console 的內容
    }

    return (
        <div>
            <button onClick={clearConsole}>Clear Console</button>
        </div>
    )
}