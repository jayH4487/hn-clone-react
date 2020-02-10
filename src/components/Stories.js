import React from "react"
import {Switch, Route} from "react-router-dom"

function Stories() {
    return (
        <div id="router-outlet">
            <Switch>
                <Route exact path="/">
                    Top
                </Route>
                <Route path="/new">
                    New
                </Route>
                <Route path="/ask">
                    Ask
                </Route>
                <Route path="/show">
                    Show
                </Route>
                <Route path="/favorites">
                    Favorites
                </Route>
            </Switch>
        </div>
    )
}

export default Stories