import styled from "styled-components";
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import {BiMenuAltRight} from "react-icons/bi"

export const Nav = styled.nav`
height: 80px;
border: 1px solid black;
/* margin-top: -80px; */

background: #000;
display: flex;
color: white;
align-items: center;
justify-content: center;
font-size: 1.2rem;
top:0;
position: sticky;
z-index:10px;

@media screen and (max-width : 960px) {
    transition: 0.8s all ease;
}
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-space-between;
align-items: center;
z-index:11;
height: 80px;
width: 100%;
max-width: 1100px;
`

//This one is gonna be the REACT ROUTER
export const NavLogo = styled(LinkR)`
color: #f2f2f2;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
font-weight: bold;
text-decoration:none;
margin-left: 24px;
color:#01be71;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width : 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    }
`

export const FaBars = styled(BiMenuAltRight)`
color: white;
`

export const NavMenu = styled.ul`
display: flex;
list-style: none;
text-align:center;
justify-content: center;
width: 70%;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

//This one is gonna be the REACT SCROLLING
export const NavLink = styled(LinkS)`
color: fff;
align-items: center;
display: flex;
text-decoration:none;
padding: 0 1rem;
height: 100%;
z-index: 999px;


&.active {
    border-bottom: 3px solid #01bf71 ;
}

&:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
}
`

export const NavBtn = styled.div`
display: flex;
align-items: center;

@media screen and (max-width : 768px){
    display: none;
}
`

export const BtnSignIn = styled(LinkR)`
border-radius: 50px;
background: #01be71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
cursor: pointer;
text-decoration:none;
transition: all 0.3s ease-in-out;
margin-left: 4em;

&:hover {
    transition: all 0.3s ease-in-out;
    color: #01be71;
    background: #010606;
}
`
