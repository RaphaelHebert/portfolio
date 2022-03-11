import { useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./navigation.css"
import "../../app.css"

const ContactsNavigation = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div className="main">
      <Button
        className="basic-button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Contacts
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id="CodePen" className="customItem" onClick={handleClose}><a href="https://github.com/RaphaelHebert">GitHub </a></MenuItem>
        <MenuItem id="GitHub" className="customItem" onClick={handleClose}><a href="https://codepen.io/raphaelhebert-the-scripter">CodePen </a></MenuItem>
        <MenuItem id="LinkedIn" className="customItem" onClick={handleClose}><a href="https://linkedin.com/in/raphael-hebert">LinkedIn </a></MenuItem>
        <MenuItem id="Twitter" className="customItem" onClick={handleClose}><a href="https://twitter.com/Joe84196982">Twitter </a></MenuItem>
      </Menu>
    </div>
  );
}

export default ContactsNavigation