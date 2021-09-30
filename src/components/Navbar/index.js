import React from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    FaBars,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    BtnSignIn
} from "./NavbarElements"

const Navbar = () => {
    return <> 
    <Nav>
        <NavContainer>
            <NavLogo to="/home">Future Bank 🏦🦾</NavLogo>
            <MobileIcon>
            <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/crypto">Crypto</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/future">Future</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/signup">Sign Up</NavLink>
                </NavItem>
                <NavBtn>
                    <BtnSignIn to="/connect">Connect</BtnSignIn>
                </NavBtn>
            </NavMenu>
        </NavContainer>
    </Nav>
    </>
}

export default Navbar
