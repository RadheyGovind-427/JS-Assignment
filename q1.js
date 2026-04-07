function runCode1() {
  alert("This is the 1st question.");

  let l = parseInt(prompt("Enter the lower limit: "));
  let r = parseInt(prompt("Enter the upper limit: "));
  let k = parseInt(prompt("Enter the value of  k: "));

  let total = 0;
  function prime_check(x) {
    if (x <= 1) {
      return -1;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i == 0) {
        return -1;
      }
    }
    return 1;
  }

  function num_sum(y) {
    let sum = 0;
    while (y != 0) {
      let rem = y % 10;
      sum = sum + rem;
      y = Math.floor(y / 10);
    }
    return sum;
  }

  function contain_zero(y) {
    while (y !== 0) {
      let rem = y % 10;

      if (rem === 0) {
        return -1;
      }

      y = Math.floor(y / 10);
    }

    return 1;
  }

  for (var i = l; i <= r; i++) {
    if (i % k == 0) {
      let f = num_sum(i);
      if (prime_check(f) === 1) {
        if (contain_zero(i) === 1) total++;
      }
    }
  }

  alert("The answer is: " + total);
}
