import { useCarritoContext } from "../context/CarritoContext";
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemCart = ({item}) => {
    const {removeItem, addItem} = useCarritoContext()
    const onAdd = (cantidad) => { //Agregar el producto al carrito
        addItem(item,cantidad)
      }
    return (
        <>
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Cantidad: {item.cant}</p>
                        <p className="card-text">Precio Unitario: $ {new Intl.NumberFormat('de-DE').format(item.valorNormal)}</p>
                        <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.valorNormal * item.cant)}</p>
                        <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>

{/*             <div className="card col-6 col-md-4 my-3 mx-1 p-2">
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Cantidad: {item.cant}</p>
                    <hr />
                    <h6 className="card-subtitle mb-3 text-muted"> Precio: ${new Intl.NumberFormat('de-DE').format(item.valorNormal)}</h6>
                    <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}><i class="bi bi-trash3"></i></button>
                </div>
        </div> */}
        </>


    )
}