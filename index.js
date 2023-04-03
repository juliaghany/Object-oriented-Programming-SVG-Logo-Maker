// include packages needed for application

const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("./lib/shapes.js");

// array of questions for user input

inquirer
    .prompt([
        {
            type: "input",
            name: "characters",
            message: "Let's create a logo! Please choose up to 3 characters to include in your logo."
        },
        {
            type: "input",
            name: "text-color",
            message: "Please choose a color for the text in your logo by entering the color's keyword or a hexadecimal number."
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
            message: "Please choose a color for the shape in your logo by entering the color's keyword or a hexadecimal number.",
        },
    ])
    .then(())

