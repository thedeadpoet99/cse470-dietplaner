import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/register';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import UserDashboard from './pages/UserDashboard';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/userprofile/:username' element={<UserProfilePage/>} />
      <Route path ='/dashboard' element= {<UserDashboard/>} />
      <Route path ='/' element= {<HomePage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
