import React from "react"
import {Switch, Route} from "react-router-dom"

import Stories from "./Stories"
import Item from "./Item"
import Favorites from "./Favorites"

function Pages() {
    return (
        <div id="router-outlet">
            <Switch>
                <Route exact path="/">
                    <Stories path="news"/>
                </Route>

                <Route path="/new">
                    <Stories path="newest"/>
                </Route>

                <Route path="/ask">
                    <Stories path="ask"/>
                </Route>

                <Route path="/show">
                    <Stories path="show"/>
                </Route>

                <Route path="/favorites">
                    <Favorites />
                </Route>

                <Route path="/item">
                    <Item />
                </Route>

            </Switch>
        </div>
    )
}

export default Pages