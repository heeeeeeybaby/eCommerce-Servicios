import { Brand } from "./Brand/Brand";
import Carrito from "./Carrito/Carrito";
import { ResponsiveNavbar } from "./ResponsiveNavbar/ResponsiveNavbar";
import Secciones from "./Secciones/Secciones";

const Navbar = () => {
    return(
        <nav id="_nav" className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Brand/>
                <ResponsiveNavbar/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Secciones/>
                    <Carrito cantCarrito={3}/>
                </div>
            </div>
        </nav>
    ); 
}
export default Navbar; 