 function openForm() {
      document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
    function chat(){
        var inputVal = document.getElementById("usermsg").value;
    var yesbutton = document.createElement('button');yesbutton.type = 'button';yesbutton.innerHTML = 'Yes';
    var nobutton = document.createElement('button');nobutton.type = 'button';nobutton.innerHTML = 'No';
    nobutton.onclick = function() {
        document.getElementById("chatbox").innerHTML += "<br>" + "Would you like to generate a ticket?" + "<br";
    }
    document.getElementById("chatbox").innerHTML += "<br>" +"User:  "  + inputVal + "<br>";
    document.getElementById("chatbox").innerHTML += "Chatbot: Generating results for "  + inputVal + "<br>" +"Chatbot: Did that answer your question?" + "<br>";
    //print out results from database here
    document.getElementById("chatbox").appendChild(yesbutton);
    document.getElementById("chatbox").appendChild(nobutton);
    }