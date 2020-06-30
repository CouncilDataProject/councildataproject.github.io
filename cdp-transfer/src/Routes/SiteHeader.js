import React from "react";
import {
  Link
} from "react-router-dom";
import { Toolbar, AppBar, Typography } from '@material-ui/core';

export default function SiteHeader() {
  return (
    <AppBar position="static">
      <Toolbar style={styles.toolbar}>
        <div style={styles.navigationContainer}>
          <Typography style={styles.placeholder} noWrap>Council Data Project Home/Icon</Typography>
        </div>
        {/*
        far left: IconButton with CDP logo, links to home,
        then flex-end row of buttons, some are actually dropdowns?
        */}
        <div style={styles.navigationContainer}>
          <Link style={styles.placeholder} to="/home">Home</Link>
          <Link style={styles.placeholder} to="/about">About</Link>
          <Typography style={styles.placeholder}>How CDP Works</Typography>
          <Typography style={styles.placeholder}>CDP in Your City</Typography>
          <Typography style={styles.placeholder}>Contact Us</Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const styles = {
  toolbar: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  homeIconContainer: {
    backgroundColor: 'white',
  },
  navigationContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"                      
  },
  placeholder: {
    color: "black",
    margin: 12
  }
}