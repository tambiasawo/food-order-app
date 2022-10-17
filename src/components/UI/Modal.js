import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Background = ()=>{
    return(<div className = {classes.backdrop}></div>)
}

const Overlay = (props)=>{
    return(
        <div className = {classes.modal}>
            <div className = {classes.content}>{props.children}</div>
        </div>
    )
}
const Modal = (props)=>{
    const elementID = document.getElementById('overlays')
    return(
        <>
            {ReactDOM.createPortal(<Background />, elementID)}
            {ReactDOM.createPortal(<Overlay> {props.children} </Overlay>, elementID)}

        </>
    )
}

export default Modal
