import Navbar from "./components/Navbar"
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'
import NotFound from "./pages/NotFound"
import LayoutPublic from "./layout/LayoutPublic"
import BlogDetails from "./pages/BlogDetails"
import { Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <div className="container mx-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route element={<Inicio />} index></Route>
          <Route element={<Nosotros />} path="/nosotros"></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          <Route element={<NotFound/>} path="*"></Route>
        </Route>
      </Routes>


    </div>

  )
}

export default App