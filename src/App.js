
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// create a Product component with a h5 for the title
//render a <QuantityPicker/> inside of product
//render the product in the catalog and render it 5 times
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catalog/>
      <Footer/>
    </div>
  );
}

export default App;

//create the footer componenet and import the footer component, please