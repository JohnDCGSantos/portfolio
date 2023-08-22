import './App.css'
import './NavBar.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Footer from './components/Footer'
/*import Header from './components/Header'*/
function App() {
  return (
    <div>
      <NavBar />

      {/* <Header />*/}
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
