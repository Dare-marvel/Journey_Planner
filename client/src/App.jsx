import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShortestPath from './pages/ShortestPath'
import Home from './pages/Home'
import StationList from './pages/StationList'
import Map from './pages/Map'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shortestpath' element={<ShortestPath />} />
                <Route path='/list' element={<StationList />} />
                <Route path='/map' element={<Map />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
