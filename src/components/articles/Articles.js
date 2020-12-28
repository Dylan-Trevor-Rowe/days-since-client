import { useContext, useEffect } from 'react'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ArticleContext } from './ArticleProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(5),
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
                    </Paper>
                </div>
            ))}
        </div>
    );
}