import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from './components/navBar/NavBar';
import { Registro } from './components/registro/Registro';
import { Home } from './components/home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route  path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/registro' element={<Registro />}/>
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
