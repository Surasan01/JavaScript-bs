let lotto_number = prompt("กรอกเลขที่ต้องการ")
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number

if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัลเลขท้าย 3 ตัว"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัลเลขท้าย 3 ตัว"
}