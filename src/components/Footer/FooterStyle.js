import styled from 'styled-components'


export const Container = styled.div`
display: flex;
`

export const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`

export const Center = styled.div`
flex: 1;
`

export const Right = styled.div`
flex: 2;
border: 2px solid green;

`

export const Desc = styled.p`
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

export const StyledList = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const StyledItem = styled.li`
width: 100%;
list-style: none;
text-align: center;
`

export const StyledLinkA = styled.a`
text-decoration: none;
text-transform: capitalize;
cursor: pointer;
`
