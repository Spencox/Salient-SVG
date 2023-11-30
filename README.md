# Salient-SVG

## Description


This program is a command-line tool designed to swiftly generate scalable SVG logos for web design. Motivated by the need for a more efficient and accessible logo creation process, the project goes beyond mere practicality, aiming to empower developers and designers with a user-friendly, lightweight solution. By eliminating the complexities associated with traditional design software, salient_svg addresses the challenge of quick logo generation directly from the command line. The development journey enriched our understanding of command-line interfaces, SVG generation, and user input handling, emphasizing the importance of creating tools that are both simple and powerful. The tool incorporates a visually engaging ASCII art on startup, enhancing the overall user experience. A typical usage example involves entering characters, selecting colors for text and shape, and receiving the generated logo.svg file. 

## Installation
Clone the repository with git clone https://github.com/Spencox/Salient-SVG.git, navigate to the project directory using cd Salient-SVG, install dependencies with npm install, run the program with node index.js or npm start, answer the prompts to provide shape and logo information, the .svg logo will be written to the project directory. 

## Usage

Location in Github Repository:

https://github.com/Spencox/Universal-Code-Quiz.git

Video:

[Program Demonstration](https://drive.google.com/file/d/1dm9m3qJokdRwUjbhBjvhUIOI12P0hdqa/view?usp=drive_link)

Very straight forward command line use with error checking. Ex. 

```
$ npm start

? Enter three characters for logo: FUN
? What color do you want the text (Color Keyword or Hexadecimal Number): blue
? Select shape for logo: Circle
? What color do you want the shape (Color Keyword or Hexadecimal Number): red

Generated logo.svg
```
A ready to go SVG called logo.svg is generated in main file directory.

## Examples

![Logo Example 1](examples/logo_circle.svg) ![Logo Example 2](examples/logo_triangle.svg) ![Logo Example 3](examples/logo_square.svg)

## Tests
There is a 4 suites of tests for this program. There are 20 tests using jest.js that will test class creation of the Shape, Circle, Triangle, and Rectangle classes. To run test use the command `npm test`


## Credits

is-valid-css-color. (n.d.). Retrieved from https://www.npmjs.com/package/is-valid-css-color
inquirer package on npm:

inquirer. (n.d.). Retrieved from https://www.npmjs.com/package/inquirer
Reddit post on "Why some people use underscore before variable?":

Reddit. (n.d.). Why some people use underscore before variable? Retrieved from https://www.reddit.com/r/learnjavascript/comments/x8n0hh/why_some_people_use_underscore_before_variable/?rdt=56832
Mozilla Developer Network - SVG Tutorial on Basic Shapes:

Mozilla Developer Network. (n.d.). SVG Tutorial - Basic Shapes. Retrieved from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
Mozilla Developer Network - SVG Tutorial on Texts:

Mozilla Developer Network. (n.d.). SVG Tutorial - Texts. Retrieved from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts
Mozilla Developer Network - JavaScript get method:

Mozilla Developer Network. (n.d.). String.prototype.trim(). Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
Mozilla Developer Network - JavaScript set method:

Mozilla Developer Network. (n.d.). String.prototype.replace(). Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
Blog post on promises titled "We have a problem with promises":

Deadlybyte. (n.d.). Easter Egg Hunt, Anyone? Add ASCII Art to the Console Log. Retrieved from https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
Mozilla Developer Network - SVG Tutorial - Getting Started:

Mozilla Developer Network. (n.d.). SVG Tutorial - Getting Started. Retrieved from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
Mozilla Developer Network - JavaScript arguments object:

Mozilla Developer Network. (n.d.). arguments. Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
ASCII Art generated using TextKool:

TextKool. (n.d.). ASCII Art Generator. Retrieved from https://textkool.com/en/ascii-art-generator?hl=default&vl=default&font=Pagga&text=Salient-SVG


## Questions
GitHub Repo: https://github.com/Spencox/Salient-SVG  
Email: spencox@gmail.com

