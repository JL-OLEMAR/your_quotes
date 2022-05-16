import { createRoot } from 'react-dom/client'

import { App } from './routes/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(<App classname='app' />)
