function convertToOldRoman(n) {
    
    if(n === "1") return "I";
    else if(n === "5") return 'V';
    else if(n === "10") return 'X';
    else if(n === "50") return 'L';
    else if(n === "100") return 'C';
    else if(n === "500") return 'D';
    else if(n === "1000") return 'M';
    else {
        let number = Number(n);
        let numerals = {};
        while(number!=0)
        {
            if(number>1000)
                {
                    number = number/1000;
                    numerals.M = Math.trunc(number);
                    number = number * 1000 - 1000*numerals.M;
                    
                    console.log(number);
                } 
                else if(number>=500 && number<1000)
                {
                    number = number/500;
                    numerals.D = Math.trunc(number);
                    number = number *500 -500*numerals.D;
                    
                    console.log(number);
                }
               else if(number>=100 && number<500)
                {
                    number = number/100;
                    numerals.C = Math.trunc(number);
                    number = number *100 - 100*numerals.C;
                    
                    console.log(number);
                }
                 else if(number>=50 && number<100)
                {
                    number = number/50;
                    numerals.L = Math.trunc(number);
                    number = number * 50 - 50*numerals.L;
                    
                    console.log(number);
                }
                else if(number>=10 && number<50)
                {
                    number = number/10;
                    numerals.X = Math.trunc(number);
                    number = number *10 - numerals.X*10;
                    
                    console.log(number);
                }
                 else if(number>=5 && number<10)
                {
                    number = number/5;
                    numerals.V = Math.trunc(number);
                    number = number * 5 - numerals.V*5;
                    
                    console.log(number);
                }
                 else{


                    console.log(number);
                    numerals.I = number;
                    number = 0;
                 }

                console.log(numerals);

        }
        let numeral = "";
        for(num in numerals)
        {
        if(num === "M"){
            for(let i=0;i<numerals.M;i++) numeral +="M";
        } 
         if(num === "D"){
            for(let i=0;i<numerals.D;i++) numeral +="D";
        }
        if(num === "C"){
            for(let i=0;i<numerals.C;i++) numeral +="C";
        } 
        if(num === "L"){
            for(let i=0;i<numerals.L;i++) numeral +="L";
        }
        if(num === "X"){
            for(let i=0;i<numerals.X;i++) numeral +="X";
        }
        if(num === "V"){
            for(let i=0;i<numerals.V;i++) numeral +="V";
        }
        if(num === "I"){
            for(let i=0;i<numerals.I;i++) numeral +="I";
        }
        }
        return numeral;
    }
}
convertToOldRoman("5301");
module.exports = convertToOldRoman;
