

const user_form = document.getElementById('user_form');
const msg = document.querySelector('.msg')
const name_required = document.querySelector('.name_required');
const email_required = document.querySelector('.email_required');
const password_required = document.querySelector('.password_required');
const phone_required = document.querySelector('.phone_required');
const username_required = document.querySelector('.username_required');

user_form.onsubmit = (event)=>{

    event.preventDefault();

   let namee = document.getElementById('namee');
   let email = document.getElementById('email');
   let password = document.getElementById('password');
   let phone = document.getElementById('phone');
   let username = document.getElementById('username');


   if (namee.value == '') {
       name_required.innerHTML = `<span style = "color: red;">* Required </span>`;
       namee.style.borderColor = 'red';
       
   } else {
       name_required.innerHTML = ``;
       namee.style.borderColor = '';
       
   }

   if (email.value == '') {
       email_required.innerHTML = `<span style = "color: red;">* Required </span>`;
       email.style.borderColor = 'red';
       
   } else {
       email_required.innerHTML = ``;
       email.style.borderColor = '';
       
   }
   if (password.value == '') {
       password_required.innerHTML = `<span style = "color: red;">* Required </span>`;
       password.style.borderColor = 'red';
       
   } else {
       password_required.innerHTML = ``;
       password.style.borderColor = '';
       
   }
   if (phone.value == '') {
       phone_required.innerHTML = `<span style = "color: red;">* Required </span>`;
       phone.style.borderColor = 'red';
       
   } else {
       phone_required.innerHTML = ``;
       phone.style.borderColor = '';
       
   }
   if (username.value == '') {
       username_required.innerHTML = `<span style = "color: red;">* Required </span>`;
       username.style.borderColor = 'red';
       
   } else {
       username_required.innerHTML = ``;
       username.style.borderColor = '';
       
   }



   if (namee.value == '' || email.value == '' || password.value == '' || phone.value == '' || username.value == '') {

    msg.innerHTML = setAlert('sob ta furon kor beta aruwa');
       
   }else if(emailcheck(email.value)== false ){
       msg.innerHTML = setAlert('email dewa oise na aruwa', 'warning');

   }else if(phonecheck(phone.value) == false){
       msg.innerHTML = setAlert('phone number oise na aruwa', 'warning');

   }else if (namecheck(namee.value) == false){
         msg.innerHTML = setAlert('dur beta name o jane na aruwa', 'warning');

   }else if (usernamecheck(username.value) == false){
        msg.innerHTML = setAlert('hayre aruwa username vala kori de', 'warning');

   }else if (passwordcheck(password.value) == false){
    msg.innerHTML = setAlert('password oise na re bai', 'warning');
   } else {

    msg.innerHTML = setAlert('Ostir hoise boss', 'success');
   }

}
