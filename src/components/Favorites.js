import React, {useContext} from "react"

import {Context} from "../Context"
import Story from "./Story"

function Favorites() {

    const {favorites, addFavorite, removeFavorite} = useContext(Context)

    const viewStories = favorites.length > 0 ? favorites.map((favoriteStory, i) => {
        return (
            <Story
                key={favoriteStory.id}
                story={favoriteStory}
                index={i + 1}
                isFavorite={true}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
            />
            )  
        }) : "Add some favorites"

        
    return (
        <div>
            {viewStories}
        </div>
    )
}

export default Favorites