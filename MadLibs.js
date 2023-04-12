const readLine = require('readline-sync');

let myList = [ ];
myList.push(readLine.question("Enter a name: "));
myList.push(readLine.question("Enter a name: "));
myList.push(readLine.question("Enter a body part: "));
myList.push(readLine.question("Enter a catch phrase: "));
myList.push(readLine.question("Enter a verb: "));
myList.push(readLine.question("Enter a verb ending in ed: "));
myList.push(readLine.question("Enter a place: "));
myList.push(readLine.question("Enter a body part: "));
myList.push(readLine.question("Enter a verb ending in ed: "));
myList.push(readLine.question("Enter a body part: "));
myList.push(readLine.question("Enter a number: "));
myList.push(readLine.question("Enter a name: "));
myList.push(readLine.question("Enter a name: "));
myList.push(readLine.question("Enter a verb: "));
myList.push(readLine.question("Enter an exclamation: "));
myList.push(readLine.question("Enter an animal: "));
myList.push(readLine.question("Enter a number: "));
myList.push(readLine.question("Enter an adjective: "));
myList.push(readLine.question("Enter an adjective: "));
myList.push(readLine.question("Enter an adjective: "));
myList.push(readLine.question("Enter an animal: "));



console.log(`    ${myList[0]} saw ${myList[1]} and he couldn’t believe his ${myList[2]}.
    Her first words to him were “${myList[3]}” and he knew right then that he would ${myList[4]} her someday.
    On their first date, they ${myList[5]} at the ${myList[6]} and he couldn’t keep his ${myList[7]} off her.
    From that day on they were ${myList[8]} at the ${myList[9]}.
    After ${myList[10]} years together, ${myList[11]} finally worked up the nerve to ask ${myList[12]} to ${myList[13]} him and she immediately replied ${myList[14]}!
    Once they are married, they want to get a pet ${myList[15]} and have ${myList[16]} kids together.
    And as time passes, they know they may get ${myList[17]} and ${myList[18]}, but they’ll always be each other’s ${myList[19]} ${myList[20]}.`);