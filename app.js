
'use strict'

//DOM


const numOfPl = document.getElementById('num');
const errorMsg = document.getElementById('error-msg');
const gameInit = document.getElementById('game-init');
const start = document.getElementById('btn-play');
const gamePlay = document.getElementById('header-container');
const keyboard = document.getElementById('keyboard');
const btnTwentee = document.getElementById('btn-twentee');
const btnNinetheen = document.getElementById('btn-nineteen');
const btnEighteen = document.getElementById('btn-eighteen');
const btnSeventeen = document.getElementById('btn-seventeen');
const btnSixteen = document.getElementById('btn-sixteen');
const btnFifteen = document.getElementById('btn-fifteen');
const btnBullseye = document.getElementById('btn-bullseye');
const btmMultiply2x = document.getElementById('btm-multiply-2x');
const btmMultiply3x = document.getElementById('btm-multiply-3x');
const btnConfirm = document.getElementById('btn-confirm');
const btnClear = document.getElementById('btn-clear');
const btnMiss = document.getElementById('btn-miss');
const msgBox = document.getElementById('message-box');
const src = document.getElementById('score');
const timesSreen = document.getElementById('times');
const attempts = document.querySelectorAll(".attempt");
const rslt_1 = document.getElementById('result-1');
const rslt_2 = document.getElementById('result-2');
const rslt_3 = document.getElementById('result-3');
const rslt_4 = document.getElementById('result-4');
const attempt_1 = attempts[0];
const attempt_2 = attempts[1];
const attempt_3 = attempts[2];
const plyr = document.querySelectorAll(".player");
const plyr_1 = plyr[0];
const plyr_2 = plyr[1];
const plyr_3 = plyr[2];
const plyr_4 = plyr[3];
const scoreCase = document.getElementById('score-case');
const multiplyCase = document.getElementById('multiply-case');


let play = 0;
let players = [];

const Player = function(name, startingTurn, id) {
    this.id = id;
    this.name = name;
    this.twentee = 3;
    this.ninetheen = 3;
    this.eighteen = 3;
    this.seventeen = 3;
    this.sixteen = 3;
    this.fifteen = 3;
    this.bullseyes = 3;
    this.score = 0;
    this.result = 0;
    this.isHisTurn = startingTurn;
    this.numberOfAttempts = 3;


}



start.addEventListener('click', () => {
    let numOfP = parseInt(numOfPl.value);
    if(numOfP < 2 || numOfP > 4){
        errorMsg.innerHTML = `Need to be 2 to 4 players. Thanks.`;
        return;
    }else {
        
        gameInit.style.display = 'none';
        gameInit.style.opacity = '0';
        gameInit.style.zIndex = '0';
        gamePlay.style.display = 'flex';
        gamePlay.style.opacity = '1';
        creatingPlayers(numOfP)
        
    }
        players = creatingPlayers(numOfP)
        return players;
});

const creatingPlayers = (numOfPlayers) => {
    
    const players = new Array(numOfPlayers).fill().map((_, i) => {
      if (i === 0) {
        return new Player(`Player ${i+1}`, true, i+1);
      } else {
        return new Player(`Player ${i+1}`, false, i+1);
      }
    });

    if(players.length === 2) {
        plyr_1.style.borderColor = "#e31b23";
        plyr_2.style.borderColor = "1C2E39";
        plyr_3.style.opacity = ".2";
        plyr_4.style.opacity = ".2";
    } else if (players.length === 3) {
        plyr_1.style.borderColor = "#e31b23";
        plyr_2.style.borderColor = "#1C2E39";
        plyr_3.style.borderColor = "#1C2E39";
        plyr_4.style.opacity = ".2";
    } else {
        plyr_1.style.borderColor = "#e31b23";
        plyr_2.style.borderColor = "#1C2E39";
        plyr_3.style.borderColor = "#1C2E39";
        plyr_4.style.borderColor = "#1C2E39";
    }
    
    return players;

  };


const Score = function(score, times, miss) {
    this.score = score;
    this.times = times;
    this.miss = false;
}



