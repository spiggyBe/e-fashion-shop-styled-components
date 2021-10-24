import React from 'react'
import { SliderContainer, Arrow, SliderTitle, StyledContent, SliderArticleContent, ActionButton } from './SliderStyle'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'


export const Slider = () => {
    return (
        <SliderContainer>
            <Arrow leftArrow>
                <KeyboardArrowLeftIcon style={{ fontSize: '48px' }} />
            </Arrow>
            <Arrow rightArrow>
                <KeyboardArrowRightIcon style={{ fontSize: '48px' }} />
            </Arrow>
            <StyledContent>
                <SliderTitle>You are welcome...</SliderTitle>
                <SliderArticleContent>...if you want to change the world, first change yourself &amp; buy new clothes.</SliderArticleContent>
                <ActionButton>Start&nbsp;&nbsp;journey</ActionButton>
            </StyledContent>
        </SliderContainer>
    )
}
