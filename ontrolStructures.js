let num1 = 40;
let num2 = 20;
let num3 = 14;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

if (num1 % 2 == 0) {
  console.log(`${num1} is even`);
} else {
  console.log(`${num1} is Odd`);
}

if (num1 > num2 && num2 > num3) {
  console.log(num1, num2, num3);
} else if (num1 > num2 && num3 > num2) {
  console.log(num1, num3, num2);
} else if (num2 > num1 && num1 > num3) {
  console.log(num2, num1, num3);
} else if (num2 > num1 && num3 > num1) {
  console.log(num2, num3, num1);
} else if (num3 > num1 && num1 > num2) {
  console.log(num3, num1, num2);
} else {
  console.log(num3, num2, num1);
}

for (let i = 0; i < 21; i++) {
  console.log(i);
}

let x = 0;
while (x < 21) {
  console.log(x);
  x++;
}

for (let y = 1; y < 21; y++)
  if (y % 2 == 0) {
    console.log(y);
  }

for (let z = 1; z < 6; z++) {
  if (z == 1) {
    console.log("*");
  } else if (z == 2) {
    console.log("**");
  } else if (z == 3) {
    console.log("***");
  } else if (z == 4) {
    console.log("****");
  } else if (z == 5) {
    console.log("*****");
  }
}

let User_N = "eyad";
let Pass = "123123";

if (User_N.length > 6 && Pass.length >= 8) {
  console.log(`login successful`);
} else console.log(`login failed.`);

for (let i = 20; i > -1; i--) {
  console.log(i);
}

let startRange = 6;
let endRange = 18;
let contener = "";
for (let i = startRange; i <= endRange; i++) {
  contener += i + `,`;
}

console.log(contener);
