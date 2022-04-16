function chat(){
    var inputVal = document.getElementById("usermsg").value;
    document.getElementById("chatbox").innerHTML += "<br>" +"User:  "  + inputVal + "<br>";
    if (inputVal.includes("laptop")) {
        document.getElementById("chatbox").innerHTML += "<br>" +"Chatbot:  Try 5 Common Laptop Problems and How to Repair Them: https://greatlakescomputer.com/blog/5-common-laptop-problems-and-how-to-repair-them" + "<br>";

    }
    else if(inputVal.includes("computer")&& inputVal.includes("slow")){
        document.getElementById("chatbox").innerHTML += "<br>" +"Chatbot:  Try Tips to improve PC performance in Windows https://support.microsoft.com/en-gb/windows/tips-to-improve-pc-performance-in-windows-b3b3ef5b-5953-fb6a-2528-4bbed82fba96#" + "<br>";
    }
    else if(inputVal.includes("mic")|| inputVal.includes("microphone")|| inputVal.includes("audio")|| inputVal.includes("speakers")){
        document.getElementById("chatbox").innerHTML += "<br>" +"Chatbot:  Try Fix Speakers or Mic Not Working on Windows or Mac https://www.techsolutions.support.com/how-to/fix-speakers-or-mic-not-working-on-windows-or-mac-13157" + "<br>";
    }
    else {
        document.getElementById("chatbox").innerHTML += "<br>"+ "Chatbot:  Sorry, I can't help you with that"+ "<br>"
    }
}