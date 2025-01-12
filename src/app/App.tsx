import { Suspense } from 'react'
import { Navbar } from '../widgets/Navbar'
import AppRouter from './styles/providers/routers'
import { PageLoader } from '../widgets/PageLoader'

import './styles/index.scss'
import './styles/themes/dark.scss'
import './styles/themes/light.scss'

function App() {
    return (
        <div className="app dark">
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App
