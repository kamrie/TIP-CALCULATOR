

// TIP CALCULATOR

let calcButton = document.getElementById("calc-button")
let amount =  document.getElementById("amt")
let people =  document.getElementById("pple")
let error = document.getElementById("errorparagraph")
const select = document.getElementById("select")





function solve(){
    let errMsg
    if (people.value === "" || amount.value === "" || select.value === ""){
        errMsg = "Please fill in all fields"
        error.innerHTML = `<p style="color:rgb(114,28,77); background-color: rgb(248,215,218); padding: 15px;"> ${errMsg} </p>`
    }
    if(people.value && amount.value === ""){
        errMsg = "Please input an amount"
        error.innerHTML = `<p style="color:rgb(114,28,77); background-color: rgb(248,215,218); padding: 15px;"> ${errMsg} </p>`
    }

    if(people.value === "" && amount.value){
        errMsg = "Please input total number of people"
        error.innerHTML = `<p style="color:rgb(114,28,77); background-color: rgb(248,215,218); padding: 15px;"> ${errMsg} </p>`
    }

    // console.log(Number(people.value) + Number(amount.value))
    let amt = Number(amount.value)
    let ppl = Number(people.value)
    let tip = Number(select.value)
    // First get all values
    // Next divide tip by 100 and multiply it by total amount and divide it by total number of people
    // Next divide total amount number of people and add it to amtPercent

       
    let amtPerct =  amt / ppl * tip / 100 ;
    let amtPerPerson = amt / ppl + amtPerct;
    console.log(amtPerPerson)

    if(isNaN(amtPerPerson)){
        document.getElementById('result').innerText  = "" ; //It returns NaN If nothing is inputted so I handled it here.
        return                                           
    }
    // Update the result display area
    document.getElementById('result').innerText = `Each person should pay: $${amtPerPerson.toFixed(2)}`;
      setTimeout(()=>{
        error.innerHTML=""
    }, 2000)
    
    setTimeout(()=>{
        document.getElementById('result').innerText=""
    }, 2000)

  

}