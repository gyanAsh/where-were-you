import Header from './Header'
import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
      <div>
          <Header />
            <main className="min-h-screen bg-teal-400">
                {children}
            </main>
          <Footer/>
      </div>
  )
}

export default Layout