import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import CreateEvents from './pages/CreateEvents'
import BrowseEvent from './pages/BrowseEvent'
import MyEvents from "./pages/Myevents"
import AppLayout from "./Component/AppLayout"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import EventDetails from "./pages/EventDetails"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/view" element={<BrowseEvent />} />
        <Route path="/myEvents" element={<MyEvents />} />
        <Route path="/createEvents" element={<CreateEvents />} />
        <Route path="/view/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </>


  )
}

export default App
