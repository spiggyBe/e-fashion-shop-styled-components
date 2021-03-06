import styled from 'styled-components'

export const SliderContainer = styled.div`
display: flex;
width: 100%;
height: calc(100vh - 100px);
position: relative;
overflow: hidden;
@media (max-width: 368px ) {
    height: calc(80vh - 100px);
}
`

export const SlideWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100%;
position: relative;
transform: translateX(${props => props.slideIndex * (-100)}vw);

`

export const ImageContainer = styled.div`
width: 100vw;
height: 100%;
`

export const Image = styled.img`
width: 100%;
height: 100%;
`


export const Arrow = styled.div`
z-index: 9;
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

@media (max-width: 1048px ) {
    width: 36px;
    height: 36px;
}
`

export const SliderContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 50%;
width: 55%;
padding: 20px 50px;
background-color: rgba(255, 255, 255, .5);
border-radius: 5px;
position: absolute;

@media (max-width: 728px ) {
    width: 100%;
}
`

export const SliderTitle = styled.h1`
font-size: 2.5rem;
font-weight: 700;
letter-spacing: 2px;

@media (max-width: 1048px ) {
    font-size: 1.2rem;
}

@media (max-width: 368px ) {
    font-size: .8rem;
}
`

export const SliderArticleContent = styled.span`
font-size: 1.5rem;
line-height: 2rem;
font-weight: 700;
letter-spacing: 2px;

@media (max-width: 1048px ) {
    font-size: .9rem;
}
@media (max-width: 248px ) {
    display: none;
}

@media (max-width: 368px ) {
    font-size: .7rem;
    line-height: 1rem;
}
`

export const ActionButton = styled.div`
align-self: center;
padding: 5px 15px;
border-radius: 5px;
background-color: rgba(255, 255, 255, .1);
border: 2px solid #3F3F3F;
text-transform : uppercase;
cursor: pointer;
font-weight: 700;
font-size: 1.2rem;
transition: .3s;

&:hover {
    background-color: #3F3F3F;
    color: #fff;
    border: 2px solid #fff;
    opacity: 1;
}

@media (max-width: 1048px ) {
    font-size: .8rem;
}
`