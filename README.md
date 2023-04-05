
# Object-oriented Programming: SVG Logo Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Link to demonstration video: 

## Description 

My motivation for this project was to learn how to create a command line application that dynamically generates a logo and saves it as an SVG file based on user's input using the inquirer package. 
  
I built this project to gain more experience with object-oriented programming and creating command line applications. I also built this project so that other developers can generate a simple logo for their projects without having to pay a graphic designer to create it for them. Spending money on a graphic designer to create a simple logo is the problem that this application solves. 

This application will ask the user to include information such as: what three characters they'd like to include in their logo, what color they'd like the text of their logo to be, what shape (circle, triangle, or square) they'd like their logo to have, and what color they'd like their shape to be. 

I want to mention here that I made the mistake of not reading all of the requirements for this challenge before coding. You will notice that the code that I wrote in the earlier commits did not follow the guidelines for this challenge, so I had to revise my code to meet those requirements. 

## Table Of Contents 
- [Installation](#installation)<br>
- [Usage](#usage)<br>
- [License](#license)<br>
- [Credits](#credits)<br>


## Installation

In order to use this application, you will need to install the following programs on your computer: 

- [Visual Studio Code](https://code.visualstudio.com/) 
- [Node.js](https://nodejs.org/en) 
- [Git Bash](https://gitforwindows.org/)
- [Jest](https://www.npmjs.com/package/jest)


Once you've completed installing the above programs onto your computer, initialize the application following these steps:

1. Follow the instructions on this webpage to [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
   
2. Once you've cloned this repository and are in the correct directory, in the command line use the command "code ."; this will open Visual Studio Code, which is where you will view your SVG file. 
   
3. Next, you'll want to open GitBash. In the command line, use the command "npm init -y" to install Node Package Manager.
   
4. In the command line, use the command "npm i inquirer@8.2.4" to install the inquirer package.

5. If you would like to test this code yourself: in the command line, use the command "npm i jest" to install the JavaScript testing framework "Jest". Once you've done this, you can use the command "npm run test" to see that is passes. If you receive an error that states "No test specified", you will need to go into the package.json folder and manually include it on line 15. It will look like this: "scripts": {"test": "jest"}. 

## Usage

Now that you've installed the necessary programs and Node.js packages, follow these steps to use this application: 

1. In the command line, make sure that you are in the correct directory and use the command "node index" to initialize the application. 
   
2. The application will begin asking for your input; this is the information that the application will use to generate the SVG file.
   
3. Once you've gone through every prompt, go back to Visual Studio Code and find the "logo.svg" file. To preview your logo within VS (Visual Studio) Code, you will have to install an extension for SVG. I will walk-through how to do this in my demonstration video. If you'd like to view your logo within the browser, you can right-click on the logo.svg file and click "Copy Path". Then, you can paste what you've copied into the search bar of your browser and view your logo that way. 
   
4. Once you're ready to save your SVG file, go to the top left corner in Visual Studio Code and select the option "Save as" and save the file to the folder of your choice.

## License 

This application is covered under the [MIT License](https://opensource.org/license/mit/).

## Credits

- My tutor, Alex Gonzalez, helped me optimizie my code by condensing the code in my shapes.js file. He also helped me with moving my conditional statement from my shapes.js file to my index.js file on lines 42-47. He helped me revise my Shape class in the shapes.js file to include more paramaters (text and textColor). He also helped me remove the generateLogo function I created, and instead we created a renderSVG function inside of the Shape class to accomplish the same goal. After making these changes, he helped me revise my index.js file so that it still functioned the way it had before the changes. He also helped me center my SVG square element.

- A learning assistant from AskBCS (username: dgaither) helped me figure out how to export and import multiple functions from one file. 

- I referenced Module 10 Activity 08 to create the Shape class constructor and set up the Circle, Triangle, and Square to inherit shape color, text, and text color from it. 

- I referenced Module 10 Activity 11 to set up the tests in the shapes.test.js file. I also referred to the guildelines for this module's challenge for writing lines 5-7, 13-15, and 21-23 in the shapes.test.js file. 

- I referenced this webpage to create my SVG file and shape SVG elements: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

- I used the Try It Yourself to figure out how create the triangle SVG element: https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon 

- I referenced this webpage to create a validate function to make sure the user is entering no less than one character and no more than three characters for the text for their logo:  https://www.npmjs.com/package/inquirer/v/8.2.4#questions 


## Questions

If you'd like to view more of my work, please visit my GitHub profile: [juliaghany](https://github.com/juliaghany)

If you have any questions about my work, you can reach me at: juliaghany@msn.com

