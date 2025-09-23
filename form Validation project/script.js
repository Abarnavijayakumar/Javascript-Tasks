document.getElementById('form-validate').addEventListener('submit', function(event){

    event.preventDefault(); // why its using every time the is reloading via action so need to prevent that so the required is shows properly (span) , avoiding page refresh bcz stoping action triggering
    
    let userName = document.getElementById('userName').value.trim() // why using trim in string meto=hod we used trim avoid 1st and last space in the input box 
    let email = document.getElementById('email').value.trim()
    let Password = document.getElementById('password').value.trim()
    let ConfirmPassword = document.getElementById('confirm password').value .trim()


    let unameError = document.getElementById('uName-error')
    let emailError = document.getElementById('mail-error')
    let passdError = document.getElementById('pswd-error')
    let cpassdError = document.getElementById('Cpswd-error')

    // Abarna Vijaykumar
    let uNamePatten = /^[A-Za-z]+ [A-Za-z]+$/ 
    let emailPAtten = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/
    // what is ths ex of writting our name indha patten la dha name anga irukanu nu solrathu adhuku indha mari set panitu logic build panuvom
    // mela write pani irukrathu called regular expression  /ithu kula eluthrathu la regexpr na convert aagikum => ^ carrot symbol for entha order la kudukrano andha order la dha varanum ilana error aagum so adhukaga , => $ doller sybl ithu last la irunthumunadi varaiku same order la irukanu nu solrathu entha order la kudukrano adhe order la varanum
    // ^$ ithu rendu oru logical and mari compulsory true ah irukanum both entha order same adhe order la varanum , =>  array litrals ithukula 1st kudukra name like Abarna ithula caps and small lettrs uh varuthula so ithula mention panuvom like both caps and small varanum nu and + why one and adhukumela charcters varalanu solrathu more than so adhukaga the one space bcz abarna vijaykumar nu varapo middle space varuthula so adhukaga else epdinalum ana space irukanu the same adhuthu vara charcters ku same arrylteral [A-za-z]+ [A-za-z]+
    // incase username la no venum na arryltrel kula add panikala enala venum oh [A-za-z0-9] like ths / 
    if (userName === "") {
        unameError.innerText = "Name is Required"
    }
    else if (!uNamePatten.test(userName)){ // why test mela namba regular expression dhana use panni irukom so adhula oru method dha test norml yethacho string input vechu iruntha dha ithula potu test panuvom
unameError.innerText = "* Enter Your Full Name"
    }
    else if (uNamePatten.test(userName)) {
        unameError.innerText =""
    }  // this for crt ah enter panathuku aprm uh error  katama iruka indha else if block

     if ( email === "") {
        emailError.innerText = "Email is Required"
    }
    else if (!emailPAtten.test(email)) {
        emailError.innerText = "* Enter Your Valid Email id"
    }
     else if (emailPAtten.test(userName)) {
        emailError.innerText =""
    } 

    if (Password === "") {
        passdError.innerText = "Password is Required"
    }
    else if (Password.length <=3 || Password.length >10 ) {
        passdError.innerText = "Enter a password between 3 to 10 "
    }
     else if (Password.length >3 || Password.length <10) {
        passdError.innerText = ""
     }
    if (ConfirmPassword === "") {
        cpassdError.innerText = "Confirm Password is Required"
    }
    else if (ConfirmPassword !== Password) {
        cpassdError.innerHTML ="Password Not Match"
    }
     else if (ConfirmPassword !== Password) {
        cpassdError.innerHTML =""
    }

    
}) 