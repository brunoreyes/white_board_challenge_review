// Given a string, find the first consecutively repeating character
// in it and return it's index. If there aren't any return: -1

// Clarifying Questions

// Will there always be strings? Yes

// Does capitilization matter? No, all characters are lowercase

// Does spacing matter? No, so "elite elephant should return -1 b/c no consecutive character"

// May I use built in methods like .indexof(), .replace(), .split(),
// .join(), .toLowercase(), and.reverse() ? Yes

const findFirstRepeat = (stringToCheck) => {
  for (let i = 0; i < stringToCheck.length; i++) {
    //looping around stringToCheck
    if (stringToCheck[i] == stringToCheck[i + 1]) {
      //here we are adding 1 to index
      return i + 1; //here we are returning the index + 1, so food is 2
    }
  }
  return -1; //this is like the else statement, returning -1 if there isn;t any repeat characters.
};
