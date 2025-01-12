import { RouteProps } from 'react-router-dom'
import { MainPageAsync } from '../../pages/MainPage'

export enum AppRouters {
    MAIN = 'main'
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/'
}

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPageAsync />
    }
}
