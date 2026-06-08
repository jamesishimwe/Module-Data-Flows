const convertToOldRoman = require("./convert-to-old-roman");;
function convertToNewRoman(n) {

let numeralNew = convertToOldRoman(n).match(/(.)\1*/g);
if(numeralNew === null || numeralNew === undefined || numeralNew === '' || isNaN(Number(n))) return "";
for(let i=0;i<numeralNew.length;i++)
  {   if(numeralNew[i] === "L" && numeralNew[i+1] === "XXXX") {numeralNew[i] = "XC";numeralNew[i+1]  = "";}
  else if(numeralNew[i] === "XXXX" && numeralNew[i-1]!="L") numeralNew[i] = "XL";
   else if(numeralNew[i] === "IIII") numeralNew[i] = "IV"; 
    else if(numeralNew[i] === "CCCC") numeralNew[i] = "CD";
    else if(numeralNew[i] === "V" && numeralNew[i+1] === "IIII") {numeralNew[i] = "IX";numeralNew[i+1]  = "";}
    else if(numeralNew[i] === "D" && numeralNew[i+1] === "CCCC") {numeralNew[i] = "CM";numeralNew[i+1]  = "";}

     
}
    
        return numeralNew.join('');
    }
module.exports = convertToNewRoman;
