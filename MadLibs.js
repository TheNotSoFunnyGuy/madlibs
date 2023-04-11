const readLine = require('readline-sync');

let name1 = readLine.question("Enter a name: ");
let name2 = readLine.question("Enter a name: ");
let bodyParts1 = readLine.question("Enter a body part: ");
let catchPhrase = readLine.question("Enter a catch phrase: ");
let verb1 = readLine.question("Enter a verb: ");
let verb2 = readLine.question("Enter a verb ending in ed: ");
let place = readLine.question("Enter a place: ");
let bodyParts2 = readLine.question("Enter a body part: ");
let verb3 = readLine.question("Enter a verb ending in ed: ");
let bodyParts3 = readLine.question("Enter a body part: ");
let number1 = readLine.question("Enter a number: ");
let name3 = readLine.question("Enter a name: ");
let name4 = readLine.question("Enter a name: ");
let verb4 = readLine.question("Enter a verb: ");
let exclamation = readLine.question("Enter an exclamation: ");
let animal1 = readLine.question("Enter an animal: ");
let number2 = readLine.question("Enter a number: ");
let adjective1 = readLine.question("Enter an adjective: ");
let adjective2 = readLine.question("Enter an adjective: ");
let adjective3 = readLine.question("Enter an adjective: ");
let animal2 = readLine.question("Enter an animal: ");

console.log(`    ${name1} saw ${name2} and he couldn’t believe his ${bodyParts1}.
    Her first words to him were “${catchPhrase}” and he knew right then that he would ${verb1} her someday.
    On their first date, they ${verb2} at the ${place} and he couldn’t keep his ${bodyParts2} off her.
    From that day on they were ${verb3} at the ${bodyParts3}.
    After ${number1} years together, ${name3} finally worked up the nerve to ask ${name4} to ${verb4} him and she immediately replied ${exclamation}!
    Once they are married, they want to get a pet ${animal1} and have ${number2} kids together.
    And as time passes, they know they may get ${adjective1} and ${adjective2}, but they’ll always be each other’s ${adjective3} ${animal2}.`);