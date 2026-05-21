function convertToOldRoman(n) {
    if(n === "1") return "I";
    else if(n === "5") return 'V';
    else if(n === "10") return 'X';
    else if(n === "50") return 'L';
    else if(n === "100") return 'C';
    else if(n === "500") return 'D';
    else if(n === "1000") return 'M';

}

module.exports = convertToOldRoman;
