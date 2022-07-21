
import './App.css';
import Home from './pages/Home';
import {Route , Routes} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './compoents/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRoute from'./compoents/ProtectedRoute'
function App() {
  return (
  <>
  <AuthContextProvider>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/account' element= {
      <ProtectedRoute>

        <Account/>
      </ProtectedRoute>
      
     }/>
  </Routes>
  </AuthContextProvider>
  
  </>
  );
}

export default App;
