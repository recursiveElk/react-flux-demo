"use strict";
module.exports = {
    // Capitalize First Letter of each word in a String
    capitalize: function(myString) {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    },

    // Check if a number exists inside a given String
    hasNumber: function(myString) {
        return /\d/.test(myString);
    }
};