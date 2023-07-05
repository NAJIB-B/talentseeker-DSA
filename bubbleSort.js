// Bubble sort

// Take the first item in the array, compare it with the second
// if the first item is greater than the second,
//swap them else move on to the next set of numbers

function swapper(array, item1, item2) {
  let temp = array[item1];
  array[item1] = array[item2];
  array[item2] = temp;

  return array;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 + i; j++) {
      if (array[j] > array[j + 1]) {
        swapper(array, j, j + 1);
      }
    }
  }
  return array;
}
console.log(bubbleSort([6, 12, 9, 1, 0, 4, 3, 2, 5]));
