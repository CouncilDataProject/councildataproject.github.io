import React from "react";
import { Typography, Box, Button } from '@material-ui/core';

export default function ImageSpanComponent(props) {
  const styles = {
    header: {
      marginTop: 24,
      marginBottom: 24,
      maxWidth: "50%",
    },
    subtitle: {
      marginTop: 24,
      marginBottom: 24, 
      maxWidth: "90%"
    },
    body: {
      marginTop: 24,
      marginBottom: 24, 
      maxWidth: "45%",
    },
    imageBackground: {
      backgroundImage: `url(${props.imageSrc})`,
      display:'flex',
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }
  }

  return (
  <Box>
    <div style={styles.imageBackground}>
      <Typography align="center" variant="h5" style={styles.header}>{props.title}</Typography>
      {props.subtitle && 
      <Typography align="center" variant="subtitle2"  style={styles.subtitle}>{props.subtitle}</Typography>
      }
      <Typography align="center" style={styles.body}>{props.bodyText}</Typography>
      {props.hasActionButton && <Button>
        {props.actionButtonText}
      </Button>}
    </div>
  </Box>
  )
}