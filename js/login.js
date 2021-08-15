document.getElementById('submit-button').addEventListener('click',function(){
    // user Email
    const emailField=document.getElementById('email-field');
    const userEmail=emailField.value;

    // user Password
    const passwordField=document.getElementById('password-field');
    const userPassword=passwordField.value;

    if(userEmail=='fahad@gmail.com' && userPassword=='fahad'){
        window.location.href='banking.html';
    }

});