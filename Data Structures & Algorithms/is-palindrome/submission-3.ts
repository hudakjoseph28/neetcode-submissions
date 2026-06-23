class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
       // 1. Remove non-letter/non-number characters and convert to lowercase
        const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
         // 2. Reverse the cleaned string
         const reversedStr = cleanStr.split("").reverse().join("");
  
         // 3. Compare
        return cleanStr === reversedStr;
    }
}
