import { Paper, Button } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { CommentContext } from './CommentProvider'
import './Comment.css'
import { Link } from 'react-router-dom'



export function CommentDetails(props) {
    const { commentData, getCommentsByArticleId, deleteAComment } = useContext(CommentContext)

    useEffect(() => {
        const articleId = parseInt(props.match.params.articleId)
        getCommentsByArticleId(articleId)
    }, [])

    const handleDelete = (commentId, articleId) => {
        deleteAComment(commentId, articleId)
       .then(() => { 
           getCommentsByArticleId(articleId)
       })
    } 


 return <>
    
        <Paper className="comment_paper">
            {commentData.map(val => {
                return <div className="card" key={val.id}>
                    <p>user: {val.user}</p>
                    <p>{val.comment}</p>
                   {val.user === localStorage.getItem('days_since_user') ? <Button onClick={() => handleDelete(val.id, val.article)}>delete</Button> : ''}
                </div>
                
            })}
        </Paper>
    </>
}