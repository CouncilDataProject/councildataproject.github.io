import React from "react";
import { CardMedia, Card, Typography, CardContent } from '@material-ui/core';
import { ColorPalette } from '../Theme/ColorPalette'

export default function GutteredImageAndTextPairing(props) {
  console.log()
  // the default arrangement of this span has the text on the left and picture on the right - controlled by textRight prop
  if(props.textRight) {
    return (
      <Card style={styles.card} key={props.title}>
        <CardMedia style={styles.image} image={props.imageSource}/>
        {renderText(props.title, props.subtitle, props.body)}
      </Card>
    )
  } else {
    return (
      <Card style={styles.card} key={props.title}>
        {renderText(props.title, props.subtitle, props.body)}
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
  card: {
    margin: 12,
    display: 'flex',
    backgroundColor: ColorPalette.basePageColor
  },
  textContainer: {
    display: 'flex',
    flexDirection: "column",
    maxWidth: "50%"
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
    width: "50%",
  }
}