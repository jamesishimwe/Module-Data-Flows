function convertToNewRoman(n) {
    if(n === null || n===undefined || n==='' || isNaN(Number(n))) return "";
     if(n === "1") return "I";
}

module.exports = convertToNewRoman;
