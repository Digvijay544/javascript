function reverseString() {
  let str = document.getElementById("stringInput").value;
  let reversed = str.split("").reverse().join("");
  document.getElementById("resultOutput").innerHTML = `Reversed String: ${reversed}`;
}

function replaceCharacter() {
  let str = document.getElementById("stringInput").value;
  let charToReplace = document.getElementById("replaceChar").value;
  let replaceWith = document.getElementById("replaceWith").value;

  if (!charToReplace) {
    document.getElementById("resultOutput").innerHTML = "Please enter a character to replace.";
    return;
  }

  let replaced = str.split(charToReplace).join(replaceWith);
  document.getElementById("resultOutput").innerHTML = `Replaced String: ${replaced}`;
}

function checkPalindrome() {
  let str = document.getElementById("palindromeInput").value;
  let originalStr = str.replace(/\s/g, "").toLowerCase();
  let reversedStr = originalStr.split("").reverse().join("");

  if (originalStr === reversedStr) {
    document.getElementById("resultOutput").innerHTML = `The string "${str}" is a palindrome.`;
  } else {
    document.getElementById("resultOutput").innerHTML = `The string "${str}" is not a palindrome.`;
  }
}

function replaceSubstring() {
  let str = document.getElementById("stringInput").value;
  let substringToReplace = document.getElementById("substringInput").value;
  let replaceWith = document.getElementById("replaceWithSubstring").value;

  if (!substringToReplace) {
    document.getElementById("resultOutput").innerHTML = "Please enter a substring to replace.";
    return;
  }

  let replacedStr = str.replace(substringToReplace, replaceWith);
  document.getElementById("resultOutput").innerHTML = `String after substring replacement: ${replacedStr}`;
}
