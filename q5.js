function runCode5() {
  alert("Constraints: 1 ≤ N ≤ 10^6, 0 ≤ seed ≤ 9");

  let n = parseInt(prompt("Enter the value of N: "));
  let seed = parseInt(prompt("Enter the value of seed: "));

  let sum = 0;
  let m = 1;
  while (sum < n) {
    if (m % (seed + 2) === 0) {
      m++;
    } else {
      sum += m;
      m++;
    }
  }
  alert("The final answers are: " + (m - 1) + "&" + sum);
}
