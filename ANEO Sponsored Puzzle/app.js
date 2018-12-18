function getSpeedKmFromMs(value){
    return (value * 1000) / 3600;
}

function isGreenLightNow(lightDuration, totalDuration){
    return (((totalDuration / lightDuration) & 1) == 0);
}

//sloved 80%

const speed = parseInt(readline());
const lightCount = parseInt(readline());
const DISTANCE = 0;
const DURATION = 1;
let lightData = [];
for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    const distance = parseInt(inputs[0]);
    const duration = parseInt(inputs[1]);
    lightData[i] = []
    lightData[i][DISTANCE] = distance;
    lightData[i][DURATION] = duration;
}


let maxSpeedKm = speed;
let isExistResult = false;

while (!isExistResult && maxSpeedKm > 0){
    let maxSpeedM = getSpeedKmFromMs(maxSpeedKm);
    
    isExistResult = true;
    
    for (let i = 0; i < lightCount; i++){
        if (!isGreenLightNow( lightData[i][DURATION], Math.round(lightData[i][DISTANCE] / maxSpeedM) )){
            isExistResult = false;
            break;
        } 
    }
    
    if (isExistResult == false) {
        maxSpeedKm--;
    }        
}

print(maxSpeedKm);