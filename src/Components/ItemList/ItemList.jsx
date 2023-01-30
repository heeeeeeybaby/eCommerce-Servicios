import { Item } from "../Item/Item";
export const ItemList = ({services}) => {
    return(
        <>
            {services.map(servicio => <Item item={servicio} key={servicio}/>)}   
        </>
    );
}