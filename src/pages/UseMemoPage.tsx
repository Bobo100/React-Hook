import { useEffect } from "react";
import { UseMemoFC } from "./component/UseMemoFC/UseMemoFC"

const UseMemoPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="container">
            <UseMemoFC />
        </div>
    )
}

export default UseMemoPage