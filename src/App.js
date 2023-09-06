import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './E-Commerce/Home';
import About from './E-Commerce/About';
import Products from './E-Commerce/Products';
import Contact from './E-Commerce/Contact';
import SingleProduct from './E-Commerce/SingleProduct';
import Cart from './E-Commerce/Cart';
import ErrorPage from './E-Commerce/ErrorPage';
import { GlobalStyle } from './Style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const theme ={
    colors:{
      bg:" #F5F5F5",
      footer_bg:"#848482",
      btn:"#F8F8FF",
      border:"rgba(98, 84, 243, 0.5)",
      hr:"#8A9A5B",
      grandient:"linear-grandiet(0deg, rgb(132 144 255) 0%, rgb(55, 180, 240) 100%)",
      shadowSupport:"rgba(0, 0, 0, 0.10) 0px 2 px 4px"
    },
    media:{
      mobile:"760px",
      tab:"1080px"
    }
  };
  return (    
      <ThemeProvider theme={theme}>
        <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>      
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ThemeProvider>
  
  );
}

export default App;
