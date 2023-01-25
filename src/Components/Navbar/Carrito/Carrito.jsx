const Carrito = ({cantCarrito}) =>{
    return (
        <button className="btn btn-outline-info" type="submit"><i className="bi bi-cart" /> {cantCarrito}</button>
    );
}
export default Carrito;