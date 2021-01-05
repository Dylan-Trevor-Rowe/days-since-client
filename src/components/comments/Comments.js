import { Paper, Button } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { CommentContext } from './CommentProvider'
import './Comment.css'

export function CommentDetails(props) {
    const { commentData, getCommentsByArticleId, deleteAComment } = useContext(CommentContext)

    useEffect(() => {
        const articleId = parseInt(props.match.params.articleId)
        getCommentsByArticleId(articleId)
    }, [])

    const handleDelete = (articleId) => {
        const article = parseInt(props.match.params.articleId)
        deleteAComment(articleId)
            .then(() => {
                getCommentsByArticleId(article)
            })
    }
    return <>

        <Paper className="comment_paper">
            {commentData.map(val => {
                return <div className="card" key={val}>
                    <p>user: {val.user.user.username}</p>
                    <p>{val.comment}</p>
                    {val.user.id === parseInt(localStorage.getItem('user_id'))
                        ? <Button onClick={() => handleDelete(val.id, val.articleId)}>
                            delete</Button> : ''}
                </div>
            })}
        </Paper>
    </>
}