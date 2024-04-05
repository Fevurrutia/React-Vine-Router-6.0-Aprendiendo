import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container flex justify-between px-5 py-4 bg-black text-white">
                <NavLink className="container flex justify-between px-5 py-4 bg-black text-white" to='/'>Inicio</NavLink>
                <NavLink className="container flex justify-between px-5 py-4 bg-black text-white" to='/nosotros'>Nosotros</NavLink>
                <NavLink className="container flex justify-between px-5 py-4 bg-black text-white" to='/contacto'>Contacto</NavLink>
                <NavLink className="container flex justify-between px-5 py-4 bg-black text-white" to='/blog'>Blog</NavLink>
            </div>
        </div>
    )
}

export default Navbar