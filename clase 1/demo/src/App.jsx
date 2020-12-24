import './App.css';
import Header from "./componentes/Header"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"
import NavBar from './componentes/NavBar';

const App = () =>{
  return(
    <div className="general">
      <Header />
      <NavBar/>
      <Footer/>
    </div>
  )
}


export default App;