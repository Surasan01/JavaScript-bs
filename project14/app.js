function tocelsius(fahrenheit){
    let value = (fahrenheit - 32)*5/9
    return value.toFixed(2) + " °C"
}

function toFahrenheit(celsius){
    let value = (celsius*9/5)+32
    return value.toFixed(2) + " °F"
}
function display(elementId,value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}

function tocelsiusProgram(value){
    alert(tocelsius(value))
}

function toFahrenheitProgram(value){
    alert(toFahrenheit(value))
}