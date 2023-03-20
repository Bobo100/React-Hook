import { useEffect } from "react";
import UseStateFC from "./component/UseStateFC/UseStateFC"
import UseStateFCMore from "./component/UseStateFC/UseStateFCMore"

const UseStatePage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="container">
            <UseStateFC />
            <UseStateFCMore />
        </div>
    )
}

export default UseStatePage