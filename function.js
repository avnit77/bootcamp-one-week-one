export const isCorrect = (userInput) => {
    if(userInput === 'yes') return true;
    else if(userInput === 'swing') return true;
    else if(userInput === 'a swing') return true;
    else if(userInput === 'puerto rico') return true;


    return false;
};
