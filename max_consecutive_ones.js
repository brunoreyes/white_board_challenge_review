// Given an array of 1s and 0s, find the max number of consecutive 1s in an array.
// Will the characters always be 1's and 0's? Yes
// Can I use built in methods? Yes
// Will the array always have numbers? It may be empty, if so, return 0

const countConsecutiveOnes = (arrayToCheck) => {
  let maxConsecutive = 0;
  let currentStreak = 0;
  for (let i = 0; i < arrayToCheck.length; i++) {
    if (arrayToCheck[i] == 1 && maxConsecutive == currentStreak) {
      // here if the index == 1 and only if maxConsecutive = currentStreak
      // does it add one to both, the return value is maxConsecutive
      maxConsecutive++;
      currentStreak++;
    } else if (arrayToCheck[i] == 1) {
      currentStreak++; //here we are adding 1 to the current streak
      //so if a current streak ever equals a max streak, then 1 is added to the max streak
    } else {
      currentStreak = 0;
      // if nothing is found then we don't want to do anything to the currentStreak
    }
  }
  return maxConsecutive; //here we are returning only the highest count of consecutive ones
};
