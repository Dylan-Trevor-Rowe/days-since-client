import { useContext, useEffect } from 'react'
import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ArticleContext } from './ArticleProvider';
import Button from '@material-ui/core/Button';
import './Articles.css'
import CommentIcon from '@material-ui/icons/Comment';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        '& > ': {
            margin: theme.spacing(2),
            width: theme.spacing(50),
            height: theme.spacing(50),
        },
    },
}));

export function Articles(props) {
    const classes = useStyles();

    const { getArticleData, articleData, deleteArticleData } = useContext(ArticleContext)
  
     const history = useHistory()

    function handleClick() {
        history.push("/articleform");
    }

    useEffect(() => {
    getArticleData()
    }, [])

    const handleDelete = (articleId) => { 
        deleteArticleData(articleId)
       .then(getArticleData)
    } 

    return <>
        <div className="article_button">
            <Button onClick={handleClick}>post new article</Button>
        </div>
        <div className={classes.root}>
            {articleData.map((row) => (
             
                <div key={row.id}>
                 <Paper>
                        <a href={row.link}> article: {row.link}</a>
                        <p> date: {row.date}</p>
                        <p> title: {row.title}</p>
                        <p> posted by: {row.user.user.username}</p>
                        <Link to={`/articles/${row.id}/comments`}><CommentIcon></CommentIcon></Link>
                        <Button onClick={() => handleDelete(row.id)}>delete</Button>
                </Paper>
               </div>
                ))}
        </div>
    
   
    </>
     }