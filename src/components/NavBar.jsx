import React, { useRef, useState } from 'react'
import './Home.css'
import SearchIcon from '../images/search.png'
import DropDown from '../images/dropdown.png'
import Option from '../images/option.png'
const NavBar = () => {
    const [toggled,setToggled] = useState(false);

    function handleClick(e)
    {
        e.preventDefault();
        setToggled(!toggled);
    }

    return (
        <>
        <nav className='Nav-body'>
            <div className='left-body'>
                <h1>LOGO</h1>
            </div>
            <div className='right-body'>

                <div className="rgt-body-item">
                    <a href='/'>
                        Qualification
                        <img src={DropDown} style={{ color: "white" }} height={15} width={18} alt="" />
                    </a>

                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                        Organization
                        <img src={DropDown} style={{ color: "white" }} height={15} width={18} alt="" />
                    </a>
                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                        Research & Analysis
                        <img src={DropDown} style={{ color: "white" }} height={15} width={18} alt="" />
                    </a>
                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                        Lorem Ipsum
                        <img src={DropDown} style={{ color: "white" }} height={15} width={18} alt="" />
                    </a>
                </div>
                <div className="rgt-body-item">
                    <a href='/'>
                        Lorem Ipsum
                        <img src={DropDown} style={{ color: "white" }} height={15} width={18} alt="" />
                    </a>

                </div>
                <div className="rgt-body-srch-btn">
                    <img className='src-icn' src={SearchIcon} alt="" />
                </div>
                <div className="rgt-bdy-clk-btn">
                    <button className='nb-rgt-btn'>Enrolment</button>
                </div>
            </div>
            
                <div className='OptionIcon' onClick={handleClick}>
                   <a href="">
                    <a className='OptionIcon' >
                    <img  src={Option} alt="" />
                    </a>
                    
                   </a> 
                </div>
            
            
        </nav>


        <div className={toggled ? 'Resp-nav-bodyonClick': 'Resp-nav-body'}>
                    <a>Qualification</a>
                    <a>Organization</a>
                    <a>Research and Analysis</a>
                    <a>Lorem Ipsum</a>
                    <a>Enrolment</a>
            </div>
        </>
        
        
    )
}

export default NavBar