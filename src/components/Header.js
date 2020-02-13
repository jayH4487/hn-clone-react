import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div id="app-header">
            <header className="header">
            <div className="flex">
                <span className="header-title">
                <img
                    src="https://icon.now.sh/ycombinator/fff"
                    alt=""
                    className="header-logo"
                />
                HackerNews
                </span>
                <Link to="/" className="header-link">top</Link>
                |  
                <Link to="/new" className="header-link">new</Link>
                |
                <Link to="/ask" className="header-link">ask</Link>
                |
                <Link to="/show" className="header-link">show</Link>
                |
                <Link to="/favorites" className="header-link">favorites</Link>
            </div>
            </header>
        </div>
    )
}

export default Header