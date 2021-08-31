import classes from './HeaderCartButton.module.css'
import CartIcon from './CartIcon'
import {useContext, useEffect, useState} from 'react'
import CartContext from '../../store/cart-context'

export default function HeaderCartButton(props){
    const ctx  = useContext(CartContext)
    const [setEffect,changsetEffect] = useState(false)
    const {items} = ctx

    useEffect(()=>{
        
        changsetEffect(true)
        const timer = setTimeout(()=>{
            changsetEffect(false)
        },300)
        return (()=>{
            clearInterval(timer)
        })

    },[items])
   
    const btnClasses = `${classes.button} ${setEffect ? classes.bump : ''}`
    return(
        <button className = {btnClasses} onClick = {props.cartButton} >
            <span className = {classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.badge}>{
                ctx.items.reduce((sum,currNum) =>{ return sum+currNum.amount},0)}
            </span>
        </button>
    )
}