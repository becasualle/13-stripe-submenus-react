import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  // destructure items from context, destructure page (get page name and links array from page item)
  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2');

  // each time location or links changes - set submenu position and choose css class
  useEffect(() => {
    setColumns('col-2');
    // get element that we hover - <aside ...>...</aside>
    const submenu = container.current;
    // set position css properties
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`

    // depending on links array size apply layout class
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }

  }, [location, links])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {/* for each link in array render submenu link */}
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>{icon}{label}</a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
