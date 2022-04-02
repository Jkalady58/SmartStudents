function chat(){
    var inputVal = document.getElementById("usermsg").value;
    document.getElementById("chatbox").innerHTML += "<br>" +"User:  "  + inputVal;
}