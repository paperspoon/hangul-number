'use strict';

var expect = require('chai').expect;
var hangulNumber = require('../../index');

describe('123 테스트', function(){
    var num = "123";
    var expected = '일백이십삼';
    var actual = hangulNumber.encode(num);
    it(num + ' => ' + actual , function(){
        expect(actual).to.equal(expected);
    })
});

describe('1234 테스트', function(){
    var num = "1234";
    var expected = '일천이백삼십사';
    var actual = hangulNumber.encode(num);
    it(num + ' => ' + actual , function(){
        expect(actual).to.equal(expected);
    })
});

describe('12345 테스트', function(){
    var num = "12345";
    var expected = '일만이천삼백사십오';
    var actual = hangulNumber.encode(num);
    it(num + ' => ' + actual , function(){
        expect(actual).to.equal(expected);
    })
});

describe('123456 테스트', function(){
    var num = "123456";
    var expected = '일십이만삼천사백오십육';
    var actual = hangulNumber.encode(num);
    it(num + ' => ' + actual , function(){
        expect(actual).to.equal(expected);
    })
});


describe('100 테스트', function(){
    var num = 100;
    var expected = '100';
    var actual = hangulNumber.thousandsSeparate(num);
    it(num + ' => ' + actual , function(){
        expect(actual).to.equal(expected);
    })
});

describe('1000 테스트', function(){
    var num = 1000;
    var expected = '1,000';
    var actual = hangulNumber.thousandsSeparate(num);
    it(num + ' => ' + actual , function(){
        expect(actual).to.equal(expected);
    })
});


describe('1000000 테스트', function(){
    var num = 1000000;
    var expected = '1,000,000';
    var actual = hangulNumber.thousandsSeparate(num);
    it(num + ' => ' + actual , function(){
        expect(actual).to.equal(expected);
    })
});