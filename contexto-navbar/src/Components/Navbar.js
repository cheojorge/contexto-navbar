import React, { useContext } from 'react'
import { NameContext } from '../Context/NameContext'

export const Navbar = () => {
    const {name} = useContext(NameContext)
    return (
        
            <ul className="nav justify-content-end bg-info">
                <li className="nav-item">
                    <h3 className="nav-link text-white">Hi {name}</h3>
                </li>
            </ul>
       

    )
}
