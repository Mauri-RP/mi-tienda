/*import logo from './logo.svg';*/
/*Desactivamos el logo ya que lo borramos*/

import './App.css';
import ItemList from './components/ItemList/ItemList';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList/>
      <ProductList/>
         
    </div>
  );
}

/*
const App =() => {
  const productos = [{
    nombre: 'Producto 1', cantidad:1
  },{
    nombre: 'Producto 2', cantidad:10
  },{
    nombre: 'Producto 3', cantidad:5
  }]
  


  return (
    <div>
      <h1>Buenas como estamos</h1>
      <div>
        {productos.map((element,i)=>{
          return (
          <div key={i}> {element.nombre} </div>
        );
      })}
          </div>
      </div>
  )
}
*/

export default App;
