import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = ({item}) => {
  return (
    <div className='row justify-content-center'>
        <div className="col-md-4">
            <img src={`../../img/${item.img}`} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
        </div>
        <div className="col-md-6">
            <div className="card-body">
                <h5 className='card-title'>{item.nombre} {item.modelo}</h5>
                <p className='card-text'>Marca: {item.marca}</p>
                <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.valorNormal)}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <ItemCount valInicial={1} stock={item.stock}/>
                <button className='btn btn-secondary d-block mt-3'>Finalizar Compra</button>
            </div>
        </div>
     
    </div>
  )
}