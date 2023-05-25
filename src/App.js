import logo from './logo.svg';
import './App.css';
import SideBare from './components/SideBare';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analitics from './pages/Analitics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <SideBare>

              <Routes>
                  <Route path='/dashboard' element={<Dashboard/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/analitics' element={<Analitics/>}/>
                  <Route path='/comment' element={<Comment/>}/>
                  <Route path='/product' element={<Product/>}/>
                  <Route path='/productlist' element={<ProductList/>}/>
              </Routes>

       </SideBare>
         
       </BrowserRouter>
    </div>
  );
}

export default App;
