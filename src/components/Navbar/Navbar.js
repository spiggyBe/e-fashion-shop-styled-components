import React, { useState } from 'react'

import { Nav, SearchSection, InputStyled, StyledSearchIcon, Logo, Toggle, Hamburger, NavList, NavItem, StyledLink, NavContact, StyledLinkContact } from './NavbarStyle'


export const Navbar = () => {
    const [openedMenu, setOpenedMenu] = useState(false)

    const handleToggleHamburger = () => {
        setOpenedMenu(!openedMenu)
    }

    return (
        <Nav>
            <Logo>MERN-shop</Logo>
            <SearchSection>
                <InputStyled />
                <StyledSearchIcon style={{ color: '#' }} />
            </SearchSection>
            {openedMenu ? (
                <NavList>
                    <NavItem slideINOut onClick={handleToggleHamburger}>
                        <StyledLink exact to='/'>home</StyledLink>
                    </NavItem>
                    <NavItem slideINOut onClick={handleToggleHamburger}>
                        <StyledLink to='/about'>about</StyledLink>
                    </NavItem>
                    <NavItem slideINOut onClick={handleToggleHamburger}>
                        <StyledLink to='/contact'>contact</StyledLink>
                    </NavItem>
                    <NavItem slideINOut onClick={handleToggleHamburger}>
                        <StyledLink to='/login'>login</StyledLink>
                    </NavItem>
                    < NavContact >
                        <NavItem slideINOut onClick={handleToggleHamburger}>
                            <StyledLinkContact to='/register'>register</StyledLinkContact>
                        </NavItem>
                    </NavContact>
                </NavList >
            ) : (
                <NavList open>
                    <NavItem>
                        <StyledLink exact to='/' activeClassName='active'>home</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to='/about' activeClassName='active'>about</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to='/contact' activeClassName='active'>contact</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to='/login' activeClassName='active'>login</StyledLink>
                    </NavItem>
                    <NavContact>
                        <NavItem>
                            <StyledLinkContact to='/register'>register</StyledLinkContact>
                        </NavItem>
                    </NavContact>
                </NavList>
            )}
            <Toggle onClick={handleToggleHamburger}>
                {openedMenu ? <Hamburger open /> : <Hamburger />}
            </Toggle>
        </Nav >
    )
}
