// Your code goes here
const constAttmp = 3;
const constMult = 8;
const constGain = 100;
const constTotLoose = 0;
let multiply = 8;
let choosedNumb;
let attmp = 3;
let curPrize = 100;
let totWin = 0;
let winPerRound = 0;
let a = true;
let rnumb;
let multiplyAddNumb=4;
let MaxAttmpt = 3;
let GainMultOrDiv = 2;

    a=confirm('Do you want to play a game?');
if (!a) {
  alert('You did not become a billionaire, but can.');
} else {
  do {
    rnumb = Math.round(Math.random() * multiply);
    for (let attmpleft = 0; attmpleft < MaxAttmpt; attmpleft++) {
      choosedNumb = parseInt(
        prompt(`Choose a roulette pocket number from 0 to ${multiply};
Attempts left: ${attmp}
Total prize: ${totWin}$;
Possible prize on current attempt: ${curPrize}$`)
      );
      if (rnumb === choosedNumb) {
        winPerRound = curPrize;
        totWin += curPrize;
        curPrize = constGain * GainMultOrDiv;
        attmp = constAttmp;
        multiply +=multiplyAddNumb;
        break;
      } else {
        curPrize /= GainMultOrDiv;
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
    } else if (choosedNumb === rnumb) {
      a = confirm(
        `Congratulation, you won! Your prize is: ${winPerRound}$. Do you want to continue?`
      );
    }
  } while (a);
}
