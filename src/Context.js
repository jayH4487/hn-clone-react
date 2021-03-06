import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider(props) {

    const [baseUrl, setBaseUrl] = useState("https://node-hnapi.herokuapp.com")
    const [favorites, setFavorites] = useState([])

    
    function addFavorite(story) {
        setFavorites(prev => [...prev, story])
    }

    function removeFavorite(story) {
        setFavorites(prev => prev.filter(favorite => favorite.id !== story.id))
    }

    useEffect(() => {
        const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites")) || []
        setFavorites(favoritesFromStorage)
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    return (
        <Context.Provider value={ {baseUrl, favorites, addFavorite, removeFavorite} }>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}