import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()

    useEffect(() => {
        if(idCategoria) {
            fetch('../json/servicios.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === (idCategoria))
                const productsList = ItemList({products}) 
                console.log(productsList)
                setProductos(productsList)
            })
        } else {
            fetch('./json/servicios.json')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    return (
        <div className='container mt-4 pt-4'>
            <div className="row justify-content-center mt-5">
                <h3 className='text-center text-capitalize'>{idCategoria}</h3>
            </div>
            <div className='row justify-content-center cardProductos mt-4 pt-3'>
                {productos}
            </div>
        </div>

    )
}