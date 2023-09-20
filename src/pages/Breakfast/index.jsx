import NavBar from "../../components/molecules/NavBar";
import './index.css';
import './index1.jsx';
import Particle from "../../components/particle";
import Breakfast1 from "./index1.jsx";
const Breakfast = () => {
    return (
      
        <section>
          <Particle/>
        <div class="w3-container">
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://img.freepik.com/premium-photo/schezwan-noodles-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-46335.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-heading">Vegetable Noodles</h5>
        <p class="card-text">650 Rs</p>
        <div className="button"><a href="#" class="btn btn-custom">Buy Now</a></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-heading">Avacado Toast</h5>
        <p class="card-text">750 Rs</p>
        <div className="button"><a href="#" class="btn btn-custom">Buy Now</a></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://media.istockphoto.com/id/509009307/photo/turkey-and-bacon-club-sandwich.jpg?s=612x612&w=0&k=20&c=PbjeAJ1K1dJ7m_OpaK0JeW8W7oHsfWS--yrxGdUZzg4=" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-heading">Club Sandwitch</h5>
        <p class="card-text">450 Rs</p>
        <div className="button"><a href="#" class="btn btn-custom">Buy Now</a></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://thebusybaker.ca/wp-content/uploads/2018/08/easy-homemade-garlic-bread-fbig3.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-heading">Garlic Bread</h5>
        <p class="card-text">650 Rs</p>
        <div className="button"><a href="#" class="btn btn-custom">Buy Now</a></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src= "https://www.thecookierookie.com/wp-content/uploads/2017/05/sheet-pan-chocolate-croissants-3-of-10-1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-heading">Chocolate Croissants</h5>
        <p class="card-text">340 Rs</p>
        <div className="button"><a href="#" class="btn btn-custom">Buy Now</a></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://delibitecatering.com/wp-content/uploads/2019/06/Mix-Noodles-Deli-Bite-Catering.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-heading">Mixed Noodles</h5>
        <p class="card-text">650 Rs</p>
        <div className="button"><a href="#" class="btn btn-custom" >Buy Now</a></div>
      </div>
    </div>
  </div>
  </div>  
</div>
<Breakfast1/>
</section>


    );
}

export default Breakfast;