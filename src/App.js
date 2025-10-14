import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from './Components';
import { About } from './about';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<About />}></Route> 
      </Routes>
    </Router> 
    </>
  );
}

export default App;
