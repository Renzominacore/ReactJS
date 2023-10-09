import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import {getCartTotal, mapCartToOrderItems} from "../../utils"
import { createOrder } from "../services";


const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, clear } = useContext(CartContext);
    const [user,setUser]=useState({})
    const [validateEmail, setValidateEmail]=useState('')
  
    const total = getCartTotal(cart);
    
    const datosComprador=(e)=>{
      setUser({
        ...user,
        [e.target.name]:e.target.value
      })
    }
    const finalizarCompra=(e)=>{
        e.preventDefailt()
    }
    const handleCheckout = () => {
      const order = {
        buyer: {
          name: "Renzo",
          phone: "23495861",
          email: "RenzoMinacore@gmail.com",
        },
        items: mapCartToOrderItems(cart),
        total,
        date: serverTimestamp(),
      };
  
      setIsLoading(true);
      createOrder(order).then((docRef) => {
        setOrderId(docRef.id);
        setIsLoading(false);
        clear();
      });
    };
  
    return (
      <div>
        <h1>Checkout</h1>
  
        <h2>Resumen de la compra</h2>
  
        {orderId && <p>El id de la orden es: {orderId}</p>}
  
        {!orderId && (
          <>
            <div>
              <h4>Formulario de contacto</h4>
              <form onSubmit={finalizarCompra}>
                <div className="mb-3">
                  <label className="form-label">Nombre Completo</label>
                  <input className="form-control" onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name"/>
                </div>
                <div className="mb-3">
                <label className="form-label">Numero de telefono</label>
                  <input className="form-control" onChange={datosComprador} type="number" placeholder="+549473823671" name="phone"/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Correo Electronico</label>
                  <input className="form-control" onChange={datosComprador} type="email" placeholder="consultas@hotmail.com" name="email"/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Repita su Correo Electronico</label>
                  <input className="form-control" type="email" placeholder="consultas@hotmail.com" name="email" onChange={((e)=>setValidateEmail(e.target.value))}/>
                </div>
              </form>
              
            </div>
            
  
            <div>
              <h4>Productos</h4>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <p>{item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio por unidad: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
  
            <p>Total de la compra: {total}</p>
            
            <button type="submit" onClick={handleCheckout}>Finalizar compra</button>
            {isLoading && <p>Procesando compra, no cierre esta pagina</p>}
          </>
        )}
      </div>
    );
  };
  
  export default Checkout;