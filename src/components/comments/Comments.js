import { Paper, Button } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { CommentContext } from './CommentProvider'
import './Comment.css'
import {
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    fonts: {
        fontWeight: "bold"
    },
    inline: {
        display: "inline"
    },
    root: {
        width: "100%",
        backgroundColor: 'lightGrey',
    }

}));

export function CommentDetails(props) {
    const classes = useStyles();
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
        <List className={classes.root}>
            {commentData.map(comment => {
                console.log("Comment", comment);
                return (
                    <React.Fragment key={comment.id}>

                        <ListItem key={comment.id} alignItems="flex-start">
                            <ListItemText
                                primary={
                                    <Typography className={classes.fonts}>
                                        User: {comment.user.user.username}
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {` - ${comment.comment}`}
                                        </Typography>
                                    </>
                                }
                            />

                            {comment.user.id === parseInt(localStorage.getItem('user_id'))
                                ? <Button onClick={() => handleDelete(comment.id, comment.articleId)}>
                                    delete</Button> : ''}
                        </ListItem>
                    </React.Fragment>
                );
            })}
        </List>

        {/* <List className={classes.root}>
            {commentData.map(val => {
                return <ListItem key={val.id} alignItems="flex-start">
                    <Typography className={classes.fonts}>
                    <p>user: {val.user.user.username}</p>
                    </Typography >
                    <p>{val.comment}</p>
                  
              </ListItem>
            })}
        </List> */}
    </>
}