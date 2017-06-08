/**
 * Created by lenovo on 2017/6/7.
 */
const tostring = require('../src/tostring');
const expect = require('chai').expect;

describe('sort not arr', function() {
    it('{} call sort return undefined', function() {
        expect(tostring.sort({})).to.be.equal(undefined);
    });

    it('undefined call sort return undefined', function() {
        expect(tostring.sort()).to.be.equal(undefined);
    });
});

describe('sort arr base type', function() {
    it('call sort 1 arguments should be return small to large', function() {
        expect(tostring.sort([5, 3, 9, 1, 7])).to.deep.equal([1, 3, 5, 7, 9]);
    });
    it('call sort 1 arguments empty arr should be return empty arr', function() {
        expect(tostring.sort([])).to.deep.equal([]);
    });
    it('call sort 2 arguments and secend argument gt 0 should be return small to large', function() {
        expect(tostring.sort([5, 3, 9, 1, 7])).to.deep.equal([1, 3, 5, 7, 9])
    });
    it('call sort 2 arguments and secend argument lt  0 should be return large to small', function() {
        expect(tostring.sort([5, 3, 9, 1, 7], -1)).to.deep.equal([9, 7, 5, 3, 1])
    });
    // it('call sort 2 arguments and secend argument eq  0 should be return large to small', function() {
    //     expect(tostring.sort([5, 3, 9, 1, 7], 0)).to.deep.equal([9, 7, 5, 3, 1])
    // });
    // it('call sort 2 arguments and secend argument gt  0 should be return small to large', function() {
    //     expect(tostring.sort([5, 3, 9, 1, 7], 1)).to.deep.equal([1, 3, 5, 7, 9])
    // });
});

describe('sort arr object type', function() {
    it('call sort 1 arguments should be return small to large', function() {
        expect(tostring.sort([{name: 'mao', value: 3}, {name: 'rui', value: 1}, {name: 'bin', value: 7}])).to.deep.equal([{ name: 'rui', value: 1 }, { name: 'mao', value: 3 }, { name: 'bin', value: 7 } ]);
        expect(tostring.sort([{name: 'mao', age: 3}, {name: 'rui', age: 1}, {name: 'bin', age: 7}])).to.deep.equal([{name: 'mao', age: 3}, {name: 'rui', age: 1}, {name: 'bin', age: 7}]);
    });
});


describe('getMaxOrMin not arr', function() {
    it('undefined or null or 0 or false should be return undefined', function() {
        expect(tostring.getMaxOrMin()).to.be.equal(undefined);
    });
    it('obj or func should be return undefined', function() {
        expect(tostring.getMaxOrMin({})).to.be.equal(undefined);
    });
});

describe('getMaxOrMin arr base type', function() {
    it('getMaxOrMin([]) should be return []', function() {
        expect(tostring.getMaxOrMin([])).to.deep.equal([]);
    });
    it('getMaxOrMin([2, 7, 5]) should be return 7', function() {
        expect(tostring.getMaxOrMin([2, 7, 5])).to.be.equal(7);
    });
    it('getMaxOrMin([2, 7, 5], -1) should be return 2', function() {
        expect(tostring.getMaxOrMin([2, 7, 5], -1)).to.be.equal(2);
    });
    it('getMaxOrMin([2, 7, 5], "min") should be return 2', function() {
        expect(tostring.getMaxOrMin([2, 7, 5], "min")).to.be.equal(2);
    });
});

describe('getMaxOrMin arr obj type', function() {
    it('getMaxOrMin([{}]) should be return NaN', function() {
        expect(tostring.getMaxOrMin([{}])).to.deep.equal(NaN);
    });
    it('getMaxOrMin([{"value": 20}, {"value": 30}]) should be return 30', function() {
        expect(tostring.getMaxOrMin([{"value": 20}, {"value": 30}])).to.be.equal(30);
    });
    it('getMaxOrMin([{"value": 20}, {"value": 30}], -1) should be return 20', function() {
        expect(tostring.getMaxOrMin([{"value": 20}, {"value": 30}], null, -1)).to.be.equal(20);
    });
    it('getMaxOrMin([{"age": 20}, {"age": 30}]) should be return NaN', function() {
        expect(tostring.getMaxOrMin([{"age": 20}, {"age": 30}])).to.deep.equal(NaN);
    });

    it('getMaxOrMin([{"age": 20}, {"age": 30}], "age") should be return 30', function() {
        expect(tostring.getMaxOrMin([{"age": 20}, {"age": 30}], "age")).to.be.equal(30);
    });

    it('getMaxOrMin([{"age": 20}, {"age": 30}], "age", -1) should be return 20', function() {
        expect(tostring.getMaxOrMin([{"age": 20}, {"age": 30}], "age", -1)).to.be.equal(20);
    });

    it('getMaxOrMin([{"age": 20}, {"age": 30}], "age", "min") should be return 20', function() {
        expect(tostring.getMaxOrMin([{"age": 20}, {"age": 30}], "age", "min")).to.be.equal(20);
    });
});