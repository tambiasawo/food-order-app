import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import { useContext, useState } from 'react';
import  CartContextProvider from './store/CartContextProvider';

function App() {
  const [clicked, setClicked] = useState(false)

  function changeClick(){
    setClicked(prevState => {
      if(prevState) return false
      else
        return true
    })
  }

  return (
    <CartContextProvider> 
      {clicked && <Cart onClose = {changeClick}/>} 
      <Header cartClicked = {changeClick}/>
      <main> 
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
