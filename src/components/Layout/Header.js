import reactmeal from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from '../Cart/HeaderCartButton'
const Header = (props) =>{
    // becos of the - in main-image classname, we write it as an array elem w ''
    return(
        <>
            <header className ={classes.header}>
                <h1>ReactEats</h1>
                <HeaderCartButton cartButton = {props.cartClicked}/>
            </header>
            <div className = {classes['main-image']}> 
                <img src={reactmeal} alt = "Delicious Meals"/>
            </div>
        </>
    )
}

export default Header