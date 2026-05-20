import '../assets/style/About.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import a1 from '../assets/images/a1.jpg';
import a2 from '../assets/images/a2.jpg';

function About () {
    return (

<>

{/* {about-imagesection} */}

<section className='about-image py-5'>
  <div className='container'>

     <div className='row mb-5 '>
         <div className='col-12 text-center'>
            <h2 className="about-main-heading">Who We Are</h2>
         </div>
     </div>

     <div className='row align-items-center'>
        <div className="col-lg-4 col-md-5" data-aos="fade-right">
           <div className='about-img-card'>
                 <img src={a1} className='img-fluid about-image' alt="fishing" />
           </div>
        </div>

     <div className="col-lg-4"></div>

     
        <div className="col-lg-4 col-md-5" data-aos="fade-left">
           <div className='about-img-card'>
                 <img src={a2} className='img-fluid about-image' alt="fishing" />
           </div>
        </div>
     </div>

  </div>
</section>

{/* {about-sec} */}

<section className='about-sec py-5'>
   <div className='container'>
       <div className="row mb-5" data-aos="fade-up">
        <div className="col-12">
        <p className="about-narrative text-center">
    Hook & Arrow was born out of a relentless passion for the raw, untamed wilderness. For generations, our team has tracked deep forest paths and conquered roaring river torrents, discovering exactly what it takes to survive and thrive in nature's purest environments. We are not just a marketplace; we are a brotherhood of seasoned trackers, fly-fishers, and outdoor survivalists dedicated to equipping you with master-crafted tools. Every rod, reel, compound bow, and tactical kit in our arsenal undergoes rigorous field testing against extreme elements before it ever earns our stamp of approval. Whether you are scaling rugged ridge lines at dawn or casting heavy lines into deep coastal currents, we stand beside you. Trust your gear, embrace your primal instincts, and conquer the horizon with ultimate confidence.
        </p>
    </div>
</div>
   </div>
</section>

{/* {mapsection} */}

<section className='map-sec py-5'>
   <div className='conatiner'>
       <div className='row mb-5'>
          <div className="col-12" data-aos='zoom-in'>
        <div className="map-wrapper-card">
            <iframe 
                title="Hook & Arrow Camp Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.123456789012!2d78.1123456789012!3d11.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzE0LjQiTiA3OMKwMDYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                allowFullScreen="" 
                loading="lazy"></iframe>
        </div>
        </div>
       </div>
   </div>
</section>

{/* {getintouchsec} */}

<section className='contact-get py-5' id='cont'>

  <div className="row mb-4" data-aos="fade-up">
    <div className="col-12 text-center">
        <h3 className="about-sub-heading">Get In Touch</h3>
    </div>
    </div>

    <div className='row justify-content-center mb-5'>
       <div className='col-lg-6 col-md-8'>
           <div className='contact-card'>
             
        <form className='form-contact'>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Full Name" required />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email Address" required />
            </div>
            <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-send-msg">Send Message</button>
        </form>

           </div>
       </div>
    </div>

</section>

{/* {contactsection} */}

<section className='cont-sec py-5'>
  <div className='conatiner'>
    <div className='row'>
     
     <div className='col-12' data-aos='fade-up'>
        <div className='communi-sec'>
           
           <a href="tel:+919856855247" className="comm-icon-box">
           <i className="bi bi-telephone-outbound-fill"></i>
           <span>Call</span>
           </a>

           <a href="https://instagram.com" target="_blank" rel="noreferrer" className="comm-icon-box">
            <i className="bi bi-instagram"></i>
            <span>Instagram</span>
            </a>

           <a href="https://wa.me/919856855247" target="_blank" rel="noreferrer" className="comm-icon-box">
            <i className="bi bi-whatsapp"></i>
            <span>WhatsApp</span>
           </a>

           <a href="https://youtube.com" target="_blank" rel="noreferrer" className="comm-icon-box">
           <i className="bi bi-youtube"></i>
           <span>YouTube</span>
           </a>

           <a href="mailto:support@hookandarrow.com" className="comm-icon-box">
            <i className="bi bi-envelope-open-heart"></i>
            <span>Email</span>
            </a>

        </div>
     </div>

    </div>
  </div>
</section>

</>

    )
}
export default About;