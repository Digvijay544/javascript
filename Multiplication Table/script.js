function generateTableUsingForLoop() {
  let number = parseInt(document.getElementById("numberInput").value);
  if (isNaN(number)) {
    document.getElementById("tableResult").innerHTML = "Please enter a valid number.";
    return;
  }
  let tableHTML = `<table><tr><th>Multiplication Table of ${number}</th></tr>`;
  for (let i = 1; i <= 10; i++) {
    tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
  }
  tableHTML += "</table>";
  document.getElementById("tableResult").innerHTML = tableHTML;
}

function generateTableUsingWhileLoop() {
  let number = parseFloat(document.getElementById("numberInput").value);
  if (isNaN(number)) {
    document.getElementById("tableResult").innerHTML = "Please enter a valid number.";
    return;
  }
  let tableHTML = `<table><tr><th>Multiplication Table of ${number}</th></tr>`;
  let i = 1;
  while (i <= 10) {
    tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
    i++;
  }
  tableHTML += "</table>";
  document.getElementById("tableResult").innerHTML = tableHTML;
}

function generateTableUsingDoWhileLoop() {
  let number = parseFloat(document.getElementById("numberInput").value);
  if (isNaN(number)) {
    document.getElementById("tableResult").innerHTML = "Please enter a valid number.";
    return;
  }
  let tableHTML = `<table><tr><th>Multiplication Table of ${number}</th></tr>`;
  let i = 1;
  do {
    tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
    i++;
  } while (i <= 10);
  tableHTML += "</table>";
  document.getElementById("tableResult").innerHTML = tableHTML;
}
