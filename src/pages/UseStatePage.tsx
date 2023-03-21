import { useEffect, useState } from "react";
import UseStateFC from "./component/UseStateFC/UseStateFC"
import UseStateFCMore from "./component/UseStateFC/UseStateFCMore"

const UseStatePage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        const handleScroll = () => {
            const el = document.getElementById("UseStateFCMore");
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setShowMore(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <UseStateFC />

            <div id="UseStateFCMore">
                {showMore && <UseStateFCMore />}
            </div>
        </div>
    )
}

export default UseStatePage