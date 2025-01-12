import { configureStore } from '@reduxjs/toolkit'
import NavItemsSlice from './widgets/Navbar/NavSlice/NavSlice'

export const store = configureStore({
    reducer: { NavItems: NavItemsSlice }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
