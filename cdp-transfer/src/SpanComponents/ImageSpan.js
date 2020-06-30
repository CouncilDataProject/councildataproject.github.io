import React from "react";
import { Typography, Box, Button } from '@material-ui/core';

export default function ImageSpan(props) {
  const bodyBottomMargin = props.hasActionButton ? 24 : 124
  const styles = {
    actionButton : {
      marginTop: 24,
      marginBottom: 124
    },
    header: {
      marginTop: 124,
      marginBottom: 24,
      maxWidth: "50%",
      color: "white",
    },
    subtitle: {
      marginTop: 24,
      marginBottom: 24, 
      maxWidth: "90%",
      color: "white"
    },
    body: {
      marginTop: 24,
      marginBottom: bodyBottomMargin, 
      maxWidth: "45%",
      color: "white"
    },
    imageBackground: {
      backgroundImage: `url(${props.imageSrc})`,
      display:'flex',
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "100%",
    } //maybe change backgroundSize to 'cover' if the image is a photograph to avoid stretch
  }

  return (
  <Box>
    <div style={styles.imageBackground}>
      <Typography align="center" variant="h5" style={styles.header}>{props.title}</Typography>
      {props.subtitle && 
      <Typography align="center" variant="subtitle2"  style={styles.subtitle}>{props.subtitle}</Typography>
      }
      <Typography align="center" style={styles.body}>{props.bodyText}</Typography>
      {props.hasActionButton && <Button style={styles.actionButton}>
        {props.actionButtonText}
      </Button>}
    </div>
  </Box>
  )
}