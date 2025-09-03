///map , filter, reduce

const array = [1, 2, 3, 4, 5, 6];

//map functions

// function double(x) {
//   return x * 2;
// }
// function tripple(x) {
//   return x * 3;
// }

// function binary(x) {
//   return x.toString(2);
// }

// const newData = array?.map(binary);

//filter functions

//reduce funtions

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr?.length; i++) {
//     sum = sum + array[i];
//   }
//   return sum;
// }

// const findSum = (arr) => {
//   return arr.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
//   }, 0);
// };

// const findMin = (Array) => {
//   return Array.reduce((acc, curr) => {
//     if (curr < acc) {
//       return curr;
//     } else {
//       return acc;
//     }
//   }, 0);
// };

// console.log(findMin(array));
const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 2822,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 242222,
  },
];

//want a full name of every users

// const fullNaemOfUsers = users?.map(
//   (res) => res?.firstName + "  " + res?.lastName
// );

// const fullNaemOfUsers = users?.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// //28: 2 , 24:1
// console.log({ fullNaemOfUsers });

//promises functions

//promises in javscript are to hanlde callback asynchronuse code and promise is an object that represents eventual completions of successfull or failed operations

//promise is an immutable that help in callback to get rid of inversion of control and callback hell and for callback hell we do promise chaining

const github_api = "https://api.github.com/users/khandanial419";

const user = fetch(github_api);

console.log("user", user);

user.then((data) => {
  console.log("data", data);
});
