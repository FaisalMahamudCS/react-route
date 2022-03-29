import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
           Header value
           <nav>
               <CustomLink to="/">Home</CustomLink>
       <Link to="/">Home</Link> 
       <CustomLink to="/friends">Friends</CustomLink> 
       <CustomLink to="/about">About</CustomLink>       
           </nav>
        </div>
    );
};

export default Header;