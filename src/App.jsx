import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { lazy, Suspense } from 'react';
import { Model } from './Models/Model';

const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Price = lazy(() => import('./Pages/Price/Price'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const JoinNow = lazy(() => import('./Pages/JoinNow/JoinNow'));
const NotFound = lazy(()=>import('./Pages/Not Found/NotFound'))

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Model />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Price />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
