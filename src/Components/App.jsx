import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter/>
      <Navbar/>
      <Routes/>
      <Route path="/" element={<ItemListContainer/> }/>
      
    </>
    ); 
}

export default App;
