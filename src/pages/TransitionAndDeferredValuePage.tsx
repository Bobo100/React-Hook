import { useEffect } from "react";

const TransitionAndDeferredValuePage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="container">
            <h2 id="different3" className='hightlight'>關於useTransition和useDeferredValue的差別</h2>
            <p>實際上，他們不像前面的useMemo或是useCallback會讓人混淆，他們的差別很明顯，useTransition是用來更新狀態的，而useDeferredValue是用來延遲一個值的更新。</p>
            <p>因為他們都是React 18的新特性，所以我特別抓出來說明</p>

        </div>
    )
}

export default TransitionAndDeferredValuePage