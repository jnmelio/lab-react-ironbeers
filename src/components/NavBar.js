import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <h1><Link className="link"  to="/">Home Page</Link></h1>
    )
}

export default NavBar