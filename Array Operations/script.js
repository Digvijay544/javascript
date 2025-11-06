let arr = [];

function createArray() {
  let input = document.getElementById("arrayInput").value.trim();
  if (input === "") {
    document.getElementById("result").innerHTML = "Please enter array elements.";
    return;
  }
  arr = input.split(",").map(item => item.trim());
  document.getElementById("result").innerHTML = `Array created: [${arr.join(", ")}]`;
}

function removeElement() {
  if (arr.length === 0) {
    document.getElementById("result").innerHTML = "Array is empty.";
    return;
  }
  let element = document.getElementById("removeElement").value.trim();
  let index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
    document.getElementById("result").innerHTML =
      `Element '${element}' removed. Updated array: [${arr.join(", ")}]`;
  } else {
    document.getElementById("result").innerHTML =
      `Element '${element}' not found in array.`;
  }
}

function checkElement() {
  if (arr.length === 0) {
    document.getElementById("result").innerHTML = "Array is empty.";
    return;
  }
  let element = document.getElementById("checkElement").value.trim();
  if (arr.includes(element)) {
    document.getElementById("result").innerHTML = `Yes, array contains '${element}'.`;
  } else {
    document.getElementById("result").innerHTML = `No, array does not contain '${element}'.`;
  }
}

function emptyArray() {
  arr = [];
  document.getElementById("result").innerHTML = "Array has been emptied.";
}
