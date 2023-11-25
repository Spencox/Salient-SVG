// import fs for file read/write
const fs = require('fs');

// import inquirer for terminal questions
const inquirer = require('inquirer');

// import helper functions
const hf = require('./lib/helpers')

  // log design questions for users
const logoQuestions = [
    // three letters on logo
    {
        type: 'input',
        message: 'Enter three characters for logo:',
        name: 'projectName',
        validate(answer) {
          if (answer.length < 1 || answer.length > 3) {
            return 'Must have at least 1 character but no more than 3';
          }
          return true;
        }
    },  
    // text color
    {
        type: 'input',
        message: 'What color do you want the text (Color Keyword or Hexadecimal Number):',
        name: 'textColor',
        validate(answer) {
            return hf.validateColor(answer) ? true : 'You have entered an invalid Color Keyword or Hexadecimal Number '
        } 
    },
    // drop down for shape
    {
        type: 'list',
        message: 'Select shape for logo',
        name: 'shape',
        choices: [
          new inquirer.Separator(' = Basic Shapes = '),
          {
            name: 'Circle'
          },
          {
            name: 'Triangle'
          },
          {
            name: 'Square'
          }
        ],
        validate(answer) {
          if (answer.length < 1) {
            return 'Must choose at least one shape';
          }
          return true;
        },
    },
    // color of shape
    {
        type: 'input',
        message: 'What color do you want the shape',
        name: 'shapeColor',
        validate(answer) {
            return hf.validateColor(answer) ? true : 'You have entered an invalid Color Keyword or Hexidimal Number '
        } 
    },
  ];

  // start log questions
  function init() {
    const programTitle = `Salient SVG`;
  console.log(programTitle);
  console.log(`The command line tool to quickly generate scalable .svg logos for web design.
    `);
    // get basic user data Project Name, GitHub Username, Email
    inquirer.prompt(logoQuestions).then((logoAnswers) => {
        console.log(logoAnswers);
    });
  }
  
  // Function call to initialize app
  init();
  