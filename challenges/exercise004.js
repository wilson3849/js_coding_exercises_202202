function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numberArr = []
  nums.forEach((num) => {
    if (num < 1)
      numberArr.push(num)
  })
  return numberArr  
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let nameArr = []
  names.forEach((name) => {
    if (name[0].toUpperCase() == char)
      nameArr.push(name)
  })
  return nameArr   
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let wordArr = []
  let matchWord = "to "
  words.forEach((word) => {
    if (word.substring(0,matchWord.length) == matchWord)
      wordArr.push(word)
  })
  return wordArr   
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numberArr = []
  nums.forEach((num) => {
    if (num - Math.floor(num) == 0)
      numberArr.push(num)
  })
  return numberArr    
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cityArr = []
  users.forEach((user) => {
    cityArr.push(user.data.city.displayName)
  })
  return cityArr    
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let numberArr = []
  nums.forEach((num) => {
    numberArr.push(Math.round(Math.sqrt(num) * 100)/100)
  })
  return numberArr   
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let SentencesArr = []
  sentences.forEach((sentence) => {
    if(sentence.toUpperCase().indexOf(str.toUpperCase()) != -1)
      SentencesArr.push(sentence)
  })
  return SentencesArr   
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let sideArr = []
  triangles.forEach((sides) => {
    let longestside = 0
    sides.forEach((side) => {
      if (side > longestside) 
        longestside = side
    })
    sideArr.push(longestside)
  })
  return sideArr   
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
