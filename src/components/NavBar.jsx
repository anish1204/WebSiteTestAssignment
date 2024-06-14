import React from 'react'
import './Home.css'
import SearchIcon from '../images/search.png'
import DropDown from '../images/dropdown.png'
const NavBar = () => {
    return (
        <nav className='Nav-body'>
            <div className='left-body'>
                <h1>LOGO</h1>
            </div>
            <div className='right-body'>

                <div className="rgt-body-item">
                    <a href='/'>
                        Qualification
                        <img src={DropDown} style={{color:"white"}} height={15} width={18} alt="" />
                    </a>
                    
                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                        Organization
                        <img src={DropDown} style={{color:"white"}} height={15} width={18} alt="" />
                    </a>
                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                        Research & Analysis
                        <img src={DropDown} style={{color:"white"}} height={15} width={18} alt="" />
                    </a>
                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                        Lorem Ipsum
                        <img src={DropDown} style={{color:"white"}} height={15} width={18} alt="" />
                    </a>
                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                    Lorem Ipsum
                    <img src={DropDown} style={{color:"white"}} height={15} width={18} alt="" />
                    </a>
                    
                </div>
                <div className="rgt-body-srch-btn">
                    <img className='src-icn' src={SearchIcon} alt="" />
                </div>
                <div className="rgt-bdy-clk-btn">
                    <button className='nb-rgt-btn'>Enrolment</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar