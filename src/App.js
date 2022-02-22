
import './App.css';
import CheckoutCard from './components/checkout/Checkout/CheckoutCard'
import NavBar from './components/navBar/NavBar';
import GridProducts from './components/products/GridProducts'



function App() {
  return (
    <div className="App">
      <NavBar />
      <GridProducts />
      <CheckoutCard />
    </div>
  );
}

export default App;
