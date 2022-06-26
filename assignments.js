// function to convert feet into mile
function feetToMile(feet){
    let mile = feet / 5280;
    return mile;
}
let myFeet = feetToMile(50);
console.log(myFeet)

// function to calculate wood cubic meter where (chair = 1 cubic, table = 3 cubic & bed = 5 cubic)
function woodCalculator(chair, table, bed){
    let totalWood = chair * 1 + table * 3 + bed * 5;
    return totalWood
}
let myWood = woodCalculator(2, 3, 4);
console.log(myWood)

// brickCalculator. let the buliding is a 30 floored. 1st 10 floor 15feet high. 11-20floor 12feet hight. >21 10feet height. 1000 ricks constant for 1 feet.
function brickCalculator(noOfFloor){
    const brickPerFeet = 1000;
        if(noOfFloor <= 10){
            return brickPerFeet * 15 * noOfFloor;
        }
        else if(noOfFloor > 10 && noOfFloor <= 20){
            return 150000 + ((noOfFloor - 10) * 12 * brickPerFeet);
        }
        else{
            return 270000 + ((noOfFloor - 20) * 10 * brickPerFeet)
        }
}
let myFloor = brickCalculator(21)
console.log(myFloor)

//tinyFriend. an array with friends name. return the name which is the most smaller

function tinyFriend(myArray){
    let tiny = myArray[0];
    for(let i = 0; i < myArray.length; i++){
        let element = myArray[i];
        if(element.length < tiny.length){
            tiny = element
        }
    }
    return tiny;
}
let friends = ['Ashiq', 'Ratul', 'jam', 'Maruf', 'Mahbub'];
let shortest = tinyFriend(friends);
console.log(shortest)