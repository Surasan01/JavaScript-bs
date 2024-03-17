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
alert(tocelsius(150))
display("answer_section1",tocelsius(150))
alert(toFahrenheit(32))
display("answer_section2",toFahrenheit(32))
