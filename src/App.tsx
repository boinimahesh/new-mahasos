import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import NoFound404 from './pages/notfound404/NoFound404'
import ScrollToTop from './components/ScrollToTop'
import Aboutus from './pages/about/Aboutus'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="*" element={<NoFound404 />} />
      </Routes>
    </>
  )
}

export default App
