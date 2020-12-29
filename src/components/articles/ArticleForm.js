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
        paddingTop: 40
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

        const dateData = new Date().toISOString().slice(0, 10);

        const newArticle = {
            user: parseInt(localStorage.getItem("user_id")),
            date: dateData,
            title: localState.title,
            link: localState.link

        }
        createArticleData(newArticle).then(() => history.push("/articles"))
    }

    return <>
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField id="standard-basic" label="title" name="title"  defaultValue={localState.title} onChange={handleControlledInputChange} />
            <TextField id="standard-basic" label="link" name="link"  defaultValue={localState.link} onChange={handleControlledInputChange} />
  
        <div className='articleform_button'>
            <Button type="submit" variant="outlined" color="primary"  onClick={evt => {
                    evt.preventDefault()
                    constructANewArticle()
                }}>submit</Button>
        </div>
        </form>
    </>
}