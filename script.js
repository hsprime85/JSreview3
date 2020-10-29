// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';
// problem:
// we work for a company building a smart home thermometer. out most recent task is this: "given an array of temperatures of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error."

// const temperatures1 = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [1, 4, 7, 20, 25, -5, -7];
// 1) understanding the problem
// - what is temp amplitude? answer : difference between highest and lowest temp
// - how to compute max and min temperatures?
// - what's a sensor error? and what to do?


// 2) breaking up into sub-problems
// - how to ignore errors?
// - find max value in temperatures arry
// - find min value in temperatures arry
// - subtract min from max (amplitude) and return it

// const calcTempAmplitude = function(temps){
//     let max = temps[0];
//     let min = temps[0];
//     for(let i =0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;
//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }
//     console.log(`max temperature is ${max}, minimun temperature is ${min}`);
//     return max - min;

// };

// console.log("gap is" + " " + calcTempAmplitude(temperatures));

// problem 2:
// function should now receive 2 arrays of temps

// 1) understanding the problem
// - with 2 arrays, should we implement functionality twice? no! just merge two arrays

// 2) breaking up into sub-problems
// - merge 2 arrays

// const calcTempAmplitude2 = function(t1, t2){
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let max = temps[0];
//     let min = temps[0];
//     for(let i =0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;
//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }
//     console.log(`max temperature is ${max}, minimun temperature is ${min}`);
//     return max - min;

// };

// console.log("gap is" + " " + calcTempAmplitude2(temperatures1, temperatures2));


// const measureKelvin = function(){
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
        
//         // C) fix
//         value: Number(prompt('Degrees celsius: '))
//     }
    // B) find 
    // console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
    
//     return kelvin;
// }
// A) identify
// 

// 1) understanding the problem
// - array transformed to string, separated by
// - what is the x days? answer : index + 1

// 2) breaking up into sub-problems
// - transform array into string
// - transform each element to string with C
// - strings needs to contain day (index + 1)
// - add ... between elements and start and end of string
// - log string to console
const data1 = [17,21,23];
const data2 = [12,5,-5,0,4];

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str += `${arr[i]}C in ${i+1} days ... `;
    }
    console.log('... ' + str)
}
printForecast(data1);