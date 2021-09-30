import React, {useState} from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from "./SidebarElements"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <SidebarContainer isOpen={isOpen}>
        <Icon onClick={() => setIsOpen(!isOpen)}>
            <CloseIcon />
        </Icon>    
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/about">About</SidebarLink>
                <SidebarLink to="/crypto">Crypto</SidebarLink>
                <SidebarLink to="/future">Future</SidebarLink>
                <SidebarLink to="/signup">Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/connect">Connect</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
