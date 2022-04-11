let player = {
    name:"Jiwan Tandon",
    chips: 145
}

let playerEl=document.getElementById("player")
playerEl.textContent=player.name + ": $" + player.chips
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let msg=""
let messageEl=document.getElementById("msg-el")
sumEl=document.querySelector("#sum-el")
cardsEl=document.getElementById("card-el")
function getRandomCard()
{
    let rn=(Math.floor(Math.random() * 13) + 1)
    if(rn===1)
    {
        return 11
    }
    else if(rn>10)
    {
        return 10
    }
    else
    {
        return (Math.floor(Math.random() * 13) + 1)
    }
     
}
function start()
{
    isAlive=true
    let fcard=getRandomCard()
    let scard=getRandomCard()
    cards=[fcard,scard]
    sum=fcard + scard
    renderGame()
}
function renderGame()
{
    cardsEl.textContent= "Cards: " 
    for(let i=0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + "   " 
    }
    sumEl.textContent= "Sum: " + sum

if(sum<=20)
{
    msg="Do you wish to draw a new card? 😀"
}
else if(sum===21)
{
    msg="Wohoo! You've got a Blackjack! 🥳"
    hasBlackJack=true
}
else
{
    msg="You're out of the Game! ☹️"
    isAlive=false
}
messageEl.textContent=msg
console.log(msg)
}
function newcard()
{
    if(isAlive && !hasBlackJack)
    {
        ncard=getRandomCard()
        cards.push(ncard)
        sum=sum + ncard
        renderGame()
    }

}