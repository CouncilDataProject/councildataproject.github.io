import React from "react";
import { Typography, Box } from '@material-ui/core';

export default function TripleBoxSpan(props) {
  const styles = {
    imageBackground: {
      margin: 124,
      backgroundImage: `url(${props.imageSrc})`,
      display:'flex',
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "100%",
    }, //maybe change backgroundSize to 'cover' if the image is a photograph to avoid stretch
    leftBox: {
      flexDirection: 'column',
      backgroundColor: 'purple',
      marginRight: 24,
    },
    centerBox: {
      flexDirection: 'column',
      backgroundColor: 'blue'
    },
    rightBox: {
      flexDirection: 'column',
      backgroundColor: 'red',
      marginLeft: 24
    },
    header: {
      marginTop: 124,
      marginBottom: 24,
      color: "white",
    },
    subtitle: {
      marginTop: 24,
      marginBottom: 24, 
      color: "white"
    },
    body: {
      marginTop: 24,
      color: "white"
    },
  }
  return (
  <Box>
    <div style={styles.imageBackground}>
      <Box style={styles.leftBox}>
        <Typography align="center" variant="h5" style={styles.header}>{props.titleLeft}</Typography>
        {props.subtitleLeft && 
        <Typography align="center" variant="subtitle2"  style={styles.subtitle}>{props.subtitleLeft}</Typography>
        }
        <Typography align="center" style={styles.body}>{props.bodyTextLeft}</Typography>
      </Box>
      <Box style={styles.centerBox}>
        <Typography align="center" variant="h5" style={styles.header}>{props.titleCenter}</Typography>
        {props.subtitleCenter && 
        <Typography align="center" variant="subtitle2"  style={styles.subtitle}>{props.subtitleCenter}</Typography>
        }
        <Typography align="center" style={styles.body}>{props.bodyTextCenter}</Typography>
      </Box>
      <Box style={styles.rightBox}>
        <Typography align="center" variant="h5" style={styles.header}>{props.titleRight}</Typography>
        {props.subtitleRight && 
        <Typography align="center" variant="subtitle2"  style={styles.subtitle}>{props.subtitleRight}</Typography>
        }
        <Typography align="center" style={styles.body}>{props.bodyTextRight}</Typography>
      </Box>
    </div>  </Box>
  )
}