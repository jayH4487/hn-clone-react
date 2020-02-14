import React from "react"
import {Link, NavLink} from "react-router-dom"

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
                <NavLink
                    exact to="/"
                    className="header-link"
                    activeStyle={{
                        color: "white"
                    }}
                >
                    top
                </NavLink>
                |  
                <NavLink
                    to="/new"
                    className="header-link"
                    activeStyle={{
                        color: "white"
                    }}
                >
                    new
                </NavLink>
                |
                <NavLink
                    to="/ask"
                    className="header-link"
                    activeStyle={{
                        color: "white"
                    }}
                >
                    ask
                </NavLink>
                |
                <NavLink
                    to="/show"
                    className="header-link"
                    activeStyle={{
                        color: "white"
                    }}
                >
                    show
                </NavLink>
                |
                <NavLink
                    to="/favorites"
                    className="header-link"
                    activeStyle={{
                        color: "white"
                    }}
                >
                    favorites
                </NavLink>
            </div>
            </header>
        </div>
    )
}

export default Header