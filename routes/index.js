'use strict'
var express = require('express');
var router = express.Router();


import { dogSay, catSay } from './testEs6Export'; //导出了 export 方法 
import m from './testEs6Export';  //导出了 export default 

import * as testModule from './testEs6Export'; //* as export集合成对象导出



/* GET home page. */
router.get('/', function(req, res, next) {
  dogSay();
  catSay();
  console.log(m);
  testModule.dogSay();
  console.log(testModule.m); // undefined , 因为  as 导出是 把 零散的 export 聚集在一起作为一个对象，而export default不能被这么导出的。
  console.log('test git rebase');
  res.send('恭喜你，成功验证');
});

module.exports = router;
