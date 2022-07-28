

//changing text
var nameSpan = document.querySelector("#name");
var ToOrder = "Sushi";

function setName(element){
    console.log(element.value);
    nameSpan.innerText = element.value;
    ToOrder = el.value
}

//Chosing each food gives alert of which food selected
function chooseLunch(el){
    //alert("You Selected: " + el.value)
    console.log("You selected " +el.value );
    ToOrder = el.value;
}

//Ordering Food
function order(){
    alert("You are about to order a: " + ToOrder);
}