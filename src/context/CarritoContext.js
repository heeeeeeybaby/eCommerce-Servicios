import { useContext, createContext, useState } from "react"; 

const CarritoContext = createContext();
export const useCarritoContext = () => useContext(CarritoContext); 
export const CarritoProvider = (props) => {

    const[carrito, setCarrito] = useState([])

    // COSAS QUE DEBERÍA HACER EL CARRITO
    // Si existe producto en el carrito
    const isInCart = (id) => {
        //pido un ID y buscará si existe ese id en el carrito, si existe me lo devuelve, sino, me retorna undefined.
        return carrito.find(prod => prod.id === id)
    }

    // Vaciar Carrito
    const emptyCart = () => {
        // Vuelvo a setear el carrito a su estado inicial, es decir, vacío.
        setCarrito([]);
    }

    // Eliminar Producto
    const removeItem = (id) => {
        //Utilizamos un método menos destructivo como el filter.
        //Lo que hacemos es decir: Seteame el array modificado cuyos elementos no tengan el ID ingresado. 
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    // Cantidad total de productos en carrito
        //Hay dos formas de verlo: La cantidad de productos diferentes agregados o la cantidad de unidades, aún cuando tenga un sólo SKU. 
        //Con reduce puedo sumar las cantidades y guardarlas en un solo elemento. 
        const getItemQuantity = () => {
            //Creo un acumulador, acum, que vaya guardando las cantidades
            return carrito.reduce((acum, prod) => acum += prod.cant, 0)
        }
    
    // Precio Total de la compra
        //Lo que hace el acumulador es consultar el precio y la cantidad de cada producto en el carrito y retiene el valor de esa operación y lo suma a la multiplicación precio * cantidad siguiente. 
        const totalPrice = () => {
            return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
        }

    //Agregar Producto
        //Aquí vamos a suponer que cuando alguien agrega 2 unidades al stock y luego agrega 3 más, lo que ocurre es que la cantidad total de productos se reemplaza por la nueva cantidad. 
        const addItem = (producto, cantidad) => {
            if(isInCart(producto.id)){
                //findIndex me devuelve el índice de mi elemento en el array, entonces como me devuelve el índice, modifico el array dado ese índice. 
                const indice = carrito.findIndex(prod => prod.id === producto.id)
                //Hago un aux porque no puedo modificar carrito directamente. El carrito sólamnete se puede modificar con el setCarrito. Como sólo se quiere modificar la cantidad, se utiliza el aux. 
                const aux = [...carrito]; 
                aux[indice].cant = cantidad; 
            }
            else{
                const prodCart = {
                    //spread al producto y le agrego la cantidad, es un objeto, por eso lleva los dos puntos. 
                    ... prod, 
                    cant: cantidad
                }
                setCarrito([...carrito, prodCart])
                /* Esto es lo mismo que hacer: 
                const aux = [...carrito]
                aux.push(prodCart)
                setCarrito(aux)
                 */

            }
        }

        return(
            <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>

            </CarritoContext.Provider>
        
        );

}