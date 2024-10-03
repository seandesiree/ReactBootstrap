
import './AppStyles.css';
import CustomerList from './Components/CustomerList';
import OrderList from './Components/OrderList';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';
import { Routes, Route} from 'react-router-dom'
import NavigationBar from './Components/NavigationBar';
import CustomerFormWrapper from './Components/CustomerFormWrapper';
import NotFound from './Components/NotFound';
import HomePage from './Components/HomePage';
import "bootstrap/dist/css/bootstrap.min.css"

function App () {
  return (
    <div className='app-container'>
      <NavigationBar />
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/add-customer/' element={<CustomerFormWrapper/>} />
        <Route path='/edit-customer/:id' element={<CustomerFormWrapper/>} />
        <Route path='/customers/' element={<CustomerList/>} />
        <Route path='/add-product' element={<ProductForm />} />
        <Route path='/edit-product/:id' element={<ProductForm/>} />
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/order-list' element={<OrderList/>}/>
        <Route path='*' element={<NotFound/>}/> 
      

      </Routes>
      

    </div>
  );
}


export default App;