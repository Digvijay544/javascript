function calculateTriangleArea() {
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);
  let c = parseFloat(document.getElementById("sideC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    document.getElementById("result").innerHTML = "Enter valid positive sides.";
    return;
  }

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  document.getElementById("result").innerHTML = `Area of Triangle: ${area.toFixed(2)}`;
}

function calculateRectangleArea() {
  let length = parseFloat(document.getElementById("rectLength").value);
  let breadth = parseFloat(document.getElementById("rectBreadth").value);

  if (isNaN(length) || isNaN(breadth) || length <= 0 || breadth <= 0) {
    document.getElementById("result").innerHTML = "Enter valid dimensions.";
    return;
  }

  let area = length * breadth;
  document.getElementById("result").innerHTML = `Area of Rectangle: ${area.toFixed(2)}`;
}

function calculateCircleArea() {
  let radius = parseFloat(document.getElementById("circleRadius").value);

  if (isNaN(radius) || radius <= 0) {
    document.getElementById("result").innerHTML = "Enter valid radius.";
    return;
  }

  let area = Math.PI * radius * radius;
  document.getElementById("result").innerHTML = `Area of Circle: ${area.toFixed(2)}`;
}