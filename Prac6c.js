function empty() {
    var fname = document.forms["Reg_Form"]["First_name"];
    var lname = document.forms["Reg_Form"]["Last_name"];
    var frm = document.getElementById("Reg_Form")

    if (fname.value == "") {
      window.alert("Please Provide your First name.");
      fname.focus();
      return false;
    }

    if (lname.value == "") {
      window.alert("Please Provide your last name.");
      lname.focus();
      return false;
    }

    return true;
}
function allLetter(input_txt)
{ 
      var letters = /^[a-zA-Z]+$/;
      if(input_txt.value.match(letters))
      {
      alert('Your name have accepted');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
}

function Checkmailid(inputtxt) 
{ 
    var id =/^[0-9]{2}[a-zA-Z]{3}[0-9]{3}@nirmauni.ac.in$/;
    if(inputtxt.value.match(id)){
        return true;
    }
    else{ 
        alert('Enter Email id Again...!')
        return false;
    }
}

function matchPassword() {
  var pw1 = document.Reg_Form.getElementById("psw1");
  var pw2 = document.Reg_Form.getElementById("psw2");
  if (frm.pw1.value != frm.pw2.value) {
    alert("Passwords did'nt match! Try Again....");
    return false;
  } else {
    alert("Password created successfully...");
    return true;
  }
}