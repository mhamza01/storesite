import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const App = () => {
  return (
     
      <div className=''>
        <BrowserRouter>
        <Nav />
        <Home />
        </BrowserRouter>
      </div>
    
  );
};

export default App;