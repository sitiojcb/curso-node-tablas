const fs = require("fs");
//y si usamos ES6 import * as fs from 'fs';
const colors = require("colors");
const crearTabla = async (num = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    //para corregir el problema creado al visualizar en consola 3 [31mX[39m 1 = 3
    let consola = "";
    for (let i = 0; i <= hasta; i++) {
      //console.log(num * i);
      // console.log(`${num} X ${i} = ${num * 1}`);
      salida += `${num} X ${i} = ${num * i}\n`;
      consola += `${num} ${"X".red} ${i} = ${num * i}\n`;
    }
    //console.log(salida);
    //fs.writeFile(path,options, callback)
    //si no proporcionamos el path toma el ./ es decir donde estoy
    // fs.writeFile(`tabla-del-${num}.txt`, salida, (err) => {
    //   if (err) throw err;
    //   console.log(`Archivo txt tabla del ${num} creado!`);
    // });
    if (listar) {
      console.log("####################".blue);
      console.log("Tabla del ", colors.white(num));
      console.log("####################".blue);
      // console.log(salida.yellow);
      console.log(consola);
    }
    //video 31 cambio por writeFileSync
    fs.writeFileSync(`./salida/tabla-del-${num}.txt`, salida);
    //console.log(`Tabla del ${num} creado!`);
    //comenta con writeFileSync no usa el callback aunque deberia ir dentro de un try/catch
    return `Archivo Tabla del ${num} ha sido creado!`;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  //un objeto que para simplificar lo llamo igual
  //crearTabla: crearTabla, pudiendo hacer solo
  crearTabla,
};
