import React from 'react'
import { SliderContainer, Arrow, SliderContent, SliderTitle, SlideWrapper, ImageContainer, Image, SliderArticleContent, ActionButton } from './SliderStyle'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'

export const Slider = () => {
    return (
        <SliderContainer>
            <Arrow leftArrow>
                <KeyboardArrowLeftIcon style={{ fontSize: '48px' }} />
            </Arrow>
            <SlideWrapper>
                <ImageContainer>
                    <Image src={image1} />
                </ImageContainer>
                <SliderContent>
                    <SliderTitle>You are welcome...</SliderTitle>
                    <SliderArticleContent>...if you want to change the world, first change yourself &amp; buy new clothes.</SliderArticleContent>
                    <ActionButton>Start&nbsp;&nbsp;journey</ActionButton>
                </SliderContent>
            </SlideWrapper>
            <SlideWrapper>
                <ImageContainer>
                    <Image src={image2} />
                </ImageContainer>
                <SliderContent>
                    <SliderTitle>You are welcome...</SliderTitle>
                    <SliderArticleContent>...if you want to change the world, first change yourself &amp; buy new clothes.</SliderArticleContent>
                    <ActionButton>Start&nbsp;&nbsp;journey</ActionButton>
                </SliderContent>
            </SlideWrapper>
            <SlideWrapper>
                <ImageContainer>
                    <Image src={image3} />
                </ImageContainer>
                <SliderContent>
                    <SliderTitle>You are welcome...</SliderTitle>
                    <SliderArticleContent>...if you want to change the world, first change yourself &amp; buy new clothes.</SliderArticleContent>
                    <ActionButton>Start&nbsp;&nbsp;journey</ActionButton>
                </SliderContent>
            </SlideWrapper>
            <Arrow rightArrow>
                <KeyboardArrowRightIcon style={{ fontSize: '48px' }} />
            </Arrow>
        </SliderContainer>
    )
}
