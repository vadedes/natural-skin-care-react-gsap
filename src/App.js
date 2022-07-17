import React from "react";
import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParalaxHeroSection";
import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection";

import FaceOne from "./assets/images/faceOne.png";
import LandscapeOne from "./assets/images/landscapeOne.png";

const StyledHeroSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
        height: 25vmin;
        pointer-events: none;
    }
`;

const StyledTitle = styled.h1`
    color: black;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 4px;
    text-align: center;
    text-transform: uppercase;
    padding-top: 4rem;
`;

function App() {
    return (
        <>
            <StyledHeroSection>
                <img src={logo} alt='logo' />
                <StyledTitle>
                    Back to smooth and firm skin.
                </StyledTitle>
                <ParallaxHeroSection />
            </StyledHeroSection>
            <ContentSection
                title={"Take Care"}
                text={
                    "Poutine thundercats man braid quinoa direct trade whatever selfies vexillologist viral shaman tattooed fingerstache iceland."
                }
            />
            <CrossRevealSection
                face={FaceOne}
                landscape={LandscapeOne}
                name={"Cristian Guard"}
                job={"Founder"}
                sentenceOne={"We Only Launch"}
                sentenceTwo={"What We Love"}
            />
        </>
    );
}

export default App;
