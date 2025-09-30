
let a = b === 0 ? getValue() : getValue(); // Noncompliant


function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
  const arr = [1, 2, 3];
  if (x < 0) {
    arr[x] = 3;
  }
}

function CWE_628() { // TOO_MANY_ARGS
  function add(x, y) {
    return x + y;
  }
  const sum = add(1, 2, 3);
  console.log(sum);
}
