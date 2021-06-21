
import React, { useState } from 'react'

/*const Counter = (props) => {
    console.log(props)*/

const Counter = ({initial, stock, onAdd}) => {
    
    const [items, setItems] = useState(initial)

    const addItems = () => {
        /*VALIDACIÓN DE STOCK
        Coloco la validación del Stock, para saber si tengo o no de este producto, con && le damos que se puede hacer si y solo si hay stock.*/
        
        /*Se puede hacer de esta manera, poniendo la condicional, y cuando no hay mas stock que nos salga un alerteavisandonos*/
        items < stock ? setItems(items+1) : alert ('no hay más stock')
       
        /*O que simplemente no nos deje agregar mas items al carrito*/
        
        /*
        items < stock && 
        setItems(items + 1)
        */
    }

    return (
        <div className='container counter mt-3'>
            <div className='d-flex aling-items-center justify-content-center mb-1'>
                <i className='far fa-minus-square counterButton'></i>
                <span className='counterAmount'>{items}</span>
                <i className='far fa-plus-square counterButton' onClick={addItems}></i>
            </div>
            <button className='btn btn-secondary w-100'>Agregar</button>
        </div>
    )
}


export default Counter
