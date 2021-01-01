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


export  function CommentForm(props) {

    const {  createCommentData, getCommentsByArticleId } = useContext(CommentContext)
    const [localState, setLocalState] = useState({})
    // const [newLocal, setNewLocal] = useState([])

    const classes = useStyles();

    
    console.log(props.match.params.articleId)




  const handleControlledInputChange = (e) => {
        const newCommentObject = Object.assign({}, localState)
        newCommentObject[e.target.name] = e.target.value
        setLocalState(newCommentObject)
    }

    const constructANewComment = () => {

    const newComment = {
            user: parseInt(localStorage.getItem("user_id")),
            comment: localState.comment,
            article: parseInt(props.match.params.articleId)
      }
        createCommentData(newComment).then(() => {
          getCommentsByArticleId(props.match.params.articleId)
        })
    }

  return (
    <div className="comment_form_container">
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Outlined" variant="outlined" name='comment' defaultValue={localState.comment} onChange={handleControlledInputChange} />
    <Button onClick={constructANewComment}>submit comment</Button>
    </form>
    </div>
  );
}