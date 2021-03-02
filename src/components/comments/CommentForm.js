import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CommentContext } from './CommentProvider'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export function CommentForm(props) {

  const { createCommentData, getCommentsByArticleId } = useContext(CommentContext)

  const [localState, setLocalState] = useState({})

  const classes = useStyles();

  const handleControlledInputChange = (e) => {
    const newCommentObject = Object.assign({}, localState)
    newCommentObject[e.target.name] = e.target.value
    setLocalState(newCommentObject)
  }

  const constructANewComment = () => {
    const articleProps = parseInt(props.match.params.articleId)
    const newComment = {
      user: parseInt(localStorage.getItem("user_id")),
      comment: localState.comment,
      article: articleProps
    }
    createCommentData(newComment).then(() => {
      getCommentsByArticleId(parseInt(props.match.params.articleId))
    })
  }
  return (
    <div className="comment_form_container">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="comment"
          variant="outlined"
          name='comment'
          style={{ backgroundColor: 'white' }}
          onChange={handleControlledInputChange} />
        <Button onClick={constructANewComment}>
          add comment
        </Button>
      </form>
    </div>
  );
}