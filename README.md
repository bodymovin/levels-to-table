# levels-to-table
A module for converting image level values to an array of output values  

usage:

`var histogram = require('histogram');
var table = levelsToTable(inputBlack, inputWhite, gamma, outputBlack, outputWhite);`

where inputBlack, inputWhite, outputBlack, outputWhite values go from 0 to 255, although it supports any range and even negative values.  
Gamma is an exponential value, so set it to 1 for a linear transformation.  
The function for each value is expressed like so:  
*R' = outputBlack + (outputWhite - outputBlack)  Math.pow((R - inputBlack) / (inputWhite - inputBlack), 1 / gamma)*