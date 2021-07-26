import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

// will provide all data inside to each App component
export const AppProvider = ({ children }) => {

    // flags for open/close states of Sidebar/Submenu
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    // location will store values of center and bottom of menu item that we hover
    const [location, setLocation] = useState({});
    // store sublinks item with info page-name (products, developers, companies) and sub-links array (payment, terminal, connect)
    const [page, setPage] = useState({ page: '', links: [] });

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    // update info about page with sublinks and it's coordinates 
    const openSubmenu = (text, coordinates) => {
        // find element {page: "products", links: Array(3)} in sublinks  that matches text of hovered item and update state
        const page = sublinks.find(link => link.page === text);
        setPage(page);
        // update location state with coordinates of current item
        setLocation(coordinates)
        // update showing submenu state to true
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        // send all states and functions as value
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            location,
            page,
            openSidebar,
            openSubmenu,
            closeSidebar,
            closeSubmenu
        }}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}
