import { useEffect } from "react";
import { UseEffectFC } from "./component/UseEffectFC/UseEffectFC"

const UseEffectPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="container">
            <UseEffectFC />            
        </div>
    )
}

export default UseEffectPage