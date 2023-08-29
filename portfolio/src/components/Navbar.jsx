import React, { useState } from "react";
import "../index.css";

const Navbar = () => {

    return (
      
            <nav className="navi ">

                <ul className="ulist hidden md:block">
                <li className="dlist">
                    <a href="#home" className="dot " data-scroll="home">
                        <span className="listspan">Home</span>
                    </a>
                  
                </li>
               
                <li className="dlist">
                    <a href="#about" className="dot" data-scroll="about">
                        <span className="listspan">About</span>
                    </a>
                    
                </li>
                <li className="dlist">
                    <a href="#tech" className="dot " data-scroll="tech">
                        <span className="listspan">Skills</span>
                    </a>

                </li>

                <li className="dlist">
                    <a href="#experience" className="dot" data-scroll="experience">
                        <span className="listspan">Experience</span>
                    </a>
                    
                </li>

                <li className="dlist">
                    <a href="#projects" className="dot" data-scroll="projects">
                        <span className="listspan">Projects</span>
                    </a>
                    
                    </li>
                    

                </ul>
           

        </nav>

    );
};

export default Navbar;
