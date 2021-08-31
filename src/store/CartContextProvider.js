import { useReducer } from "react"
import CartContext from "./cart-context"

const initialState= {
    items:[],
    totalAmount:0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
  
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
  
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    else if(action.type==="REMOVE")
    {
        let updatedItems
        const delIndex = state.items.findIndex(
            (item) => item.id === action.id
          );
        const delItem = state.items[delIndex]
        const updatedTotalAmount = state.totalAmount - delItem.price; 
        
        if(delItem.amount ===1)
        {
            updatedItems = state.items.filter(item => (item.id !== action.id)) //deleting an unwanted item
        }

        else
        {
            updatedItems = [...state.items]
            delItem.amount-=1;

        }
    
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
       };
    
    return initialState
    }
export default function CartContextProvider (props){

    const [cartState, cartDispatch] = useReducer(cartReducer, initialState)


    const returnValues={
         items:cartState.items,
         totalAmount:cartState.totalAmount,
         addItems:addItemsHandler, 
         removeItems: removeItemsHandler
    }
    function addItemsHandler(item) {
        cartDispatch({type:"ADD", item:item})
    }

    function removeItemsHandler(id) {
        cartDispatch({type:"REMOVE", id:id})
    }

    return(
        <CartContext.Provider value = {{
            ...returnValues,
            
        }}>
            {props.children}
        </CartContext.Provider>
    )
    
    }
