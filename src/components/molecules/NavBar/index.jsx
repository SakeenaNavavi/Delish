import NavItem from "../../atoms/NavItems";
import delish from './delish.jpg';
const NavBar=()=>{
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#6b2d22"}}>
  <div class="container-fluid">
    <a class="nav-link active" href=""><img src={delish} alt="delish logo" width="55" height="55"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style={{color:"white"}} aria-current="page" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="reservation">Reservation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="ContactUs">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" style={{color:"white"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Breakfast">Breakfast</a></li>
            <li><a class="dropdown-item" href="Lunch">Lunch</a></li>
            <li><a class="dropdown-item" href="Tea">Tea</a></li>
            <li><a class="dropdown-item" href="Dinner">Dinner</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>        
    )
}
export default NavBar;


   