import Cl_personas from "./Cl_personas.js";
import Cl_cantGenero from "./Cl_cantGenero.js";

let per1 = new Cl_personas("Luisa", 2);
let per2 = new Cl_personas("Ana", 2);
let per3 = new Cl_personas("José", 1);
let per4 = new Cl_personas("Carmen", 2);
let per5 = new Cl_personas("Rosa", 2);
let per6 = new Cl_personas("José", 1);
let per7 = new Cl_personas("María", 2);
let per8 = new Cl_personas("Luz", 2);
let per9 = new Cl_personas("Rafael", 1);
let per10 = new Cl_personas("Liz", 2);
let per11 = new Cl_personas("Marcos", 1);
let per12 = new Cl_personas("Leo", );

let cantG = new Cl_cantGenero();
cantG.procesarPersonas(per1);
cantG.procesarPersonas(per2);
cantG.procesarPersonas(per3);
cantG.procesarPersonas(per4);
cantG.procesarPersonas(per5);
cantG.procesarPersonas(per6);
cantG.procesarPersonas(per7);
cantG.procesarPersonas(per8);
cantG.procesarPersonas(per9);
cantG.procesarPersonas(per10);
cantG.procesarPersonas(per11);
cantG.procesarPersonas(per12);

let salida = document.getElementById("Salida");
salida.innerHTML += "Porcentaje de mujeres procesadas: " + cantG.porctMujer() + "<br>" + cantG.mayorCantGen();