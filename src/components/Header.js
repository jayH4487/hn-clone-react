import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div id="app-header">
            <header className="header">
            <div className="flex">
                <span className="header-title">
                <img src="https://icon.now.sh/ycombinator/fff" alt="" className="header-logo"/>
                HackerNews
                </span>
                <Link to="/" class="header-link">Top</Link>    
                <Link to="/new" class="header-link">New</Link>
                <Link to="/ask" class="header-link">Ask</Link>    
                <Link to="/show" class="header-link">Show</Link>
                <Link to="/favorites" class="header-link">Favorites</Link>
            </div>
            </header>
        </div>
    )
}

export default Header