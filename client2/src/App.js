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
import CommunityPage from './pages/CommunityPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import UserPasswordChangePage from './pages/UserPasswordChangePage';
import UpdateProfilePage from './pages/UpdateProfilePage'; // import the UpdateProfilePage component
import SlideShowPage from './pages/SlideShowPage';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/userprofile/:username' element={<UserProfilePage/>} />
      <Route path='/user/updateprofile' element={<UpdateProfilePage/>} /> {/* route */}
      <Route path ='/dashboard' element= {<UserDashboard/>} />
      <Route path ='/post' element= {<CommunityPage/>} />
      <Route path ='/post/Details/:id' element= {<DetailPage/>} />
      <Route path ='/' element= {<HomePage/>} />
      <Route path = '/user/passwordchange' element = {<UserPasswordChangePage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
