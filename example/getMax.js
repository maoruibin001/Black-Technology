/**
 * Created by lenovo on 2017/6/21.
 */
// function sort(arr, key, direct) {
//     if (!(arr instanceof Array)) return undefined;
//
//     if (arr.length === 0) return arr;
//     var tostring = Object.prototype.toString,
//         _key = key || 'value';
//     if (typeof arr[0] === 'object') {
//         //修改Object.prototype.toString返回排序的元素的key值。
//         Object.prototype.toString = function() {
//             return Number(this[_key]);
//         }
//     } else {
//         direct = key;
//     }
//
//     var direct = Number(direct) <= 0 ? -1 : 1;
//     arr.sort(function(v1, v2) {
//         return direct * (v1 - v2);
//     });
//     //重置Object.prototype.toString为初始值（必须）。
//     Object.prototype.toString = tostring;
//     return arr;
// }

var scoreStr = "小2明:87;小花:81;小红:97;小1:76;小99:74;小2:94;小西:90;小伍:76;小迪:64;小曼:76";

var tostring = Object.prototype.toString;
Object.prototype.toString = function() {
    return Number(this.value);
};
scoreStr = scoreStr.replace(/:/g,'",value:').replace(/;/g,'},{name:"');
var score=eval(("[{name:\""+scoreStr+"}]"));

score.sort(function(v1, v2) {
    return (v1 - v2);
});

var max = score[score.length - 1];

var reducer = function add(sumSoFar, item) { return sumSoFar + item; };

// do the job
var total = score.reduce(reducer, 0);
var avg = total / score.length;
console.log(total);

Object.prototype.toString = tostring;


console.log(max.name);//最高成绩
console.log(avg);//平均分