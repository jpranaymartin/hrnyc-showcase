import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const cardStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = cardStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.project.imgLink}
          title={props.project.mvpTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.mvpTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.project.mvpDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.project.linkToProject}>
          <Button size="small" color="primary">
            Go To Project
          </Button>
        </a>
        <a href={props.project.linkToRepo}>
          <Button size="small" color="primary">
            Engineer's Repo
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
