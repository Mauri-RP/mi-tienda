/*MI BARRA DE NAVEGACIÓN*/

import React from 'react'

const NavBar = () => {
    return (
        <div className='d-flex aling-items-center justify-content-between p-2 bg-light'>
            <h3>Mi Feria</h3>
            <ul className='d-flex aling-items-conter' style={{listStyle:'none'}}>
                <li className='me-2'>Home</li>
                <li className='me-2'>Carrito</li>
                <li className='me-2'>Otros</li>
            </ul>
            
        </div>
    )
}

export default NavBar
