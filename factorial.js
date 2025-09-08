const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stout
})

console.log("factorial application");

console.log("1. say hello");
console.log("2. compute factorial");
console.log("3. exit");

rl.question("Enter your choice (1-3)", choice =>{
    
    if(choice==="1"){
        console.log("hello There!");
    } else if (choice==="2"){
        console.log("factorial");
        rl.question("Enter a number for factorial: ", (numStr)=>{
            let num = parseInt(numStr);

            if (isNaN() ) || num <0){
                console.log("Invalid number. Please try again");
            } else{
                let fact =1;

                for (let i=2; i<=num; i++){
                    fact *=i;
                }

                console.log(The factorial of "+ num + " is " + fact);
        }
    } else if (choice=="3"){
        console.log ("exit!");
    } else{

  
    console.log("Invalid Choice.Please Try Again");

    }

})  
        

        
  
        








        


