import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import QusetionContextProvider from './context/QusetionContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QusetionContextProvider>
    <App />
    </QusetionContextProvider>
  </StrictMode>,
)
