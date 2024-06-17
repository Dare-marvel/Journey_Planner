import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import ShortestPath from './pages/ShortestPath'
import Menu from './pages/Menu'
import StationList from './pages/StationList'
import Map from './pages/Map'
import { Home, Chat } from "./pages";

import { ChatState } from "./context/ChatProvider";
import ExpenseTracker from './pages/ExpenseTracker'
import { Navbar } from './components/Navbar'
import Weather from './pages/Weather'

function App() {
    const { user } = ChatState();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            {user &&
                (<div>
                    <Navbar />
                    <Routes>

                        <Route path="/chats" element={<Chat />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/shortestpath' element={<ShortestPath />} />
                        <Route path='/list' element={<StationList />} />
                        <Route path='/map' element={<Map />} />
                        <Route path='/tracker' element={<ExpenseTracker />} />
                        <Route path='/weather' element={<Weather />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>)}
        </>
    )
}

export default App
