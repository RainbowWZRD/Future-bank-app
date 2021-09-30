import React, {useState} from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SocialWrapper,
    SocialIcons,
    GitHub,
    Linkedin
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
                <SidebarRoute to="/connect">Connect 
                </SidebarRoute>
            </SideBtnWrap>
            <SocialWrapper>
                    <GitHub onClick={() => window.open(`https://github.com/RainbowWZRD`)} />
                    <Linkedin onClick={() => window.open(`https://www.linkedin.com/in/simome-bucciol/`)} />
            </SocialWrapper>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
