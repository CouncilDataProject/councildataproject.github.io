import React from "react";
import {
  Link
} from "react-router-dom";
import {Toolbar, AppBar, Typography} from '@material-ui/core';

export default function SiteHeader() {
  return (
    <AppBar position="static">
      <Toolbar style={styles.toolbar}>
        <div style={styles.navigationContainer}>
          <Typography  noWrap>Council Data Project Home/Icon</Typography>
        </div>
        {/*
        far left: IconButton with CDP logo, links to home,
        then flex-end row of buttons, some are actually dropdowns?
        */}
        <div style={styles.navigationContainer}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Typography style={{ margin: 12 }}>How CDP Works</Typography>
          <Typography style={{ margin: 12 }}>CDP in Your City</Typography>
          <Typography style={{ margin: 12 }}>Contact Us</Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const styles = {
  toolbar: {
    flex: 1,
    justifyContent: "space-between",
  },
  homeIconContainer: {
    backgroundColor: 'purple',
  },
  navigationContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"                      
  }
}