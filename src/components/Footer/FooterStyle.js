import styled from 'styled-components'


export const Container = styled.div`
display: flex;
height: 25vh;
@media ( max-width: 1080px) {
    flex-direction: column;
}
`

export const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`

export const Center = styled.div`
flex: 2;
`

export const Right = styled.div`
flex: 1;
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
justify-content: space-between;
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

export const Payments = styled.h2`
font-size: 36px;
font-weight: 600;
text-align: center;
margin: 10px 0 20px 0;

@media ( max-width: 1080px ) {
    font-size: 24px;
}
`

export const Image = styled.img`
height: 150px;
border-radius: 5px;
width: 32%;

@media ( max-width: 1080px ) {
    width: 100%;
    padding: 0 10%;
}
`
export const UsefulLinks = styled.div`
text-align: center;
font-size: 36px;
font-weight: 600;
margin: 10px 0 20px 0;

@media (max-width: 1080px ) {
    font-size: 24px;
}
`