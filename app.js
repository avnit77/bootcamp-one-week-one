const myButton = document.getElementById('quiz-button');
const username = document.getElementById('name');
let scoreCount = 0;
console.log(username);
import { isCorrect } from './function.js';


myButton.onclick = () => {
    const user = username.value;
    alert('Welcome to my quiz ' + user + '!');
    const myConfirmation = confirm('Hey, ' + user + ', do you want to take my quiz?');
    if(myConfirmation === true) {
        console.log(myConfirmation);
        const userAnswer = prompt('Do I like sword ferns? (yes/no)');
        const sanitizedUserAnswer = userAnswer.toLowerCase().trim();

        const userIsCorrect = isCorrect(sanitizedUserAnswer);
        if(userIsCorrect) {
            alert('yup');
            scoreCount += 1;
        } else {
            alert('wrong!');
        }

        console.log(userAnswer);
        console.log(scoreCount);

        const userAnswer2 = prompt('What did I build in a forest for fern-gazing?');
        const sanitizedUserAnswer2 = userAnswer2.toLowerCase().trim();
        const userIsCorrect2 = isCorrect(sanitizedUserAnswer2);
        if(userIsCorrect2) {
            alert('swing, swang, swung');
            scoreCount += 1;
        } else {
            alert('So wrong,' + user);
        }
        console.log(userAnswer2);
        console.log(scoreCount);

        const userAnswer3 = prompt('Where did I hike in a rainforest for the first time?');
        const sanitizedUserAnswer3 = userAnswer3.toLowerCase().trim();
        const userIsCorrect3 = isCorrect(sanitizedUserAnswer3);
        if(userIsCorrect3) {
            alert('Correct! The ferns were nuts!');
            scoreCount += 1;
        } else {
            alert('Why do you not know this about me,' + user + '?');
        }
        console.log(userAnswer3);
        console.log(scoreCount);
        alert('Your score is ' + scoreCount);
        console.log(typeof scoreCount);
    } else {
        return alert('Rude!');
    }
};