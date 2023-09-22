import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
const Reservation=()=>{

  
	const validateForm = () => {
   

		const firstName = document.getElementById('first_name').value;
		const lastName = document.getElementById('last_name').value;
		const phoneNumber = document.getElementById('phone_number').value;
		const email = document.getElementById('email').value;
		const date = document.getElementById('date').value;
		const time = document.getElementById('time').value;
		const numberOfGuests = document.getElementById('number_of_guests').value;
		if (firstName.trim() === '') {
			alert('Please enter your first name.');
			return false;
		  }
	  
		  if (lastName.trim() === '') {
			alert('Please enter your last name.');
			return false;
		  }
	  
		  if (phoneNumber.trim() === '') {
			alert('Please enter your phone number.');
			return false;
		  }
		  if(    email.trim() === '' ||
		  date.trim() === '' ||
		  time.trim() === '' ||
		  numberOfGuests.trim() === '')
		  {
			alert('Please fill out all fields.');
			return false;
		  }
      Swal.fire({
        title: 'Delish',
        text: "You've successfully booked a table at Delish! See you soon!", 
      });

      return false;
      

		};

	return(
    
		<div className="reservation">
		<div class="reservation-container">
			<form action="/submit-form" method="post" onSubmit={(e)=>{   
				e.preventDefault(); // Prevent the default form submission
          if (validateForm()) {
            // Form is valid, submit it here
            document.forms[0].submit();
		  }
          }}>
			<h1 id="header_18" class="form-header" data-component="header">Reserve a Table</h1>
            <div id="subHeader_18" class="form-subHeader">Please fill the form below accurately to enable us serve you better!.. Thank You!</div><br/>
  <div class="form-group">
    <label for="first_name">First name</label>
    <input type="text" class="form-control" id="first_name" name="first_name" placeholder="Enter your first name"/>
  </div>
  <div class="form-group">
    <label for="last_name">Last name</label>
    <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Enter your last name"/>
  </div>
  <div class="form-group">
    <label for="phone_number">Phone number</label>
    <input type="tel" class="form-control" id="phone_number" name="phone_number" placeholder="Enter your phone number"/>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email address"/>
  </div>
  <div class="form-group">
    <label for="date">Date</label>
    <input type="date" class="form-control" id="date" name="date"/>
  </div>
  <div class="form-group">
    <label for="time">Time</label>
    <select class="form-control" id="time" name="time">
      <option value="10:00 AM">10:00 AM</option>
      <option value="11:00 AM">11:00 AM</option>
      <option value="12:00 PM">12:00 PM</option>
      <option value="1:00 PM">1:00 PM</option>
      <option value="2:00 PM">2:00 PM</option>
      <option value="3:00 PM">3:00 PM</option>
      <option value="4:00 PM">4:00 PM</option>
      <option value="5:00 PM">5:00 PM</option>
      <option value="6:00 PM">6:00 PM</option>
      <option value="7:00 PM">7:00 PM</option>
      <option value="8:00 PM">8:00 PM</option>
      <option value="9:00 PM">9:00 PM</option>
      <option value="10:00 PM">10:00 PM</option>
    </select>
  </div>
  <div class="form-group">
    <label for="number_of_guests">Number of guests</label>
    <input type="number" class="form-control" id="number_of_guests" name="number_of_guests" placeholder="Enter the number of guests"/>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary" onClick={validateForm}>Submit</button>
</form>

		</div>
		</div>
	)
}
export default Reservation;