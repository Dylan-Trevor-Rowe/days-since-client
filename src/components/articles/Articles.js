import { useContext, useEffect } from 'react'
import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ArticleContext } from './ArticleProvider';
import Button from '@material-ui/core/Button';
import './Articles.css'
import CommentIcon from '@material-ui/icons/Comment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 20

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    Card: {
        marginTop: 20,
        minHeight: 200,
        maxHeight: 450,
        minWidth: 200,
        maxWidth: 250
    },
    Buttons: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
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
                    <Card className={classes.Card} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               <h3 style={{ fontFamily: 'Tinos', fontSize: 'larger' }}>Date: {row.date}</h3>
                                <br />
                            </Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            <h3 style={{ fontFamily: 'Tinos', fontSize: 'larger' }}>Title: {row.title}</h3>
                                <br />
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            <h3 style={{ fontFamily: 'Tinos', fontSize: 'larger' }}><Link> {row.link} </Link></h3>
                                <br />
                            </Typography>
                            <Typography variant="body2" component="p">
                                <h3 style={{ fontFamily: 'Tinos', fontSize: 'larger' }}>Posted-By: {row.user.user.username}</h3>
                                <br />
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.Buttons}>
                            </Typography>
                            <br />
                            <div className="link_container">
                            <Link to={`/articles/${row.id}/comments`}><CommentIcon color='primary'></CommentIcon></Link>
                            {row.user.user.id === parseInt(localStorage.getItem('user_id')) ? 
                            <Button onClick={() => handleDelete(row.id)}>delete</Button> : ''}
                            <br />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </>
}