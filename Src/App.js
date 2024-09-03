import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CustomHeader from './components/Header';
import Footer from './components/Footer'; 
import PostPage from './components/Post/PostPage';
import Login from './routes/Login';
import Signup from './routes/Signup';
import HomePage from './routes/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Container className='appContainer'>
        <CustomHeader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
        <Footer /> 
      </Container>
    </Router>
  );
}

export default App;

