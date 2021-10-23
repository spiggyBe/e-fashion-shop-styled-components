import styled from 'styled-components'


export const SliderContainer = styled.div`
width: 100%;
height: calc(100vh - 100px); 
border: 3px solid red;
position: relative;
background-image: url('../../assets/images/project.jpeg');
`

export const ImageFirst = styled.div`
height: calc(100vh - 100px);
width: 100%;
opacity: 0.5;
z-index: 0;
position: absolute;
top: 0;
left: 0;

`

export const Article = styled.div`
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: abosolute;
top: 0;
left: 0;
z-index: 9;
`