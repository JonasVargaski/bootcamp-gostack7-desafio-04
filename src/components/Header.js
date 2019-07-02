import React from 'react';

import facebook from '../assets/svg/facebook.svg';

function Header () {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <img src={facebook} alt="Facebook" />
        </div>
        <nav>
          <a href="#">
            <span>Meu perfil</span>
            <i className="fas fa-user-circle"></i>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
