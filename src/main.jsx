import './index.css'
import ReactDOM from 'react-dom/client'

import App from './Lessons/React-router/App'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
