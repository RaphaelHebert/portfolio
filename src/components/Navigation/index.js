import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./navigation.css"

const Navigation = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navDiv">
      <Button
        className="navButton"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Projects
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
        <MenuItem className="customItem" onClick={handleClose}>PyPI package</MenuItem>
        <MenuItem className="customItem" onClick={handleClose}>Data science</MenuItem>
        <MenuItem className="customItem" onClick={handleClose}>CodePens</MenuItem>
        <MenuItem className="customItem" onClick={handleClose}>Web Dev - Flask</MenuItem>
        <MenuItem className="customItem" onClick={handleClose}>Web Dev - React</MenuItem>
      </Menu>
    </div>
  );
}

export default Navigation