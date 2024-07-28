import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Resumo</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Template</a>
          </li>
          <li>
            <a href="#">Join Tabulio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="nav-right">
          <a href="#" className="language">
            English
          </a>
          <a href="#" className="start-btn">
            Start
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
