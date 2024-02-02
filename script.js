let currDate = document.getElementById("currDate")
let dateOFBirth = document.getElementById("DOB")
let ageCal = document.getElementById("ageCal")
let disaplayAge = document.getElementById("displayAge")
let Age = document.getElementById("age")

var today = new Date()
currDate.innerText=`Today's Date is : ${today.toLocaleDateString('en-US')}`;

ageCal.addEventListener('click',function(){
     if(dateOFBirth.value === ""){
        window.alert("Enter the data")
     }

    var birthDate = new Date(dateOFBirth.value)
    var age  = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age-1;
    }
   disaplayAge.style.visibility = "visible";
   Age.innerHTML = `your are ${age} years old`
 
})