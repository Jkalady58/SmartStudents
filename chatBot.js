function chat(){
    var inputVal = document.getElementById("usermsg").value;
    document.getElementById("chatbox").innerHTML += "<br>" +"User:  "  + inputVal + "<br>";
    if (inputVal.includes("slow") && inputVal.includes("laptop")) {
        document.getElementById("chatbox").innerHTML += "<br>" +"Chatbot:  "  + "Try 5 Common Laptop Problems and How to Repair Them: https://greatlakescomputer.com/blog/5-common-laptop-problems-and-how-to-repair-them" + "<br>";

    }
}