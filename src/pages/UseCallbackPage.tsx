import { useEffect } from "react";
import { UseCallbackFC } from "./component/UseCallbackFC/UseCallbackFC"
const UseCallbackPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="container">
            <UseCallbackFC />
        </div>
    )
}

export default UseCallbackPage