import React from "react"
import { Link } from "gatsby"
import * as navStyles from "./nav.module.css"

const Navbar = () => {
    return (
        <div className={navStyles.navbar}>
            <Link to="/">Home</Link> 
            <Link to="/contact">Contact</Link> 
            <Link to="/about">About</Link>
            {/* <Link to="/product">Product</Link> */}
        </div>
    )
}

export default Navbar;