import styled from "styled-components";

export const InfoContainer = styled.div`
color: #f2f2f2;
background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#141516")};

@media screen and (max-width : 768px){
    padding : 100px 0;
}
`

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-left: auto;
margin-right: auto;
padding: 0 24px;
justify-content: center;
`

export const InfoRow = styled.div`
color: #f2f2f2;
`
export const Column1 = styled.div`
color: #f2f2f2;
`
export const TextWrapper = styled.div`
color: #f2f2f2;
`

export const TopLine = styled.div`
color: #f2f2f2;
`

export const TopHeading = styled.div`
color: #f2f2f2;
`

export const Subtitle = styled.div`
color: #f2f2f2;
`

export const BtnWrap = styled.div`
color: #f2f2f2;
`

export const Button = styled.div`
color: #f2f2f2;
`


