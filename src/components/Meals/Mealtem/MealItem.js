import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
export default function MealItem(props){

    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const cartHandler = (amt) =>{
        const cartObj = {
            amount:amt,
            price: props.price,
            id: props.id,
            name: props.name
        }
        cartCtx.addItems(cartObj)

    }

    return(
        <li className ={classes.meal}>
            <div>
                <h3> {props.name}</h3>
                <div className = {classes.description}>{props.desc}</div>
                <div className = {classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id = {props.id} onAddToCart = {cartHandler}/>
            </div>
        </li>
    )
}