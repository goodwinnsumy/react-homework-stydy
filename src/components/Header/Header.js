import "./Header.scss"
import React from 'react';
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {AppBar, Box, Button, IconButton, MenuItem, Toolbar, Typography} from "@mui/material";
import {ListOutlined, MenuSharp} from "@mui/icons-material";
import {purple} from "@mui/material/colors";


const Header =(props)=> {
    const auth = useSelector((store) => store.auth)

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{background: teal[700]}}
        >
          <Toolbar>
            <IconButton
              // size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuSharp/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Study Igor
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      // <>
      //   <div className="nav">
      //     <Link to="/">Home</Link>
      //     <NavLink to="/comments">CoMMents</NavLink>
      //     <NavLink to="/posts">Posts</NavLink>
      //     <NavLink to="/todo">Todo</NavLink>
      //     <NavLink to="/auth">Authorization</NavLink>
      //   </div>
      // </>
    );
}
export default Header;