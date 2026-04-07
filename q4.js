function runCode4() {
  alert("This is the 4th question.");
  alert(
    "Constraints: 1 ≤ base ≤ 1000, 0 ≤ distance ≤ 100, 0 ≤ minutesLate ≤ 120, 0 ≤seed ≤ 9",
  );
  let input = prompt(
    "Enter base, distance, minutesLate, and seed separated by space: ",
  );
  let parts = input.split(" ");

  let base = parseInt(parts[0]);
  let distance = parseInt(parts[1]);
  let minuteslate = parseInt(parts[2]);
  let seed = parseInt(parts[3]);

  //   alert(parts);

  let fare = base + 7 * distance;
  if (minuteslate > 15) fare += 20;
  if (distance > 10) fare += 0.1 * fare;
  if (seed % 2 === 0) {
    fare += seed;
  } else {
    fare -= seed;
  }
  let rem = fare % 5;
  if (rem == 1 || rem == 2) {
    fare -= rem;
  } else if (rem == 3) {
    fare += 2;
  } else if (rem == 4) {
    fare += 1;
  }

  alert("The result is: " + fare);
}
