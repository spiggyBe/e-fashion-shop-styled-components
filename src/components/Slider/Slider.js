import React, { useState } from 'react'
import { SliderContainer, Arrow, SliderContent, SliderTitle, SlideWrapper, ImageContainer, Image, SliderArticleContent, ActionButton } from './SliderStyle'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { sliderData } from './sliderData'

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        } else if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            return null
        }
    }

    return (
        <SliderContainer>
            <Arrow leftArrow onClick={() => handleClick('left')}>
                <KeyboardArrowLeftIcon style={{ fontSize: '48px' }} />
            </Arrow>
            {sliderData.map(el => (
                <SlideWrapper slideIndex={slideIndex} key={el.id}>
                    <ImageContainer>
                        <Image src={el.img} />
                    </ImageContainer>
                    <SliderContent>
                        <SliderTitle>{el.title}</SliderTitle>
                        <SliderArticleContent>{el.description}</SliderArticleContent>
                        <ActionButton>{el.btnText}</ActionButton>
                    </SliderContent>
                </SlideWrapper>
            ))}
            <Arrow rightArrow onClick={() => handleClick('right')}>
                <KeyboardArrowRightIcon style={{ fontSize: '48px' }} />
            </Arrow>
        </SliderContainer>
    )
}
