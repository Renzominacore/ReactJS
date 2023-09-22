import { Routes, Route } from "react-router-dom";
import CartProvider from "../context/CartProvider";
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Checkout from "./componentes/Checkout";


function App() {
return(
  <CartProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
  </CartProvider>
);
}

export default App
