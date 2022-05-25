import React from 'react'
import { NavBar , NavLogo, NavMenu, NavLink, NavList } from '../styles/styledElements'
function Nav() {
  return (
     <NavBar>
           <NavLogo to ='/'>
              <h1>Logo</h1>
           </NavLogo>

            <NavMenu>
               <NavList>
                   <NavLink to='/'>Home</NavLink>
                </NavList>
                <NavList>
                   <NavLink to='About'>About</NavLink>
                </NavList>
                <NavList>
                   <NavLink to='Blog'>Blog</NavLink>
                </NavList>
                <NavList>
                   <NavLink to='Contact'>Contact</NavLink>
                </NavList>
            </NavMenu>
    </NavBar>
  )
}

export default Nav