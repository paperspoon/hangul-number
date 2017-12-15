'use strict';

const numbers = ['', '일','이','삼', '사', '오', '육', '칠', '팔', '구'];
const smallTypes = ['', '십', '백', '천'];
const bigTypes = ['', '만', '억', '조', '경'];

function thousandsSeparate(num) {
    let arr = new String(num).split('');
    let result = arr.map((o,i) =>{
        if ( i != 0 && (arr.length - i) %3 === 0) return ','+o;
        else return o;
    })
    return result.join('');
}

function encode(param) {
     // 1. 트림
     param = String(param).trim();

     // 2. 숫자만 남김
     param = param.replace(/[^0-9]/g, '');

     // 3. 남은게 없다면 없는대로.. 
     if (param === '') return '';

     // param 456

     let resultArray = param.split('').map((o, i, a) => {

         let result = '';

         let num = parseInt(o);

         result += numbers[parseInt(o)];

         let division = Math.floor((a.length - 1 - i) / 4);

         let rest = ((a.length - 1) - i) % 4;

         result += smallTypes[rest];
         if (rest == 0) result += bigTypes[division];

         return result;
     });

     return resultArray.join('');
}

// function decode(param) {
// 향후.. 
// }

module.exports = {
    encode: encode,
    thousandsSeparate: thousandsSeparate
}
