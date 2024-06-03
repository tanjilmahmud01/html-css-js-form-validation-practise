function logOut() {
  console.log("logging out");

  //if we use href we need to use '='
  // using href, can go back button
  window.location.href = "../index.html";

  //if we use replace, we use () ====> function
  // replace doesn't save history, can't go back
}
