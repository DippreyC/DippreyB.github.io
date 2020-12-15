import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { GiMagicGate } from 'react-icons/gi'
import {AiFillCamera} from 'react-icons/ai'
import {BiLogIn} from 'react-icons/bi'
import './Navbar.css'


const Navbar = () => {
    


    return (
        <>
            <nav>
                <div className="nav-link" id="logo"><NavLink exact to="/"><GiMagicGate/></NavLink></div>
                <FaBars id="nav-bars"/>
                <div id = "nav-menu">
                    <div className="nav-link" id="camera"><NavLink to="/camera"><AiFillCamera/></NavLink></div>
                    <div className="nav-link" id="login"><NavLink to="/login"><BiLogIn/></NavLink></div>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;

/*
            <Nav>
                <NavLink to="/" >
                    test
                    <Logo />
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/camera">
                        <CamIcon />
                        test2
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
*/