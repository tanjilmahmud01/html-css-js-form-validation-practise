var retrievedObject = localStorage.getItem("formdata");

let retrievedObjectData = JSON.parse(retrievedObject);

document.getElementById("firstName").innerText = retrievedObjectData.firstName;

document
  .getElementById("profile-img")
  .setAttribute("src", retrievedObjectData.imageURL);
