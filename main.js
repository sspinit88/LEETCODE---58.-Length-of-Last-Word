/*
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.


Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:

    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.

*/

function lengthOfLastWord(s) {
  // Удаление ведущих и завершающих пробелов из строки
  // Remove leading and trailing spaces from the string
  s = s.trim();

  // Разделение строки на массив слов
  // Split the string into an array of words
  let words = s.split(' ');

  // Возврат длины последнего слова в массиве
  // Return the length of the last word in the array
  return words[words.length - 1].length;
}

/*

This solution ensures that the algorithm runs in O(n) time complexity and uses O(n) space complexity, where n is the length of the string. 
The trim and split methods each run in linear time, and the split method creates a new array that can be as large as the input string.

Это решение гарантирует, что алгоритм работает с временной сложностью O(n) и использует пространственную сложность O(n), где n — длина строки.
Каждый из методов обрезки и разделения выполняется за линейное время, а метод разделения создает новый массив, размер которого может соответствовать входной строке.

*/
