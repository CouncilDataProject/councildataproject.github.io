import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import {
  useHistory
} from "react-router-dom";


export default function AboutMenu() {
  let history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (destination) => {
    setAnchorEl(null);
    if(typeof destination === "string") { history.push(`/${destination}`) }
  };

  return (
    <React.Fragment>
      <Button
        aria-label="about CDP and our team"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        About
      </Button>
      <Menu
        id="aboutmenu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={this}
      >
        <MenuItem onClick={()=> { handleClose('about') }}>...our project</MenuItem>
        <MenuItem onClick={()=> { handleClose('publicity') }}>...recent events</MenuItem>
        <MenuItem onClick={()=> { handleClose('meet-the-team') }}>...our team</MenuItem>
      </Menu>
    </React.Fragment>
  )
}