import '../assets/style/Product.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.jpg';
import p7 from '../assets/images/p7.jpg';
import p8 from '../assets/images/p8.jpg';
import p9 from '../assets/images/p9.jpg';
import p10 from '../assets/images/p10.jpg';
import p11 from '../assets/images/p11.jpg';
import p12 from '../assets/images/p12.png';

function Product () {

const proddata = [

{id: 1, name: "Baitcast", para: "Daiwa D-Cast", img: p1, oldprice: "6490", newprice: "4490"},
{id: 2, name: "Spinning Rod", para: "Penn Spinfisher 10ft", img: p2, oldprice: "4499", newprice: "4290"},
{id: 3, name: "Surf Spinning Reel", para: "Daiwa EMCAST Sport 5500", img: p3, oldprice: "7500", newprice: "5490"},
{id: 4, name: "X Spinning Reels", para: "Abu Garcia Revo X", img: p4, oldprice: "13000", newprice: "12290"},
{id: 5, name: "Fly Leader Loop", para: "First Dart Braided Loop Connector", img: p5, oldprice: "249", newprice: "120"},
{id: 6, name: "Magic Swimmer", para: "Berkley Magic Swimmer Saltwater", img: p6, oldprice: "999", newprice: "740"},
{id: 7, name: "Catfish Chunk", para: "Berkley GULP", img: p7, oldprice: "560", newprice: "490"},
{id: 8, name: "Carp Feeder", para: "Carpzoom Max Feeder 30g", img: p8, oldprice: "299", newprice: "150"},
{id: 9, name: "Polystyrene Floats", para: "Float 15gms", img: p9, oldprice: "199", newprice: "70"},
{id: 10, name: "Split Ring Pliers", para: "Birage Heavy Duty", img: p10, oldprice: "699", newprice: "590"},
{id: 11, name: "Spinning Guide", para: "Full Double Aluminium Oxide", img: p11, oldprice: "719", newprice: "630"},
{id: 12, name: "Fishing Kayak", para: "Evoke Navigator 120 sit-on", img: p12, oldprice: "105000", newprice: "99900"},

] 

    return (

<>

<section className='prod-sec py-5'>
   <div className='container'>
    <h2 className='main-title'>Our Featured Products</h2>
     <div className='row g-4'>
          
     {proddata.map((item) => (
        <div className='col-md-4 col-12' key={item.id} data-aos="fade-up" >
           <div className='card prod-card h-100'>
               
         <div className='prod-img'>
           <img src={item.img} alt={item.name} className='img-fluid img-prod' />
         </div>

         <div className='card-body'>
            <div className='card-text'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-para'>{item.para}</p>
            </div>
            <div className='price-box'>
                 <span className='old-price'><i className="bi bi-currency-rupee"></i>{item.oldprice}</span>
                 <span className='new-price'><i className="bi bi-currency-rupee"></i>{item.newprice}</span>
            </div>
         </div>

         <button className='btn-prod'>
            Add To Cart
         </button>

           </div>
        </div>
     ))}

     </div>  
   </div>
</section>


</>

    )
}
export default Product;