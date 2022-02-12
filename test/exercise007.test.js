const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise007");

  describe("sumDigits", () => {
    test("returns the sum of all its digits.", () => {
        expect(sumDigits(1)).toBe(1);
        expect(sumDigits(1234)).toBe(10);
        expect(sumDigits(357)).toBe(15);
        expect(sumDigits(1975)).toBe(22);                
    });
  });

  describe("createRange", () => {
    test("return a range of numbers as an array. It received a start, an end and without a step. Step is the gap between numbers in the range. ", () => {
        expect(createRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(createRange(2, 4)).toEqual([2, 3, 4]);
    });
    test("return a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. ", () => {
        expect(createRange(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
        expect(createRange(2, 4, 3)).toEqual([2]);
    });  
  });


  describe("getScreentimeAlertList", () => {
  const users =
  [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
                   { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                   { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                   { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                   { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                  ]
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
                   { date: "2019-05-02", usage: { mapMyRun: 40, whatsApp: 11, facebook: 20, safari: 30} },
                   { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                   { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                   { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                  ]
    },
  ]
  test("return an array of usernames of users who have used more than 100 minutes of screentime for without matched given date.", () => {
    expect(getScreentimeAlertList(users, "2019-01-01")).toEqual([]);
  });   
  test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);    
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234", "sam_j_1989"]);    
  });     
});  

describe("hexToRGB", () => {
  test("transform the hex code into an RGB code in the format rgb(255,17,51)", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");    
    expect(hexToRGB("#0011EE")).toBe("rgb(0,17,238)");
  });    
}); 

describe("findWinner", () => {
  const case1_1 =  [
    ["X", "0", null],
    ["X", null, "0"],
    ["X", null, "0"]
  ]
  const case1_2 =  [
    ["X", "0", null],
    ["X", "0", null],
    [null, "0", "X"]
  ]
  const case2_1 =  [
    ["X", "X", "X"],
    [null, "0", null],
    [null, null, "0"]
  ]
  const case2_2 =  [
    ["X", null, null],
    ["0", "0", "0"],
    [null, null, "X"]
  ]
  const case3_1 =  [
    ["X", "0", null],
    ["0", "X", "0"],
    ["0", null, "X"]
  ]
  const case3_2=  [
    ["X", "0", "0"],
    ["X", "0", null],
    ["0", "X", "X"]
  ] 
  const case4_1 =  [
    ["X", "0", null],
    ["X", "X", "0"],
    ["0", null, "0"]
  ]
  const case4_2=  [
    ["X", "0", null],
    ["X", "0", null],
    ["0", "X", null]
  ]
  test("return winner if player X has won, \"0\" if the player 0 has won, and null if there is currently no winner on one row marked", () => {
    expect(findWinner(case1_1)).toBe("X");    
    expect(findWinner(case1_2)).toBe("0");
  });
  test("return winner if player X has won, \"0\" if the player 0 has won, and null if there is currently no winner on one column marked", () => {
    expect(findWinner(case2_1)).toBe("X");    
    expect(findWinner(case2_2)).toBe("0");
  });    
  test("return winner if player X has won, \"0\" if the player 0 has won, and null if there is currently no winner on cross row column marked", () => {
    expect(findWinner(case3_1)).toBe("X");    
    expect(findWinner(case3_2)).toBe("0");
  });    
  test("return winner if player X has won, \"0\" if the player 0 has won, and null if there is currently no winner on no continue marked", () => {
    expect(findWinner(case4_1)).toBe(null);    
    expect(findWinner(case4_2)).toBe(null);
  });    

}); 