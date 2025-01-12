import { createSlice } from '@reduxjs/toolkit'

export interface NavItemsInterface {
    id: number
    path: string
    text: string
}

const initialState: NavItemsInterface[] = [
    {
        id: 0,
        path: '/',
        text: 'Обо мне'
    },
    {
        id: 1,
        path: '/experience',
        text: 'Опыт работы'
    },
    {
        id: 2,
        path: '/message',
        text: 'Написать'
    }
]

export const NavItemsSlice = createSlice({
    name: 'NavItems',
    initialState,
    reducers: {}
})

export default NavItemsSlice.reducer
