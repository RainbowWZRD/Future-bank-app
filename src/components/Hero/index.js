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
            <HeroH1>Before jumping, plan</HeroH1>
            <HeroP>Sign-up today, trade Eth like a crazy,
            program cryptos and buy a villa to your mom!
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
