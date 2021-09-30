import React from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,

    MobileIcon,
    FaBars,
    NavMenu,
    NavItem,
    NavLink
} from "./NavbarElements"

const Navbar = () => {
    return <> 
    <Nav>
        <NavContainer>
            <NavLogo to="/">Boring Bank 🏦🥱</NavLogo>
            <MobileIcon>
            <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLink to="about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="discover">Discover</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="whynot">Why not</NavLink>
                </NavItem>
            </NavMenu>
        </NavContainer>
    </Nav>
    </>
}

export default Navbar
