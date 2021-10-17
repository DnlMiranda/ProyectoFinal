import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const IndicatorWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
position: absolute;
bottom: 25%;
right: 15%;
cursor: pointer;
`;

const Dot = styled.div`
width: 80px;
height: 14px;
border-radius:2px;
background-color: white;
opacity: ${(props) => (props.isActive ? 1 : 0.5 )};

margin: 5px;
transition: 750ms all ease-in-out;


`;

const Indicator = ({currentSlide, amountSlides, nextSlide}) => {
    return (
        <IndicatorWrapper>   
            {Array(amountSlides)
            .fill(1)
            .map((_, i) => (
            <Dot 
            key={i} 
            isActive={currentSlide === i} 
            onClick={()=> nextSlide(i)} 
            /> 
            ))}     
            </IndicatorWrapper>
    )
}

const Wrapper = styled.div`
    
    height: 85vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    position: relative;
    `;

const Slide = styled.div`
    height : 93%;
    width : 100vw;
    flex-shrink : 0;
    background-position: center;
    background-size: cover;
    transition: 750ms all ease-in-out;
`;

const ChildrenWrapper = styled.div`
    position: absolute;
    top: 8%;
    left: 13%;
    
    
    
`;


const Slider = ({
    images = [], 
    autoPlay = true, 
    autoPlayTime = 3000,
    children,
    cheldren, 
    ... props
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide(slideIndex = currentSlide + 1) {
        const newSlideIndex = 
        slideIndex >= images.length ? 0 : slideIndex; 

    setCurrentSlide(newSlideIndex)
    }

    useEffect(() => {

        const timer = setTimeout(() => {
          nextSlide()
        }, autoPlayTime)

        return () => clearTimeout(timer);
    },[currentSlide]);

    return (
        <Wrapper {... props} id="home" >
            
                {images.map((imageUrl, index) => (
                    <Slide 
                        key={index}
                        style={{ 
                            backgroundImage: `url(${imageUrl})`, 
                            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
                        }}
                    ></Slide>
                ))}    
                <Indicator
                currentSlide={currentSlide} 
                amountSlides={images.length}
                nextSlide={nextSlide}
                />   
            <ChildrenWrapper>{children}</ChildrenWrapper>
            
            
        </Wrapper>
    );
};

export default Slider;
