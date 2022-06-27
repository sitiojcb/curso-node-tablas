// const fs = require("fs");
// //y si usamos ES6 import * as fs from 'fs';
//import { crearTable } from "./helpers/multiplicar";
// const yargs = require("yargs");
const { crearTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");
// // const argv = require("yargs").argv;
// //video 36 agrega options a yargs
// const argv = require("yargs")
//   .options({
//     n: {
//       alias: "num",
//       type: "number",
//       demandOption: true,
//     },
//     l: {
//       alias: "listar",
//       type: "boolean",
//       demandOption: true,
//       default: false,
//     },
//   })
//   .check((argv, options) => {
//     // console.log("Yargs ", argv);
//     if (isNaN(argv.n)) {
//       throw "La base debe ser un numero ";
//     }
//     return true;
//   }).argv;
//video 36 paso lo de arriba a config/yargs.js
//video 32
//console.log(process.argv);
//const [, , arg3 = "num=5"] = process.argv;
//const [, num = 5] = arg3.split("=");

//const num = 9;

// let salida = "";

// console.clear();
// console.log("-----------Tabla:");
// for (let i = 0; i <= 10; i++) {
//   //console.log(num * i);
//   // console.log(`${num} X ${i} = ${num * 1}`);
//   salida += `${num} X ${i} = ${num * i}\n`;
// }
// //console.log(salida);
// //fs.writeFile(path,options, callback)
// //si no proporcionamos el path toma el ./ es decir donde estoy
// fs.writeFile(`tabla-del-${num}.txt`, salida, (err) => {
//   if (err) throw err;
//   console.log(`Archivo txt tabla del ${num} creado!`);
// });
//video 31 cambio por writeFileSync
//fs.writeFileSync(`tabla-del-${num}.txt`, salida);
//console.log(`Tabla del ${num} creado!`);
//comenta con writeFileSync no usa el callback aunque deberia ir dentro de un try/catch
//creartTabla(mando los argumentos)
crearTabla(argv.n, argv.l, argv.h)
  .then((nombreArchivo) => {
    // console.log(argv.l);
    //if (argv.l) {
    console.log(nombreArchivo);
    //}
  })
  .catch((error) => console.log("este es el error ", error));
//console.log(process.argv);
console.log(argv);
//console.log("num: yargsssss", argv.num);
