import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css';

const TopBar: React.FC = () => (
  <nav className="topbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);

export default TopBar;