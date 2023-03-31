// include packages needed for application

const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("./lib/shapes");

// array of questions for user input

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Let's create a logo! Please choose up to three characters to include in your logo."
    },
    {
        type: "input",
        name: "text-color",
        message: "Please choose a color for the text in your logo by entering the color's keyword or hexadecimal number."
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like to include in your logo?",
        choices: ["Circle", "Triangle", "Square"]

    },
    {
        type: "input",
        name: "shape-color",
        message: "Please choose a color for the shape in your logo by entering the color's keyword or hexadecimal number.",
    },
];

