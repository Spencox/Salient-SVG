// import fs for file read/write
const fs = require('fs');

// import inquirer for terminal questions
const inquirer = require('inquirer');

// import helper functions
const hf = require('./lib/helpers')

// import shape classes
const Circle = require('./lib/circle');
const Rectangle = require('./lib/rectangle');
const Triangle = require('./lib/triangle');
const helpers = require('./lib/helpers');
const { log } = require('util');

// log design questions for users
const logoQuestions = [
    // three letters on logo
    {
        type: 'input',
        message: 'Enter three characters for logo:',
        name: 'logoText',
        transformer: (input) => {
          return input.toUpperCase();
        },
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
        transformer: (input) => {
          return input.toLowerCase();
        },
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
        transformer: (input) => {
          return input.toLowerCase();
        },
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
      // start questions for logo input    
      inquirer.prompt(logoQuestions).then((logoAnswers) => {
        let svgXML = ''
        switch(logoAnswers.shape) {
          case 'Circle':
            const newCircle = new Circle(150, 100, 90, logoAnswers.shapeColor).render()
            var logo = helpers.svgText(logoAnswers.logoText.toUpperCase(), logoAnswers.textColor);
            svgXML = `
${newCircle}
${logo}
            `
            break
          case 'Square':
            const newSquare = new Rectangle(60, 10, 180, 180, logoAnswers.shapeColor).render()
            var logo = helpers.svgText(logoAnswers.logoText.toUpperCase(), logoAnswers.textColor);
            svgXML = `
${newSquare}
${logo}
            `
            console.log(svgXML);
            break
          case 'Triangle':
            console.log('Triangle')
            //const newCircle = new Circle()
        }    
      }).catch(console.log.bind(console));;
  }
  
  // Function call to initialize app
  init();
  