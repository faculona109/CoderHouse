import React from "react"
import Cart from "./CartWidget"

const NavBar = ( ) =>{
    return(
        <nav>
            <a href="#" >Home</a>
            <a href="#" >Products</a>
            <a href="#" >Categories</a>
            <a href="#" >Messages</a>
            <Cart/>
        </nav>
    )
}

export default NavBar