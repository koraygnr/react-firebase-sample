import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import SingUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './component/MainLayout';
import AuthLayout from './component/AuthLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/sign-in' element={<SingIn />} />
          <Route path='/sign-up' element={<SingUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
