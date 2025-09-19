document.getElementById('form-validate').addEventListener('submit',function(event){

    event.preventDefault(); // why its using every time the is reloading via action so need to prevent that so the required is shows properly (span) , avoiding page refresh bcz stoping action triggering
    
    let userName = document.getElementById('userName').value.trim() // why using trim in string meto=hod we used trim avoid 1st and last space in the input box 
    let email = document.getElementById('email').value.trim()
    let Password = document.getElementById('password').value.trim()
    let ConfirmPassword = document.getElementById('confirm passowrd').value.trim()

    if (userName === "") {
        document.getElementById('uName-error').innerText = "Name is Required"
    }
})