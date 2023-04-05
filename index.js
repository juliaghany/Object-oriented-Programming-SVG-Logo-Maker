// include packages needed for application

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle,Triangle,Square }  = require("./lib/shapes.js");

// array of questions for user input

const questions = [
    {
        type: "input",
        name: "text",
        message: "Let's create a logo! Please choose up to 3 characters to include in your logo."
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "Please choose a color for the shape in your logo by entering the color's keyword or a hexadecimal number.",
    },
];

// 
 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}

// 

function init() {
    inquirer.prompt(questions)
        .then(({shape,text,textColor,shapeColor}) => {
            if (shape === 'Circle') {
                svgShape = new Circle(shapeColor,text,textColor);
            } else if (shape === 'Triangle') {
                svgShape = new Triangle(shapeColor,text,textColor);
            } else {
                svgShape = new Square(shapeColor,text,textColor);
            }

        writeToFile("logo.svg", svgShape.renderSVG())
    })
}

init();


    