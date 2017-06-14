/**
 * Created by lenovo on 2017/6/7.
 */
const expect = require('chai').expect;

const tostring = require('../src/tostring');
const pad = require('../src/pad');

describe('express pad function', function() {
    it("pad('aa', 0, 'tabca') should be return 'aa'", function() {
        expect(pad('aa', 0, 'tabca')).to.be.equal('aa');
    });

    it("pad('aa', 7, 'tabc') should be return ttabcaa", function() {
        expect(pad('aa', 7, 'tabc')).to.be.equal('ttabcaa');
    });
    it("pad('aa', 7, 't') should be return tttttaa", function() {
        expect(pad('aa', 7, 't')).to.be.equal('tttttaa');
    });
    it("pad('aa', 10, 'taca') should be return tacatacaaa", function() {
        expect(pad('aa', 10, 'taca')).to.be.equal('tacatacaaa');
    });
    it("pad('aa', 7, 't','r') should be return aarrrrr", function() {
        expect(pad('aa', 7, 't','r')).to.be.equal('aattttt');
    });
});
