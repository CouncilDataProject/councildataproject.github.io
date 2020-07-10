import React from "react";
import {
  useHistory
} from "react-router-dom";
import { Button, Toolbar, AppBar, Typography } from '@material-ui/core';
import CDPLogo from '../Assets/Images/cdp_logo.svg'
import AboutMenu from '../MenuComponents/AboutMenu';
import HowMenu from '../MenuComponents/HowMenu';

export default function SiteHeader() {
  let history = useHistory();
  
  return (
    <AppBar position="static">
      <Toolbar style={styles.toolbar}>
        <div style={styles.navigationContainer}>
          <img onClick={()=> { history.push('/home') }}  src={`${CDPLogo}`} alt="Council Data Project Logo" style={{ padding: 8, maxHeight:100 }}/>
        </div>
        {/*
        far left: IconButton with CDP logo, links to home,
        then flex-end row of buttons, some are actually dropdowns?
        */}
        <div style={styles.navigationContainer}>
          <Button onClick={()=> { history.push('/home') }}>Home</Button>
          <AboutMenu />
          <HowMenu />
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