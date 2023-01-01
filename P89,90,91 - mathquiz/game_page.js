var ans = "  Answer Turn";
var que = "  Question Turn";
var n1;
var n2;
var Turn = 0;
var p1p = 0;
var p2p = 0;

document.getElementById("P1N").innerHTML = localStorage.getItem("P1N") + que;
document.getElementById("P2N").innerHTML = localStorage.getItem("P2N") + ans;

function fn_send(){
    n1 = document.getElementById("N1").value;
    n2 = document.getElementById("N2").value;
    document.getElementById("problem").innerHTML = n1.concat(" X ", n2);
}

function fn_ans(){
    if(document.getElementById("answer").value == n1*n2){
        if(Turn == 0){
            p1p = p1p + 1;
        }else{
            p2p = p2p + 1;
        }
    }
    Turn = 1 - Turn;
    Update();
    document.getElementById("answer").innerHTML = "";
}

function Update(){
    document.getElementById("P1NS").innerHTML = p1p;
    document.getElementById("P2NS").innerHTML = p2p;
    if(Turn == 0){
        document.getElementById("P1N").innerHTML = localStorage.getItem("P1N") + que;
        document.getElementById("P2N").innerHTML = localStorage.getItem("P2N") + ans;
            }else{
        document.getElementById("P1N").innerHTML = localStorage.getItem("P1N") + ans;
        document.getElementById("P2N").innerHTML = localStorage.getItem("P2N") + que;
            }
}