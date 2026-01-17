import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookProvider } from './components/context/BookContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <App />
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
)
