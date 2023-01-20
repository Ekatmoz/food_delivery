const Dish = ({dish}) => {

  const {id, price, img, name} = dish;
  return ( <div key={id}>
    <p>{name}</p>

  </div> );
}
 
export default Dish;