import styled from 'styled-components'
import image1 from '../../assets/images/image1.jpg'

export const SliderContainer = styled.div`
width: 100%;
height: calc(100vh - 100px);
position: relative;
background-image: url('${image1}');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
opacity: .8;
`

export const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff;
opacity: .3;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
transform: translateY(-50%);
left: ${props => props.leftArrow ? '10px' : ''};
right: ${props => props.rightArrow ? '10px' : ''};
cursor: pointer;
`