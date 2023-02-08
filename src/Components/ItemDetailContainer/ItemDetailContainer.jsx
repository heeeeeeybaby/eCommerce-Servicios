import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/servicios.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === id)
            setProducto(item)
        })
    }, [])
    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className='card mb-3 itemDetail'>
                        <ItemDetail item={producto}/>
                    </div>
                </div>
            </div>
        </div>

    )
}