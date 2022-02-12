function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return (person.city == "Manchester")
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  if((people/40)-Math.floor(people/40) > 0)
    return Math.floor(people/40)+1
  else
    return Math.floor(people/40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.filter(function(element){return element == "sheep"}).length
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let _address = person.address
  let _city = _address.city
  let _postcode = _address.postCode
  return (_postcode[0].toUpperCase() == "M" && _city == "Manchester") 
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
