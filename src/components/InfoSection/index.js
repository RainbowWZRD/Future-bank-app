import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    TopHeading,
    Subtitle,
    BtnWrap,
    Button
} from "./InfoSectionElements"

const InfoSection = () => {
return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Top Line</TopLine>
                            <TopHeading>Heading</TopHeading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                            <Button to="/home">Button</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
     </>
    )
}

export default InfoSection
