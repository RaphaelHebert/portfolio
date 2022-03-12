import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

  const handleClickSub = (event) => {
    event.preventDefault();
    setSubAnchorEl(event.currentTarget);
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
        style={{zIndex:0}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div onClick={nav}>
          <MenuItem id="NSDPY" className="customItem" onClick={handleClose} >PiPy Package</MenuItem>
          <MenuItem id="TamGiang" className="customItem" onClick={handleClose} >Data science</MenuItem>
          <MenuItem id="CodePen" className="customItem" onClick={handleClose} >CodePens</MenuItem>
          <MenuItem id="CSS3" className="customItem" onClick={handleClose}>CSS animation</MenuItem>
          <MenuItem id="flask" className="customItem" onMouseOver={handleCloseSub} onClick={handleClose}>Web Dev - Flask</MenuItem>
        </div>
        <MenuItem 
          className="customItem noBottomBorder"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickSub}
          
        > Web Dev - React <ArrowForwardIosIcon style={{color: "gray"}}/>
        
        </MenuItem>
        
        <Menu
          id="basic-subMenu"
          anchorEl={subAnchorEl}
          onClose={handleCloseSub}
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
            <MenuItem id="snake" className="customItem" onClick={handleCloseSub, handleClose}>Snake</MenuItem>
            <MenuItem id="underdog" className="customItem" onClick={handleCloseSub, handleClose} >UnderdogDevs</MenuItem>
          </Menu>
      </Menu>
    </div>
  );
}

export default ProjectsNavigation