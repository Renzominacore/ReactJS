import { Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
function App() {
return(
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
  </div>
);
}

export default App
