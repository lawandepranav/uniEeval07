import Signup from "./Components/Signup";
import { Routes,Route } from 'react-router-dom'
import Login from "./Components/Login";
import Todo from "./Components/Todos";

function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element={<Todo/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
