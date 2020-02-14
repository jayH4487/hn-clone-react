import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider(props) {

    const [baseUrl, setBaseUrl] = useState("https://node-hnapi.herokuapp.com")
    const [favorites, setFavorites] = useState([])

    
    function addFavorite(storyId) {
        setFavorites(prev => [...prev, storyId])
    }

    function removeFavorite(storyId) {
        setFavorites(prev => prev.filter(favorite => favorite !== storyId))
    }

    return (
        <Context.Provider value={ {baseUrl, favorites, addFavorite, removeFavorite} }>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}