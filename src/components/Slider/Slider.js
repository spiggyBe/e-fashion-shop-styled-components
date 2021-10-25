import React from 'react'
import { SliderContainer, Arrow, SliderContent, SliderTitle, Slide, SliderArticleContent, ActionButton } from './SliderStyle'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'


export const Slider = () => {
    return (
        <SliderContainer>
            <Arrow leftArrow>
                <KeyboardArrowLeftIcon style={{ fontSize: '48px' }} />
            </Arrow>
            <Slide>
                <SliderContent>
                    <SliderTitle>You are welcome...</SliderTitle>
                    <SliderArticleContent>...if you want to change the world, first change yourself &amp; buy new clothes.</SliderArticleContent>
                    <ActionButton>Start&nbsp;&nbsp;journey</ActionButton>
                </SliderContent>
            </Slide>
            <Arrow rightArrow>
                <KeyboardArrowRightIcon style={{ fontSize: '48px' }} />
            </Arrow>
        </SliderContainer>
    )
}
