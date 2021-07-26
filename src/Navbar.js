import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  // When hover on navbar item, will get text and coordinates of this item 
  const displaySubmenu = e => {
    // store item text for showing right sublinks in openSubmenu
    const page = e.target.textContent;
    // get coordinates and size props/ calculate center and bottom
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    // send info about current item to function that updates states
    openSubmenu(page, { center, bottom });
  }

  // when we hover outside of buttons - hide submenu
  const handleSubmenu = e => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
