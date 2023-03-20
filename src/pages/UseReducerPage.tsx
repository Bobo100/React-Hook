import { useEffect } from "react";
import { UseReducerFC } from "./component/UseReducerFc/UseReducerFC"

const UseReducerPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="container">
            <UseReducerFC />
        </div>
    )
}

export default UseReducerPage