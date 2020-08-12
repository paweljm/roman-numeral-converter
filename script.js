  const NUMERALS = [
    {value: 1000, numeral:'M'},
    {value: 900, numeral:'CM'},
    {value: 500, numeral:'D'},
    {value: 400, numeral:'CD'},
    {value: 100, numeral:'C'},
    {value: 90, numeral:'XC'},
    {value: 50, numeral:'L'},
    {value: 40, numeral:'XL'},
    {value: 10, numeral:'X'},
    {value: 9, numeral:'IX'},
    {value: 5, numeral:'V'},
    {value: 4, numeral:'IV'},
    {value: 1, numeral:'I'},];
    function convertToRoman(num) {
      let finalArr = [];
      for (let i = 0 ;i<NUMERALS.length;i++){
        while (num+1>NUMERALS[i].value) {
          finalArr.push(NUMERALS[i].numeral);
          num= num - NUMERALS[i].value;
        }
      }
      let finalStr = finalArr.toString();
      finalStr = finalStr.replace(/,/g,'')
      console.log(finalStr);
     return finalStr;
    }
    
    convertToRoman(36);
    convertToRoman(3999);    