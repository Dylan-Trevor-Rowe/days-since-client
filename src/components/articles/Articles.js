import { useContext, useEffect } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ArticleContext } from './ArticleProvider';
import AddCommentIcon from '@material-ui/icons/AddComment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(50),
            height: theme.spacing(50),
        },
    },
}));

export function Articles() {
    const classes = useStyles();

    const { getArticleData, articleData } = useContext(ArticleContext)

    useEffect(() => {
        getArticleData()
    }, [])

    return (
        <div className={classes.root}>
            {articleData.map((row) => (
                <div key={row}>
                    <Paper elevation={5}>
                        <a href={row.link}> article: {row.link}</a>
                        <p> date: {row.date}</p>
                        <p> title: {row.title}</p>
                        <p> user: {row.user.id}</p>
                        <Link><AddCommentIcon color='primary'>comment</AddCommentIcon></Link>
                    </Paper>
                </div>
            ))}
        </div>
    );
}