import React from "react"

function Comment({comment}) {
    const hasNestedComments = comment.comments.length > 0
    return (
        <div className={`nested-comments-${comment.level}`}>
            <p className="comment-header">
                {comment.user} | {comment.time_ago}
            </p>
            <div dangerouslySetInnerHTML={ {__html: comment.content} } />
            {hasNestedComments && comment.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    )
}

export default Comment