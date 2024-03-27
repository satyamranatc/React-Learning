import React from 'react'
import "./NavBar.css";

import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div id = "Nav">
        <h2>SHOP.IO</h2>

        <ul>
            <li><Link to={"/"} >Products</Link></li>
            <li><Link to={"/Cart"} >Cart</Link></li>
            <li>About</li>
            <li>Contact</li>
            <li>SELL</li>
        </ul>
    </div>
  )
}
