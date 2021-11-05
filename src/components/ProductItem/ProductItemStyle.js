import styled from 'styled-components'


export const Container = styled.div`
width: 350px;
height: 350px;
margin: 10px;
background-color: #ececec;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
position: relative;
`

export const Image = styled.img`
width: 70%;
height: 70%;
`

export const IconContainer = styled.div`
display: flex;
position: absolute;

`

export const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
margin: 10px;
cursor: pointer;
background-color: #fff;
opacity: .5;
border-radius: 50%;
`