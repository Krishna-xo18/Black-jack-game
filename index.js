let hasblackjack=false
let isalive=true
let message=""
let firstcard=getrandomnumber()
let secondcard=getrandomnumber()
let cards=[firstcard,secondcard]
let sum=firstcard+secondcard
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
function rendergame(){
    start()
}
function getrandomnumber(){
    let random=Math.random()
    random=random*13
    let number=Math.floor(random)
    return number+1
}
function start(){
    cardsEl.textContent="Cards: " 
    for(let i=0 ;i<cards.length ;i++){
        cardsEl.textContent+=cards[i]+" "
    }
   
    sumEl.textContent="Sum: "+ sum
    if(sum<=20){
        message ="Do you want to draw a new card?"
    }else if(sum===21){
        message="You have  a black jack"
        hasblackjack=true;
    }else{
        message="You are out of game"
        isalive=false
    }
    messageEl.textContent=message
}
function card(){
    if(isalive===true && hasblackjack===false){
        let card=getrandomnumber()
        cards.push(card)
        sum+=7
        start()
    }
   
}