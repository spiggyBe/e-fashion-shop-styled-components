import React from 'react'
import { Container, Left, Center, Right, Desc, SocialContainer, SocialIcon } from './FooterStyle'
import { Logo } from '../Navbar/NavbarStyle'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'


export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FA(SH)OP</Logo>
                <Desc>
                    Adipisicing nisi culpa eiusmod eu do consectetur minim do commodo qui enim eiusmod in.
                    Incididunt voluptate fugiat do dolor aliqua commodo. Sunt pariatur sunt qui laborum Lorem labore esse fugiat
                    occaecat nostrud aute minim tempor. Tempor ad labore enim incididunt reprehenderit aliqua.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}
