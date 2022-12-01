const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let reducer = (accumulator, item) => {
    return accumulator += item;
}

let totalBatteries = batteryBatches.reduce(reducer, 0);
console.log(totalBatteries);