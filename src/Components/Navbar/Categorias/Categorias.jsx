import { Link } from 'react-router-dom';
import  React  from 'react';
export const Categorias = React.memo(() => {
        return (
            <>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to={"/servicios"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className="btn btn-dark">Nuestros Servicios</button>
                    </Link>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={"/category/films"}>Films</Link></li>
                    <li><Link className="dropdown-item" to={"/category/photo"}>Fotografías</Link></li>
                    <li><Link className="dropdown-item" to={"/category/full"}>Packs Full</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={"/category/servicios-adicionales"}>Servicios Adicionales</Link></li>
                    </ul>
                </li>
            </>
        );
    }
)