import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300,
    marginTop: 50,
    marginRight: 200
  },
  media: {
    height: 140,
  },
});

export  function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
 
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Multiple-Scelorosis
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Multiple sclerosis (MS) is a potentially disabling disease of the brain and spinal cord (central nervous system). 
          In MS , the immune system attacks the protective sheath (myelin) that covers 
          nerve fibers and causes communication problems between your brain and the rest of your body.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">

        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}