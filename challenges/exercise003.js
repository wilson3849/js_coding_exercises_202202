function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let resultArr = []
  nums.forEach((num) => {
    resultArr.push(num*num)
  })
  return resultArr
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let wordStr = "";
  let wordcount = 0;
  words.forEach((word) => {
    wordcount++
    if (wordcount > 1)
      wordStr = wordStr + word[0].toUpperCase() + word.substring(1);
    else
      wordStr = wordStr + word
  })
  return wordStr
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let TotalSubject = 0
  people.forEach((person) => {
    TotalSubject += person.subjects.length
  })
  return TotalSubject
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let foundIngredient = false;
  menu.forEach((item) => {
    item.ingredients.forEach((hasIngredient) => {
      if(hasIngredient == ingredient) 
        foundIngredient = true
    }) 
  })  
  return foundIngredient
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let NumberArr = []
  arr1.forEach((Num1) => {
    arr2.forEach((Num2) => {
      if ((Num1 == Num2) && (NumberArr.findIndex(N => N==Num1) == -1)){
        NumberArr.push(Num1)
      }
    })
  })
  return NumberArr.sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
