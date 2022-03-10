import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NestedMenuItem from "material-ui-nested-menu-item";

import "./navigation.css"
import "../../app.css"

const ProjectsNavigation = () => {

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const openSub = Boolean(subAnchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const handleCloseSub = (event) => {
    setSubAnchorEl(null);
  };


  const handleMouseEnter = (event) => {
    event.preventDefault();
    setSubAnchorEl(event.currentTarget);
  }

  const handleMouseLeave = (event) => {
    event.preventDefault();
    setSubAnchorEl(null);
  }

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
        <MenuItem id="NSDPY" className="customItem" onClick={handleClose} >PiPy Package</MenuItem>
        <MenuItem id="TamGiang" className="customItem" onClick={handleClose} >Data science</MenuItem>
        <MenuItem id="CodePen" className="customItem" onClick={handleClose} >CodePens</MenuItem>
        <MenuItem id="CSS3" className="customItem" onClick={handleClose}>CSS animation</MenuItem>
        <MenuItem id="flask" className="customItem" onClick={handleClose}>Web Dev - Flask</MenuItem>
        <MenuItem className="customItem" onClick={handleMouseEnter} style={{zIndex:0}}> Web Dev - React
          <Menu
          
          
          anchorEl={subAnchorEl}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={openSub}
          
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          >
            <div onMouseLeave={handleMouseLeave}>
              <MenuItem id="snake" onClick={handleClose}>Snake</MenuItem>
              <MenuItem id="underdog" onClick={handleClose} >UnderdogDevs</MenuItem>
            </div>
          </Menu>
        </MenuItem>
      </Menu>
    </div>
  );
}
// onMouseEnter={e => {
//   setStyle({display: 'block'});
// }}
// onMouseLeave={e => {
//   setStyle({display: 'none'})
// }}
export default ProjectsNavigation