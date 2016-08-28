'use strict';

var exportable = {};
exportable.printMsg = function() {
  console.log("This is a message from the demo package");
}
module.exports = exportable;