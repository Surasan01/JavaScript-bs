let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?: ")

for (var i=0;i<round;i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย !! ")
    var random_answer = ""
    var score = 0
    if(Math.floor(Math.random() *10) <=4){
        // หัว
        random_answer = "หัว"
    }
    else{
        // ก้อย
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        alert("ตอบถูก ! ยินดีด้วย")
        score++
    }
    else{
        alert("ตอบผิด ! เสียใจด้วย")
    }
    console.log(random_answer + " : " + answer)
    document.getElementById("game-list").innerHTML += "คำตอบที่ใส่ไปคือ " + answer + " คำตอบที่ถูกต้องคือ " + random_answer + "<br>"
}
document.getElementById("score").innerHTML = "คะแนนรวมที่ได้คือ " + score