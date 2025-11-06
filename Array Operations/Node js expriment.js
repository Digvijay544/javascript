const num = parseInt(process.argv[2]);

if (isNaN(num)) {
  console.log("Please provide a valid number!");
  console.log("Example: node Experiment10.js 5");
  process.exit(1);
}

if(num <= 0)
{
  console.log("Please enter a valid number.");
  process.exit(1);
}

function tableFor(num) {
  console.log("\n Multiplication Table using FOR loop:");
  if (num > 0) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  } else {
    console.log("Please enter a positive number.");
  }
}

function tableWhile(num) {
  console.log("\n Multiplication Table using WHILE loop:");
  let i = 1;
  if (num > 0) {
    while (i <= 10) {
      console.log(`${num} x ${i} = ${num * i}`);
      i++;
    }
  } else {
    console.log("Please enter a positive number.");
  }
}

function tableDoWhile(num) {
  console.log("\n Multiplication Table using DO-WHILE loop:");
  let i = 1;
  if (num > 0) {
    do {
      console.log(`${num} x ${i} = ${num * i}`);
      i++;
    } while (i <= 10);
  } else {
    console.log("Please enter a positive number.");
  }
}

tableFor(num);
tableWhile(num);
tableDoWhile(num);