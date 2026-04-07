function runCode3() {
  alert("This is the 3rd question.");

  let n = parseInt(prompt("Enter the value of N: 1 ≤ N ≤ 10^6"));
  let k = parseInt(prompt("Enter the value of K: 2 ≤ K ≤ 9"));

  if (n < 1 || n > 1000000) {
    alert("Invalid Input");
    return;
  }
  if (k < 2 || k > 9) {
    alert("Invalid Input");
    return;
  }

  function palindrome(c) {
    let d = c;
    let rev = 0;
    while (c != 0) {
      let rem = c % 10;
      rev = rev * 10 + rem;
      c = Math.floor(c / 10);
    }
    if (rev === d) {
      return 1;
    } else {
      return -1;
    }
  }

  for (let i = 0; i < 100000; i++) {
    let s = n + i;
    if (palindrome(s) == 1) {
      if (Math.floor(s) % k === 0) {
        alert("The result is: " + i);
        break;
      }
    }
  }
}
