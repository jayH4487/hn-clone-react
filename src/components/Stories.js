import React, {useState, useEffect, useContext} from "react"

import {Context} from "../Context"
import Story from "./Story"

function Stories({path}) {

    const [stories, setStories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    const {baseUrl, favorites, addFavorite, removeFavorite} = useContext(Context)

    const url = `${baseUrl}/${path}`
    useEffect(() => {
        (async function getStories() {
            setIsError(false)
            setIsLoading(true)

            try {
                const response = await fetch(url)
                const stories = await response.json()
                setStories(stories)
            } catch (error) {
                setIsError(true)
            }

            setIsLoading(false)
        })()
    }, [path])

    const viewStories = stories.map((story, i) => {
        return (
            <Story
                key={story.id}
                story={story}
                index={i + 1}
                isFavorite={favorites.some(favoriteStory => favoriteStory.id === story.id)}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
            />
            )  
        })

    return (
        <div>
            {isError && "Error..."}
            {isLoading ? "Loading..." :
            viewStories
            }
        </div>
    )
}

export default Stories