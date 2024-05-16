import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const App = () => {
  return (
     
      <div className=''>
        <BrowserRouter>
        <Nav />
        <Home />
        <Footer />
        </BrowserRouter>
      </div>
    
  );
};

export default App;