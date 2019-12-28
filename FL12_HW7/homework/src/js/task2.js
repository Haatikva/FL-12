// Your code goes here
const constAttmp = 3,
    constMult = 8,
    constGain = 100,
    constTotLoose = 0;

let multiply = 8,
    choosedNumb, 
    attmp = 3, 
    curPrize=100,
    winPerRound=0,
    totWin=0,
    a=true;

    a=confirm('Do you want to play a game?');
if(!a){
    alert('You did not become a billionaire, but can.');
}else {
    do {
            let rnumb = Math.round(Math.random()*multiply);
            console.log(rnumb);
                
            for (let attmpleft=0; attmpleft<3; attmpleft++) {
                choosedNumb = parseInt(prompt(`Choose a roulette pocket number from 0 to ${multiply};
Attempts left: ${attmp}
Total prize: ${totWin}$;
Possible prize on current attempt: ${curPrize}$`));
                if (rnumb === choosedNumb) {
                    winPerRound=curPrize;
                    totWin+=curPrize;
                    curPrize = constGain*2;
                    attmp = constAttmp;
                    multiply+=4;
                    break;
                }else {
                     curPrize/=2;
                       attmp--;
               }
           }

                if (choosedNumb !== rnumb) {
                alert(`Thank you for your participation. Your prize is: ${totWin}$`);
                a = confirm('Do you want to play a game?');
                attmp = constAttmp;
                totWin = constTotLoose;
                curPrize = constGain;
                multiply = constMult;
                }else if (choosedNumb === rnumb) {
                a = confirm(`Congratulation, you won! Your prize is: ${winPerRound}$. Do you want to continue?`);
                }
    }   
while(a)
}