import React, {useState} from 'react'
import Video from "../../videos/video.mp4"

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    HeroBtn,
    ArrowNormal,
    ArrowForward
} from "./HeroElements"

const Hero = () => {
    const [hover, setHover] = useState(true)

    return (
        <HeroContainer>
        <HeroBg> 
        <VideoBg  autoPlay loop muted src={Video} type="video/mp4"  />
        </HeroBg>
        <HeroContent>
            <HeroH1>Check before the jump</HeroH1>
            <HeroP>Sign-up today, take under control your favourite Cryptos and store them 🔒
            </HeroP>
            <HeroBtnWrapper>
                <HeroBtn to="signup">Sign up
                {hover ? <ArrowNormal /> : <ArrowForward />}
                </HeroBtn>
            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default Hero
