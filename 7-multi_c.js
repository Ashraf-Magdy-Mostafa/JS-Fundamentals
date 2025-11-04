const args = process.argv[2];
const isText = isNaN(args); //

if (args) {
  if (isText) {
    console.log("Missing number of occurrences");
  } else if (isText === false) {
    let i = 0;
    while (i < args) {
      console.log("C is fun");
      i++;
    }
  }
}
