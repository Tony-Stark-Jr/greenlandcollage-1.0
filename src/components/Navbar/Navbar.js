import './Navbar.css'
import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineXMark, HiOutlineBars3 } from "react-icons/hi2";


const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            <header>
                <h1>GreenLand +2</h1>
                <h2 className='header-h2'>An Incredible College for Science and Management Studies</h2>
            </header>
            <nav className='navbar'>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                >
                    <Link to="/" className='home'><li>Home</li></Link>
                    <Link to="/introduction" className='introduction'><li>Introduction</li></Link>
                    <Link to="/academy-programs" className='academy'><li>Academy Programs</li></Link>
                    <Link to="/admission" className='admission'><li>Admission</li></Link>
               
                </ul>
                <li> <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <HiOutlineXMark /> : <HiOutlineBars3 />}
                    </button></li>



            </nav>

        </>
    )
}

export default Navbar;