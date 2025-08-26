import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import NoFound404 from './pages/notfound404/NoFound404'
import ScrollToTop from './components/ScrollToTop'
import Aboutus from './pages/about/Aboutus'
import Team from './pages/Team'
import Portfolio from './pages/Portfolio'
import { Services } from './pages/Services'
import ArtificialIntelligence from './pages/ArtificialIntelligence'
import BPO from './pages/BPO'
import B2bleadgeneration from './pages/B2bleadgeneration'
import Jobs from './pages/Jobs'
import Contactus from './pages/Contactus'
import InventoryManagement from './pages/ourProduct/InventoryManagement'
import Integrate from './pages/ourProduct/Integrate'
import OrderManagement from './pages/ourProduct/OrderManagement'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/artificialIntelligence" element={<ArtificialIntelligence />} />
        <Route path="/bpo" element={<BPO />} />
        <Route path="/b2bleadgeneration" element={<B2bleadgeneration />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/ourProduct/inventoryManagement" element={<InventoryManagement />} />
        <Route path="/ourProduct/integrate" element={<Integrate />} />
        <Route path="/ourProduct/orderManagement" element={<OrderManagement />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        
        {/* <Route path="/hire-our-team" element={<HireOurTeam />} />
        <Route path="/sixjuly" element={<Sixjuly />} /> */}

        <Route path="*" element={<NoFound404 />} />
      </Routes>
    </>
  )
}

export default App
