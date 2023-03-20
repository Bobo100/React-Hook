// UseTransition 範例
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const UseTransitionFC = () => {
    return (
        <div>
            <h1 id="useTransition">useTransition</h1>
            <p>useTransition是React 18的新特性，可以讓你在更新狀態時，先顯示一個loading的UI，等到狀態更新完畢後，再顯示正確的UI。</p>
            <p>使用方式: {`const [isPending, startTransition] = useTransition();`}<br />
                startTransition是一個function，用來觸發狀態更新，isPending是一個boolean，用來判斷是否正在更新狀態。</p>
            <h2>Example</h2>
        </div>
    )
}

export default UseTransitionFC
