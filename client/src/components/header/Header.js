import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <AppBar style={{background:'black'}}>
        <Toolbar style={{justifyContent:'center'}}>
            <Link to='/'style={{padding:'20px',  color:'white', textDecoration:'none'}}>HOME</Link>
            <Link to='/about' style={{padding:'20px',  color:'white', textDecoration:'none'}}>ABOUT</Link>
            <Link to='/contact' style={{padding:'20px',  color:'white', textDecoration:'none'}}>CONTACT</Link>
            <Link to='/login' style={{padding:'20px',  color:'white', textDecoration:'none'}}>LOGOUT</Link>

        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header