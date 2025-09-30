
function CWE_398() { // IDENTICAL_BRANCHES
  if (x >= 0) {
    y = x;
  } else {
    y = x;
  }
}

function CWE_476() { // NULL_POINTER
  let obj;
  let y = obj.x;
  console.log(y);
}

function CWE_480() { // BAD_BITWISE_OPERATOR
  let obj = null;
  if (obj & obj.prop) {
    console.log(obj.prop);
  }
}
