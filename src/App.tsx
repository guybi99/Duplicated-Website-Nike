import './App.css';
import {NavBar} from './NavBar/NavBar';
import { RegisterBar } from './RegisterBar/RegisterBar';
import { Footer } from './Footer/Footer';
import { Register } from './Register/Register';
import { Gallery } from './Gallery/Gallery';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import Item from './Item/Item';
import { Login } from './Login/Login';
import SpecificClothing from './Card/SpecificClothing/SpecificClothing';



function App() {
  return (
    <div className="App">
      <RegisterBar/>
      <NavBar />
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Register" element = {<Register />}/>
      <Route path="/Item/:itemId" element = {<Item />}/>
      <Route path="/Sign-In" element = {<Login />}/>
      <Route path="Gallery/:Gender" element = {<Gallery />}>
        <Route path=":Clothing" element = {<SpecificClothing />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;