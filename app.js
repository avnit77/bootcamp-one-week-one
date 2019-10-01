const myButton = document.getElementById('quiz-button');

import { isCorrect } from './function.js';



myButton.onclick = () => {
    alert('Welcome to my quiz!');
    const myConfirmation = confirm('do you want to take my quiz?');
    console.log(myConfirmation);
    const userAnswer = prompt('Do I like sword ferns? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();

    //if(sanitizedUserAnswer === 'yes'){
    //    alert('right-o');
    //} else if(sanitizedUserAnswer === 'no') {
    //    alert('wrong!');
    //} else {
    //    alert('did you answer with yes or no? this is not a fancy enough quiz for unexpected answers.');
   // }

    const userIsCorrect = isCorrect(sanitizedUserAnswer);
    if(userIsCorrect) {
        alert('yup');
    } else {
        alert('wrong!');
    }

    console.log(userAnswer);

    const userAnswer2 = prompt('What did I build in a forest for fern-gazing?');
    const sanitizedUserAnswer2 = userAnswer2.toLowerCase().trim();
    const userIsCorrect2 = isCorrect(sanitizedUserAnswer2);
    if(userIsCorrect2) {
        alert('swing, swang, swung');
    } else {
        alert('So wrong');
    }
    console.log(userAnswer2);

    const userAnswer3 = prompt('Where did I hike in a rainforest for the first time?');
    const sanitizedUserAnswer3 = userAnswer3.toLowerCase().trim();
    const userIsCorrect3 = isCorrect(sanitizedUserAnswer3);
    if(userIsCorrect3) {
        alert('Correct! The ferns were nuts!');
    } else {
        alert('Why do you not know this about me?');
    }
    console.log(userAnswer3);


};