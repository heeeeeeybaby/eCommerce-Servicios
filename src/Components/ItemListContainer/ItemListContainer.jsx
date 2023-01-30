import { Item } from "../Item/Item";
import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";
export const ItemListContainer = () => {

    const [servicios, setServicios] = useState([])
    useEffect(() => {
        fetch('./json/servicios.json')
        .then(response => response.json())
        .then(services => {
            console.log(services)
            const servicesList = ItemList({services})
            console.log(servicesList)
            setServicios(servicesList)
        })
    }, [])

    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                {servicios}
            </div>
        </div>
    ); 
}