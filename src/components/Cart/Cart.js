import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

export default function Cart(props){
    const cartCtx = useContext(CartContext)

    function addItemsFunc(item) {
        cartCtx.addItems({...item, amount:1})
    }

    function removeItemsFunc(id) {

        cartCtx.removeItems(id)
    }

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length>0
    const cartItems = <ul className = {classes['cart-items']}> {cartCtx.items.map(item => 
            <CartItem key = {item.id} name={item.name} amount = {item.amount} price = {item.price} onAdd = {addItemsFunc.bind(null, item)} onRemove = {removeItemsFunc.bind(null, item.id)}/>)}
            </ul>
    return(
        <div> 
            <Modal>
                {cartItems}
                <div className = {classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className = {classes.actions}>
                    <button className = {classes['button--alt']} onClick = {props.onClose}>Close</button>
                    {hasItems && <button className = {classes.button}>Order</button>}
                </div>
            </Modal>
        </div>
    )
}