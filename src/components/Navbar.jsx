import { NavLink } from 'react-router-dom'
import { links } from '../data'
import "./navbar.css";
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='nav'>
      <div className={`navMenu ${showMenu && 'showMenu'}`}>
        <ul className="navList">
          {links.map(({name, icon, path}, index) => {
            return(
              <li className="navItem" key={index}>
                <NavLink to={path} className={({isActive}) => isActive ? 'navLink activeNav':'navLink'} onClick={() => setShowMenu(!showMenu)}>
                  {icon}
                  <h3 className='navName'>{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <div className={`navToggle ${showMenu && 'animateToggle'}`} onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar