const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();

app.use(cors());

const questions = {
  variables: [
    {
      typeQuestion: "Variables",
      questionText: `The scope of a "var" variable is...`,
      answerText: "functional",
      answerOptions: [
        { answerText: "Functional", isCorrect: true },
        { answerText: "Global", isCorrect: true },
        { answerText: "Block", isCorrect: false },
      ],
    },
  ],
  variables: [
    {
      typeQuestion: "Variables",
      questionText: `The scope of a "var" variable is...`,
      answerText: "functional",
      answerOptions: [
        { answerText: "Functional", isCorrect: true },
        { answerText: "Global", isCorrect: true },
        { answerText: "Block", isCorrect: false },
      ],
    },
    {
      typeQuestion: "Variables",
      questionText: `The scope of a "let" or "const" variable is...`,
      answerText: "block",
      answerOptions: [
        { answerText: "Block", isCorrect: true },
        { answerText: "Functional", isCorrect: false },
        { answerText: "Global", isCorrect: false },
      ],
    },
    {
      typeQuestion: "Variables",
      questionText: `Can "let" or "const" variables declared inside a curly brackets be
    accessed from outside the block?`,
      answerText: "no",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "Only let", isCorrect: false },
        { answerText: "Only const", isCorrect: false },
        { answerText: "No", isCorrect: true },
      ],
    },
    {
      typeQuestion: "Variables",
      questionText: `What type of variable can be updated, but can't be re-declared into
    the scope?`,
      answerText: "let",
      answerOptions: [
        { answerText: "Const", isCorrect: false },
        { answerText: "Let", isCorrect: true },
        { answerText: "Var", isCorrect: false },
      ],
    },
  ],
  oop: [
    {
      typeQuestion: "OOP",
      questionText: `What is OOP?`,
      answerText:
        "It's a computer programming model that organizes software design around data or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.",
      answerOptions: [
        {
          answerText:
            "It's a computer programming model that organizes software design around data or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.",
          isCorrect: true,
        },
        {
          answerText:
            "It's a language that organizes software design around data or objects, rather than functions and logic.",
          isCorrect: false,
        },
        {
          answerText: "OOP focuses on the logic to manipulate objects.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `What is encapsulation in OOP?`,
      answerText:
        "Encapsulation is binding of data and methods together and keep both safe from outside.",
      answerOptions: [
        {
          answerText:
            "It means that the object's internal state is kept private, so it can only be accessed by the object's own methods and other object's methods.",
          isCorrect: false,
        },
        {
          answerText:
            "Encapsulation is binding of data and methods together and keep both safe from outside.",
          isCorrect: true,
        },
        {
          answerText:
            "Encapsulation is hiding information, so each object should only reveal operations that are relevant for the other objects.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `What is inheritance in OOP?`,
      answerText:
        "Inheritance enables new objects to take on the properties of existing objects and classes to reuse the code from other classes.",
      answerOptions: [
        {
          answerText:
            "Inheritance enables new objects to take on the properties of existing objects, but not classes to reuse the code from other classes.",
          isCorrect: false,
        },
        {
          answerText:
            "Inheritance is a pillar of OOP that can't force a more thorough data analysis, reduces development time and ensures a higher level of accuracy.",
          isCorrect: false,
        },
        {
          answerText:
            "Inheritance enables new objects to take on the properties of existing objects and classes to reuse the code from other classes.",
          isCorrect: true,
        },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `What is abstraction in OOP?`,
      answerText:
        "Abstraction is hiding information that are unnecessary to show. It means that each object should only expose operations that are relevant for the other objects.",
      answerOptions: [
        {
          answerText:
            "Abstraction is binding of data and methods together and keep both safe from outside interference and misuse.",
          isCorrect: false,
        },
        {
          answerText:
            "Abstraction is hiding information that are unnecessary to show. It means that each object should only expose operations that are relevant for the other objects.",
          isCorrect: true,
        },
        {
          answerText:
            "Abstraction enables new objects to take on the properties of existing objects.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `What is polymorphism in OOP?`,
      answerText:
        "Polymorphism is the ability to redefine methods for derived classes. It's when a method has the same name but a different implementation in different classes.",
      answerOptions: [
        {
          answerText:
            "Polymorphism is the ability to redefine methods for derived classes. It's when a method has the same name but a different implementation in different classes.",
          isCorrect: true,
        },
        {
          answerText:
            "Polymorphism gives a way to use a class exactly like its parent, so each child class can not keep its own methods.",
          isCorrect: false,
        },
        {
          answerText:
            "Polymorphism enables new objects to take on the properties of existing objects.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `The benefits of __ are reduce complexity + increase reusability.`,
      answerText: "Encapsulation",
      answerOptions: [
        { answerText: "Encapsulation", isCorrect: true },
        { answerText: "Abstraction", isCorrect: false },
        { answerText: "Inheritance", isCorrect: false },
        { answerText: "Polymorphism", isCorrect: false },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `The benefits of __ are reduce complexity + isolate impact of changes.`,
      answerText: "Abstraction",
      answerOptions: [
        { answerText: "Encapsulation", isCorrect: false },
        { answerText: "Abstraction", isCorrect: true },
        { answerText: "Inheritance", isCorrect: false },
        { answerText: "Polymorphism", isCorrect: false },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `The benefits of __ are eliminate redundant code.`,
      answerText: "Inheritance",
      answerOptions: [
        { answerText: "Encapsulation", isCorrect: false },
        { answerText: "Abstraction", isCorrect: false },
        { answerText: "Inheritance", isCorrect: true },
        { answerText: "Polymorphism", isCorrect: false },
      ],
    },
    {
      typeQuestion: "OOP",
      questionText: `The benefits of __ are refactor ugly if/else and switch/case statements.`,
      answerText: "Polymorphism",
      answerOptions: [
        { answerText: "Encapsulation", isCorrect: false },
        { answerText: "Abstraction", isCorrect: false },
        { answerText: "Inheritance", isCorrect: false },
        { answerText: "Polymorphism", isCorrect: true },
      ],
    },
  ],
  "functional programming": [
    {
      typeQuestion: "Functional Programming",
      questionText: `What is Functional programming?`,
      answerText:
        "Functional programming is a style of programming where the solutions are simple, isolated functions, without side effects.",
      answerOptions: [
        {
          answerText:
            "Functional programming is a style of programming where the focus are the objects.",
          isCorrect: false,
        },
        {
          answerText:
            "Functional programming is a style of programming where the solutions are simple, isolated functions, without side effects.",
          isCorrect: true,
        },
      ],
    },
    {
      typeQuestion: "Functional Programming",
      questionText: `What is a callback function?`,
      answerText:
        "Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.",
      answerOptions: [
        {
          answerText:
            "The idea of callback functions is that functions can not be treated as values.",
          isCorrect: false,
        },
        {
          answerText:
            "Callback functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
          isCorrect: false,
        },
        {
          answerText:
            "Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.",
          isCorrect: true,
        },
      ],
    },
    {
      typeQuestion: "Functional Programming",
      questionText: `What are first class functions?`,
      answerText:
        "First class functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
      answerOptions: [
        {
          answerText:
            "First class functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
          isCorrect: true,
        },
        {
          answerText:
            "The idea of functions as first-class entities is that functions are also treated as values and used as data. In JavaScript, some of the functions are first class functions.",
          isCorrect: false,
        },
        {
          answerText:
            "First-class are the functions that are slipped or passed into another function to decide the invocation of that function.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "Functional Programming",
      questionText: `What are higher order functions?`,
      answerText:
        "Higher order functions are functions that take a function as an argument, or return a function as a return value.",
      answerOptions: [
        {
          answerText:
            "Higher order functions are functions that take a function as an argument, or return a function as a return value.",
          isCorrect: true,
        },
        {
          answerText:
            "Higher order functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
          isCorrect: false,
        },
        {
          answerText:
            "Higher order functions are the functions that are slipped or passed into another function to decide the invocation of that function.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "Functional Programming",
      questionText: `Mark the correct sentence.`,
      answerText: "",
      answerOptions: [
        {
          answerText:
            "Any function that relies on a random number generator are pure.",
          isCorrect: false,
        },
        {
          answerText:
            "Pure functions are predictable because the only thing they depend on is their input, and the only thing they do is return their output, with no side effects. With pure functions, the code is easier to test.",
          isCorrect: true,
        },
        {
          answerText:
            "Referential Transparency means that functions do not rely on anything beyond their parameters and given the same parameters they can return different answers.",
          isCorrect: false,
        },
        {
          answerText:
            "Using the splice method instead of slice helps to avoid any array-mutating side effects.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "Functional Programming",
      questionText: `_ adds items to the end of the same array it is called on, which mutates that array._ offers a way to merge new items to the end of an array without any mutating side.`,
      answerText: "push and concat",
      answerOptions: [
        {
          answerText: "Unshift and join",
          isCorrect: false,
        },
        {
          answerText: "Shift and concat",
          isCorrect: false,
        },
        {
          answerText: "Push and join",
          isCorrect: false,
        },
        {
          answerText: "Push and concat",
          isCorrect: true,
        },
      ],
    },
    {
      typeQuestion: "Functional Programming",
      questionText: `What is closure?`,
      answerText:
        "Closure means that an inner function have access to the variables within the outer function environment. In JS, closure are always created in the moment a function is created.",
      answerOptions: [
        {
          answerText:
            "Closure means that an outer function have access to the variables within the inner function environment.",
          isCorrect: false,
        },
        {
          answerText:
            "Closure means that an inner function have access to the variables within the outer function environment. In JS, closure are always created in the moment a function is created.",
          isCorrect: true,
        },
        {
          answerText:
            "Closure means that an inner function don't have access to the variables within the outer function environment, only the varibles declared inside of the inner function.",
          isCorrect: false,
        },
      ],
    },
    {
      typeQuestion: "Functional Programming",
      questionText: `Mark que correct sentence about closure.`,
      answerText:
        "In JS, closures are used for event handlers and callback functions, give privacy to object data (data privacy), currying, partial applications and other functional programming patterns.",
      answerOptions: [
        {
          answerText:
            "Closures are functions that refer to free variables (variables that are locally declared or passed as parameter).",
          isCorrect: false,
        },
        {
          answerText:
            "The inner function will have access to the free variables within the outer function only if it is declared before the inner function.",
          isCorrect: false,
        },
        {
          answerText:
            "In JS, closures are used for event handlers and callback functions, give privacy to object data (data privacy), currying, partial applications and other functional programming patterns.",
          isCorrect: true,
        },
        {
          answerText:
            "In JavaScript, closures are created every time a function is called.",
          isCorrect: false,
        },
      ],
    },
  ],
  "asynchronous programming": [
    {
      typeQuestion: "Asynchronous programming",
      questionText: `Mark the correct sentence about Promises. `,
      answerText:
        "Promise is an object representing the current state of the operation (pending, fulfilled or rejected). This object is returned by an asynchronous function (e.g a API call) and it is a future unknown value.",
      answerOptions: [
        {
          answerText:
            "Promises have only two possible states: fulfilled or rejected.",
          isCorrect: false,
        },
        {
          answerText:
            "We can't have promises that allows us to write asynchronous code in a synchronous way.",
          isCorrect: false,
        },
        {
          answerText: "A promise is always a value that is known.",
          isCorrect: false,
        },
        {
          answerText:
            "Promise is an object representing the current state of the operation (pending, fulfilled or rejected). This object is returned by an asynchronous function (e.g a API call) and it is a future unknown value.",
          isCorrect: true,
        },
      ],
    },
  ],
};

// const questions = {
//   variables: {
//     typeQuestion: "Variables",
//     questionText: `The scope of a "var" variable is...`,
//     answerText: "functional",
//     answerOptions: [
//       { answerText: "Functional", isCorrect: true },
//       { answerText: "Global", isCorrect: true },
//       { answerText: "Block", isCorrect: false },
//     ],
//   },
//   variables: {
//     typeQuestion: "Variables",
//     questionText: `The scope of a "let" or "const" variable is...`,
//     answerText: "block",
//     answerOptions: [
//       { answerText: "Block", isCorrect: true },
//       { answerText: "Functional", isCorrect: false },
//       { answerText: "Global", isCorrect: false },
//     ],
//   },
//   variables: {
//     typeQuestion: "Variables",
//     questionText: `Can "let" or "const" variables declared inside a curly brackets be
//     accessed from outside the block?`,
//     answerText: "no",
//     answerOptions: [
//       { answerText: "Yes", isCorrect: false },
//       { answerText: "Only let", isCorrect: false },
//       { answerText: "Only const", isCorrect: false },
//       { answerText: "No", isCorrect: true },
//     ],
//   },
//   variables: {
//     typeQuestion: "Variables",
//     questionText: `What type of variable can be updated, but can't be re-declared into
//     the scope?`,
//     answerText: "let",
//     answerOptions: [
//       { answerText: "Const", isCorrect: false },
//       { answerText: "Let", isCorrect: true },
//       { answerText: "Var", isCorrect: false },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `What is OOP?`,
//     answerText:
//       "It's a computer programming model that organizes software design around data or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.",
//     answerOptions: [
//       {
//         answerText:
//           "It's a computer programming model that organizes software design around data or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.",
//         isCorrect: true,
//       },
//       {
//         answerText:
//           "It's a language that organizes software design around data or objects, rather than functions and logic.",
//         isCorrect: false,
//       },
//       {
//         answerText: "OOP focuses on the logic to manipulate objects.",
//         isCorrect: false,
//       },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `What is encapsulation in OOP?`,
//     answerText:
//       "Encapsulation is binding of data and methods together and keep both safe from outside.",
//     answerOptions: [
//       {
//         answerText:
//           "It means that the object's internal state is kept private, so it can only be accessed by the object's own methods and other object's methods.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Encapsulation is binding of data and methods together and keep both safe from outside.",
//         isCorrect: true,
//       },
//       {
//         answerText:
//           "Encapsulation is hiding information, so each object should only reveal operations that are relevant for the other objects.",
//         isCorrect: false,
//       },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `What is inheritance in OOP?`,
//     answerText:
//       "Inheritance enables new objects to take on the properties of existing objects and classes to reuse the code from other classes.",
//     answerOptions: [
//       {
//         answerText:
//           "Inheritance enables new objects to take on the properties of existing objects, but not classes to reuse the code from other classes.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Inheritance is a pillar of OOP that can't force a more thorough data analysis, reduces development time and ensures a higher level of accuracy.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Inheritance enables new objects to take on the properties of existing objects and classes to reuse the code from other classes.",
//         isCorrect: true,
//       },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `What is abstraction in OOP?`,
//     answerText:
//       "Abstraction is hiding information that are unnecessary to show. It means that each object should only expose operations that are relevant for the other objects.",
//     answerOptions: [
//       {
//         answerText:
//           "Abstraction is binding of data and methods together and keep both safe from outside interference and misuse.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Abstraction is hiding information that are unnecessary to show. It means that each object should only expose operations that are relevant for the other objects.",
//         isCorrect: true,
//       },
//       {
//         answerText:
//           "Abstraction enables new objects to take on the properties of existing objects.",
//         isCorrect: false,
//       },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `What is polymorphism in OOP?`,
//     answerText:
//       "Polymorphism is the ability to redefine methods for derived classes. It's when a method has the same name but a different implementation in different classes.",
//     answerOptions: [
//       {
//         answerText:
//           "Polymorphism is the ability to redefine methods for derived classes. It's when a method has the same name but a different implementation in different classes.",
//         isCorrect: true,
//       },
//       {
//         answerText:
//           "Polymorphism gives a way to use a class exactly like its parent, so each child class can not keep its own methods.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Polymorphism enables new objects to take on the properties of existing objects.",
//         isCorrect: false,
//       },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `The benefits of __ are reduce complexity + increase reusability.`,
//     answerText: "Encapsulation",
//     answerOptions: [
//       { answerText: "Encapsulation", isCorrect: true },
//       { answerText: "Abstraction", isCorrect: false },
//       { answerText: "Inheritance", isCorrect: false },
//       { answerText: "Polymorphism", isCorrect: false },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `The benefits of __ are reduce complexity + isolate impact of changes.`,
//     answerText: "Abstraction",
//     answerOptions: [
//       { answerText: "Encapsulation", isCorrect: false },
//       { answerText: "Abstraction", isCorrect: true },
//       { answerText: "Inheritance", isCorrect: false },
//       { answerText: "Polymorphism", isCorrect: false },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `The benefits of __ are eliminate redundant code.`,
//     answerText: "Inheritance",
//     answerOptions: [
//       { answerText: "Encapsulation", isCorrect: false },
//       { answerText: "Abstraction", isCorrect: false },
//       { answerText: "Inheritance", isCorrect: true },
//       { answerText: "Polymorphism", isCorrect: false },
//     ],
//   },
//   oop: {
//     typeQuestion: "OOP",
//     questionText: `The benefits of __ are refactor ugly if/else and switch/case statements.`,
//     answerText: "Polymorphism",
//     answerOptions: [
//       { answerText: "Encapsulation", isCorrect: false },
//       { answerText: "Abstraction", isCorrect: false },
//       { answerText: "Inheritance", isCorrect: false },
//       { answerText: "Polymorphism", isCorrect: true },
//     ],
//   },
//   "Functional Programming": {
//     typeQuestion: "Functional Programming",
//     questionText: `What is Functional programming?`,
//     answerText:
//       "Functional programming is a style of programming where the solutions are simple, isolated functions, without side effects.",
//     answerOptions: [
//       {
//         answerText:
//           "Functional programming is a style of programming where the focus are the objects.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Functional programming is a style of programming where the solutions are simple, isolated functions, without side effects.",
//         isCorrect: true,
//       },
//     ],
//   },
//   "functional programming": {
//     typeQuestion: "Functional Programming",
//     questionText: `What is a callback function?`,
//     answerText:
//       "Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.",
//     answerOptions: [
//       {
//         answerText:
//           "The idea of callback functions is that functions can not be treated as values.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Callback functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.",
//         isCorrect: true,
//       },
//     ],
//   },
//   "functional programming": {
//     typeQuestion: "Functional Programming",
//     questionText: `What are first class functions?`,
//     answerText:
//       "First class functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
//     answerOptions: [
//       {
//         answerText:
//           "First class functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
//         isCorrect: true,
//       },
//       {
//         answerText:
//           "The idea of functions as first-class entities is that functions are also treated as values and used as data. In JavaScript, some of the functions are first class functions.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "First-class are the functions that are slipped or passed into another function to decide the invocation of that function.",
//         isCorrect: false,
//       },
//     ],
//   },
//   "functional programming": {
//     typeQuestion: "Functional Programming",
//     questionText: `What are higher order functions?`,
//     answerText:
//       "Higher order functions are functions that take a function as an argument, or return a function as a return value.",
//     answerOptions: [
//       {
//         answerText:
//           "Higher order functions are functions that take a function as an argument, or return a function as a return value.",
//         isCorrect: true,
//       },
//       {
//         answerText:
//           "Higher order functions are functions that can be assigned to a variable, passed into another function as a parameter, or returned from another function just like any other normal value.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Higher order functions are the functions that are slipped or passed into another function to decide the invocation of that function.",
//         isCorrect: false,
//       },
//     ],
//   },
//   "functional programming": {
//     typeQuestion: "Functional Programming",
//     questionText: `Mark the correct sentence.`,
//     answerText: "",
//     answerOptions: [
//       {
//         answerText:
//           "Any function that relies on a random number generator are pure.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Pure functions are predictable because the only thing they depend on is their input, and the only thing they do is return their output, with no side effects. With pure functions, the code is easier to test.",
//         isCorrect: true,
//       },
//       {
//         answerText:
//           "Referential Transparency means that functions do not rely on anything beyond their parameters and given the same parameters they can return different answers.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Using the splice method instead of slice helps to avoid any array-mutating side effects.",
//         isCorrect: false,
//       },
//     ],
//   },
//   "functional programming": {
//     typeQuestion: "Functional Programming",
//     questionText: `_ adds items to the end of the same array it is called on, which mutates that array._ offers a way to merge new items to the end of an array without any mutating side.`,
//     answerText: "push and concat",
//     answerOptions: [
//       {
//         answerText: "Unshift and join",
//         isCorrect: false,
//       },
//       {
//         answerText: "Shift and concat",
//         isCorrect: false,
//       },
//       {
//         answerText: "Push and join",
//         isCorrect: false,
//       },
//       {
//         answerText: "Push and concat",
//         isCorrect: true,
//       },
//     ],
//   },
//   "asynchronous programming": {
//     typeQuestion: "Asynchronous programming",
//     questionText: `Mark the correct sentence about Promises. `,
//     answerText:
//       "Promise is an object representing the current state of the operation (pending, fulfilled or rejected). This object is returned by an asynchronous function (e.g a API call) and it is a future unknown value.",
//     answerOptions: [
//       {
//         answerText:
//           "Promises have only two possible states: fulfilled or rejected.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "We can't have promises that allows us to write asynchronous code in a synchronous way.",
//         isCorrect: false,
//       },
//       {
//         answerText: "A promise is always a value that is known.",
//         isCorrect: false,
//       },
//       {
//         answerText:
//           "Promise is an object representing the current state of the operation (pending, fulfilled or rejected). This object is returned by an asynchronous function (e.g a API call) and it is a future unknown value.",
//         isCorrect: true,
//       },
//     ],
//   },
// };

app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/questions", (request, response) => {
  response.json(questions);
});

app.get("/api/questions/:subject", (request, response) => {
  const subjectQuestion = request.params.subject.toLowerCase();
  if (questions.subjectQuestion) {
    console.log("it exists");
    response.json(questions[subjectQuestion]);
  } else {
    console.log(subjectQuestion);
    console.log("it does not exist");
    response.json(questions);
  }
});

// app.get("/api/questions/:subject", (request, response) => {
//   const subjectQuestion = request.params.subject.toLowerCase();
//   if (questions[subjectQuestion]) {
//     console.log("it exists");
//     response.json(questions);
//   } else {
//     console.log("it does not exist");
//     response.json(questions);
//   }
// });

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on the PORT ${PORT}.`);
});
