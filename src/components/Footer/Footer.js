import React from 'react'
import { Container, Left, Center, Right, Desc, SocialContainer, SocialIcon, StyledList, StyledItem, StyledLinkA, Payments, Image, UsefulLinks } from './FooterStyle'
import { Logo } from '../Navbar/NavbarStyle'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

import visa from '../../assets/images/visa.png'
import paypal from '../../assets/images/paypal.png'
import crypto from '../../assets/images/crypto.png'


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
            <Center>
                <Payments>Payments</Payments>
                <Image src={visa} />
                <Image src={paypal} />
                <Image src={crypto} />
            </Center>
            <Right>
                <UsefulLinks> Useful links:</UsefulLinks>
                <StyledList>
                    <StyledItem>
                        <StyledLinkA href='/'>shop</StyledLinkA>
                    </StyledItem>
                    <StyledItem>
                        <StyledLinkA href='/about' >about</StyledLinkA>
                    </StyledItem>
                    <StyledItem>
                        <StyledLinkA href='/contact' >contact</StyledLinkA>
                    </StyledItem>
                    <StyledItem>
                        <StyledLinkA href='/login'>login</StyledLinkA>
                    </StyledItem>
                    <StyledItem>
                        <StyledLinkA href='/register'>register</StyledLinkA>
                    </StyledItem>
                </StyledList>
            </Right>
        </Container>
    )
}
