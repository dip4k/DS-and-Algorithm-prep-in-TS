// reverse given string
// problem --> input "my name is dipak"
//            output "kapid si eman ym"

/**
 * @param  {string} str
 * @returns string
 */
function reverse(str: string): string {
  if (!str || str.length < 2) {
    return str;
  }

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

//storing string as char array and returning string using array.join
/**
 * @param  {string} str
 * @returns string
 */
function reverse2(str: string): string {
  if (!str || str.length < 2) {
    return str;
  }

  const reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join("");
}

// using inbuilt array method
/**
 * @param  {string} str
 * @returns string
 */
function reverse3(str: string): string {
  if (!str || str.length < 2) {
    return str;
  }
  return str.split("").reverse().join("");
}

// using es6
/**
 * @param  {string} str
 * @returns string
 */
const reverse4 = (str: string): string => (!str || str.length < 2 ? str : [...str].reverse().join(""));

console.log("using : first method : ", reverse("I'm Groot!"));
// using : first method :  !toorG m'I
console.log("using : second method : ", reverse2("I'm Rocket!"));
// using : second method :  !tekcoR m'I
console.log("using : third method : ", reverse3("I'm Star Lord!"));
// using : third method :  !droL ratS m'I
console.log("using : fourth method : ", reverse4("I'm Nebula!"));
// using : fourth method :  !alubeN m'I

// run using deno --> deno run .\Data-structures\Arrays\reverse-string.ts
// using ts-node --> ts-node .\Data-structures\Arrays\reverse-string.ts
