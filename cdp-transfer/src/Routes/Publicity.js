import React from "react";
import GutteredImageAndTextPairing from '../SpanComponents/GutteredImageAndTextPairing';
import { Typography } from '@material-ui/core';
import { ColorPalette } from '../Theme/ColorPalette'
import { StaticPublicity } from '../Assets/Static/StaticPublicity'
import placeholder from '../Assets/Images/placeholder-avatar.jpg'

export default function Publicity() {
  return (
    <div style={styles.container}>
      <Typography variant="h2" style={styles.title}>CDP's Public Events</Typography>
      {StaticPublicity.stories.map((contentObject, index) => {
        let avatar = contentObject.associatedImage || placeholder;
        let directionality = (index % 2 === 0); // even lines will have text on the right, image on the left. odd lines vice versa.
        return (
          <div style={{ width: "80%", minHeight: "350" }}>
            <GutteredImageAndTextPairing
              textRight={directionality}
              title={contentObject.title}
              body={contentObject.blurb}
              imageSource={avatar}
            />
          </div>
          
        )
      })}
    </div>
  )
}

const styles={
  title: {
    marginTop: 48,
    marginBottom: 24,
    maxWidth: "50%",
    color: "white",
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 48,
    maxWidth: "80%",
    color: "white",
  },
  container: {
    backgroundColor: ColorPalette.basePageColor,
    display: 'flex',
    flexDirection: "column",
    justifyContent:"center",
    alignItems: 'center'
  }
}