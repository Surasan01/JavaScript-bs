function tocelsius(){
    let fahrenheit = prompt("Fahrenheit : ")
    let value = (fahrenheit - 32)*5/9
    document.getElementById("answer_section1").innerHTML = value.toFixed(2) + " °C"
}

function toFahrenheit(){
    let celsius = prompt("celsius : ")
    let value = (celsius*9/5)+32
    document.getElementById("answer_section2").innerHTML = value.toFixed(2) + " °F"
}
tocelsius()
toFahrenheit()
