// import color validator
const {
    isValidColorName,
    isValidHSL, // not used in example, but part of documentation 
    isValidRGB,
  } = require('is-valid-css-color');

module.exports = {
    validateColor(colorString) {
        if (isValidColorName(colorString)) {
            return true
        }else if (isValidRGB(colorString)) {
            return true
        }
        return false;   
    },

    svgText(text, color, shapeType) {
        if (shapeType === "Triangle") {
            return `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
        } else {
            return `<text x="150" y="125" font-size="75" text-anchor="middle" fill="${color}">${text}</text>`
        }
    }



}


