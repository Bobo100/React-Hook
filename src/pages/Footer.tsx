import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div>
            <p>快速連結區</p>
            <Link to="/" className='hightlight'>Home</Link>
            <Link to="/useState" className='hightlight'>useState</Link>
            <Link to="/useRef" className='hightlight'>useRef</Link>
            <Link to="/useEffect" className='hightlight'>useEffect</Link>
            <Link to="/useContext" className='hightlight'>useContext</Link>
            <Link to="/useReducer" className='hightlight'>useReducer</Link>
            <Link to="/different1" className='hightlight'>useContext和useReducer的差別</Link>
            <Link to="/useMemo" className='hightlight'>useMemo</Link>
            <Link to="/useCallback" className='hightlight'>useCallback</Link>
            <Link to="/different2" className='hightlight'>useMemo和useCallback的差別</Link>
            <Link to="/useTransition" className='hightlight'>useTransition</Link>

            <a className='hightlight' href="https://courses.webdevsimplified.com/view/courses/react-hooks-simplified">很棒的教學網站</a>
        </div>
    )
}