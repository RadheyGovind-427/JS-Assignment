function runCode2() {
  alert("This is the 2nd question.");

  let n = parseInt(prompt("Enter the value of n: "));
  let ssv = parseInt(prompt("Enter the student seed value: "));

  for (let i = 0; i < 3; i++) {
    if (n % 2 == 0) {
      n = Math.floor(n / 2) + ssv;
    } else {
      n = n * 3 - ssv;
    }
  }
  if (n >= 100 && n <= 999) {
    let x = Math.floor(n / 10) % 10;
    if (x == ssv) {
      alert("YES," + n);
    } else {
      alert("NO");
    }
  } else {
    alert("NO");
  }
}
