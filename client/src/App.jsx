import { Route, Routes, Navigate } from 'react-router-dom'
import ShortestPath from './pages/ShortestPath'
import StationList from './pages/StationList'
import Map from './pages/Map'
import { Home, Chat } from "./pages";

import { ChatState } from "./context/ChatProvider";
import ExpenseTracker from './pages/ExpenseTracker'
import { Navbar } from './components/Navbar'
import Weather from './pages/Weather'
import News from './pages/News'
import Games from './pages/Games'
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function App() {
  const { user } = ChatState();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Button backgroundColor='bg' borderWidth='1px' _hover={{ backgroundColor: 'btn' }} position='fixed' zIndex={100} bottom={0} left={0} m='1rem' onClick={() => toggleColorMode()}>
        {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Routes>
        <Route path="/" element={user ? <Navigate to='/news' replace /> : <Home />} />
      </Routes>
      {user &&
        (<div>
          <Navbar />
          <Routes>

            <Route path='/news' element={<News />} />
            <Route path='/list' element={<StationList />} />
            <Route path='/shortestpath' element={<ShortestPath />} />
            <Route path='/map' element={<Map />} />
            <Route path="/chats" element={<Chat />} />
            <Route path='/tracker' element={<ExpenseTracker />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/games' element={<Games />} />
            <Route path="*" element={<Navigate to="/news" replace />} />
          </Routes>
        </div>)}
    </>
  )
}

export default App
