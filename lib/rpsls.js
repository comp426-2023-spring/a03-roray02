import minimist from 'minimist';

const rpsChoices = ["rock", "paper", "scissors"];
const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"];

export default {
    rpsChoices: rpsChoices, 
    rpslsChoices: rpslsChoices,
    rpsDef: function() {
        return ({player: random(rpsChoices)});
    },
    rps: function (playerMove) {
        const oppMove = random(rpsChoices)
        return ({
                player: playerMove,
                opponent: oppMove,
                result: isWinner(playerMove, oppMove)
            } 
        );
    },
    rpslsDef: function () {
        return ({player: random(rpslsChoices)});
    },
    rpsls: function (playerMove) {
        const oppsChoice = random(rpslsChoices)    
        return ({
            player: playerMove, 
            opponent: oppsChoice, 
            result: isWinner(playerMove, oppsChoice)
        });
    },
}

function random(a) {return a[(Math.random() * a.length) | 0]}

function isWinner(player, opponent) {
    if (player === "rock") {
        if (opponent === "rock") return "lose"; 
        if (opponent === "paper") return "lose"; 
        if (opponent === "scissors") return "win"; 
        if (opponent === "lizard") return "win"; 
        if (opponent === "spock") return "lose"; 
    }
    if (player === "paper") {
        if (opponent === "rock") return "win"; 
        if (opponent === "paper") return "lose"; 
        if (opponent === "scissors") return "lose"; 
        if (opponent === "lizard") return "lose"; 
        if (opponent === "spock") return "win"; 
    }
    if (player === "scissors") {
        if (opponent === "rock") return "lose"; 
        if (opponent === "paper") return "win"; 
        if (opponent === "scissors") return "lose"; 
        if (opponent === "lizard") return "win"; 
        if (opponent === "spock") return "lose"; 
    }

    if (player === "lizard") {
        if (opponent === "rock") return "lose"; 
        if (opponent === "paper") return "win"; 
        if (opponent === "scissors") return "lose"; 
        if (opponent === "lizard") return "lose"; 
        if (opponent === "spock") return "win"; 
    }

    if (player === "spock") {
        if (opponent === "rock") return "win"; 
        if (opponent === "paper") return "lose"; 
        if (opponent === "scissors") return "win"; 
        if (opponent === "lizard") return "lose"; 
        if (opponent === "spock") return "lose"; 
    }
    return "lose"; 
}