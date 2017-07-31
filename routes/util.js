'use strict'
let a = 100;

console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}


exports.a = 200; //这里帮 module.exports 的内容给改成 {a : 200}

exports = '指向其他内存区'; //辛辛苦苦各种操作数据，这里把exports的指向指走
