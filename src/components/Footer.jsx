import '../assets/style/Footer.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer () {
    return (

<>

<footer className='foot-sec py-5'>
   <div className='container'>
      <div className='row g-4'>
          
     <div className="col-lg-4 col-md-6 text-center">
        <div className="footer-brand-box">
        <Link className="footer-logo" to="/">Hook & Arrow</Link>
            <p className="footer-about-text">
                Gear up for the ultimate wilderness expedition. We provide premium-grade fishing rigs, high-end hunting gear, and survival essentials for true outdoorsmen.
            </p>
        <div className="footer-social-icons gap-3 mt-4 justify-content-center">
           <a href="#facebook"><i className="bi bi-facebook"></i></a>
            <a href="#instagram"><i className="bi bi-instagram"></i></a>
            <a href="#youtube"><i className="bi bi-youtube"></i></a>
            <a href="#twitter"><i className="bi bi-twitter-x"></i></a>
        </div>
    </div>
    </div>

    <div className="col-lg-2 col-md-6 col-6 text-center">
        <h5 className="footer-heading mb-4">Quick Links</h5>
        <ul className="footer-links-list">
            <li className="mb-2"><Link className='foot-t' to="/">Home</Link></li>
            <li className="mb-2"><Link className='foot-t' to="/about">Who We Are</Link></li>
            <li className="mb-2"><NavHashLink className='foot-t' to="/about#cont">Support Desk</NavHashLink></li>
            <li className="mb-2"><Link className='foot-t' to="/login">My Account</Link></li>
        </ul>
    </div>

    <div className="col-lg-3 col-md-6 col-6 text-center">
        <h5 className="footer-heading mb-4">Gear Categories</h5>
        <ul className="footer-links-list">
         <li className="mb-2"><Link className='foot-t' to="/product">Fishing Rods & Reels</Link></li>
         <li className="mb-2"><Link className='foot-t' to="/product">Archery & Bows</Link></li>
         <li className="mb-2"><Link className='foot-t' to="/product">Tactical Knives</Link></li>
         <li className="mb-2"><Link className='foot-t' to="/product">Camping Tents & Kits</Link></li>
         </ul>
    </div>

    <div className="col-lg-3 col-md-6 text-center">
      <h5 className="footer-heading mb-4">Contact Us</h5>
      <ul className="footer-link-con text-center">
         <li className="mb-3 text-center justify-content-center">
            <i className="bi bi-geo-alt-fill footer-ic"></i> 
            Hook & Arrow , TamilNadu.
         </li>
          <li className="mb-3 text-center justify-content-center">
            <i className="bi bi-telephone-fill footer-ic"></i> 
            +91 98568 55247
         </li>
         <li className="mb-3 text-center justify-content-center">
            <i className="bi bi-envelope-fill footer-ic"></i> 
            support@hookandarrow.com
         </li>
      </ul>
    </div>

      </div>

    <hr className="footer-divider" />

     <div className="row align-items-center">
        <div className="col-12 text-center justify-content-center">
        <p className="copyright-text text-center justify-content-center">
            &copy; 2026 Hook & Arrow. All Rights Reserved.
        </p>
        </div>
    </div>

   </div>
</footer>

</>

    )
}
export default Footer;