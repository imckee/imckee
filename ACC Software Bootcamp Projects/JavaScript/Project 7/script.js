function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please check the fields and make sure they are not blank.");
      return false;
    }
  }
  