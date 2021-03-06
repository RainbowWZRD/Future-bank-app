import styled from "styled-components";
import {FaTimes} from "react-icons/fa"
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"
// import {FaWallet} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: black;
display: grid;
align-items: center;
right: 0;
top:0;
transition: all 0.3s ease ;
opacity: ${({ isOpen }) => isOpen ? "100" : "0"};
top : ${({ isOpen }) => isOpen ? "0" : "-100"};
`

export const CloseIcon = styled(FaTimes)`
color : #f2f2f2;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`

export const SidebarWrapper = styled.div`
color: fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
`

export const SidebarLink = styled(LinkS)`
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 20px;
background: #01be71;
white-space: nowrap;
padding: 15px 30px;
color: #010606;
font-size: 16px;
cursor: pointer;
text-decoration:none;
transition: all 0.4s ease-in-out;

&:hover {
    transition: all 0.4s ease-in-out;
    color: #01be71;
    background: #010606;
}

&:hover:after {
    transition: all 0.4s ease;
    content : "  Wallet";
}
`

export const SocialWrapper = styled.div`
height: 80px;
display: flex;
align-items: flex-end;
justify-content: center;
gap: 20px;
margin-top: 20px;
`

export const GitHub = styled(FaGithub)`
color:#01be71;
cursor: pointer;
font-size: 1.5rem;

&:hover {
    transition: all 0.1s ease-in-out;
    font-size: 1.6rem;
    
}
`
export const Linkedin = styled(FaLinkedin)`
color:#01be71;
cursor: pointer;
font-size: 1.5rem;


&:hover {
    transition: all 0.1s ease-in-out;
    font-size: 1.6rem;
}
`