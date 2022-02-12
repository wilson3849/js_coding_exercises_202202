const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");
  
describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
      expect(sumMultiples([15, 2, 7, 9, 1, 10])).toBe(34);
      expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
    });
  
    test("if the number is not found in the array, returns 0", () => {
      expect(sumMultiples([13, 4, 7, 8, 1, 11])).toBe(0);
    });
  });

describe("isValidDNA", () => {
    test("return false on no string entry.", () => {
      expect(isValidDNA("")).toBe(false);             
    });

    test("return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
      expect(isValidDNA("CGTA")).toBe(true);
      expect(isValidDNA("GGTTCC")).toBe(true);
      expect(isValidDNA("GGTACA")).toBe(true);
      expect(isValidDNA("AGTCXC")).toBe(false);                
    });    
  });    

  
  describe("getComplementaryDNA", () => {
    test("return empty string on no string entry.", () => {
      expect(getComplementaryDNA("")).toBe("");             
    });

    test("return empty string if string is not complementary base pairs.", () => {
      expect(getComplementaryDNA("AGTCXC")).toBe("");                
    });    

    test("return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of \"ACTG\" would have a complementary DNA string of \"TGAC\"", () => {
      expect(getComplementaryDNA("CGTA")).toBe("TGAC");
      expect(getComplementaryDNA("GGTTCC")).toBe("TTGGCC");
      expect(getComplementaryDNA("GGTACA")).toBe("TGGAAC");
    });
  }); 


  describe("isItPrime", () => {
    test("return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
      expect(isItPrime(2)).toBe(true);
      expect(isItPrime(3)).toBe(true);
      expect(isItPrime(6)).toBe(false);
      expect(isItPrime(11)).toBe(true);
      expect(isItPrime(198)).toBe(false);                
    });
  });   


  describe("createMatrix", () => {
    test("return an array of n arrays, each filled with n items. The parameter \"fill\" should be used as the filler of the arrays.", () => {
        expect(createMatrix(1, "A")).toEqual(["A"]);
        expect(createMatrix(4, 4)).toEqual([[4, 4, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4], [4, 4, 4, 4]]);
    });
  });
  
  describe("areWeCovered", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday", "Wednesday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "john", rota: ["Monday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Mary", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];
    test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
      expect(areWeCovered(staff,"Monday")).toBe(true);
      expect(areWeCovered(staff,"Saturday")).toBe(true); 
      expect(areWeCovered(staff,"Wednesday")).toBe(false);
      expect(areWeCovered(staff,"Tuesday")).toBe(false);     
    });
  });;
