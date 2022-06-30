import './App.css';
import Login from './components/Login';
import EditContact from './components/EditContact';
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/edit" element={<EditContact />}></Route>
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
