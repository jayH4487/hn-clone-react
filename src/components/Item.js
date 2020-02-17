import React, {useState, useEffect, useContext} from "react"
import {useLocation} from "react-router-dom"

import {Context} from "../Context"
import Story from "./Story"
import Comment from "./Comment"

function Item() {
    const location = useLocation()
    const query = new URLSearchParams(location.search)

    const [story, setStory] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    const {baseUrl} = useContext(Context)
    
    const url = `${baseUrl}/item/${query.get("id")}`
    console.log({baseUrl})
    useEffect(() => {
        (async function getStories() {
            setIsError(false)
            setIsLoading(true)

            try {
                const response = await fetch(url)
                const story = await response.json()
                setStory(story)
                setComments(story.comments)
            } catch (error) {
                setIsError(true)
            }

            setIsLoading(false)
        })()
    }, [])
    

    return (
        <div>
            {isError ? "Error..." :
            isLoading ? "Loading..." :
            <>
                <div>
                    <Story story={story}/>
                </div>
                <hr/>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)
                }
            </>
            }
        </div>
    )
}

export default Item