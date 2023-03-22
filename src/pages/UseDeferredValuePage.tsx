import { useEffect } from "react";
import { UseDeferredValueFC } from "./component/UseDeferredValueFC/UseDeferredValueFC";

const UseDeferredValuePage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="container">
            <UseDeferredValueFC />
        </div>
    )
}

export default UseDeferredValuePage