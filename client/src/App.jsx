import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import ShortestPath from './pages/ShortestPath'
import Menu from './pages/Menu'
import StationList from './pages/StationList'
import Map from './pages/Map'
import { Home, Chat } from "./pages";

import { ChatState } from "./context/ChatProvider";

function App() {
    const { user } = ChatState();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            {user && <Routes>

                <Route path="/chats" element={<Chat />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/shortestpath' element={<ShortestPath />} />
                <Route path='/list' element={<StationList />} />
                <Route path='/map' element={<Map />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>}
        </>
    )
}

export default App
