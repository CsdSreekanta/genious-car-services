
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/checkout' element={
        <RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
       }></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
