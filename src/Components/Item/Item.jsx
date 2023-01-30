export const Item = ({item}) => {
    return(
        <>
        <div className="card col-6 col-md-4 my-3 mx-1 p-2">
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.descripcion}</p>
          <hr />
          <h6 className="card-subtitle mb-2 text-muted"> Precio: {item.valorNormal}</h6>
          <button type="button" className="mt-2 btn btn-primary">Ver Servicio</button>
        </div>
        </div>
        </>
    ); 
}