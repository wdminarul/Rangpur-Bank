document.getElementById('login').addEventListener('click', function(){
    const userEmail = document.getElementById('email').value
    const userPassword = document.getElementById('password').value
    if(userEmail == 'abc@gmail.com'  && userPassword == '1234'){
        window.location.href ='main.html'
    }
})