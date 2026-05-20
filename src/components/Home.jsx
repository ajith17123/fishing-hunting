import '../assets/style/Home.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pa1 from '../assets/images/pa1.jpg';
import pa2 from '../assets/images/pa2.jpg';
import pa3 from '../assets/images/pa3.jpg';
import pa4 from '../assets/images/pa4.jpg';
import hero from '../assets/images/hero.jpg';
import off1 from '../assets/images/off1.jpg';
import off2 from '../assets/images/off2.jpg';
import off3 from '../assets/images/off3.jpg';

function Home () {

const proc = [

{id: 1, name: "Peen Pursuit Spinning Reels", img: pa1, price: "5190", off: "Best Seller"},
{id: 2, name: "Penn 320GT2 Super Level Wind", img: pa2, price: "6490", off: "Best Seller"},
{id: 3, name: "Berkley FluroCarbon Lines", img: pa3, price: "690", off: "Best Seller"},
{id: 4, name: "BiRage Compact SS Lipper", img: pa4, price: "290", off: "Best Seller"},

]

    return (

<>

{/* {herosection} */}

<section className='hero-sec'>
   <div className='conatiner'>
     <div className='row'>
        <div className='col-12'>
          
       <div className='card-hero-img'>
          <img src={hero} alt="fishing" className='img-fluid hero-image' />
       </div>

        </div>
     </div>
   </div>
</section>

{/* {productsection} */}

<section className='product-section py-5'> 
   <div className='conatiner'>
    <h2 className='secc-title'>Our Best Products</h2>
        <div className='row g-4'>
              
    {proc.map((item) => (
        <div className='col-md-3 col-12' key={item.id} data-aos="fade-up">
             <div className='card prodhome-card h-100'>

                <div className='offer-badge'>
                  <p className='off-sec'>{item.off}</p>
                </div>
                
            <div className='card-img'>
              <img src={item.img} className='img-fluid image-pr' alt={item.name} />
            </div>

            <div className='card-body'>
               <h5 className='card-title'>{item.name}</h5>
               <div className='price-b'>
                  <p className='price-gp'><i className="bi bi-currency-rupee"></i>{item.price}</p>
               </div>
            </div>

               <button className='btn-cart'><Link className='btn-pp' to="/product">View Details</Link></button>

             </div>
        </div>
    ))}

        </div>
   </div>
</section>

{/* {offersection} */}

<section className='offer-sec py-5'>
  <div className='container'>
     <div className='row g-4' data-aos='fade-right'>
       
    <div className='col-md-4'>
       <div className='offer-img'>
         <img src={off1} alt="fishing" className='img-fluid offer-offer' />
       </div>
    </div>

    <div className='col-md-4'>
       <div className='offer-img'>
         <img src={off2} alt="fishing" className='img-fluid offer-offer' />
       </div>
    </div>

    <div className='col-md-4'>
       <div className='offer-img'>
         <img src={off3} alt="fishing" className='img-fluid offer-offer' />
       </div>
    </div>

     </div>
  </div>
</section>

{/* {aboutsection} */}

<section className='about-sec py-5'>
  <div className='container'>
     <h2 className='secc-title'>Who We Are</h2>
    <div className='row'data-aos="fade-up">
         
   <div className='col-12'>
      <div className='about-text'>
          <p className='ab-para'>
At Hook & Arrow, we craft premium-grade wilderness gear engineered to survive nature’s harshest proving grounds. Built for elite outdoorsmen, seasoned trackers, and heavy-line anglers, our field-tested arsenal bridges the gap between raw hunting instinct and absolute mechanical precision. From the deepest river valleys to rugged mountain ridges, we equip your passion with elite tools designed to help you dominate the wild and conquer every horizon.
          </p> 
      </div>
   </div>

   <div className='col-12 mt-4'>
          <button className='ab-btn'>
             <Link className='btn-about' to="/about">Read More About Us</Link>
          </button>
       </div>

    </div>
  </div>
</section>

{/* {statsection} */}

<section className='stat-sec py-5'>
   <div className='conatiner'>
      <div className='row g-4' data-aos="zoom-in">
        
      <div className='col-lg-3 col-sm-6 text-center'>
   <div className='stat-box'>
      <h2 className='stat-number'>15K+</h2>
      <p className='stat-label'>Expeditions Equipped</p>
   </div>
   </div>

   <div className='col-lg-3 col-sm-6 text-center'>
   <div className='stat-box'>
      <h2 className='stat-number'>500+</h2>
      <p className='stat-label'>Premium Wilderness Gears</p>
   </div>
   </div>

   <div className='col-lg-3 col-sm-6 text-center'>
   <div className='stat-box'>
      <h2 className='stat-number'>4.9</h2>
      <p className='stat-label'>Top Rated Survival Reviews</p>
   </div>
</div>

<div className='col-lg-3 col-sm-6 text-center'>
   <div className='stat-box'>
      <h2 className='stat-number'>12+</h2>
      <p className='stat-label'>Years of Rugged Expertise</p>
   </div>
</div>


      </div>
   </div>
</section>

</>

    )
}
export default Home;