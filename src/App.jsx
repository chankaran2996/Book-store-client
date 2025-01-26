import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <main>
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App
