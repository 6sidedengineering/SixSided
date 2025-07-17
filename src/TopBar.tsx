import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css';

const TopBar: React.FC = () => (
  <nav className="topbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/manifesto">Manifesto</Link>
      </li>
    </ul>
  </nav>
);

export default TopBar;