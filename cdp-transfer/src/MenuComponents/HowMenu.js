import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import {
  useHistory
} from "react-router-dom";


export default function HowMenu() {
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
        How
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
        <MenuItem onClick={()=> { handleClose('searching-with-cdp') }}>...to use it</MenuItem>
        <MenuItem onClick={()=> { handleClose('using-cdp-platform') }}>...to bring it to your city</MenuItem>
        <MenuItem onClick={()=> { handleClose('volunteer') }}>...to help us</MenuItem>
        {/* <MenuItem onClick={()=> { handleClose('contact') }}>...to contact us</MenuItem> */}
      </Menu>
    </React.Fragment>
  )
}