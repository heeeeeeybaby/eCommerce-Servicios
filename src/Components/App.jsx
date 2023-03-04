import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

//Firebase
import { cargarBDD } from '../firebase/firebase';

//Context 
import { CarritoProvider } from '../context/CarritoContext';
import Carrito from './Navbar/Carrito/Carrito';
const App = () => {
  //cargarBDD();
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
    <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      </Routes> 
    </CarritoProvider>
    </BrowserRouter>
      
    </>
  );
}

export default App;

