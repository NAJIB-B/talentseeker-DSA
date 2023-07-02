// it is only used for sorted list

// let the value we are looking for be called key

//1) Get low index and high index
//2) add the low and high index then divide by 2 to get the middle value
//3) if the middle value is equal to key, then return it
//4) if the key is greater than the middle value, then the lowIndex becomes the middle value + 1
//5) if the key is less than the middle for, then the highIndex becomes the middle value - 1

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function binarySearch(array, value) {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);

    if (value == array[midIndex]) {
      return true;
    } else if (value > array[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }

  return -1;
}

console.log(binarySearch(array, 9));
