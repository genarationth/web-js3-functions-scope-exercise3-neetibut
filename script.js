// Exercise 3.1
// Maria has to calculate the cost of her payments for the month.
// For every transation there is a $3 fee and a 0.1% (0.001) interest fee.
// Can you help her calculate her costs?
// Return the value of what she should be paying.

let totalPayment = 0;

let transactions = [];

function getTotalCost(transactions) {
  transactions.forEach((item) => {
    totalPayment = totalPayment + item.price + 3 + item.price * 0.001;
  });
  return totalPayment;
}

let thisMonthTransactions = [
  { name: "Item1", price: 10 },
  { name: "Item2", price: 10 },
  { name: "Item3", price: 10 },
];

console.log(getTotalCost(thisMonthTransactions));

// Exercise 3.2
// Part 1
function greetFriends() {
  const name1 = { name: "Kirk" };
  const name2 = { name: "Picard" };
  const name3 = { name: "Spock" };

  const greeting = `Welcome ${name1.name}, ${name2.name}, and ${name3.name}!`;
  console.log(greeting);
}

greetFriends();

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.
// i.e. 1990 returns 30
function calculateAge(birthYear) {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Calculate the age by subtracting birth year from current year
  const age = currentYear - birthYear;

  return age;
}

// Example usage
const birthYear = 1990;
const edAge = calculateAge(birthYear);
console.log(`Ed's age based on birth year ${birthYear} is ${edAge}.`);

//Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

function greetFriendsWithAges(names, birthYears) {
  if (names.length !== birthYears.length) {
    throw new Error("Names and birthYears arrays must have the same length.");
  }

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const birthYear = birthYears[i];
    const age = calculateAge(birthYear);

    console.log(`Welcome ${name}, you are ${age}.`);
  }
}

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

const names = ["Kirk", "Picard", "Spock"];
const birthYears = [1995, 1990, 1988];

greetFriendsWithAges(names, birthYears);

// Challenge
// Part 1
// Part 2
// Part 3
