const Secciones =() =>{
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Films</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fotografías</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Extensiones
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Retrocam</a></li>
            <li><a className="dropdown-item" href="#">VR 360</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Servicios Adicionales</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tabla resumen</a>
        </li>
      </ul>
    );
}

export default Secciones;