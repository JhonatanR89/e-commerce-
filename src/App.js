
import './App.css';
import CheckoutCard from './components/checkout/Checkout/CheckoutCard'
import NavBar from './components/navBar/NavBar';
import GridProducts from './components/products/GridProducts'
import DataApi from './components/data/DataApi'



function App() {
  return (
    <div className="App">
      <NavBar />
      <DataApi />
      
    </div>
  );
}

export default App;
