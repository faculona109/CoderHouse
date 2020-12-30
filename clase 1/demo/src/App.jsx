import './App.css';
import React, {useState, useEffect} from "react"
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';


const App = () =>{


  return(
    <div className="general"> 
      <Header />
      <NavBar/>
      <ItemListContainer greating="Bienvenido a mi react"/>
      <Footer/>
    </div>
  )
}


export default App;
