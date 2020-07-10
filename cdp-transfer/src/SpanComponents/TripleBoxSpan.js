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
      marginRight: 24,
    },
    centerBox: {
      flexDirection: 'column',
    },
    rightBox: {
      flexDirection: 'column',
      marginLeft: 24
    },
    header: {
      marginTop: 24,
      marginBottom: 24,
    },
    subtitle: {
      marginTop: 24,
      marginBottom: 24, 
    },
    body: {
      marginTop: 24,
    },
  }

  return (
  <Box>
    <div style={styles.imageBackground}>
      <Box style={styles.leftBox}>
        {props.iconLeft &&
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {props.iconLeft()}
        </div>}
        <Typography align="center" variant="h5" style={styles.header}>{props.titleLeft}</Typography>
        {props.subtitleLeft && 
        <Typography align="center" variant="subtitle1"  style={styles.subtitle}>{props.subtitleLeft}</Typography>
        }
        <Typography align="center" style={styles.body}>{props.bodyTextLeft}</Typography>
      </Box>
      <Box style={styles.centerBox}>
        {props.iconCenter &&
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {props.iconCenter()}
        </div>}
        <Typography align="center" variant="h5" style={styles.header}>{props.titleCenter}</Typography>
        {props.subtitleCenter && 
        <Typography align="center" variant="subtitle1"  style={styles.subtitle}>{props.subtitleCenter}</Typography>
        }
        <Typography align="center" style={styles.body}>{props.bodyTextCenter}</Typography>
      </Box>
      <Box style={styles.rightBox}>
        {props.iconRight &&
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {props.iconRight()}
          </div>}
        <Typography align="center" variant="h5" style={styles.header}>{props.titleRight}</Typography>
        {props.subtitleRight && 
        <Typography align="center" variant="subtitle1"  style={styles.subtitle}>{props.subtitleRight}</Typography>
        }
        <Typography align="center" style={styles.body}>{props.bodyTextRight}</Typography>
      </Box>
    </div>
    </Box>
  )
}