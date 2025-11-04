const args = process.argv;
const firstArg = Number(args[2]);
const secondArg = Number(args[3]);

function add(a, b) {
  console.log(a + b);
}

add(firstArg, secondArg);
