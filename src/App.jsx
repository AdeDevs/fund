import HomeScreen from './components/Home'
import NavBar from './components/Nav'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
      </Routes>
    </div>
  )
}

export default App
