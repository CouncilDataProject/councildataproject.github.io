import React from "react";
import { Button, CardMedia, Card, CardActions, Typography, CardContent } from '@material-ui/core';
import { ColorPalette } from '../Theme/ColorPalette'
/*
props can include:
  textRight - default arrangement of this span has the text on the left and picture on the right, but can be swapped by this props (bool)
  title
  subtitle
  body
  cardActionText - if there is a button, you can put its text here
  cardActionDestination - if there is a button, you can put its destination link here
*/
export default function GutteredImageAndTextPairing(props) {
  if(props.textRight) {
    return (
      <Card style={styles.card} key={props.title}>
        <CardMedia style={styles.image} image={props.imageSource}/>
        <div style={{flexDirection: 'column'}}>
          {renderText(props.title, props.subtitle, props.body)}
          {props.cardActionDestination && <CardActions>
          <Button style={styles.button} size="small" onClick={() => { window.location.replace(props.cardActionDestination) }}>{props.cardActionText || "Learn More"}</Button>
          </CardActions>}
        </div>
      </Card>
    )
  } else {
    return (
      <Card style={styles.card} key={props.title}>
        <div style={{flexDirection: 'column'}}>
          {renderText(props.title, props.subtitle, props.body)}
          {props.cardActionDestination && <CardActions>
          <Button style={styles.button} size="small" onClick={() => { window.location.replace(props.cardActionDestination) }}>{props.cardActionText || "Learn More"}</Button>
          </CardActions>}
        </div>
        <CardMedia style={styles.image} image={props.imageSource}/>
      </Card>
    )
  }
}

function renderText(title, subtitle, body) {
  return (
    <CardContent style={styles.textContainer}>
      <Typography variant="h3" style={styles.title}>
        {title}
      </Typography>
      <Typography variant="h4" style={styles.subtitle}>
        {subtitle}
      </Typography>
      <Typography variant="body1" style={styles.body}>
        {body}
      </Typography>
    </CardContent>
  )
}
const styles = {
  button: {
    color: 'white'
  },
  card: {
    margin: 12,
    display: 'flex',
    backgroundColor: ColorPalette.basePageColor
  },
  textContainer: {
    display: 'flex',
    flexDirection: "column",
    maxWidth: "70%"
  },
  title: {
    marginBottom: 24,
    color: "white",
  },
  subtitle: {
    marginBottom: 12, 
    color: "white",
  },
  body: {
    marginBottom: 24, 
    color: "white"
  },
  image: {
    margin: 28,
    width: "100%",
    height: 300
  }
}