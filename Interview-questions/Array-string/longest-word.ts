// Longest Word --> https://coderbyte.com/editor/Longest%20Word:JavaScript
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function LongestWord(sentence: string): string {
  return sentence
    .replace(/[^a-zA-Z ]/g, "") // remove non-alphabets
    .split(" ") // form array of words
    .sort((a, b) => b.length - a.length)[0]; // sort descending by length, return longest
}

console.log(LongestWord("I love skyrim."));

// run --> deno run .\Interview-questions\Array-string\longest-word.ts
