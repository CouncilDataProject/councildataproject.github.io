import React from "react";
import GutteredImageAndTextPairing from '../../SpanComponents/GutteredImageAndTextPairing';
import { Typography } from '@material-ui/core';
import { ColorPalette } from '../../Theme/ColorPalette'
import { HowItWorks } from '../../Assets/Static/HowItWorks'
import placeholder from '../../Assets/Images/placeholder-avatar.jpg'

export default function SearchingWithCDP() {
  return (
    <div style={styles.container}>
      <Typography variant="h2" style={styles.title}>Utilize CDP to the Fullest</Typography>
      {HowItWorks.howToUseItContentBlocks.map((contentObject, index) => {
        let avatar = contentObject.imageSrc || placeholder;
        let directionality = (index % 2 === 0); // even lines will have text on the right, image on the left. odd lines vice versa.
        return (
          <div style={{ width: "80%", minHeight: "350" }}>
            <GutteredImageAndTextPairing
              textRight={directionality}
              title={contentObject.title}
              subtitle={contentObject.subtitle}
              body={contentObject.body}
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