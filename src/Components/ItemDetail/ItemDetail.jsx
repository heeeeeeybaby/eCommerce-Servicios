import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = ({item}) => {
  return (
    <div className='row justify-content-center'>
        <div className="col-md-4">
            <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
        </div>
        <div className="col-md-6">
            <div className="card-body pt-5">
                <h4 className='card-title'>{item.nombre}</h4>
                <p className='card-text text-muted'>{item.descripcion}</p>
                <hr />
                <ul>
                  <li className="card-text">{item.equipo}</li>
                  <li className="card-text">{item.horasCobertura} horas de Cobertura</li>
                  <li className="card-text">{item.preparativos}</li>
                  <li className="card-text">{item.entrega}</li>
                </ul>
                <hr className='my-2' />
                <h5 className='card-text'>Valor: ${new Intl.NumberFormat('de-DE').format(item.valorNormal)}</h5>
                <small className='card-text text-muted d-block my-2'>¡Sólo {item.stock} servicios disponibles!</small>
                <div className="bg-light mt-4 p-3 d-inline-block">
                  <ItemCount valInicial={1} stock={item.stock}/>
                  <button className='btn btn-success mx-1'><i className="bi bi-cart" /> Comprar</button>
                </div>

            </div>
        </div>
     
    </div>
  )
}