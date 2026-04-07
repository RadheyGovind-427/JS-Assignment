function runCode6() {
  alert("This is the 6th question.");

  let a = parseInt(prompt("Enter the value of a: "));
  let b = parseInt(prompt("Enter the value of b: "));
  let c = parseInt(prompt("Enter the value of c: "));

  let score = 3 * a + b - 2 * c;
  if (score < 0) {
    score = 0;
  }
  if (a + b + c > 50) {
    score - +10;
  }
  if (score >= 60) {
    alert(score + ",PASS");
  } else {
    alert("FAIL");
  }
}
