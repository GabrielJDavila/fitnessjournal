import { useState, useRef } from "react"
import { Link } from "react-router-dom"

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const menuRef = useRef(null)

    const menuStyles = {
        height: openMenu ? "213px" : "0",
        transition: openMenu ? ".2s ease-in-out" : ""
    }

    function toggleMenu() {
        setOpenMenu(prev => !prev)
    }

    const handleClickOutside = (e) => {
        if(menuRef.current && !menuRef.current.contains(e.target)) {
            setOpenMenu(false)
        }
    }

    document.addEventListener("click", handleClickOutside)

    return (
        <header>
            <h2 className="app-title">The Fitbook</h2>
            <nav className="nav">
                <Link to="AllExercises" className="main-nav-link">
                    <i className="fa-solid fa-plus nav-item"></i>
                </Link>
                <i ref={menuRef} className="fa-solid fa-ellipsis-vertical nav-item" onClick={toggleMenu}></i>
                <ul className="user-menu" style={menuStyles}>
                    <Link to="/" className="menu-item-link">
                        <li className="menu-item">Dashboard</li>
                    </Link>
                    <Link className="menu-item-link">
                        <li className="menu-item">Settings</li>
                    </Link>
                    <Link className="menu-item-link">
                        <li className="menu-item">Log Analysis</li>
                    </Link>
                    <Link className="menu-item-link">
                        <li className="menu-item">Body Stats</li>
                    </Link>
                    {/* <li className="menu-item">Settings</li>
                    <li className="menu-item">Analysis</li>
                    <li className="menu-item">Body stats</li> */}
                </ul>
            </nav>

        </header>
    )
}