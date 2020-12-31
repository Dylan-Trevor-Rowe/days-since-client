import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { CommentContext } from './CommentProvider'
import { AddComment } from '@material-ui/icons';
import { useHistory, Link } from 'react-router-dom'


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: 300,
        maxHeight: 300,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        overflow: 'scroll',
        backgroundColor: 'white'

    },
}));



export function CommentDetails(props) {

    const history = useHistory()

    const { commentData } = useContext(CommentContext)

    // useEffect(() => {
    //     getCommentsby()
    // }, [])


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (

        <div style={modalStyle} className={classes.paper}>
            <h3>Comments</h3>
            <div>
            <Link path to='/commentform'>AddComment</Link>
            </div>
            {commentData.map(val => {
                return <div key={val.id}>
                    <p>{val.user}</p>
                    <p>{val.comment}</p>
                </div>
            })}

        </div>
    );

    return (
        <div className modal_button>
            <Button type="button" onClick={handleOpen}>
                view comments
          </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

