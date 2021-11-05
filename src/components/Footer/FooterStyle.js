import styled from 'styled-components'


export const Container = styled.div`
display: flex;
`

export const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`

export const Center = styled.div`
flex: 1;
border: 2px solid red;

`

export const Right = styled.div`
flex: 1;
border: 2px solid green;

`

export const Desc = styled.div`
text-align: justify;
margin: 20px 0;
`

export const SocialContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-around;

`

export const SocialIcon = styled.div`
cursor: pointer;
`