// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);        
//     }
// }

// logItems(["Mango", "Poly", "Ajax"]);

// function calculateEngravingPrice(message, pricePerWord) {
//     let sum = 0
//     const edditedMessage = message.split(" ")
    
//     for (let i = 0; i <= edditedMessage.length; i++) {
//        sum = i * pricePerWord
//     }
//     console.log(sum);     
// }

// calculateEngravingPrice("I love you", 10)

function findLongestWord(string) {
    let str = string.split(" ")
    let longest = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i]
        }         
    }      
    console.log(longest);  
}

findLongestWord("I love you, Honey!")