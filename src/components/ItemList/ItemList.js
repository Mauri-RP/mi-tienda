import React from 'react'
import Counter from '../Counter/Counter'

const ItemList = () => {
    
    const onAdd = (amount) => {
        console.log(amount)
    }


    return (
        <div className='mt-3'>
            <h2>Bienvenidos a tu feria natural</h2>
            <Counter initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemList
