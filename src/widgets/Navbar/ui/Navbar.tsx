import { Navitem } from './Navitem'

import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { NavItemsInterface } from '../NavSlice/NavSlice'

import style from './Navbar.module.scss'

export const Navbar = () => {
    const pathObj: NavItemsInterface[] = useSelector((state: RootState) => state.NavItems)

    return (
        <nav className={style.Navbar}>
            {pathObj.map((item) => (
                <Navitem key={item.id} path={item.path}>
                    {item.text}
                </Navitem>
            ))}
        </nav>
    )
}
