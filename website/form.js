function validateForm() {
  // Fetching form values
  let fname = document.forms["myform"]["first_name"].value;
  let lname = document.forms["myform"]["last_name"].value;
  let phone = document.forms["myform"]["phone_number"].value;
  let email = document.forms["myform"]["email"].value;

  // Validation patterns
  const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validation logic
  if (fname.trim() === "") {
      alert("First name must be filled out");
      return false;
  }

  if (lname.trim() === "") {
      alert("Last name must be filled out");
      return false;
  }

  if (!emailPattern.test(email)) {
    document.getElementById("demo").innerHTML = "Email must be in a valid format (e.g., xyz@mail.com)";
    return false;
}

  if (!phonePattern.test(phone)) {
      document.getElementById("demo").innerHTML = "Telephone must be filled out like this: 555-555-5555";
      return false;
  }



  // If all validations pass
  return true;
}
