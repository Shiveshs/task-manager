import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import "./layout.css"
const Layout = () => {
  return (
    <>
    <Header/>
    <main className="main"> <Outlet/> </main>
    <Footer/>
    </>
  )
}

export default Layout