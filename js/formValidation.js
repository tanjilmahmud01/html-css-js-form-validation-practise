import formData from "../db/formData.js";

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;

    const namePattern = /^[A-Za-z]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,20}$/;

    let valid = true;

    // Validate first name
    if (!namePattern.test(firstName)) {
      document.getElementById("firstNameError").innerText =
        "First name can only contain letters and no spaces.";
      valid = false;
    } else {
      document.getElementById("firstNameError").innerText = "";
    }

    // Validate last name
    if (!namePattern.test(lastName)) {
      document.getElementById("lastNameError").innerText =
        "Last name can only contain letters and no spaces.";
      valid = false;
    } else {
      document.getElementById("lastNameError").innerText = "";
    }

    // Validate password
    if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").innerText =
        "Password must be 8-20 characters long, include at least one number, one capital letter, and one special character.";
      valid = false;
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    if (valid) {
      console.log("Previous Form Data: ", formData);

      //setting the values into dummy db
      formData.firstName = firstName;
      formData.lastName = lastName;
      formData.dob = document.getElementById("dob").value;
      formData.phone = document.getElementById("phone").value;
      formData.password = password;
      formData.gender = document.getElementById("gender").value;
      formData.favoriteColor = document.getElementById("favoriteColor").value;
      formData.imageURL = document.getElementById("imageurl").value;

      // You can now use the formData object for further processing (e.g., sending to a server)

      localStorage.setItem("formdata", JSON.stringify(formData));

      //replace the URL
      window.location.replace("profile.html");
    }
  });
