let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");


// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});


genBtn.addEventListener('click', ()=>{
    passBox.value = genratePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*~";

// function for the generate password
function genratePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars += allsymbols ? allsymbols : "";



    if(allChars == "" || allChars.length ==0){
        return genPassword;
    }
    let i = 1;
    while(i<=inputSlider.value){
             genPassword += allChars.charAt(Math.floor(Math.random()
             * allChars.length));
             i++;
    }

    
    return genPassword;
}