
function GameStart(){
    Player1 = document.getElementById("Input1").value;
    Player2 = document.getElementById("Input2").value;
    localStorage.setItem("Player1", Player1);
    localStorage.setItem("Player2", Player2);
    window.location = "game_page.html";
}