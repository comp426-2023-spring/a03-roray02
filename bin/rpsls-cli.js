#!/usr/bin/env node

import rpsls from "../lib/rpsls.js";
import minimist from "minimist"; 


const args = minimist(process.argv.slice(2));

if (args.r || args.rules){
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    process.exit(0);

}

if (args.h || args.help){
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
    process.exit(0);
}

if (args._.length > 1){
    console.error("Arguments out of range");
    process.exit(0);
} else if (args._.length === 0) {
    console.log(JSON.stringify(rpsls.rpslsDef()))
 } else {
    let playerMove = args._[0].toLowerCase();
    if (rpsls.rpsOps.includes(playerMove)) {
       console.log(JSON.stringify(rpsls.rpsls(playerMove)))
    } else {
       console.error(
          `
          Invalid argument.
          You can select between: rock, paper, scissors, lizard, or spock
          `
       );
    }
 }