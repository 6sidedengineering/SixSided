import SixLogo from './assets/6Sided.svg'
import './App.css'
import TopBar from './TopBar'
import Manifesto from './Manifesto'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="Page">
      <div className='logo-container'>
        <img src={SixLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Six Sided</h1>
      <p>Contact us info@6sided.uk</p>
    </div>
  )
}

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
      </Routes>
    </>
  )
}

export default App
