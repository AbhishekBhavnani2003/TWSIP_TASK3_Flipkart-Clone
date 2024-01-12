function validateForm() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var dob = document.getElementById('dob').value;
  var pwd = document.getElementById('pwd').value;


  //  Phone no should be of 10 digits
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  // Age - greater than 18 years checking
  var dobDate = new Date(dob);
  var currentDate = new Date();
  var age = currentDate.getFullYear() - dobDate.getFullYear();

  if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
    age--;
  }

  if (age < 18) {
    alert("You must be at least 18 years old to submit this form");
    return false;
  }

  return true;
}

