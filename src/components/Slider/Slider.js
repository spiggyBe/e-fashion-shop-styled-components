import React from 'react'
import { SliderContainer, Arrow } from './SliderStyle'
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
        </SliderContainer>
    )
}
