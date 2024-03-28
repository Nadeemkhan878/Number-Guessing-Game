
import inquirer from "inquirer";

async function startfunc() {
    const systemnum = Math.floor(Math.random() *10);
    const usernum =await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: "Enter Your Number B/w 1 -10: "
    }])

    const{userGuess} =usernum;

    console.log("Your Guess:",userGuess, "\nSystem's Guess:", systemnum);
    if(userGuess ===systemnum){
        console.log("Your Guess Is Correct \nYou Won!");
    }else{
        console.log("Better Luck Next Time");
    }
}
async function startAgain(){
    do{
        await startfunc();
        var again = await inquirer
        .prompt({
            type: "input",
            name:"restart",
            message:"Do You Want To Continue ? Press Y or N"
        })
    }
    while(again.restart== "Y" || again.restart == "y" || again.restart == "YES" || again.restart=="yes" )
}
    startAgain();

