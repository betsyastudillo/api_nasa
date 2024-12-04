import {Link} from 'react-router-dom';
import React from 'react';
import '../App.css';

function Header() {
  return (
    <nav className="navBar">
      <h1>NasaPIO</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/photos">Mars Photos</Link></li>
      </ul>
      <button onClick={() => alert('Ya estás adentro, disfruta de nuestra página :)')}>Sign up</button>
    </nav>
  )
}

export default Header