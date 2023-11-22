const randomNumber = Math.floor(Math.random() * 1001);
const easyrandomNumber = Math.floor(Math.random() * 99+1);
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

function easyguesing(){
    let x = document.getElementById("easynumb").value;
    let answer;
    if(x == easyrandomNumber){
        answer = "correct";
    }else{
        answer = "wrong";
    }
    document.getElementById("easydemo").innerHTML = answer;
}

let r = randomNumber;
let a = easyrandomNumber;
console.log(r);
console.log(a);