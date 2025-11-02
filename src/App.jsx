import React from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <div className='bg-[#172229] min-h-screen h-full'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
