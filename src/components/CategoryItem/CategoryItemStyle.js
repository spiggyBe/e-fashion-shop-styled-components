import styled from 'styled-components'

export const Container = styled.div`
margin: 3px;
position: relative;
border-radius: 5px;
`

export const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 5px;
`

export const Title = styled.h1`
text-transform: uppercase;
color: #fff;
font-weight: 700;
font-size: 24px;
margin-bottom: 5px;
`

export const Button = styled.button`
cursor: pointer;
padding: 5px 12px;
border: none;
border-radius: 5px;
background-color: #fff;
`

