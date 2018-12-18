#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

enum LABELS_OF_ARRAY {
    DISTANCE = 0,
    DURATION = 1
};

//sloved 100%

float speedKmToMeters(int speedKm);
float speedMetersToKm(float speedMs);
bool isGreen(int lightDuration, float totalDuration);

int main()
{
    int speed;
    cin >> speed; cin.ignore();
    int lightCount;
    cin >> lightCount; cin.ignore();
    int speedMs = speedKmToMeters(speed);
    int lightData [lightCount][2]; 
    for (int i = 0; i < lightCount; i++) {
        int distance;
        int duration;
        cin >> distance >> duration; cin.ignore();
        lightData[i][DISTANCE] = distance;
        lightData[i][DURATION] = duration;
    }
    
    int maxSpeedKm = speed;
    bool isExistResult = false;
    while (!isExistResult && maxSpeedKm > 0){
        float maxSpeedM = speedKmToMeters(maxSpeedKm);
        isExistResult = true;
        for (int i=0; i < lightCount; i++){
            if (!isGreen(lightData[i][DURATION], (lightData[i][DISTANCE] / maxSpeedM) )){
                isExistResult = false;
                break;
            }
        }
        if (!isExistResult){
            maxSpeedKm--;
        }
    }
    cout << maxSpeedKm << endl;
}

float speedKmToMeters(int speedKm){
    //(km/hr) = (m/km) * (hr/s)
    return ((float)(speedKm * 1000)) / 3600;
}

float speedMetersToKm(float speedMs){
    return (speedMs * 3600) / 1000;
}

bool isGreen(int lightDuration, float totalDuration){
    return ((int)(totalDuration / (float)lightDuration)) % 2 == 0;
}