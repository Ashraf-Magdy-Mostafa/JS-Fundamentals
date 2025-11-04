const args = process.argv[2];
let i = 0;
if (isNaN(args)) {
  console.log("Missing size");
} else if (!isNaN(args) > 0) {
  while (i < args) {
    console.log("x".repeat(args));
    i++;
  }
}
