const sendButton = document.querySelector('.send-button');
sendButton.addEventListener('click', ()=>{
  const firstNameInputElement = document.querySelector('.js-first-name')
  const firstName = firstNameInputElement.value;

  const lastNameInputElement = document.querySelector('.js-last-name')
  const lastName = lastNameInputElement.value;

  const emailInputElement = document.querySelector('.js-email')
  const email = emailInputElement.value;

  const messageInputElement = document.querySelector('.message-input-element');

  let alertMessage = '';
  if(!firstName){
    alertMessage = 'Please enter your First Name';
  }
  else if(!lastName){
    alertMessage = 'Please enter your Last Name';
  }
  else if(!email){
    alertMessage = 'Please enter your Email Address'
  }
  else{
    alertMessage = 'Form Submitted';  
    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    emailInputElement.value = '';
    messageInputElement.value = '';
  }
  setTimeout(() => {
      document.querySelector('.alert-message').innerHTML = '';
    }, 1000);
  document.querySelector('.alert-message').innerHTML = alertMessage;
});



let navLinks = document.querySelectorAll('.right-section ul li a');

function isToggled(clickedLink){
  navLinks.forEach(link =>{
    link.classList.remove('active');
  });
  clickedLink.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', ()=>{
    isToggled(link);
  });
});

window.onload = ()=>{
  const aboutLink = document.querySelector('.right-section ul li a[href="#about-me-section"]');
  if(aboutLink){
    isToggled(aboutLink);
  }
}