import { Header } from "./components/Header";
//import { Main } from "./components/Main";
import {Contador} from './components/Contador/Contador'
import {Footer} from "./components/Footer"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path="/" element={<h1>hola</h1>} />
    <Route path="/Contador"element={<Contador/>}/>
    <Route path="/Footer"element={<Footer/>}/>
    <Route path="*" element={<h1>la ruta no existe</h1>}/>
  </Routes>
  
  {/* <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    </div> */}
  
  </>
  );
}

export default App;
