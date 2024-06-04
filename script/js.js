let number = [2, 4, 6, 8]
let currentIndex = 0
function recursive(index){
    if(index < number.length){
        let currentNumber = number[currentIndex]
        currentIndex++
        return currentNumber
    }else {
        return null
    }
}
console.log(recursive(currentIndex));
console.log(recursive(currentIndex));
console.log(recursive(currentIndex));
console.log(recursive(currentIndex));