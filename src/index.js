import React from 'react'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
// import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ChakraProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)