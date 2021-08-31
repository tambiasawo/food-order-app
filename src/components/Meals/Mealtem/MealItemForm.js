import { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"

export default function MealItemForm (props){
    const amountRef = useRef();
    const [validInput,setvalidInput] = useState(true)

    function submitHandler(e){
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        console.log(4)
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmountNumber < 1 || enteredAmount.trim().length===0 || enteredAmountNumber > 5)
        {
            setvalidInput(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber) //becos the cart data needs more data not just amount. Eg. id, price thats
        //why we dont call pour context here
    }

    return(
        <form className = {classes.form} onSubmit = {submitHandler}>
            <Input label = "Amount" ref= {amountRef} input = {{
                id:'amount_'+ props.id,
                min: '1',
                max: '5', 
                step: '1',
                type: 'number',
                defaultValue: '1',
                
            }}/>
            <button>Add me</button>
            {!validInput && <p>Plesase enter sth valid</p>}
        </form>
    )
}