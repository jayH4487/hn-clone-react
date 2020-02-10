import React from "react"

function Header() {
    return (
        <div id="app-header">
            <header className="header">
            <div className="flex">
                <span className="header-title">
                <img src="https://icon.now.sh/ycombinator/fff" alt="" className="header-logo"/>
                HackerNews
                </span>
                <a href="/" class="header-link">Top</a>    
                <a href="/new" class="header-link">New</a>
                <a href="/ask" class="header-link">Ask</a>    
                <a href="/show" class="header-link">Show</a>
                <a href="/favorites" class="header-link">Favorites</a>
            </div>
            </header>
        </div>
    )
}

export default Header