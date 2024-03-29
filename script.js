const firebaseConfig = {
    
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactformDB = firebase.database().ref("contactform");
  
  document.getElementById("contactform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactform").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactformDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
