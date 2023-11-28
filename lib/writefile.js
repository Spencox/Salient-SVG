// import fs for file read/write
const fs = require('fs');

function writeToFile(svgXML) {
    const svgBody = 
`
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

${svgXML}

</svg>
`
    fs.writeFile('logo.svg', svgBody, (err) => err ? console.log(err) : console.log('Generated logo.svg'));
  }

  module.exports = writeToFile;