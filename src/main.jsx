import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyLibApp from './myLibApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyLibApp/>
  </StrictMode>,
)
