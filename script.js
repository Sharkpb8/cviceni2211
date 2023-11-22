const randomNumber = Math.floor(Math.random() * 1001);
function guesing(){
    let x = document.getElementById("numb").value;
    let answer;
    if(x == randomNumber){
        answer = "correct";
    }else{
        answer = "wrong";
    }
    document.getElementById("demo").innerHTML = answer;
}

let r = randomNumber
console.log(r);