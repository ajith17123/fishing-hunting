import '../assets/style/Nav.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Nav () {
    return (

<>

<section className='nav-sec'>
 <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Hook & Arrow</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home<i className="bi bi-house"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Fishing Equipments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Who We Are</Link>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/about#cont">Support</NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login<i className="bi bi-person-arms-up"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Cart<i className="bi bi-basket2-fill"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>

</>

    )
}
export default Nav;