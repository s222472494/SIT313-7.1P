import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';
import './Header.css';
import 'semantic-ui-css/semantic.min.css';

const Header = () => {
  return (
    <header className='Header'>
      <Link to="/" className='LogoLink'>
        <div className='Logo'>MotorSport101</div>
      </Link>
      <Input className='Search' icon='search' placeholder='Search...' />
      <div className='ButtonContainer'>
        <Link to="/post">
          <Button>Post</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
