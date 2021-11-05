import React, { useState } from 'react'

import { Nav, SearchSection, InputStyled, Logo, Toggle, Hamburger, NavList, NavItem, StyledLink, NavContact, StyledLinkContact } from './NavbarStyle'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Badge from '@mui/material/Badge'

export const Navbar = () => {
    const [openedMenu, setOpenedMenu] = useState(false)

    const handleToggleHamburger = () => {
        setOpenedMenu(!openedMenu)
    }

    return (
        <Nav>
            <Logo>Fa(sh)op</Logo>
            <SearchSection>
                <InputStyled placeholder="Search..." />
                <SearchIcon style={{ fill: '#0095DA' }} />
            </SearchSection>
            {openedMenu ? (
                <NavList>
                    <NavItem slideINOut onClick={handleToggleHamburger}>
                        <StyledLink exact to='/'>shop</StyledLink>
                    </NavItem>
                    <NavItem slideINOut onClick={handleToggleHamburger}>
                        <StyledLink to='/products'>products</StyledLink>
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
                        <StyledLink exact to='/' activeClassName='active'>shop</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to='/products' activeClassName='active'>products</StyledLink>
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

            <Badge badgeContent={15} color='primary' style={{ marginRight: '10px', cursor: 'pointer' }}>
                <ShoppingCartOutlinedIcon style={{ fill: '#0095DA' }} />
            </Badge>

            <Toggle onClick={handleToggleHamburger}>
                {openedMenu ? <Hamburger open /> : <Hamburger />}
            </Toggle>
        </Nav >
    )
}
