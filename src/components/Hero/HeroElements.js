import styled from "styled-components";
import {Link as LinkR} from "react-router-dom"
import {FaAngleRight} from "react-icons/fa"
import {FaAngleDoubleRight} from "react-icons/fa"


export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index:1;
`

export const HeroBg = styled.div`
position: absolute;
top:0;
right: 0;
left:0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HeroContent = styled.div`
z-index: 1;
max-width: 1000px;
height: 500px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeroH1 = styled.h1`
color: #01be71;
font-size: clamp(2.5em, 3vh, 5em );
text-align:center;
line-height: 3;
`
export const HeroP = styled.p`
color: #f2f2f2;
font-size: clamp(2em, 2.5vh, 5em );
text-align:center;
`
export const HeroBtnWrapper = styled.div`
margin-top: 30px;

`
export const HeroBtn = styled(LinkR)`
border-radius: 20px;
background: #01be71;
white-space: nowrap;
padding: 15px 30px;
color: #010606;
font-size: 16px;
cursor: pointer;
text-decoration:none;
transition: all 0.4s ease-in-out;

`

export const ArrowNormal = styled(FaAngleRight)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowForward = styled(FaAngleDoubleRight)`
margin-left: 8px;
font-size: 20px;
`





