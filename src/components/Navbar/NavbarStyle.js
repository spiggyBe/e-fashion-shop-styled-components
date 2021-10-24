import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

export const Nav = styled.nav`
width: 100%;
height: 100px;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
background-color: #fff;
text-transform: capitalize;

  @media ( max-width: 900px ) {
    position: sticky;
    top: 0;
    left: 0;
    padding: 0 1rem;
  }
`

export const Logo = styled.div`;
font-size: 2.5rem;
font-weight: 700;
color: #0095DA;

@media ( max-width: 1400px ) {
  font-size: 1.5rem;
}

@media ( max-width: 1024px ) {
  font-size: 1rem;
}

@media ( max-width: 768px ) {
  font-size: 0.8rem;
}
`

export const SearchSection = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
border: 1px solid #0095DA;
border-radius: 3px;
`

export const InputStyled = styled.input`
border: none;
`

export const StyledSearchIcon = styled(SearchIcon)`
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
`

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 900px) {
    display: flex;
  }
`

export const Hamburger = styled.div`
  background-color: #0095DA;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: #0095DA;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

export const NavList = styled.ul`;
display: flex;
justify-content: space-between;
list-style: none;

@media (max-width: 900px) {
    flex-direction: column;
    position: absolute;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: #fff;
    transition: ${props => (props.slideINOut ? 'all 0.3s ease-in' : 'all 0.3s ease-in')};
    top: 100px;
    height: 100vh;
    padding-top: 10px;
    border-top: 2px solid #0095DA;
    left: ${props => (props.open ? "-110%" : "0")};
  }
`

export const NavItem = styled.li`
cursor: pointer;
margin: 0 10px;

@media (max-width: 926px) {
    padding: 0 5px;
    margin: 0 3px;
}

@media ( max-width: 900px ) {
    margin: 5px 0;
    width: 150px;
    text-align: center;
}
`

export const StyledLink = styled(NavLink)`
text-decoration: none;
line-height: 1.5rem;
vertical-align: center;
position: relative;

&.active {
    border-bottom: 3px solid #0095DA;
  }
`

export const StyledLinkContact = styled(NavLink)`
text-decoration: none;
line-height: 1.5rem;
vertical-align: center;
position: relative;
`

export const NavContact = styled.div`
border: 2px solid #0095DA;
border-radius: 3px;
transition: all .3s linear;
margin-left: .6rem;

&:hover {
    background-color: #0095DA;
}
    
&:hover ${StyledLinkContact} {
      color: #fff;
}

@media (max-width: 900px ) {
   border: none; 
}
`