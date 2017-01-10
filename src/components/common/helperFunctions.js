"use strict";

// Capitalize First Letter of each word in a String
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};