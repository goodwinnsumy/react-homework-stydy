import "./Header.scss"
import React from 'react';
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";


const Header =(props)=> {
    const auth = useSelector((store) => store.auth)

    return (
      <>
        <div className="nav">
          <Link to="/">Home</Link>
          <NavLink to="/comments">Comments</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/auth">Authorization</NavLink>
        </div>
      </>
    );
}

export default Header;

