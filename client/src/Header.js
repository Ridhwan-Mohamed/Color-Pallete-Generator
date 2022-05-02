import React from "react";
import './public/index.css'

function Header() {
    return( 
        <nav>
            <div className="navbar">
                <div className="logo">
                    <div className="logo-inner">
                        <a href="/" ><h1>Coloristic</h1></a>
                    </div>
                </div>
                <div className="links">
                    <div className="links-inner">
                        <a href="/Generate"><h1>Generate</h1></a>
                    </div>
                    <div className="links-inner">
                        <a href="/MyPalletes"><h1>My Palletes</h1></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}



export default Header 