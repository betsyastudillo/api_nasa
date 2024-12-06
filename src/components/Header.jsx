import './Header.css';

function Header() {
  return (
    <nav className="nav-bar">
      <div className='container-navbar'>
        <img className='img-logo' src='/nasa.svg'/>
        <h1>NasaPIO</h1>
        <div className='navbar-menu'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a href="/">Home</a>
            </li>
            <li className='nav-item'>
              <a href="#mars-photos">Mars Photos</a>
            </li>
          </ul>
        </div>
        <div className='sesion-nav'>
          <button onClick={() => alert('Ya estás adentro, disfruta de nuestra página :)')}>Sign up</button>
        </div>
      </div>
    </nav>
  )
}

export default Header