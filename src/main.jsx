import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

import Smoother from './assets/smoother'
Smoother()
import animations from './assets/animation'
animations()

createRoot(document.getElementById('root')).render(<App />)
