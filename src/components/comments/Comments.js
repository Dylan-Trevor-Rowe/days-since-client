
import { Paper } from '@material-ui/core';
import React, { useContext, useEffect } from "react"
import { CommentContext } from './CommentProvider';
import './Comment.css'

export function Comment(props) {

    const { getCommentData, commentData, getCommentByArticleId } = useContext(CommentContext)
    useEffect(() => {
        getCommentData()
    }, [])

    const handleDelete = (commentId, articleId) => {
        deleteAComment(commentId, articleId)
       .then(() => { 
           getCommentsByArticleId(articleId)
       })
    } 
    // just seeing if this guy works

    useEffect(() => {
        const articleId = parseInt(props.match.params.articleId);
        getCommentByArticleId(articleId)
    }, [])



    return <>
        <Paper className="comment_container">
            {commentData.map(val => {
                return <div key={val.id}>
                    <p>{val.user}</p>
                    <p>{val.comment}</p>
                </div>

            })}
        </Paper>
    </>

}
