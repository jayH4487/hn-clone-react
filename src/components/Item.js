import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"

import Story from "./Story"

function Item(props) {
    const location = useLocation()
    const query = new URLSearchParams(location.search)

    const [story, setStory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    
    const url = `https://node-hnapi.herokuapp.com/item/${query.get("id")}`
    useEffect(() => {
        (async function getStories() {
            setIsError(false)
            setIsLoading(true)

            try {
                const response = await fetch(url)
                const story = await response.json()
                setStory(story)
            } catch (error) {
                setIsError(true)
            }

            setIsLoading(false)
        })()
    }, [])

    return (
        <div>
            <Story story={story}/>
        </div>
    )
}

export default Item