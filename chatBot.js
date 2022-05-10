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
//Puts search query into an array and removes stopwords
    function toArray() {
      stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']
      query = document.getElementById("query").value
       keywords = query.split(" ")
       keywords = keywords.filter( function( el ) {
        return !stopwords.includes( el );
      } );
    }