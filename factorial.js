const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stout
})

function mainMenu(){
console.log("factorial Application");
}

console.log("1. say hello");
console.log("2. compute factorial");
console.log("3. exit");

rl.question("enter your choice (1-3)", choice =>{
    
    if(choice==="1"){
        console.log("hello There!");
        backToMenu();
    } else if (choice==="2"){
        computeFactorial();
    } else if (choice==="3"){
        console.log ("exit");
        rl.close();
    } else{
        console.log("Invalid Choice.Please Try Again");
        mainMenu();
    }

})

function computeFactorial(){
    console.log("Factorial");
    rl.question("Enter a number for factorial: ", (num5tr)=> {
            
        let num = parseInt(num5tr);}
         
        if(isNaN(num) || num<0){
                console.log("Please enter a non-negative integer");
            
            } else{
                
                let fact = 1;

                for (let i=1 ; i <= num; i++){
                    fact *=i;
                }

                console.log("The factorial of "+ num + " is " + fact);

            }
            backToMenu();
    });
}
     

        
function backToMenu(){
    console.log("------------");
    console.log("1. Back to menu");
    console.log("2. exit");

    rl.question("What would you to do next?  (1-2)", (mainMenuChoice) =>{
        if (backToMenuChoice === "1"){
            console.clear();
            mainMenu();
        } else if (backToMenuChoice === "2"){
            console.log("exiting program... Goodbye!");
            rl.close();
        }
     });

    }
    mainMenu();

    

        
  
        








        


