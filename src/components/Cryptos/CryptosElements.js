import styled from "styled-components";

export const CryptoHeading = styled.h1`
color: #f9f9f9;
font-size: clamp(2.5em, 5vh, 5em );
text-align:center;
font-weight: bold;
line-height: 3;
`

export const CryptoHero = styled.div`
width: 100%;
height: 1000px;
background: #141516;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const CryptoWrapper = styled.ul`
width: 90%;
height: 90%;
background: #3C3D4A;
border-radius: 15px;
box-shadow: 0px 3px 6px rgba(0,0,0, 0.5);
list-style: none;
`

/////////USE GRID/////////
export const CryptoLi = styled.li`
height: 100px;
width: 100%;

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
align-items: center;

/* display: flex;
align-items: center;
justify-content: space-around;
box-shadow: 0px 1px ; */
`

export const CryptoP = styled.p`
color: #f2f2f2;
`

export const CryptoH1 = styled.h1`
color: #f2f2f2;
justify-self: flex-end;
text-align: right;
font-size: 30px ;
`

export const CryptoImg = styled.img`
height: 30px;
margin-left: 20px;
`

export const CryptoCap = styled.p`
color: #f2f2f2;
right: 20px;
justify-self: flex-end;
margin-right:20px;
`


