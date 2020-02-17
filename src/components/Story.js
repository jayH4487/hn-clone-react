import React from "react"
import {Link} from "react-router-dom"

function Story({index, story, isFavorite, addFavorite, removeFavorite}) {
    return (
        <div className="story">
            <div>
                {index ? <span className="gray">{`${index}.`}</span> : ""}
                <span className="upvote">▲ </span>
                <a href={story.url}>{story.title}</a>
                {story.domain ? <span> ({story.domain})</span> : <span></span>}
            </div>

            <div>
                <div className="gray">
                    {story.points} points by {story.user} {story.time_ago}
                    {" | "}
                    <Link to={`/item?id=${story.id}`}>
                        {story.comments_count} comments
                    </Link>
                    {" | "}
                    <span className="favorite" onClick={() => isFavorite ? removeFavorite(story) : addFavorite(story)}>
                        <img className="heart" src="https://icon.now.sh/heart/ccc" alt=""/>
                        {isFavorite ? " Remove From Favorites" : " Add To Favorites"}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Story

