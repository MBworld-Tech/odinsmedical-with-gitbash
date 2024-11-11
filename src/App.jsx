import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Candidate from './pages/candidate/Candidate'
import Client from './pages/client/Client'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Navbar from './components/Navbar'
import NotFound from './pages/notFound/NotFound'
import Footer from './components/Footer'
import Hblog from './pages/home/Hblog'
import TrustedBy from './components/TrustedBy'
import ClientDashboard from './admin/clDashboard/ClientDashboard'

import "./app.css"




const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path="about" element = {<About/>}/>
        <Route path="candidate" element = {<Candidate/>}/>
        <Route path="client" element = {<Client/>}/>
        <Route path="contact" element = {<Contact/>}/>
        <Route path="blog" element = {<Blog/>}/>
        <Route path="clDashboard" element = {<ClientDashboard/>}/>
        <Route path="*" element = {<NotFound/>}/>
      </Routes>
      <TrustedBy/>
      <Hblog/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App