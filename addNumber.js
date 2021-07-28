function addNumber(num1, num2) {
  return num1 + num2;
}
console.log(addNumber(2, 5));
console.log(addNumber(5, 5));

//converting minutes into second

function convertMinutesToSecond(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSecond(1));

//yourage in seconds
function yourAgeInSeconds(age) {
  //years * months(12) *days(30) *hours(24) *minutes(60) * seconds(60)
  return age * 12 * 30 * 24 * 60 * 60;
}

console.log(yourAgeInSeconds(22));

///////////////////////////////

function getFirstitem(items) {
  return items[0];
}
let movies = ["Nick ", "nav", "vital"];

console.log(getFirstitem(movies));

/////////////////////////////
function badOrGoodMovie(movie_rating) {
  let movie_result;
  if (movie_rating >= 7) {
    movie_result = "Good Movie";
  } else {
    movie_result = "Bad movie";
  }
  return movie_result;
}

console.log(badOrGoodMovie(6)); //bad
console.log(badOrGoodMovie(8)); //good

/////////////////////////////////

//check if a string is empty

function isEmptyString(some_string) {
  //isEmptyString ("") -> true
  //isEmptyString("The GodFather") ->False
  if (some_string == "") {
    return true;
  } else {
    return false;
  }
}

console.log(isEmptyString(""));
console.log(isEmptyString("The GodFather"));
//////////////////////////////////////

function findMin(numbers) {
  //findMin([5,2,9,8,7,3]) -->2;
  //findmax([5,8,9,8,7,3]) -->3;

  let minimum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  return minimum;
}
console.log(findMin([5, 2, 9, 8, 7, 3]));
console.log(findMin([5, 8, 9, 8, 7, 3]));

////////////////////////////
//findMax([5,2,9,8,7,3]) -->9;
//findmax([5,8,9,8,7,3]) -->9;

function findMax(numbers) {
  let maximum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  return maximum;
}
console.log(findMax([5, 2, 9, 8, 7, 3]));
console.log(findMax([5, 8, 9, 8, 7, 3]));

/////////////////////////////////////////////

function sortBestRatingFirst(numbers) {
  for (let j = 0; j < numbers.length - 1; j++) {
    let max_num = numbers[j];
    let max_location = j;

    for (let i = j; i < numbers.length; i++) {
      if (numbers[i] > max_num) {
        max_num = numbers[i];
        max_location = i;
      }
    }

    //swap first and last
    numbers[max_location] = numbers[j];
    numbers[j] = max_num;
  }
  return numbers;
}

console.log(sortBestRatingFirst([5, 8, 2, 9, 3, 10]));

console.log(sortBestRatingFirst([9, 8, 1, 12, 3, 10]));

console.log(sortBestRatingFirst([5, 9, 8, 1, 12, 10]));

////////////////////////////////////////////

function findMaxHelper(numbers, start) {
  let maximum = numbers[start];
  let max_location = start;

  for (let i = start; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = number[i];
      max_location = i;
    }
  }
  return { max_number: maximum, max_index: max_location };
}

//console.log(findMaxHelper([5,2,9,3,7],3))

function sortBestWithHelper(numbers) {
  for (let j = 0; j < numbers.length - 1; j++) {
    //find max number and max location starting from j
    max = findMaxHelper(numbers, j);
    max_num = max["max-index"];
    max_location = max["max_index"];

    //swap the first and max item in an array
    number[max_location] = number[j];
    number[j] = max_num;
  }

  return numbers;
}

console.log(sortBestWithHelper([5, 8, 2, 9, 3, 10]));
console.log(sortBestWithHelper([9, 8, 1, 12, 3, 10]));
console.log(sortBestWithHelper([5, 9, 8, 1, 12, 3, 10]));
