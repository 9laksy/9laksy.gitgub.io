import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    title: String
}

const Header = (props: HeaderProps): JSX.Element => {
    return (
        <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;