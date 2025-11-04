const args = process.argv[2];
const isText = isNaN(args);

isText ? console.log("Not a number") : console.log(`My number: ${args}`);
