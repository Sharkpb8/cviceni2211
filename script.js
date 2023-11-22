const randomNumber = Math.floor(Math.random() * 1001);
const easyrandomNumber = Math.floor(Math.random() * 99+1);
let nog = 1;
let enog = 1;
function guesing(){
    let x = document.getElementById("numb").value;
    let answer;
    if(nog ==1){
    if(x == randomNumber){
        answer = "correct"
        nog = 0;
    }else{
        answer = "wrong";
        nog = 0;
    }
    document.getElementById("demo").innerHTML = answer;
}else{
    answer = "not enoght gueses";
    document.getElementById("demo").innerHTML = answer;
}
}

function easyguesing(){
    let x = document.getElementById("easynumb").value;
    let answer;
    if(enog == 1){
    if(x == easyrandomNumber){
        answer = "correct";
        enog = 0;
    }else{
        answer = "wrong";
        enog = 0;
    }
    document.getElementById("easydemo").innerHTML = answer;
}else{
    answer = "not enoght gueses";
    document.getElementById("easydemo").innerHTML = answer;
}
}

function tryagain(){
    nog = 1;
    enog = 1;
}

let r = randomNumber;
let a = easyrandomNumber;
console.log(r);
console.log(a);