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
      fontWeight:700
    },
    subtitle: {
      marginTop: 24,
      marginBottom: 24, 
      maxWidth: "90%",
      color: "white",
      fontWeight:500
    },
    body: {
      marginTop: 24,
      marginBottom: bodyBottomMargin, 
      maxWidth: "45%",
      color: "white"
    },
    containerBackground: {
      display:'flex',
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundSize: "100%",
    },
    colorBackground: {
      backgroundColor: props.backgroundColor
    },
    gradientStyle: {
      backgroundColor: "rgba(38,38,38,0.2)",
      display: 'flex'
    },
    imageBackground: {
      backgroundImage: `url(${props.imageSrc})`,
      backgroundRepeat: 'no-repeat',
    } //maybe change backgroundSize to 'cover' if the image is a photograph to avoid stretch
  }
  const shouldUseImage = !!props.imageSrc
  let containerStyle = styles.containerBackground
  if(shouldUseImage) {
    Object.assign(containerStyle, styles.imageBackground)
  } else {
    Object.assign(containerStyle, styles.colorBackground)
  }
  return (
  <Box>
    <div style={containerStyle}>
      <Typography align="center" variant="h3" style={styles.header}>{props.title}</Typography>
        {props.subtitle && 
        <Typography align="center" variant="h4"  style={styles.subtitle}>{props.subtitle}</Typography>
        }
        <Typography align="center" variant="h6" style={styles.body}>{props.bodyText}</Typography>
        {props.hasActionButton && <Button style={styles.actionButton}>
          {props.actionButtonText}
      </Button>}
    </div>
  </Box>
  )
}