var playerScore =	0;
	
var compScore =	0
	
function showGame () {
	var showGame = document.getElementById("rpsContainer");
	var hideButton = document.getElementById("Start");
	showGame.style.display = "block";
	hideButton.style.display = "none";
	document.getElementById("status").innerHTML="Choose your weapon!";
}


function computerChoice(foo) {
    var randomNo = Math.floor((Math.random() * 3) + 1);
    if (randomNo === 1) {
    foo = "rock";
    }
    else if (randomNo === 2){
    foo = "paper";
    }
        else {
            foo="scissors";
        }
    return foo;
}
function rockPaperScissors(playerMove) {
    document.getElementById("playerStatus").innerHTML="You chose " + playerMove + ".";
	
    var compMove = "";
    compMove = computerChoice(compMove);
	document.getElementById("compStatus").innerHTML="I chose " + compMove + ".";
    if (playerMove===compMove)
    { document.getElementById("status").innerHTML="The result is a tie!";}
    else if (playerMove==="rock")
    {
        if (compMove==="scissors")
        {document.getElementById("status").innerHTML="Rock wins!";
        playerScore = playerScore + 1;
            }
        else if (compMove==="paper")
        {document.getElementById("status").innerHTML="Paper wins...";
            compScore = compScore + 1;
            }
        
    }
    else if (playerMove==="paper")
    {
        if (compMove==="rock")
        {document.getElementById("status").innerHTML="Paper wins!";
            playerScore++;
            
            }
        else if (compMove==="scissors")
        {document.getElementById("status").innerHTML="Scissors wins...";
            compScore = compScore + 1;
            
            }
        
    }
    else if (playerMove==="scissors")
    {
        
        if (compMove==="rock")
        {
            document.getElementById("status").innerHTML="Rock wins...";
            compScore = compScore + 1;
            }
        else if (compMove==="paper")
        {document.getElementById("status").innerHTML="Scissors wins!";
            playerScore = playerScore + 1;
            
            }
        
    }

        document.getElementById("playerScore").innerHTML=playerScore;
        document.getElementById("compScore").innerHTML=compScore;

}


var reset = function() {
	
playerScore=0;
compScore=0;
	document.getElementById("playerStatus").innerHTML="";
	
	document.getElementById("compStatus").innerHTML="";
	document.getElementById("playerScore").innerHTML=playerScore;
	document.getElementById("compScore").innerHTML=compScore;
	
	document.getElementById("status").innerHTML="Choose your weapon!";
}