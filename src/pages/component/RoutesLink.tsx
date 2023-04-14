import { NavLink } from "react-router-dom"

const RoutesLink = () => {
    return (
        <>
            <NavLink to="/" className='hightlight'>Home</NavLink>
            <NavLink to="/useState" className='hightlight'>useState</NavLink>
            <NavLink to="/useRef" className='hightlight'>useRef</NavLink>
            <NavLink to="/useEffect" className='hightlight'>useEffect</NavLink>
            <NavLink to="/useContext" className='hightlight'>useContext</NavLink>
            <NavLink to="/useReducer" className='hightlight'>useReducer</NavLink>
            <NavLink to="/ContextAndReducerPage" className='hightlight'>useContext和useReducer的差別</NavLink>
            <NavLink to="/useMemo" className='hightlight'>useMemo</NavLink>
            <NavLink to="/useCallback" className='hightlight'>useCallback</NavLink>
            <NavLink to="/CallbackAndMemoPage" className='hightlight'>useMemo和useCallback的差別</NavLink>
            <NavLink to="/useTransition" className='hightlight'>useTransition</NavLink>
            <NavLink to="/useDeferredValue" className='hightlight'>useDeferredValue</NavLink>
            <NavLink to="/customHook" className='hightlight'>customHook</NavLink>

            <a className='hightlight' href="https://courses.webdevsimplified.com/view/courses/react-hooks-simplified">很棒的教學網站</a>
        </>
    )
}

export default RoutesLink