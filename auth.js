const password = document.getElementById('password-target');
const msg = document.getElementById('msg');
const sub = document.getElementById('sub');
const form = document.getElementById('survey-form');
const nameDisplay =document.getElementById('name-display');
const names =document.getElementById('name-target');
const email = document.getElementById('email-target');
const number = document.getElementById('number-target');
const emailDisplay = document.getElementById('email-display');
const numberDisplay = document.getElementById('number-display');
const input = document.getElementById('name');
const passwordDisplay = document.getElementById('password-display');

input.addEventListener('click', inpt);
function inpt(e){
    input.style.borderColor="blue";
}


sub.addEventListener('click', onclick);
function onclick(e){
e.preventDefault();
    if(names.value == "" || email.value == "" || number.value == "" ){
        nameDisplay.innerHTML="Please fill all required fields";
    }
       else if(!email.innerHTML.indexOf('@')){ 
           emailDisplay.innerHTML="Please provide a valid email";
        }
        else if(document.getElementById('number-target').value < 11) {
            numberDisplay.innerHTML="Please provide a valid number";
        }
        else if(password.value.length < 8){
            passwordDisplay.innerHTML="Password must contain at least 8 characters."
        }
    
            else if(password.value.length >= 8 && !pwd.value.includes("@")){
                passwordDisplay.innerHTML="Password must contain @";
            }
           else if(password.value.length >= 8 && password.value.includes("@")){
            passwordDisplay.innerHTML="Solid Password";
        }
        else{
            nameDisplay.innerText="";
             numberDisplay.innerHTML="";
             emailDisplay.innerHTML="";
             passwordDisplay.innerHTML="";
        }
    }

        
    





 