Player.prototype.lightShow = function (temp1, temp2, temp3, temp4) {
    let tempScore = temp1;
    let tempTimes = temp2;
    let idOfTheScore = temp3;
    let tempID = temp4;

    switch(idOfTheScore){
        case '20':
            idOfTheScore = 'twentee';
            break;
        case '19':
            idOfTheScore = 'nineteen';
            break;
        case '18':
            idOfTheScore = 'eighteen';
            break;
        case '17':
            idOfTheScore = 'seventeen';
            break;
        case '16':
            idOfTheScore = 'sixteen';
            break;
        case '15':
            idOfTheScore = 'fifteen';
            break;
        case 'bullseyes':
            idOfTheScore = 'bullseye';
            break;
    }

    if(tempScore === 3) {
        if(tempTimes === '3') {
            let c = 0;
            while(tempScore > 0){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        } else if (tempTimes === '2') {
            let c = 0;
            while(tempScore > 1){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        }else {
            let c = 0;
            while(tempScore > 2){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        }
    } else if(tempScore === 2) {
                    
        if(tempTimes === '3'){
            let c = 0;
            tempScore = 3;
            while(tempScore > 0){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        } else if (tempTimes === '2') {
            let c = 0;
            tempScore = 3;
            while(tempScore > 0){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        }else {
            let c = 0;
            tempScore = 2;
            while(tempScore > 0){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        }
    } else {
        
        if(tempTimes === '3'){
            let c = 0;
            tempScore = 3;
            while(tempScore > 0){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        } else if (tempTimes === '2') {
            let c = 0;
            tempScore = 3;
            while(tempScore > 0){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        }else {
            let c = 0;
            tempScore = 3;
            while(tempScore > 0){
                c++;
                document.getElementById(`player-${tempID}-${idOfTheScore}-${c}`).style.backgroundColor = "#e31b23";
                tempScore--;
            }
        }
    }
}

Player.prototype.scoring = function (scoring) {
    
    const checkPlayers = players;
    this.numberOfAttempts -= 1;
    const score = scoring.score;
    const times = scoring.times;
    
    if(this.numberOfAttempts === 2) {
        attempt_1.style.backgroundColor = "#44080A";
    } else if(this.numberOfAttempts === 1){
        attempt_2.style.backgroundColor = "#44080A";
    } else {
        attempt_1.style.backgroundColor = "#e31b23";
        attempt_2.style.backgroundColor = "#e31b23";
    }

    
    
    switch(score){
        case '20':
            if(this.twentee >= 0){
                this.lightShow(this.twentee, times, score, this.id);
                
                this.twentee -= 1*times;
                
                if(this.twentee < 0) {
                    let temp = Math.abs(this.twentee);
                    this.twentee = 0;
                    this.checkTheOthers(score, temp, checkPlayers);
                }
            }break;
        case '19':
            if(this.ninetheen >= 0){
                this.lightShow(this.ninetheen, times, score, this.id);
                this.ninetheen -= 1*times;
                if(this.ninetheen < 0) {
                    let temp = Math.abs(this.ninetheen);
                    this.ninetheen = 0;
                    this.checkTheOthers(score, temp, checkPlayers);
                }
            }break;
        case '18':
            if(this.eighteen >= 0){
                this.lightShow(this.eighteen, times, score, this.id);
                this.eighteen -= 1*times;
                if(this.eighteen < 0) {
                    let temp = Math.abs(this.eighteen);
                    this.eighteen = 0;
                    this.checkTheOthers(score, temp, checkPlayers);
                }
            }break;
        case '17':
            if(this.seventeen >= 0){
                this.lightShow(this.seventeen, times, score, this.id);
                this.seventeen -= 1*times;
                if(this.seventeen < 0) {
                    let temp = Math.abs(this.seventeen);
                    this.seventeen = 0;
                    this.checkTheOthers(score, temp, checkPlayers);
                }
            }break;
        case '16':
            if(this.sixteen >= 0){
                this.lightShow(this.sixteen, times, score, this.id);
                this.sixteen -= 1*times;
                if(this.sixteen < 0) {
                    let temp = Math.abs(this.sixteen);
                    this.sixteen = 0;
                    this.checkTheOthers(score, temp, checkPlayers);
                }
            }break;
        case '15':
            if(this.fifteen >= 0){
                this.lightShow(this.fifteen, times, score, this.id);
                this.fifteen -= 1*times;
                if(this.fifteen < 0) {
                    let temp = Math.abs(this.fifteen);
                    this.fifteen = 0;
                    this.checkTheOthers(score, temp, checkPlayers);
                }
            }break;
        case 'bullseye':
            if(this.bullseyes >= 0){
                this.lightShow(this.bullseyes, times, score, this.id);
                this.bullseyes -= 1*times;
                if(this.bullseyes < 0) {
                    let temp = Math.abs(this.bullseyes);
                    this.bullseyes = 0;
                    this.checkTheOthers(score, temp, checkPlayers);
                }
            }break;
    }
    this.winner();
    if(this.numberOfAttempts === 0) {
        
        this.isHisTurn = false;
        this.numberOfAttempts = 3;
        play++;
    }
    if (play != this.id-1){
        this.nextPlayer(checkPlayers, play);
    }

    timesTimes = 1;

}


Player.prototype.checkTheOthers = function (score, times, arr) {

    const checkPlayers = arr;
    for (let i= 0; i < checkPlayers.length; i++) {
        
            if(!checkPlayers[i].isHisTurn === true){
                switch(score) {
                    case '20':
                        if(checkPlayers[i].twentee > 0){
                            checkPlayers[i].result += score*times;
                            document.getElementById(`result-${i+1}`).innerHTML = checkPlayers[i].result;
                        } break;
                    case '19':
                        if(checkPlayers[i].ninetheen > 0){
                            checkPlayers[i].result += score*times;
                            document.getElementById(`result-${i+1}`).innerHTML = checkPlayers[i].result;
                        } break;
                    case '18':
                        if(checkPlayers[i].eighteen > 0){
                            checkPlayers[i].result += score*times;
                            document.getElementById(`result-${i+1}`).innerHTML = checkPlayers[i].result;
                        } break;
                    case '17':
                        if(checkPlayers[i].seventeen > 0){
                            checkPlayers[i].result += score*times;
                            document.getElementById(`result-${i+1}`).innerHTML = checkPlayers[i].result;
                        } break;
                    case '16':
                        if(checkPlayers[i].sixteen > 0){
                            checkPlayers[i].result += score*times;
                            document.getElementById(`result-${i+1}`).innerHTML = checkPlayers[i].result;
                        } break;
                    case '15':
                        if(checkPlayers[i].fifteen > 0){
                            checkPlayers[i].result += score*times;
                            document.getElementById(`result-${i+1}`).innerHTML = checkPlayers[i].result;
                        } break;
                    case 'bullseye':
                        if(checkPlayers[i].fifteen > 0){
                            checkPlayers[i].result += 25*times;
                            document.getElementById(`result-${i+1}`).innerHTML = checkPlayers[i].result;
                        } break;
                }
        }
        
            
    
    }
}

Player.prototype.winner = function () {


    var min = 1111;

    
    for (let i = 0; i < players.length; i++) {
        
        if (players[i].result < min) {
            min = players[i].result;
          }
          
          
        }

    if(this.twentee === 0 && this.ninetheen === 0 && this.eighteen === 0 && this.seventeen === 0 && this.sixteen === 0 && this.fifteen === 0 &&  this.bullseyes === 0 && (this.result === min)) {
        msgBox.innerHTML = `WINNER ${this.name}`;
        msgBox.style.animation = "winnerAnime 1.5s infinite";
        multiplyCase.style.pointerEvents = "none";
        btnBullseye.style.pointerEvents = "none";
        btnMiss.style.pointerEvents = "none";
        btnConfirm.style.pointerEvents = "none";
        scoreCase.style.pointerEvents = "none";
    }
    
}




Player.prototype.nextPlayer = function (arr, play) {
    
    const checkPlayers = arr;
    
    for (let index = 0; index < checkPlayers.length; index++) {
        if(play === index) {
            checkPlayers[play].isHisTurn = true;
            plyr.forEach(element => {
                element.style.borderColor = "#1C2E39";
                element.style.transition = "all .3s";
            });
            plyr[play].style.borderColor = "#e31b23";
            plyr[play].style.transition = "all .3s";

            
        }
        
    }
        
    
    
    if(play === checkPlayers.length){
        restartParam();
        this.nextPlayer(checkPlayers, 0);
    }
      
}

function restartParam() {
    play = 0;
}



var scoreScore = 0;
var timesTimes = 1;

var printVal = (val) => {
    src.innerHTML = ""
    src.innerHTML = val;
    scoreScore = val;
    btnConfirm.firstChild.style.opacity = "1";
    btnConfirm.firstChild.style.cursor = "pointer";
    btnClear.firstChild.style.cursor = "pointer";
    btnConfirm.style.pointerEvents= "all";

    if(val === 'bullseye'){
        btmMultiply3x.firstChild.style.opacity = ".3";
        btmMultiply3x.style.pointerEvents = "none";
    } else {
        btmMultiply3x.firstChild.style.opacity = "1";
        btmMultiply3x.style.pointerEvents = "all";
    }


}


var printTimes = (val) => {
    timesSreen.innerHTML = "";
    
    timesSreen.innerHTML = `${val}&nbsp;`;
    
    btnConfirm.style.pointerEvents= "all";
    
    if(val === '2X' || val === '3X'){
        timesTimes = val.substring(0,1);
    }
    
    if(val === '3X') {
        btnBullseye.firstChild.style.opacity = ".3";
        btnBullseye.style.pointerEvents = "none";
    } else {
        btnBullseye.firstChild.style.opacity = "1";
        btnBullseye.style.pointerEvents = "all";
    }
}

btnConfirm.addEventListener('click', () => {
    let i = 0;
    do {
        if(players[i].isHisTurn === true){
            const score = new Score(scoreScore, timesTimes, false);
            players[i].scoring(score);
            break;
        }
        i++;
      } while (i < players.length);



      btnConfirm.firstChild.style.opacity = ".3";
      btnConfirm.firstChild.style.cursor = "default";
      btnConfirm.style.pointerEvents= "none";
      btnBullseye.firstChild.style.opacity = "1";
      btnBullseye.style.pointerEvents = "all";
      btmMultiply3x.style.pointerEvents = "all";
      btmMultiply3x.firstChild.style.opacity = "1";
      timesSreen.innerHTML = "";
      src.innerHTML = "";
});



btnMiss.addEventListener('click', () => {
    let i = 0;
    do {
        if(players[i].isHisTurn === true){
            const score = new Score(0, 1, true);
            players[i].scoring(score);
            break;
        }
        i++;
      } while (i < players.length);
      btnConfirm.firstChild.style.opacity = ".3";
      btnConfirm.firstChild.style.cursor = "default";
      btnConfirm.style.pointerEvents= "none";
      btnBullseye.firstChild.style.opacity = "1";
      btnBullseye.style.pointerEvents = "all";
      btmMultiply3x.style.pointerEvents = "all";
      btmMultiply3x.firstChild.style.opacity = "1";
      timesSreen.innerHTML = "";
      src.innerHTML = "";
      timesTimes = 1;
});



btnClear.addEventListener('click', () => {
    timesSreen.innerHTML = "";
    src.innerHTML = "";
    btnConfirm.firstChild.style.opacity = ".3";
    btnConfirm.firstChild.style.cursor = "default";
    btnConfirm.style.pointerEvents= "none";
    btnBullseye.firstChild.style.opacity = "1";
    btnBullseye.style.pointerEvents = "all";
    btmMultiply3x.style.pointerEvents = "all";
    btmMultiply3x.firstChild.style.opacity = "1";
    timesTimes = 1;
});
