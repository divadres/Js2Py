// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-9-4
description: >
    Array.prototype.reduceRight doesn't consider unvisited deleted
    elements when Array.length is decreased
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(prevVal, curVal, idx, obj)
  {
    arr.length = 2;
    return prevVal + curVal;
  }

  var arr = [1,2,3,4,5];
  if(arr.reduceRight(callbackfn) === 12 )
    return true;  
  
 }
runTestCase(testcase);
