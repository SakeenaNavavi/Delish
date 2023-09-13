import './index.css';
const ContactUs = () => {
    return (
      <div className="contactUs">
        <div class="row row-cols-3 row-cols-md-2 g-4">
            
            <div class="col">
                <div className="card">
                <img src="https://www.nicepng.com/png/detail/258-2584033_please-contact-us-by-calling-from-7am-11.png" className="card-img-top" alt="Delish resturant" ></img>
                <h5 className="Call-Us">Call Us</h5>
                <p className="card-text">0910088760</p>
                <p className="card-text">0912267580</p>
                <a href="#" class="btn btn-primary">Call now</a>
                </div>
            </div>
            
        <div class="col">
            <div className="card">
            <img src="https://t3.gstatic.com/images?q=tbn:ANd9GcRGpN6oweE4KAGiP4JvHjfejMe8v-FYxqzI6a3BGWCkWU-ZPhz5" className="card-img-top" alt="Email"></img>
            <h5 className="Email">Email Us</h5>
            <p className="card-text">delish2023@gmail.com</p>
            <p className="card-text">desh2023@gmail.com</p>
            <a href="#" class="btn btn-primary">Email now</a>
            </div>
        </div>
        
        <div class="col">
        <div className="card">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTH7sGFxsx4dK_uWNiEalQ6zTQpgzBXc4npCgdChFwtA4Lxc-51" className="card-img-top" alt="watsapp"></img>
          <h5 className="Watsapp">contact us on Whatsapp</h5>
          <p className="card-text">https://www.watsapp.com/delishrestaurant</p>
          <a href="#" class="btn btn-primary">Whatsapp now</a>
        </div>
        </div>
        
        <div class="col">
        <div className="card">
          <img src="https://p.kindpng.com/picc/s/163-1632670_follow-us-on-social-media-to-receive-the.png" className="card-img-top" alt="Facebook"></img>
          <h5 className="Facebook">Find us on Facebook</h5>
          <p className="card-text">https://www.facebook.com/delishrestaurant</p>
          <a href="#" class="btn btn-primary">See now</a>
        </div>
      </div>
      </div>
      </div>
      
    )
  }
  
  export default ContactUs;
  
  