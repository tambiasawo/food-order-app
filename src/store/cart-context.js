import Cart from "../components/Cart/Cart"
import React, { useContext } from "react"

const CartContext = React.createContext({
        items:[],
        totalAmount:0,
        addItems: (item)=>{},
        removeItems: (id)=>{}
    })

export default CartContext