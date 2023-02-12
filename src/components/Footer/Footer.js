import './Footer.css'
import React from 'react'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="upperFooter">
                <div className="contact">
                    <h3 className='h3-footer'>Contact Us</h3>

                    <Link to="#"><li><HiOutlineMapPin />Near Sansari Maistan, Main Road <br />
                        Biratnagar-9</li></Link>

                    <Link to="#"><li><HiOutlinePhone />021-514734, 576434</li></Link>


                    <Link to="#"><li><HiOutlineEnvelope />info@greenlandcollege.edu.np</li></Link>
                </div>
                <div className="quick-links">
                    <h3 className='h3-footer'>Quick Links</h3>
                    <Link to="/" className=''><li>Home</li></Link>
                    <Link to="/introduction" className='Fintroduction'><li>Introduction</li></Link>
                    <Link to="/academy-programs" className='Fadmission'><li>Academy Programs</li></Link>
                    <Link to="/admission" className='Fadmission'><li>Admission</li></Link>
                </div>
                <div className="contact">
                    <h3 className='h3-footer'>Connect With Us</h3>
                    <Link to="#"> <FaFacebookF className='facebook-logo' /></Link>

                </div>
            </div>
            <div className="lowerFooter">
                <p>Copyright by 2022 Greenland | Designed & Developed by Santosh Marar</p>
            </div>
        </footer>
    )
}

export default Footer