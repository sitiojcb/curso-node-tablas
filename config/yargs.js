const yargs = require("yargs");
// const argv = require("yargs").argv;
//video 36 agrega options a yargs
const argv = require("yargs")
  .options({
    n: {
      alias: "num",
      type: "number",
      demandOption: true,
      describe: "Tomo como base el num",
    },
    l: {
      alias: "listar",
      type: "boolean",
      demandOption: true,
      default: false,
      describe: "Si es true muestra la tabla en consola.",
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: true,
      default: 10,
      describe:
        "Muestra la tabla hasta el numero indicado, sino por defecto es hasta el 10.",
    },
  })
  .check((argv, options) => {
    // console.log("Yargs ", argv);
    if (isNaN(argv.n)) {
      throw "La base debe ser un numero ";
    }
    return true;
  }).argv;

// module.exports = {
//   argv : argv
// } que es igual a
module.exports = argv;
