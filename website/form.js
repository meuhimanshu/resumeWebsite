function validateForm() {
    let fname = document.forms["myform"]["first_name"].value;
    let lname = document.forms["myform"]["last_name"].value;
    let phone= document.forms["myform"]["phone_number"].value;
    let text;
    const phonePattern = /^[0-9]{10}$/;
    if (fname == "") {
      alert("First name must be filled out");
      return false;
    } else if (lname==""){
        alert("Last name must be filled out");
        return false;
    }

    if (!phonePattern.test(phone)) {
        text = "Phone number not valid";
        document.getElementById("demo").innerHTML = text;
        return false;
    }

  }