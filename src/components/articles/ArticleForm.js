import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Articles.css'
import { ArticleContext } from './ArticleProvider';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 40,

    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        padding: 20
    }
}));

export function ArticleForm() {
    const { getArticleData, createArticleData } = useContext(ArticleContext)

    const [localState, setLocalState] = useState({})

    const classes = useStyles();

    let history = useHistory();

    const handleControlledInputChange = (e) => {
        const newArticleObject = Object.assign({}, localState)
        newArticleObject[e.target.name] = e.target.value
        setLocalState(newArticleObject)
    }

    useEffect(() => {
        getArticleData()
    }, [])

    const constructANewArticle = () => {
        if (localState.date && localState.title && localState.link) {

            const newArticle = {
                user: parseInt(localStorage.getItem("user_id")),
                date: localState.date,
                title: localState.title,
                link: localState.link
            }
            createArticleData(newArticle).then(() => history.push("/articles"))
        } else {
            return alert('fill out all fields')
        }
    }

    return <>
        <form className={classes.container} noValidate>
            <div className={classes.div}>
                <TextField
                    id="date"
                    label="date"
                    type="date"
                    name="date"
                    value={localState.date}
                    className={classes.textField}
                    onChange={handleControlledInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField id="standard-basic"
                    label="title" name="title"
                    defaultValue={localState.title}
                    onChange={handleControlledInputChange} />
                <TextField id="standard-basic"
                    label="link"
                    name="link"
                    defaultValue={localState.link}
                    onChange={handleControlledInputChange} />
            </div>
            <div className='articleform_button'>
                <Button
                    style={{ backgroundColor: "#1B4353", marginLeft: 10 }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={evt => {
                        
                        evt.preventDefault()
                        
                        constructANewArticle()
                        
                    }}>submit</Button>
            </div>
        </form>
    </>
}