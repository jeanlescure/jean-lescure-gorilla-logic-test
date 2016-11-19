// INSTRUCTIONS
// ============
// Create a new `npm` package with the naming convention '[your-name]-[your-lastname]-gorilla-logic-test'.
// The package should run a file called `main.js` on `npm start`.
// The package should have `lodash` within its dependencies.
// When run using `npm start`, the package should be allowed to receive an indefinite number of arguments and sort them in descending order using `lodash` and it should print the resulting array in the terminal.
// Within `main.js`, write a function called `my_own_original_function`, impress us with your JS skills, the function can be as simple or as complex as you wish, but it *must* return a string.
// If we run the command `npm run moof` we should get the resulting string of `my_own_original_function`.

// ============
// DEPENDENCIES
// ============

var clc = require('cli-color');
var _ = require('lodash');

// ============
// ENTRY POINTS
// ============

// If we run the command `npm run moof` we should get the resulting string of `my_own_original_function`.
if (process.argv[2] === "prℹnt-moof") {
  console.log(my_own_original_function());

  process.exit();
}

// Otherwise, when run using `npm start`, the package should be allowed to receive an indefinite number of arguments and sort them in descending order using `lodash`
console.log(reverse_sort(process.argv));


// =========
// FUNCTIONS
// =========

function reverse_sort(args){
  var filtered_args = _.filter(args, function(el, idx){
    return idx > 1;
  });

  var sorted_args = _.sortBy(filtered_args, function(s){
    return s;
  }).reverse();

  return sorted_args;
}

// Inspired by the `brain fuck` programming language, the following function takes the index based code `gcode` and outputs a secret image to the terminal. 
function my_own_original_function() {
  var gcode = '>+>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->++++>--->>>>>>>>>>>>+>>>>>>>>->>>>>>>>>>>>+++>--->>>>>>>>>>+>>>>>>>>>>>>->>>>>>>>>>+++>--->>>>>>>>>+>>>>>>>>>>>>>>->>>>>>>>>+++>--->>>>>>>>+>>>>>>>>>>>>>>>->>>>>>>>>+++>--->>>>>>>>+>>>>>>>>>>>>>>>>->>>>>>>>+++>--->>>>>>>>+>>+>>>>>>>>>>>->>>>->>>>>>>+++>--->>>>>>>>+>+>>>>>>>>>>>>->>>>->>>>>>>+++>--->>>>>>>+>>+>>->>+>>>>->>+>>>->>->>>>>>>>+++>--->>>>>>+>>+>>>>>>>>>>>>>>->>>->>>>>>>+++>--->>>>>>+>>+>>>>>->+>>->+>>>>>->>>->>>>>>>+++>--->>>>>>>+>>+>>>>>>>>>>>>->>>->>>>>>>>+++>--->>>>>>>>+>>+>>>>>>>>>>->>>+>>>-->>>>>>+++>--->>>>>>++>>>->>>>>>>>>>>>>+>>>>>-->>>>>+++>--->>>>>++>>>>>>>>>>>>>>>>>>>>>>>>-->>>+++>---->+>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->++++>';

  var xarr = ['clear','bgWhiteBright','bgBlack','bgWhite','newline'];
  var idx = 0;

  var return_string = '';

  gcode.split('').map(function(z){
    if (z === '>'){
      switch(xarr[idx]) {
        case 'clear':
          return_string += ' ';
          break;
        case 'newline':
          return_string += "\n";
          break;
        default:
          return_string += clc[xarr[idx]](' ');
      }
    }
    if (z === '+') idx++;
    if (z === '-') idx--;
  });

  return return_string;
}