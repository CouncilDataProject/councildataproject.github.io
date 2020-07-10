import React from "react";
import { Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

export default function CircleImageWithText(props) {
  return (
  <Card>
    <CardActionArea>
      <CardMedia
        image={props.imageSource}
        title={props.altText}
        style={{ borderRadius: "50%", paddingTop: "81.25%", margin: 28 }}
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
    <CardActions>
      <Button size="small" color="primary">
        LinkedIn
      </Button>
      <Button size="small" color="primary">
        GitHub
      </Button>
    </CardActions>
  </Card>
  )
}