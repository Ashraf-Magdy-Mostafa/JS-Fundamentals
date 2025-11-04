const arg = process.argv.slice(2);

switch (arg.length) {
  case 0:
    console.log("No Args");
    break;
  case 1:
    console.log("Argument found");
    break;
  default:
    console.log("Arguments found");
    break;
}
