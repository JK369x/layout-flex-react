import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.nav`
 display: flex;
 /* border: 1px solid red; */
 background-color: #333;
 color: white;   
`
export const NavLogo = styled(Link)`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-left: 1rem;
    text-decoration: none;
`

export const NavMenu = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`
export const NavList = styled.li`
    margin: 0 1rem;
`
export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`
export const FooterCon = styled.footer`
    width: 100%;
    bottom: 0;
    text-align: center;
    background-color: #333;
    color: #fff;
    padding: 1rem;
`