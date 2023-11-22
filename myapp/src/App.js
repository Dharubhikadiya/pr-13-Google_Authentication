import logo from './logo.svg';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
