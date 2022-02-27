import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./navigation.css"
import "../../app.css"

const ProjectsNavigation = () => {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const nav = (event) => {
    event.target.id? navigate(`/projects/${event.target.id}`, {replace: true}): navigate('/', {replace: true})
  }

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
        Projects
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={nav}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id="NSDPY" className="customItem" onClick={handleClose}>PiPy Package</MenuItem>
        <MenuItem id="TamGiang" className="customItem" onClick={handleClose}>Data science</MenuItem>
        <MenuItem id="CodePen" className="customItem" onClick={handleClose}>CodePens</MenuItem>
        <MenuItem id="CSS3" className="customItem" onClick={handleClose}>CSS animation</MenuItem>
        <MenuItem id="flask" className="customItem" onClick={handleClose}>Web Dev - Flask</MenuItem>
        <MenuItem id="react" className="customItem" onClick={handleClose}>Web Dev - React</MenuItem>
      </Menu>
    </div>
  );
}

export default ProjectsNavigation