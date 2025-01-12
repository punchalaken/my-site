import { NavLink } from 'react-router-dom'
import { FC } from 'react'

import style from './Navbar.module.scss'

interface NavitemProps {
    path: string
    children: string
}

export const Navitem: FC<NavitemProps> = ({ path, children }) => {
    return (
        <NavLink to={path} className={({ isActive }) => (isActive ? `${style.active}` : '')}>
            {children}
        </NavLink>
    )
}
