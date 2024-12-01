let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

let userScore=0;
let compScore=0;


let pmsg=document.querySelector("#message");
const choices=document.querySelectorAll(".choice");

const genComputerChoice=()=>
{
    const options=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return options[random];
}

const drawGame=()=>
{
    pmsg.innerText="The Game is Drawn";
    pmsg.style.backgroundColor="grey";
}

const showWinner=(userWin,user_choice,comp_choice)=>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        pmsg.innerText="You are a winner: "+user_choice+ " beats "+comp_choice;
        pmsg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        pmsg.innerText="You Loose:"+comp_choice+ " beats "+user_choice;
        pmsg.style.backgroundColor="red";
    }
}




const playGame=(user_choice)=>
{
    console.log("user choice is: "+user_choice);
    //Now we need to generate the computer choice:-
    const comp_choice=genComputerChoice();
    console.log("computer choice is: "+ comp_choice);
    let userWin=true;
    if(user_choice===comp_choice)
    {
        drawGame();
        return;
    }
    else
    {
        if(user_choice==="rock")
        {
            userWin=comp_choice==="paper"?false:true;
        }
        else if(user_choice=="paper")
        {
            userWin=comp_choice==="scissor"?false:true;
        }
        else
        {
            userWin=comp_choice==="rock"?false:true;
        }
    }
    showWinner(userWin,user_choice,comp_choice);
    
}


choices.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const user_choice=choice.getAttribute("id");
        playGame(user_choice);
    });
});
