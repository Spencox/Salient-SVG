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
    }
}


