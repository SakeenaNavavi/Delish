import logo from './logo.svg';
import './App.css';
import NavBar from './components/molecules/NavBar';
import NavItems from './components/atoms/NavItems';
import Home from './pages/home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const bodyStyle = {
    backgroundColor: '#ffefd5',
  };

  return (
    <div style={bodyStyle}>
      <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    </div>

  );
}

export default App;
