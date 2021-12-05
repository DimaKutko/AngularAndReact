import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to="/">Painter </Link>
            <Link to="/art">Art </Link>
            <Link to="/bio">Bio </Link>
        </>
    );
};

export default Navbar;