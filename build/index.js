import { MatchReader } from './MatchReader.js';
import { MatchResult } from './MatchResult.js';
//Run command npm install @types/node
const reader = new MatchReader('football.csv');
reader.read();
let manUtdWins = 0;
//To get how many matches man utd won itterate thourgh arrays
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUtdWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.Awaywin) {
        manUtdWins++;
    }
}
console.log(`Man utd wins ${manUtdWins} games.`);
//Since the table is in array form the first is treated as index 0 which is date and like wise
//USe smart way instead of writing 'H' and 'A' assign it to variable .
//# sourceMappingURL=index.js.map