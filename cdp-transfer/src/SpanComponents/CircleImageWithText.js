import React from "react";
import { Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons'

export default function CircleImageWithText(props) {
  return (
  <Card style={{ width: "100%", margin: 12, justifyContent: 'center'}}>
    <CardActionArea>
      <CardMedia
        image={props.imageSource}
        title={props.altText}
        style={styles.avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.secondaryText}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{flexDirection: 'column-reverse'}}>
      <div style={styles.buttonRow}>
        {props.linkedIn &&
        <Button
          style={styles.button}
          size="small"
          color="primary"
          onClick={() => { window.location.replace(props.linkedIn) }}
        >
          <LinkedIn/> LinkedIn
        </Button>}
        {props.gitHub &&
        <Button
          style={styles.button}
          size="small"
          color="primary"onClick={() => { window.location.replace(props.gitHub) }}
        >
          <GitHub/> GitHub
        </Button>}
      </div>
    </CardActions>
  </Card>
  )
}

const styles = {
  button: {
    width: "50%",
    marginLeft: 24,
    marginRight: 24
  },
  buttonRow: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    flexGrow: true
  },
  avatar: {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '48px'
  }
}