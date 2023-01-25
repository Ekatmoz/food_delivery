import dataDishes from "../../data/dataDishes";

const CartItem = ({cartItem}) => {
  const dishes = dataDishes.find(item => item.id === cartItem.dishId)
  return ( 
    <div>
      <p>{dishes.name}</p>
      <p>{cartItem.quantity} portion(s)</p>
      <p>Price: ${dishes.price * cartItem.quantity}</p>
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="trash"/> 
    </div> );
}
 
export default CartItem;