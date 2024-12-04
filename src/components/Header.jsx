import {Link} from 'react-router-dom';
import '../App.css';
function Header() {
  return (
    <nav className="navBar">
      <h1>NasaPIO</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* Cambiar después :id */}
        <li><Link to="/Details/:id">About</Link></li>
      </ul>
      <button onClick={() => alert('Ya estás adentro, disfruta de nuestra página :)')}>Sign up</button>
    </nav>
  )
}

export default Header