

// rock paper scissors game 
console.log("welcome to rock paper scissors game")

const choices = ["rock", "paper", "scissors"];

let round = 0;
let userScore = 0;
let computerScore = 0;  
let draws = 0;
const maxround = 5;
let roundleft = maxround;
let roundStatement = ""

// get user choice 

function getUserChoice(round = "ROUND-" + (maxround - roundleft + 1)) {


    let userChoice = prompt (round +" \n please make your choice : ");
    let modUserchoice = userChoice.toLowerCase();
    userChoiceValid = choices.includes( modUserchoice);
    if (userChoiceValid == true){
       
        
        return (modUserchoice);

    }
    else{
        alert(`${modUserchoice} is not a valid choice. make another choice`);
   
        return "INVALID";
        


    }
    
 
};


// get computer choice 

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * choices.length );
    let ComputerChoice = choices[randomIndex];
    

    return (ComputerChoice);

};







 




// start game function
function startgame(){
    alert("begin game");

    while ( roundleft > 0){

        playRound();
    };
    
    if (userScore > computerScore){
        winner="user wins";
      }
      else if (userScore < computerScore){
        winner="computer wins";
      }
      else{
        winner="its a draw";
      };
    
    playagain = prompt("GAME OVER \n SCORE :: user score: " + userScore + " - computer score: " + computerScore  + " - draws: "+ draws + "\n " + winner + "  \n Do you want to play again? (y/n)");

    if (playagain == "y" || playagain == "Y" ){
        console.clear();
        console.log("Welcome to rock paper scissors game");
        round = 0;
        userScore = 0;
        draws = 0;
        computerScore = 0;  
        roundleft = maxround;
        startgame();
    
    }
    else{
        console.log("game over");
    }
    

};



// comppare choice to play round 
function playRound( ){

   

    // recieve computer choice and user choice
    let userChoice = getUserChoice();

     // keep looping till you get valid answer then proceed
    while (userChoice === "INVALID"){
        userChoice = getUserChoice()

    };
    // get computer choice
    let computerChoice = getComputerChoice();

    // check for winner 
    // add score to winner 
    // add scores for draws
    //add -1 to roundleft
    // update user of result using console and alert

    console.log (` round-${round + 1} :: user choice: ${userChoice},   computer choice:  ${computerChoice}`  );

    alert(` round-${round + 1} :: user choice: ${userChoice},   computer choice:  ${computerChoice}`  );

     // rock wins scissors, scissors wins paper and paper wins rock

        if (userChoice == computerChoice  ){
            roundStatement = "this is a draw";
            draws = draws + 1;

            // console.log("this is a draw");
        
           }
        
           else if (userChoice == "scissors" && computerChoice == "paper"){
            
            userScore = userScore + 1;
            roundStatement = "scissors wins paper, user wins"
            // console.log("scissors wins paper, user wins");
            
           }
        
           else if (userChoice == "rock" && computerChoice == "scissors"){
            
            userScore = userScore + 1;
            roundStatement = "rock wins scissors, user wins";
            // console.log("rock wins scissors, user wins");
            
           }
        
           else if (userChoice == "paper" && computerChoice == "rock"){
            
            userScore = userScore + 1;
            roundStatement = "paper wins rock, user wins";
            // console.log("paper wins rock, user wins");
            
           }
        
           else if (userChoice == "paper" && computerChoice ==  "scissors"){
            
            computerScore = computerScore + 1;
            roundStatement = "scissors wins paper, computer wins";
            // console.log("scissors wins paper, computer wins");
            
           }
        
           else if (userChoice == "scissors" && computerChoice == "rock"){
            
            computerScore = computerScore + 1;
            roundStatement = "rock wins scissors, computer wins";
            // console.log("rock wins scissors, computer wins");
            
           }
        
           else if (userChoice == "rock" && computerChoice == "paper"){
            
            computerScore = computerScore + 1;

            roundStatement = "paper wins rock, computer wins";
            // console.log("paper wins rock, computer wins");
            
           }
        
        
          else{
            roundStatement = "round may be invalid";
            // console.log("round may be invalid");
          };
        
          round  = round + 1;
          roundleft = maxround - round;
          console.log(roundStatement);
          console.log(`STATS :: user score: ${userScore} - computer score: ${computerScore}, Draws: ${draws}, rounds left =${roundleft}  `);

          alert(  ` ${roundStatement} \n STATS :: user score: ${userScore} - computer score: ${computerScore}  Draws: ${draws}`);

         


    };
    
  



// playRound();



