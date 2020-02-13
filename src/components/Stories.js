import React, {useState, useEffect} from "react"

import Story from "./Story"

function Stories({path}) {

    const [stories, setStories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    
    const url = `https://node-hnapi.herokuapp.com/${path}`
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


    return (
        <div>
            {isError && "Error..."}
            {isLoading ? "Loading..." :
            stories.map((story, i) => <Story key={story.id} story={story} index={i + 1}/>)
            }
        </div>
    )
}

export default Stories