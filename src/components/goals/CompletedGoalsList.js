import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { CheckedGoalsContext } from './CheckedGoalProvider'

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
    backgroundColor: '#f2ae0f'
  },
}));

export function CompletedGoals() {

  const { getCheckedGoalsData, checkedGoals } = useContext(CheckedGoalsContext)

  useEffect(() => {
    getCheckedGoalsData()
  }, [])

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <div style={modalStyle} className={classes.paper} >
        <h3 style={{ fontFamily: 'Tinos', fontSize: 'larger' }} >dates completed</h3>
        {checkedGoals.map(item => {
          return <div>
            <h4 style={{ fontFamily: 'Tinos', fontSize: 'larger' }}
              id="simple-modal-description">
              {item.goal.goal_name}
            </h4>
            <p style={{ fontFamily: 'Tinos', fontSize: 'larger' }}
              id="simple-modal-description">
              date-completed: {item.date}</p>
          </div>
        })}
      </div>
    </div>
  );

  return (
    <div className='modal_button'>
      <Button type="button" onClick={handleOpen}>
        completed goal dates
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
