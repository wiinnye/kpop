
import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login/login';
import './styles/App.css'

function App() {

  return (
    <Flex className='App'>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
      </Routes>
    </Flex >
  )
}

export default App;
