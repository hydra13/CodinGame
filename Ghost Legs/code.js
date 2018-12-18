/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
let letters = [];
let positions = [];
let line = readline();
letters = line.split('  ');
for (let i = 0; i < letters.length; i++){
    positions[i] = line.indexOf(letters[i]);
}

for (let i = 1; i+1 < H; i++) {
    line = readline();
    
    for (let j = 0; j < letters.length; j++){
        if (positions[j] != 0 && line[positions[j]-1] == '-'){
            positions[j] -= 3;
        } else if (positions[j] + 1 != line.length && line[positions[j]+1] == '-'){
            positions[j] += 3;
        }
    }
}

line = readline();
let result = '';
for (let i = 0; i < letters.length; i++){
    if (i != 0){
        result += '\n';
    }
    result += letters[i]+line[positions[i]];
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(result);