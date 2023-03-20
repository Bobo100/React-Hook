import { useEffect } from "react";
import { UseRefFC, UseReFCTimer } from "./component/UseRefFC/UseRefFC"
const UseRefPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="container">
            <UseRefFC />
            <UseReFCTimer />
        </div>
    )
}

export default UseRefPage