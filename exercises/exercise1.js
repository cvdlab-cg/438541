var i = 0; 
var j = 0; 
var matrix = ''; 
var line = ''; 
for(j=1; j<=10; j++) { 
 line = ''; 
 for(i=1; i<=10; i++) { 
  line = line + i*j + ' '; 
 } 
 matrix = matrix + line + '\n'; 
} 
console.log(matrix);
