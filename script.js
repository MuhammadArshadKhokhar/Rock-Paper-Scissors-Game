let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
const rdmChoice=()=>{
  const options=["rock","paper","scissor"];
  
  rdmId=Math.floor(Math.random()*3);
  return options[rdmId];
}
let msg=document.querySelector(".msg")
const drawGame=()=>{
    msg.innerText="The Game was Draw! Try Again."
    msg.style.backgroundColor= "black";
}
const showWin=(userWin)=>{
if(userWin===true)
{  
    msg.innerText="user win!"
    msg.style.backgroundColor="green";
    userScore++;
    let uScore=document.querySelector("#user-score");
    console.log(uScore)
    uScore.innerText=userScore;
}
else{
    msg.innerText="computer win!"
    msg.style.backgroundColor="red";
        comScore++;
    let cScore=document.querySelector("#com-score");
    cScore.innerText=comScore;
}
}
const playGame=(userChoice) => {
const comChoice=rdmChoice();
if(comChoice===userChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock")
    {
       userWin= comChoice==='paper'?false:true;
    }
    else if(userChoice==="paper"){
        userWin= comChoice==="scissor"?false:true;
        }
    else{
    userWin=comChoice==="rock"?false:true;
}
showWin(userWin);
}

}

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
{
    const userChoice=choice.getAttribute("id")
playGame(userChoice)
})
})