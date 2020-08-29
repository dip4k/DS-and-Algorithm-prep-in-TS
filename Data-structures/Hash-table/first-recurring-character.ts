//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,3,4,5]:
//It should return undefined

// brute force --> O(n^2) --> space O(1)
function firstRecurringCharacter(input: number[]) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// O(n), space -> o(n)
// using js object as hashtable (key value pair)
function firstRecurringCharacter2(input: number[]) {
  const hashtable: { [Key: number]: number } = {};
  let duplicateMinIndex = -1;
  for (let i = input.length - 1; i >= 0; i--) {
    const element = input[i];
    if (Object.prototype.hasOwnProperty.call(hashtable, element)) {
      duplicateMinIndex = i;
    } else {
      hashtable[element] = element;
    }
  }
  return duplicateMinIndex == -1 ? undefined : input[duplicateMinIndex];
}

// using set
function firstRecurringCharacter3(input: number[]) {
  const set = new Set();
  let duplicateMinIndex = -1;
  for (let i = input.length - 1; i >= 0; i--) {
    const element = input[i];
    if (set.has(element)) {
      duplicateMinIndex = i;
    } else {
      set.add(element);
    }
  }
  return duplicateMinIndex == -1 ? undefined : input[duplicateMinIndex];
}

// above programs returns whose first character whose duplicate is in array,
// say [1,2,4,3,3,1]=> in this 3 will not return as 1 has duplicate at end and position of 1 is before 3.

/*-------------------------------------------------------------------------
---------------------------driver program----------------------------------
------------------------------------------------------------------------- */
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter3([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter3([2, 1, 3, 5, 4]));

/*---------------------------------------------------------------------------- */

// other approach returning element whose duplicate is found earlier
// -->  [1,2,4,3,3,1] --> will return 3
//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
const firstRecurringCharacter4 = (input: number[]) => {
  const set = new Set();
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (set.has(element)) {
      return element;
    } else {
      set.add(element);
    }
  }
  return undefined;
};

console.log(firstRecurringCharacter4([2, 1, 1, 2, 3, 5, 1, 2, 4])); // returns 1
