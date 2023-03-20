import { useEffect } from "react";
import UseTransitionFC from "./component/UseTransitionFC/UseTransitionFC"

const UseTransitionPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="container">
            <UseTransitionFC />
        </div>
    )
}

export default UseTransitionPage