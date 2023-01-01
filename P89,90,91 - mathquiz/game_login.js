var vP1N = document.getElementById("player1").value;
var vP2N = document.getElementById("player2").value;

function fn_Start(){
    var vP1N = document.getElementById("player1").value;
    var vP2N = document.getElementById("player2").value;
    localStorage.setItem("P1N", vP1N);
    localStorage.setItem("P2N", vP2N);
    window.location = "game_page.html";
}