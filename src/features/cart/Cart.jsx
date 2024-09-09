import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import LinkButton from '../ui/LinkButton';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { clearCart } from './CartSlice';


function Cart() {
  const cart = useSelector(state=> state.cart.cart);
  const username = useSelector(state=> state.user.username)
  const dispatch = useDispatch()

  if(cart.length === 0) return <EmptyCart/>

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='my-8 text-xl font-semibold'>Your cart, {username ? username : "Anonymous"}</h2>
      <ul className='divide-y divide-stone-300 border-b border-stone-300 mb-8'>{cart.map(item => <CartItem item={item} key={item.pizzaId}/>)}</ul>
      <div className='flex space-x-3'>
        
        <Button to="/order/new" type='primary'>Order pizzas</Button>
        <Button type="secondary" onClick={()=> dispatch(clearCart())}>Clear Cart</Button>
      </div>
    </div>
  );
}


export default Cart;
