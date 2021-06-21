import React from 'react'
import './ProductList.css'

const ProductList = () => {
    
    const ProductList = [
        {name:'Limon Importado', value:65, stock:100, Image:<img class='imagenes' src='http://www.interempresas.net/FotosArtProductos/P74638.jpg'/>},
        {name:'Naranja Importada', value:45, stock:75, Image:<img class='imagenes' src='https://storage.googleapis.com/portalfruticola/2017/07/Naranjas-shutterstock_324222146-1024x768.jpg'/>},
        {name:'Manzana', value:49, stock:100, Image:<img class='imagenes' src='https://img.vixdata.io/pd/webp-large/es/sites/default/files/imj/elgranchef/D/Deliciosas%20chips%20de%20manzana.jpg'/>},
        {name:'Frutilla', value:100, stock:120, Image:<img class='imagenes'src='https://i.lapapa.cl/uploads/2019/07/28163803/frutilla.jpg'/>}
    ];
    
    return (
        <div>
            <h1> Mi tienda</h1>
            {ProductList.map((Element, i) => {
                return (
                    <div className='d-flex' class='tarjetas' key={i}>
                        <h3>Nombre :{Element.name}</h3>
                        <p>Valor :${Element.value}</p>
                        <p>Stock :{Element.stock} Kg</p>
                        <p>Índice :{i+1}</p>
                        <p>Imagen :{Element.Image}</p>
                        
                    </div>
                );
            })}
        </div>
    )
}

export default ProductList
