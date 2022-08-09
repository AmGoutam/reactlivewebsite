import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import About from './pages/Abouts';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/contact' element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App
